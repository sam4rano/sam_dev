"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Loader2, Github, Linkedin } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 1000))
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 4000)
    } catch (e) {
      console.error(e)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "oyerindesamuelabiodun@gmail.com", href: "mailto:oyerindesamuelabiodun@gmail.com" },
    { icon: Phone, label: "Phone", value: "+234 81 6442 7860", href: "tel:+2348164427860" },
    { icon: MapPin, label: "Location", value: "Lagos, Nigeria", href: null },
    { icon: Github, label: "GitHub", value: "github.com/sam4rano", href: "https://github.com/sam4rano" },
    { icon: Linkedin, label: "LinkedIn", value: "samuel-oyerinde", href: "https://www.linkedin.com/in/samuel-oyerinde/" },
  ]

  return (
    <section id="contact" className="section-base bg-[var(--bg-base)]">
      <div className="blob w-[500px] h-[500px] bg-blue-700 top-0 right-[-10%]" />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Get in Touch" />

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card p-7 h-full flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Whether you're looking for a research collaborator, ML engineer, or a full-stack product builder — feel free to reach out.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) =>
                  href ? (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-white transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400 group-hover:bg-indigo-500/25 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{value}</span>
                    </a>
                  ) : (
                    <div key={label} className="flex items-center gap-3 text-[var(--text-secondary)]">
                      <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-7 flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Name</label>
                  <input {...register("name")} type="text" placeholder="Samuel Oyerinde"
                    className={`form-input ${errors.name ? "border-red-500/60" : ""}`} />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Email</label>
                  <input {...register("email")} type="email" placeholder="you@example.com"
                    className={`form-input ${errors.email ? "border-red-500/60" : ""}`} />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Subject</label>
                <input {...register("subject")} type="text" placeholder="Collaboration opportunity..."
                  className={`form-input ${errors.subject ? "border-red-500/60" : ""}`} />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase tracking-wider">Message</label>
                <textarea {...register("message")} rows={5} placeholder="Tell me about your project..."
                  className={`form-input resize-none ${errors.message ? "border-red-500/60" : ""}`} />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary justify-center">
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>
              {submitSuccess && (
                <div className="p-4 rounded-xl bg-green-500/15 border border-green-500/25 text-green-400 text-sm font-medium text-center">
                  ✓ Message sent successfully — I'll get back to you soon!
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
