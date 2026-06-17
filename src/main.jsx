import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/base.css'
import './styles/utilities.css'
import './styles/primitives.css'
import './styles/layout.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/projects.css'
import './styles/experience.css'
import './styles/contact.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
