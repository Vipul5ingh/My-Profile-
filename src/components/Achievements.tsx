import { motion } from "motion/react";
import { Trophy, Target, Zap } from "lucide-react";
import resumeData from "../data/resume.json";
import { cn } from "../lib/utils";

export default function Achievements() {
  const { achievements } = resumeData;

  if (!achievements || achievements.length === 0) return null;

  return (
    <section className="py-24 px-6 relative z-10 max-w-5xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Key <span className="text-white/40">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const isMetric = /\d+%|\d+Cr|\d+k|\d+M|\d+\+/i.test(achievement.item);
            const Icon = isMetric ? Target : Trophy;

            return (
              <motion.div
                key={index}
                className={cn(
                  "group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:-translate-y-2",
                  isMetric && "border-emerald-500/30 hover:border-emerald-500/60"
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white/80 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={cn("text-2xl md:text-3xl font-bold mb-4", isMetric && "text-emerald-400")}>
                      {achievement.item}
                    </h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    {achievement.context}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
