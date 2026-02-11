import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg mb-2">Full Stack Developer</p>
              <p className="text-slate-400">
                Building the future, one line of code at a time
              </p>
            </div>

            <div className="flex gap-4">
              {[
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
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" />{" "}
              © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
