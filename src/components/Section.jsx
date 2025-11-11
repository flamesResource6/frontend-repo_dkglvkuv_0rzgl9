import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Section({ id, title, children, subtitle }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px', once: true })
  return (
    <section id={id} ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-black/70 dark:text-white/70"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
