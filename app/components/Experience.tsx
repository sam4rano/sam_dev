"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const experiences = [
  {
    company: "Speech & Language Infrastructure",
    category: "Research · Data Engineering",
    period: "Recent",
    role: "AI / Data Infrastructure Engineer",
    dot: "bg-blue-400",
    border: "border-blue-500/20",
    gradient: "from-blue-500/10 to-transparent",
    responsibilities: [
      "Led end-to-end curation, processing and uploading of 5,000+ hours of multilingual speech data across Luhya, Kamba, Gusii, and Somali for low-resource ASR and TTS systems.",
      "Designed scalable audio-to-transcription pipelines and NLP preprocessing workflows handling malformed, and forced alignment.",
      "Established standardised annotation protocols and QA frameworks, achieving consistent data quality across cross-lingual datasets.",
    ],
  },
  {
    company: "Masakhane NER — Nigerian Pidgin",
    category: "NLP Research",
    period: "Recent",
    role: "NLP Researcher / Annotator",
    dot: "bg-purple-400",
    border: "border-purple-500/20",
    gradient: "from-purple-500/10 to-transparent",
    responsibilities: [
      "Annotated and curated 20,000+ Nigerian Pidgin samples for NER within the Masakhane community-driven research ecosystem.",
      "Maintained 96% inter-annotator agreement (IAA) through rigorous guideline development and adjudication processes.",
      "Advanced the first production-grade NER benchmark for Nigerian Pidgin via the MasakhaNER dataset release.",
    ],
  },
  {
    company: "edurepoAI",
    category: "AI Platform · Education",
    period: "Present",
    role: "Platform Architect",
    dot: "bg-orange-400",
    border: "border-orange-500/20",
    gradient: "from-orange-500/10 to-transparent",
    responsibilities: [
      "Architecting an AI education platform integrating 1,100+ institutions and 3,000+ academic programmes, with semantic retrieval using PGVector and RAG.",
      "Designed predictive admission scoring models with confidence estimation and explainability for student guidance.",
      "Built adaptive JAMB/WAEC CBT practice systems with timed assessments, real-time analytics, and personalised learning paths.",
    ],
  },
  {
    company: "Quomoni (NextGen)",
    category: "Fintech · SaaS Engineering",
    period: "Completed",
    role: "Software Engineer",
    dot: "bg-emerald-400",
    border: "border-emerald-500/20",
    gradient: "from-emerald-500/10 to-transparent",
    responsibilities: [
      "Engineered a multi-tenant financial SaaS platform with merchant operations, payroll management, and enterprise reporting.",
      "Designed configurable payroll engines with tax rules, benefits, and deduction structures with automated execution.",
      "Integrated Paystack and Flutterwave payment gateways with reconciliation logic and complete audit trail.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-base bg-[var(--bg-base)]">
      <div className="blob w-[450px] h-[450px] bg-blue-700 top-[10%] right-[-8%]" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Experience & Projects" />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline spine */}
          <div className="absolute left-4 md:left-5 top-2 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-blue-500/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className={`absolute left-2 md:left-3 top-6 w-3.5 h-3.5 rounded-full border-2 border-[var(--bg-base)] ${exp.dot} shadow-lg`} />

                <div className={`glass-card p-6 bg-gradient-to-r ${exp.gradient} ${exp.border}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-white">{exp.company}</h3>
                      <p className="text-sm text-[var(--text-muted)] mt-0.5">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="tag-pill">{exp.category}</span>
                      <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Calendar className="w-3 h-3" />{exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, ri) => (
                      <li key={ri} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                        <div className={`mt-2 w-1 h-1 rounded-full shrink-0 ${exp.dot}`} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
