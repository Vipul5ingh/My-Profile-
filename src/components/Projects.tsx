import { motion } from "motion/react";
import { ExternalLink, Code2, Layers } from "lucide-react";
import resumeData from "../data/resume.json";

export default function Projects() {
  const { projects } = resumeData;

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 px-6 relative z-10 max-w-5xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Featured <span className="text-white/40">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-8">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400/50 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 mt-auto">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/5"
                    >
                      View Link
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
