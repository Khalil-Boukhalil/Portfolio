// Throwaway QA helper: full-page screenshots via the DevTools Protocol.
// usage: node scripts/shot.mjs <url> <width> <out.png> [motion]
import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const PORT = 9333 + Math.floor(Math.random() * 400)
const url = process.argv[2]
const width = parseInt(process.argv[3] || '1440', 10)
const out = process.argv[4] || 'shot.png'
const reduce = process.argv[5] !== 'motion'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const proc = spawn(
  EDGE,
  [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${process.env.TEMP}\\edge-cdp-${PORT}`,
    '--hide-scrollbars',
    `--window-size=${width},900`,
    'about:blank',
  ],
  { stdio: 'ignore' },
)

let msgId = 0
function send(ws, method, params = {}, sessionId) {
  return new Promise((resolve) => {
    const id = ++msgId
    const handler = (ev) => {
      const m = JSON.parse(ev.data)
      if (m.id === id) {
        ws.removeEventListener('message', handler)
        resolve(m.result)
      }
    }
    ws.addEventListener('message', handler)
    ws.send(JSON.stringify({ id, method, params, sessionId }))
  })
}

async function getWs() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`)
      const j = await res.json()
      if (j.webSocketDebuggerUrl) return j.webSocketDebuggerUrl
    } catch {
      /* retry */
    }
    await sleep(250)
  }
  throw new Error('CDP not ready')
}

const browserWs = await getWs()
const ws = new WebSocket(browserWs)
await new Promise((r) => ws.addEventListener('open', r, { once: true }))

const { targetId } = await send(ws, 'Target.createTarget', { url: 'about:blank' })
const { sessionId } = await send(ws, 'Target.attachToTarget', { targetId, flatten: true })

await send(ws, 'Page.enable', {}, sessionId)
await send(
  ws,
  'Emulation.setDeviceMetricsOverride',
  { width, height: 900, deviceScaleFactor: 1, mobile: width < 700 },
  sessionId,
)
if (reduce) {
  await send(
    ws,
    'Emulation.setEmulatedMedia',
    { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] },
    sessionId,
  )
}

const loaded = new Promise((resolve) => {
  const h = (ev) => {
    const m = JSON.parse(ev.data)
    if (m.method === 'Page.loadEventFired') {
      ws.removeEventListener('message', h)
      resolve()
    }
  }
  ws.addEventListener('message', h)
})
await send(ws, 'Page.navigate', { url }, sessionId)
await loaded
await sleep(2800)

const scrollTo = process.argv[6]
let beyond = true
if (scrollTo) {
  await send(ws, 'Runtime.enable', {}, sessionId)
  await send(
    ws,
    'Runtime.evaluate',
    {
      expression: `document.getElementById('${scrollTo}')?.scrollIntoView({block:'start'}); window.scrollBy(0,-90);`,
    },
    sessionId,
  )
  await sleep(1200)
  beyond = false
}

const { data } = await send(
  ws,
  'Page.captureScreenshot',
  { format: 'png', captureBeyondViewport: beyond },
  sessionId,
)
writeFileSync(out, Buffer.from(data, 'base64'))
console.log('wrote', out)
proc.kill()
process.exit(0)
