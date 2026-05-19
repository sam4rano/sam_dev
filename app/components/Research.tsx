"use client"

import { motion } from "framer-motion"
import { BookOpen, FlaskConical, ExternalLink, Mic, Tag, Eye } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const contributions = [
  {
    icon: Mic,
    title: "Multilingual Speech Corpus",
    subtitle: "ASR · TTS · Low-Resource",
    description:
      "Led end-to-end curation, annotation, and processing of 4,000+ hours of speech data across Luhya, Kamba, Gusii, and Somali — enabling the first production-grade low-resource ASR/TTS systems for these languages. Designed scalable audio-to-transcription pipelines and standardised QA frameworks.",
    tags: ["4,000+ hrs", "4 Languages", "ASR/TTS", "Kenya"],
    accent: "text-blue-400",
    iconBg: "bg-blue-500/15",
    border: "border-blue-500/20",
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    icon: Tag,
    title: "MasakhaNER — Nigerian Pidgin NER",
    subtitle: "NER · Masakhane Ecosystem",
    description:
      "Annotated and curated 220,000+ Nigerian Pidgin samples for Named Entity Recognition as part of the Masakhane community effort. Maintained 96% inter-annotator agreement, contributing to the first high-quality NER benchmark for Nigerian Pidgin.",
    tags: ["220K+ samples", "96% IAA", "Masakhane", "Pidgin"],
    accent: "text-purple-400",
    iconBg: "bg-purple-500/15",
    border: "border-purple-500/20",
    gradient: "from-purple-500/10 to-transparent",
  },
  {
    icon: Eye,
    title: "Diacritics-Aware Yorùbá OCR",
    subtitle: "Computer Vision · Low-Resource OCR",
    description:
      "Designed an end-to-end OCR pipeline for Yorùbá text recognition using PaddleOCR with human-in-the-loop correction workflows. Addressed systemic failures in tone-marked orthography recognition — a critical gap for Yorùbá digital preservation.",
    tags: ["PaddleOCR", "Human-in-Loop", "Yorùbá", "Tonal Scripts"],
    accent: "text-green-400",
    iconBg: "bg-green-500/15",
    border: "border-green-500/20",
    gradient: "from-green-500/10 to-transparent",
  },
]

const externalLinks = [
  {
    icon: BookOpen,
    title: "Google Scholar",
    sub: "Publications & citations",
    href: "https://scholar.google.com/citations?user=4_P2z5oAAAAJ&hl=en&authuser=1",
    accent: "text-blue-400",
    iconBg: "bg-blue-500/15",
    border: "border-blue-500/20",
    gradient: "from-blue-600/15 to-transparent",
  },
  {
    icon: FlaskConical,
    title: "Hugging Face — Sam4rano",
    sub: "Models, datasets & pipelines",
    href: "https://huggingface.co/Sam4rano",
    accent: "text-orange-400",
    iconBg: "bg-orange-500/15",
    border: "border-orange-500/20",
    gradient: "from-orange-600/15 to-transparent",
  },
]

export default function Research() {
  return (
    <section id="research" className="section-base bg-[var(--bg-base)]">
      <div className="blob w-[500px] h-[500px] bg-purple-700 top-[-5%] right-[-8%]" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Research & Contributions" />

        {/* Research contributions */}
        <div className="max-w-4xl mx-auto space-y-6 mb-14">
          {contributions.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-card p-7 bg-gradient-to-r ${c.gradient} ${c.border}`}
            >
              <div className="flex items-start gap-5">
                <div className={`p-3 rounded-xl ${c.iconBg} shrink-0 mt-0.5`}>
                  <c.icon className={`w-6 h-6 ${c.accent}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className={`text-lg font-bold ${c.accent}`}>{c.title}</h3>
                    <span className="text-xs text-[var(--text-muted)]">{c.subtitle}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{c.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="tag-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* External links */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-5 font-semibold">Find my work on</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {externalLinks.map((l, i) => (
              <motion.a
                key={l.title}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card flex items-center gap-5 p-5 bg-gradient-to-r ${l.gradient} ${l.border} group`}
              >
                <div className={`p-3 rounded-xl ${l.iconBg} shrink-0`}>
                  <l.icon className={`w-6 h-6 ${l.accent}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-bold ${l.accent}`}>{l.title}</p>
                  <p className="text-xs text-[var(--text-muted)]">{l.sub}</p>
                </div>
                <ExternalLink className={`w-4 h-4 ${l.accent} shrink-0 group-hover:translate-x-0.5 transition-transform`} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
