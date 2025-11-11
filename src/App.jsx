import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <footer className="py-10 text-center text-sm text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} Gaurav Mer — Built with love, motion and 3D.
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App