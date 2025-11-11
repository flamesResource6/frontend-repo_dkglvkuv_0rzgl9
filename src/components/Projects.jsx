import { motion } from 'framer-motion'
import Section from './Section'

const projects = [
  {
    title: 'Alevator – Room Booking Platform',
    description:
      'A real-world web app connecting students and owners for PGs, rooms, and hostels. Features authentication, search filters, bookings, Google Maps API, and dashboards.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Maps API'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Portfolio 3D',
    description: 'Interactive 3D portfolio with R3F and Framer Motion.',
    tech: ['React', 'Three.js', 'Framer Motion'],
    demo: '#',
    github: '#'
  }
]

export default function Projects() {
  return (
    <Section id="projects" title="Things I’ve Built 👨‍💻" subtitle="A selection of projects and experiments.">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
            <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-black/70 dark:text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a href={p.demo} className="text-blue-600 dark:text-blue-400 hover:underline">Live Demo</a>
                <a href={p.github} className="text-purple-600 dark:text-purple-400 hover:underline">GitHub</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
