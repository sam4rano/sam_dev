"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const projects = [
  {
    title: "edurepoAI",
    tagline: "AI-Powered Education Intelligence Platform",
    description:
      "Integrates 1,100+ Nigerian institutions and 3,000+ academic programmes. Built with PGVector for semantic university/course retrieval, RAG-powered admission recommendations, predictive scoring with confidence estimation, and adaptive JAMB/WAEC CBT practice.",
    link: "https://edurepoai.xyz/",
    tags: ["RAG", "PGVector", "Semantic Search", "Next.js", "Postgres"],
    accentColor: "text-blue-400",
    border: "border-blue-500/20",
    gradient: "from-blue-600/15 to-transparent",
    highlights: ["1,100+ institutions", "3,000+ programmes", "Predictive scoring"],
  },
  {
    title: "Quomoni (NextGen)",
    tagline: "Multi-Tenant Financial SaaS Platform",
    description:
      "Enterprise payroll engine with configurable pay groups, tax rules, pension, and deduction structures. Automated payslip generation, Paystack & Flutterwave payment integrations, full audit trail, and multi-tenant merchant dashboard.",
    link: "https://nextgen-sand.vercel.app/",
    tags: ["Fintech", "SaaS", "Paystack", "Flutterwave", "Node.js"],
    accentColor: "text-emerald-400",
    border: "border-emerald-500/20",
    gradient: "from-emerald-600/15 to-transparent",
    highlights: ["Multi-tenant", "Automated payroll", "Payment integrations"],
  },
  {
    title: "Yorùbá OCR Pipeline",
    tagline: "Diacritics-Aware Optical Character Recognition",
    description:
      "End-to-end OCR system for Yorùbá documents with PaddleOCR, human-in-the-loop correction, and structured dataset export. Addresses tone-mark recognition failures across printed and digitised Yorùbá texts.",
    link: "https://yoruba-ocr.vercel.app/",
    tags: ["PaddleOCR", "Computer Vision", "Python", "Human-in-Loop"],
    accentColor: "text-purple-400",
    border: "border-purple-500/20",
    gradient: "from-purple-600/15 to-transparent",
    highlights: ["Tone-mark aware", "Human-in-the-loop", "Structured export"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-base bg-[var(--bg-base)]">
      <div className="blob w-[450px] h-[450px] bg-blue-700 bottom-[-5%] left-[-8%]" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Featured Projects" />

        <div className="max-w-5xl mx-auto space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-card p-7 bg-gradient-to-r ${p.gradient} ${p.border}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className={`text-xl font-bold ${p.accentColor}`}>{p.title}</h3>
                    <span className="text-xs text-[var(--text-muted)]">— {p.tagline}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {p.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.highlights.map((h) => (
                      <span key={h} className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${p.border} ${p.accentColor} bg-white/[0.03]`}>
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="tag-pill">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`shrink-0 flex items-center gap-2 text-sm font-semibold ${p.accentColor} hover:opacity-70 transition-opacity mt-1 md:mt-0`}
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
