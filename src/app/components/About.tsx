import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Code2, Rocket, Users } from "lucide-react";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Creating intuitive and accessible user experiences",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-center">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-lg text-slate-600 mb-4">
                I'm a passionate full-stack developer with expertise in building modern,
                scalable web applications. With a strong foundation in React, Next.js,
                Node.js, and TypeScript, I create seamless digital experiences.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                My approach combines technical excellence with user-centered design,
                ensuring that every project not only works flawlessly but also delivers
                an exceptional user experience.
              </p>
              <p className="text-lg text-slate-600">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, and sharing knowledge with the
                developer community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start p-4 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
