"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, BookOpen, Code, Briefcase, Layers, GraduationCap, Mail } from "lucide-react"

const sections = [
  { id: "hero",       label: "Home",       icon: Home },
  { id: "about",      label: "About",      icon: User },
  { id: "research",   label: "Research",   icon: BookOpen },
  { id: "projects",   label: "Projects",   icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills",     label: "Skills",     icon: Layers },
  { id: "education",  label: "Education",  icon: GraduationCap },
  { id: "contact",    label: "Contact",    icon: Mail },
]

export default function FloatingNav() {
  const [active, setActive] = useState("hero")
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.35 }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div
            className="flex items-center gap-1 p-2 rounded-2xl"
            style={{
              background: "rgba(8,11,20,0.9)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.12)",
            }}
          >
            {sections.map(({ id, label, icon: Icon }) => {
              const isActive = active === id
              return (
                <div key={id} className="relative">
                  <button
                    onClick={() => scrollTo(id)}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                    title={label}
                    className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 ${
                      isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    <Icon className="w-4 h-4 relative z-10" />
                  </button>
                  <AnimatePresence>
                    {hovered === id && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg text-xs font-medium text-white whitespace-nowrap pointer-events-none"
                        style={{
                          background: "rgba(8,11,20,0.95)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
