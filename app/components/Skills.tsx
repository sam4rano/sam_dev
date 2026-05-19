"use client"

import { motion } from "framer-motion"
import { Cpu, Code, Database, Layout, Server, GitBranch } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const skills = [
  {
    icon: Cpu,
    name: "AI / NLP / Speech",
    tech: "PyTorch · HuggingFace · Kaldi · ESPnet · PaddleOCR",
    description: "Language model training, ASR/TTS pipelines, NER, OCR for African scripts, and low-resource dataset engineering.",
    accent: "text-red-400", iconBg: "bg-red-500/15", bar: "from-red-500 to-orange-400", level: 90,
  },
  {
    icon: Database,
    name: "Data Infrastructure",
    tech: "PostgreSQL · PGVector · MongoDB · RAG · Airflow",
    description: "Designing large-scale annotation pipelines, vector stores, semantic retrieval, and data QA frameworks.",
    accent: "text-purple-400", iconBg: "bg-purple-500/15", bar: "from-purple-500 to-pink-400", level: 88,
  },
  {
    icon: Code,
    name: "Software Engineering",
    tech: "Python · TypeScript · Node.js · REST · gRPC",
    description: "Clean, production-ready code for backends, APIs, and ML systems with strong architectural discipline.",
    accent: "text-blue-400", iconBg: "bg-blue-500/15", bar: "from-blue-500 to-indigo-400", level: 92,
  },
  {
    icon: Layout,
    name: "Frontend & Full-Stack",
    tech: "React · Next.js · Tailwind CSS · Framer Motion",
    description: "End-to-end product engineering — from research prototype to polished production web application.",
    accent: "text-cyan-400", iconBg: "bg-cyan-500/15", bar: "from-cyan-500 to-blue-400", level: 85,
  },
  {
    icon: Server,
    name: "Systems Architecture",
    tech: "SaaS · Microservices · Multi-tenant · Fintech APIs",
    description: "Designing secure, scalable multi-tenant platforms with payment integrations and enterprise-grade reliability.",
    accent: "text-green-400", iconBg: "bg-green-500/15", bar: "from-green-500 to-emerald-400", level: 87,
  },
  {
    icon: GitBranch,
    name: "MLOps & DevOps",
    tech: "Git · Docker · CI/CD · Model Serving",
    description: "Automating ML deployments, monitoring model drift, and maintaining engineering velocity in research projects.",
    accent: "text-orange-400", iconBg: "bg-orange-500/15", bar: "from-orange-500 to-amber-400", level: 82,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-base bg-[var(--bg-base)]">
      <div className="blob w-[450px] h-[450px] bg-indigo-700 top-[-5%] left-[-5%]" />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Technical Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${s.iconBg}`}>
                  <s.icon className={`w-5 h-5 ${s.accent}`} />
                </div>
                <div>
                  <h3 className={`text-sm font-bold ${s.accent}`}>{s.name}</h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-snug">{s.tech}</p>
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{s.description}</p>
              <div className="mt-auto">
                <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${s.bar}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.06, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
