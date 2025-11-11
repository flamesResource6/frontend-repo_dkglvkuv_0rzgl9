import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur-sm/0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm"
          >
            Hi, I’m Gaurav Mer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-black/80 dark:text-white/80"
          >
            A Developer who brings ideas to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="/gaurav-mer-resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 shadow-lg shadow-blue-600/20 hover:scale-[1.02] transition"
            >
              View Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 backdrop-blur bg-white/60 dark:bg-white/5 px-5 py-3 hover:bg-white/80 dark:hover:bg-white/10 transition"
            >
              Check It Out
            </a>
          </motion.div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/20 dark:via-black/20 to-transparent" />
    </section>
  )
}
