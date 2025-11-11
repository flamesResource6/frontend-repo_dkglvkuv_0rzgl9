import { useState } from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Section from './Section'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you soon.')
  }

  return (
    <Section id="contact" title="Let’s build something amazing together 🚀" subtitle="Feel free to reach out.">
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="rounded-3xl border border-black/10 dark:border-white/10 p-6 backdrop-blur bg-white/60 dark:bg-white/5 space-y-4">
          <input required placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 outline-none"/>
          <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 outline-none"/>
          <textarea required placeholder="Message" rows="5" className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 outline-none"/>
          <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 shadow-lg shadow-blue-600/20 hover:scale-[1.02] transition">Send</button>
          {status && <p className="text-sm text-green-600 dark:text-green-400">{status}</p>}
        </form>
        <div className="rounded-3xl border border-black/10 dark:border-white/10 p-6 backdrop-blur bg-white/60 dark:bg-white/5">
          <p className="text-black/80 dark:text-white/80">Connect with me on socials:</p>
          <div className="mt-4 flex gap-4">
            <a href="https://github.com/gauravmer" target="_blank" className="p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"><Github/></a>
            <a href="https://linkedin.com" target="_blank" className="p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"><Linkedin/></a>
            <a href="https://twitter.com" target="_blank" className="p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"><Twitter/></a>
            <a href="mailto:gaurav@example.com" className="p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"><Mail/></a>
          </div>
        </div>
      </div>
    </Section>
  )
}
