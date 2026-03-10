import { motion } from "motion/react";
import { CheckCircle2, Code, Briefcase, BrainCircuit } from "lucide-react";
import resumeData from "../data/resume.json";
import { cn } from "../lib/utils";

export default function Skills() {
  const { skills } = resumeData;

  if (!skills || skills.length === 0) return null;

  const icons = [Briefcase, Code, BrainCircuit];

  return (
    <section id="skills" className="py-24 px-6 relative z-10 max-w-5xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Core <span className="text-white/40">Competencies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{skillGroup.group}</h3>
                  </div>

                  <ul className="space-y-4">
                    {skillGroup.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3 text-white/70 text-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
