import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    type: "work",
    company: "Freelance",
    role: "Full-Stack Developer/Freelancer",
    period: "Dec 2023 – present",
    tech: [
      "React",
      "Laravel",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Next.js",
      "MongoDB",
      "SQL",
      "Docker",
      "Git",
    ],
    description:
      "Developed multiple websites and applications, including Smart Crypto Arbitrage, Job Finder Service, Real Estate platform, Smart Parking solution, and e-commerce application.",
  },
  {
    type: "work",
    company: "KHG Tec",
    role: "React JS/React Native Developer",
    period: "Nov 2022 – Dec 2023",
    tech: [
      "HTML/CSS",
      "SCSS",
      "React.js",
      "JavaScript",
      "React Native",
      "TypeScript",
      "Rest API",
    ],
    description:
      "Worked as a Front-End Developer, building a jewelry 3D design website and an office management mobile app using React.js, React Native, and TypeScript.",
  },
  {
    type: "work",
    company: "Codetime Software Company",
    role: "Web Developer",
    period: "Mar 2021 – Nov 2022",
    tech: ["HTML/CSS", "SCSS"],
    description:
      "Worked as a Front-End Developer, building a website constructor platform and developing custom client websites from scratch, focusing on responsive and user-friendly interfaces.",
  },
];

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="experience" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900 text-left md:text-left">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-12" />

          <div>
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="mb-8"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <span className="font-semibold text-lg text-slate-800">
                      {exp.company}
                      <span className="text-slate-500"> — </span>
                      <span className="text-slate-700">{exp.role}</span>
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-slate-200 border border-slate-400 text-xs px-3 py-1 rounded-full text-slate-800 font-semibold tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center mt-1 md:mt-0 gap-1">
                    <span className="text-xs text-slate-600">{exp.period}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="text-slate-700 text-sm">
                    {exp.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
