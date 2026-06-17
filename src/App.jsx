import { useHeaderScrolled } from './hooks/useHeaderScrolled'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Capabilities } from './components/sections/Capabilities'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'

export default function App() {
  const [sentinelRef, scrolled] = useHeaderScrolled()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <span ref={sentinelRef} className="scroll-sentinel" aria-hidden="true" />

      <Navbar scrolled={scrolled} />

      <main id="main">
        <Hero />
        <About />
        <Capabilities />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
