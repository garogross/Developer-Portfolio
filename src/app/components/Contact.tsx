import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

function Toast({
  message,
  show,
  onClose,
}: {
  message: string;
  show: boolean;
  onClose: () => void;
}) {
  // A simple toast, sliding up from the bottom. Dismisses after 3s or by clicking.
  return (
    <div
      aria-live="polite"
      className={`fixed left-1/2 bottom-8 z-50 transform -translate-x-1/2 transition-all ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div
        className="flex items-center gap-3 shadow-lg rounded-lg px-6 py-4 bg-white border border-slate-200 text-blue-700"
        style={{ minWidth: 280 }}
        role="alert"
        onClick={onClose}
      >
        <CheckCircle className="w-6 h-6 text-green-500" />
        <span className="flex-1 font-medium">{message}</span>
        <button
          className="ml-3 text-slate-400 hover:text-blue-600 transition"
          aria-label="Close"
          onClick={onClose}
          type="button"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setShowToast(true);
    setFormData({ name: "", email: "", message: "" });
    // Auto-hide after 3s
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "garikgevorgyan.rap.20@gmail.com",
      href: "mailto:garikgevorgyan.rap.20@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+374 (93) 591-881",
      href: "tel:+37493591881",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Armenia",
      href: "https://www.google.com/maps/place/Armenia",
    },
  ];

  return (
    <>
      <Toast
        show={showToast}
        message="Thank you for your message! I'll get back to you soon."
        onClose={() => setShowToast(false)}
      />
      <section id="contact" className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-center">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12" />

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-2xl mb-6">Let's work together</h3>
                <p className="text-lg text-slate-600 mb-8">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{info.title}</p>
                        <p className="text-lg text-slate-700">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-slate-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-slate-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
