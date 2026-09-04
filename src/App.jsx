import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Profile } from './components/sections/Profile'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'
import { useHeaderScrolled } from './hooks/useHeaderScrolled'

export default function App() {
  const [sentinelRef, scrolled] = useHeaderScrolled()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <span ref={sentinelRef} className="scroll-sentinel" aria-hidden="true" />

      <Navbar scrolled={scrolled} />

      <main id="main">
        <Hero />
        <Profile />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
