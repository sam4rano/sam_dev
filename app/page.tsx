import Hero from "./components/Hero"
import About from "./components/About"
import Research from "./components/Research"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import FloatingNav from "./components/floating-nav"

export default function Home() {
  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)] min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}
