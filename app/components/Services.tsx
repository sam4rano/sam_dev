"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Database, Server, Rocket } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const services = [
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Custom NLP models, computer vision pipelines, and intelligent systems tailored for low-resource and high-performance environments.",
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15",
  },
  {
    icon: Database,
    title: "Data Infrastructure & RAG",
    description: "Scalable data ingestion pipelines, vector databases (PGVector), and Retrieval-Augmented Generation for enterprise semantic search.",
    gradient: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/15",
  },
  {
    icon: Server,
    title: "Backend & Systems Architecture",
    description: "Robust multi-tenant SaaS backends, fintech integrations, and highly available microservices using Python and Node.js.",
    gradient: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/15",
  },
  {
    icon: Rocket,
    title: "MLOps & Productionisation",
    description: "Streamlined deployment of ML models to production with robust CI/CD, monitoring, and cost-efficient scaling strategies.",
    gradient: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/15",
  },
]

export default function Services() {
  return (
    <section id="services" className="section-base bg-[var(--bg-base)]">
      <div className="blob w-[500px] h-[500px] bg-green-700 top-0 left-[-8%]" />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-card p-7 bg-gradient-to-br ${s.gradient} ${s.border}`}
            >
              <div className={`p-4 rounded-2xl ${s.iconBg} w-fit mb-5`}>
                <s.icon className={`w-8 h-8 ${s.iconColor}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${s.iconColor}`}>{s.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
