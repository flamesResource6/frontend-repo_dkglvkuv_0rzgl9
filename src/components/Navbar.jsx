import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certs', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="backdrop-blur border border-white/10 bg-white/60 dark:bg-neutral-900/60 rounded-2xl shadow-lg shadow-black/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="font-semibold tracking-tight text-lg">Gaurav Mer</a>
            <div className="flex items-center gap-2">
              <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition">
                {theme === 'dark' ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
              </button>
              <button className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition sm:hidden" onClick={() => setOpen(!open)}>
                {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
              </button>
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-between px-6 pb-4">
            <div className="flex gap-6 text-sm">
              {links.map(l => (
                <a key={l.href} href={l.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/gauravmer" target="_blank" className="p-2 hover:text-purple-500"><Github className="w-5 h-5"/></a>
              <a href="https://linkedin.com" target="_blank" className="p-2 hover:text-blue-500"><Linkedin className="w-5 h-5"/></a>
              <a href="mailto:gaurav@example.com" className="p-2 hover:text-red-500"><Mail className="w-5 h-5"/></a>
            </div>
          </div>
          {open && (
            <div className="sm:hidden px-4 pb-4 space-y-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5">
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
