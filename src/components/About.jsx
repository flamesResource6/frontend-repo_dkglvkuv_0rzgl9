import { Briefcase, Rocket, Code } from 'lucide-react'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Passionate developer, learner, and startup builder.">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur flex items-center justify-center">
            <div className="w-40 h-40 rounded-2xl bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10 backdrop-blur flex items-center justify-center shadow-xl">🧑‍🚀</div>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-black/80 dark:text-white/80">
            I’m Gaurav Mer, a MERN stack developer who loves crafting delightful, performant web experiences with design, motion and 3D.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Feature icon={<Code className="w-5 h-5"/>} title="MERN Stack Developer"/>
            <Feature icon={<Briefcase className="w-5 h-5"/>} title="Creative Problem Solver"/>
            <Feature icon={<Rocket className="w-5 h-5"/>} title="Building Alevator"/>
          </div>
          <p className="text-black/70 dark:text-white/70">
            From a curious learner to building real-world products like Alevator, I’m on a journey to become an SDE and founder.
          </p>
        </div>
      </div>
    </Section>
  )
}

function Feature({ icon, title }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 p-4 backdrop-blur bg-white/60 dark:bg-white/5">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-blue-600 dark:text-purple-300">
          {icon}
        </div>
        <p className="font-medium">{title}</p>
      </div>
    </div>
  )
}
