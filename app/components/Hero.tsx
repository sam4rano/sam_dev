"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, ArrowRight, Download, FileText } from "lucide-react"
import { motion } from "framer-motion"

const stagger = { animate: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-base)]">
      {/* Ambient blobs */}
      <div className="blob w-[600px] h-[600px] bg-indigo-600 top-[-15%] left-[-8%]" />
      <div className="blob w-[500px] h-[500px] bg-blue-600   top-[30%]  right-[-8%]" style={{ animationDelay: "2s" }} />
      <div className="blob w-[350px] h-[350px] bg-cyan-600   bottom-[-8%] left-[35%]" style={{ animationDelay: "4s" }} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 py-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* ── Left ── */}
          <motion.div
            className="lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={stagger} initial="initial" animate="animate"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border border-indigo-500/30 bg-indigo-500/10 w-fit text-sm font-medium text-indigo-300"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              AI · NLP · Speech · Systems Engineering
            </motion.div>

            {/* Name */}
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3">
              <span className="text-[var(--text-primary)]">Samuel</span>{" "}
              <span className="gradient-heading">Oyerinde</span>
            </motion.h1>

            {/* Role */}
            <motion.p variants={fadeUp} className="text-xl font-semibold text-[var(--text-secondary)] mb-6">
              AI Research Engineer · Low-Resource Language Technologies
            </motion.p>

            {/* Bio hook */}
            <motion.p variants={fadeUp} className="text-base text-[var(--text-secondary)] leading-relaxed mb-10 max-w-xl">
              I build data infrastructure and intelligent systems for underrepresented languages — spanning multilingual ASR/TTS, named-entity recognition, OCR for African scripts, and AI-powered education and fintech platforms.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-3 mb-10 w-full sm:w-auto">
              <button
                onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary w-full sm:w-auto justify-center"
              >
                View Research <ArrowRight className="w-4 h-4" />
              </button>

              {/* View CV */}
              <a
                href="/sam_oyerinde_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto justify-center"
              >
                <FileText className="w-4 h-4" /> View CV
              </a>

              {/* Download CV */}
              <a
                href="/sam_oyerinde_cv.pdf"
                download="Samuel_Oyerinde_CV.pdf"
                className="btn-outline w-full sm:w-auto justify-center"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              {[
                { icon: Github,   href: "https://github.com/sam4rano", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/samuel-oyerinde/", label: "LinkedIn" },
                { icon: Mail,     href: "mailto:oyerindesamuelabiodun@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl border border-[var(--border)] bg-white/[0.03] text-[var(--text-secondary)] hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
                  whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            className="lg:w-[45%] flex justify-center"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-64 h-64 md:w-[380px] md:h-[380px] animate-float">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-600/40 via-blue-500/20 to-cyan-400/25 blur-2xl scale-110" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)]/50 via-transparent to-transparent z-10" />
                <Image
                  src="/sam_oye.jpg"
                  alt="Samuel Oyerinde — AI Research Engineer"
                  fill className="object-cover" priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 px-4 py-2 rounded-2xl border border-indigo-500/30 backdrop-blur-xl"
                style={{ background: "rgba(8,11,20,0.9)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-gray-300">Open to collaborations</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-indigo-500/60 to-transparent" />
      </motion.div>
    </section>
  )
}
