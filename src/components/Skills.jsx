import { motion } from 'framer-motion'
import Section from './Section'

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
  Backend: ['Node.js', 'Express', 'MongoDB'],
  DSA: ['C++', 'Algorithms', 'Problem Solving'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Figma']
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="A blend of engineering, design and systems thinking.">
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([cat, items], i) => (
          <motion.div key={cat} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-3xl border border-black/10 dark:border-white/10 p-6 backdrop-blur bg-white/60 dark:bg-white/5">
            <h3 className="font-semibold mb-4">{cat}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-700 dark:text-purple-200 border border-white/10">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
