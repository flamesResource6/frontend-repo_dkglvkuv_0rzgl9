import { motion } from 'framer-motion'
import Section from './Section'

const certs = [
  { title: 'Meta Front-End Developer', org: 'Coursera', link: '#'},
  { title: 'JavaScript Algorithms', org: 'freeCodeCamp', link: '#'},
]

export default function Certifications() {
  return (
    <Section id="certs" title="Certifications" subtitle="Validated skills and continuous learning.">
      <div className="grid sm:grid-cols-2 gap-6">
        {certs.map((c, i) => (
          <motion.a key={c.title} href={c.link} target="_blank" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-black/10 dark:border-white/10 p-5 backdrop-blur bg-white/60 dark:bg-white/5 hover:scale-[1.01] transition">
            <div className="font-medium">{c.title}</div>
            <div className="text-sm text-black/70 dark:text-white/70">{c.org}</div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
