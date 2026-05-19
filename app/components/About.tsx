"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function About() {
  const focus = [
    { label: "Domain", value: "Low-Resource Language AI" },
    { label: "Languages", value: "Yorùbá, Igbo, Luhya, Kamba, Gusii, Somali, Nigerian Pidgin" },
    { label: "Tasks", value: "ASR · TTS · NER · OCR · Semantic Retrieval" },
    { label: "Stack", value: "Python · PyTorch · HuggingFace · PGVector · Next.js" },
    { label: "Interests", value: "AI for Africa · Education Intelligence · Fintech Systems" },
  ]

  const stats = [
    { value: "4,000+", label: "Hours of speech data curated" },
    { value: "220K+",  label: "NER annotation samples" },
    { value: "96%",    label: "Inter-annotator agreement" },
    { value: "1,100+", label: "Institutions on edurepoAI" },
  ]

  return (
    <section id="about" className="section-base bg-[var(--bg-base)]">
      <div className="blob w-[450px] h-[450px] bg-indigo-700 top-0 right-[-5%]" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="About Me" />

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-start">

          {/* Photo */}
          <motion.div
            className="lg:w-1/3 flex justify-center shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-600/30 to-cyan-500/15 blur-2xl scale-110" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/sam_oye.jpg" alt="Samuel Oyerinde" fill className="object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Bio */}
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                I am an AI research engineer working at the intersection of <span className="text-white font-medium">Natural Language Processing, Speech Technology, and Systems Engineering</span>. My primary focus is building robust data infrastructure and AI systems for African and low-resource languages — languages that remain critically underserved by mainstream NLP research.
              </p>
              <p>
                Beyond research, I architect production-grade platforms — from an AI-driven education intelligence system (edurepoAI) to a multi-tenant fintech SaaS (Quomoni) — demonstrating that rigorous research and real-world engineering are not mutually exclusive.
              </p>
            </div>

            {/* Research focus table */}
            <div className="glass-card p-5 space-y-3">
              {focus.map(({ label, value }) => (
                <div key={label} className="flex items-start gap-4 text-sm">
                  <span className="shrink-0 w-24 font-semibold text-indigo-400">{label}</span>
                  <span className="text-[var(--text-secondary)]">{value}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="glass-card p-4 text-center">
                  <div className="text-2xl font-extrabold text-gradient-blue-cyan">{value}</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
