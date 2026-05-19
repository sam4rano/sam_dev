"use client"

import { motion } from "framer-motion"

export default function AnimatedSectionHeader({ title }: { title: string }) {
  return (
    <motion.div
      className="mb-16 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold gradient-heading text-center tracking-tight mb-4">
        {title}
      </h2>
      <div className="glow-divider" />
    </motion.div>
  )
}
