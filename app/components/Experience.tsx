"use client";

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function Experience() {
  const experiences = [
    {
      company: "Optimus AI Labs",
      location: "Lagos, Nigeria",
      period: "2023 - 2024",
      role: "Frontend Engineer",
      responsibilities: [
        "Optimized data fetching using React Query, reducing API calls by 40% and boosting application performance by 35%.",
        "Implemented responsive web design techniques with CSS and Tailwind, achieving a 98% user satisfaction rate.",
        "Collaborated with UX/UI designers to translate mockups into functional components, maintaining 95% design fidelity.",
        "Ensured cross-browser compatibility using CSS media queries, reducing user-reported issues by 20%.",
        "Built modular, reusable components with React.js, improving frontend architecture by 50%.",
      ],
    },
    {
      company: "Praimcraft Innovate",
      location: "Remote",
      period: "2024 - Present",
      role: "Frontend Engineer",
      responsibilities: [
        "Built lots of S.E.O compliant website for SMEs.",
        "Developed dynamic UI components using React, increasing user engagement by 25%.",
        "Implemented robust user authentication and authorization, improving system security by 40%.",
        "Implemented data visualization tools, improving user insights by 60%.",
      ],
    },
    {
      company: "Grazac",
      location: "Remote",
      period: "2022 - 2023",
      role: "Frontend Developer Intern",
      responsibilities: [
        "Collaborated on projects like Payercoins (cryptocurrency app) and Keep Up, increasing project efficiency by 40%.",
        "Participated in design review meetings, improving design implementation and user experience by 30%.",
        "Developed responsive interfaces using React.js, SASS, and Tailwind CSS.",
      ],
    },
    {
      company: "Ogun Innovate Hub",
      location: "Ogun State, Nigeria",
      period: "2021 - 2022",
      role: "Programming Instructor",
      responsibilities: [
        "Trained over 30 students in web essentials, web development, and AI, achieving a 95% satisfaction rate.",
        "Designed and implemented comprehensive curricula, improving knowledge retention by 50%.",
        "Facilitated hands-on projects and coding exercises, enhancing practical skills and real-world application.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? (
                    <Globe className="w-6 h-6 mr-2 text-blue-500" />
                  ) : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
