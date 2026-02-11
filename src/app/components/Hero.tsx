import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import avatarImage from "../../assets/avatar.png";
import FiverrIcon from "./ui/icons/FiverrIcon";
import UpworkIcon from "./ui/icons/UpworkIcon";

const LINKS = [
  {
    Icon: Github,
    href: "https://github.com/garogross",
    label: "GitHub",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/garik-gevorgyan-b48180377",
    label: "LinkedIn",
  },
  {
    Icon: Mail,
    href: "garikgevorgyan.rap.20@gmail.com",
    label: "Email",
  },
  {
    Icon: FiverrIcon,
    href: "fiverr.com/users/garikgevorgy647",
    label: "Fiverr",
  },
  {
    Icon: UpworkIcon,
    href: "https://www.upwork.com/freelancers/~013c204fd58bd87e7b",
    label: "Upwork",
  },
];

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={avatarImage}
                alt="Developer Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.p
              className="text-lg text-slate-600 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Building modern web applications with React, Next.js, Node.js &
              TypeScript
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 justify-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {LINKS.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-slate-700" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-white text-slate-700 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
}
