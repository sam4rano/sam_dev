"use client"

import { GraduationCap, Calendar, Award } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"

export default function Education() {
  return (
    <section id="education" className="section-base bg-[var(--bg-base)]">
      <div className="blob w-[400px] h-[400px] bg-purple-700 bottom-0 right-[-8%]" />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-8 bg-gradient-to-br from-indigo-600/15 to-purple-600/10 border-indigo-500/20"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-indigo-400 shrink-0" />
                  B.Sc. Computer Science
                </h3>
                <p className="text-[var(--text-secondary)] mt-1">
                  Federal University of Agriculture, Abeokuta (FUNAAB)
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-sm font-medium shrink-0 w-fit">
                <Calendar className="w-3.5 h-3.5" />
                2018 – 2022
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] mb-4">
              <Award className="w-4 h-4 text-yellow-400" />
              Upper Division Honours
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Specialised in Artificial Intelligence, NLP, and Scalable Systems",
                "AI thesis: Yorùbá news classification using Transformers vs. Traditional ML",
                "Led technical study groups on ML and backend architecture",
                "Coursework in Python, Java, Algorithms, and Distributed Systems",
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] bg-white/[0.03] border border-white/[0.05] rounded-xl p-3.5 leading-relaxed">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                  {a}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}