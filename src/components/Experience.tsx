import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MapPin, Calendar, Building2, TrendingUp } from "lucide-react";
import resumeData from "../data/resume.json";
import { cn } from "../lib/utils";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Extract measurable bullets for impact highlights
  const impactHighlights = resumeData.experience
    .flatMap((exp) => exp.bullets)
    .filter((bullet) => /\d+%|\d+Cr|\d+k|\d+M|\d+\+/i.test(bullet))
    .slice(0, 3);

  return (
    <section id="experience" className="py-24 px-6 relative z-10 max-w-5xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Professional <span className="text-white/40">Experience</span>
        </h2>

        {/* Impact Highlights Panel */}
        <div className="mb-16 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-emerald-400 w-6 h-6" />
            <h3 className="text-xl font-semibold">Impact Highlights</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactHighlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <p className="text-sm text-white/80 leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline / Stacked Cards */}
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                className={cn(
                  "group relative rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer",
                  isExpanded
                    ? "bg-white/10 border-white/20 shadow-2xl shadow-white/5"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                )}
                onClick={() => toggleExpand(index)}
                layout
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.dates}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="pt-8 mt-6 border-t border-white/10">
                          <ul className="space-y-4">
                            {exp.bullets.map((bullet, i) => {
                              // Highlight metrics in bullets
                              const hasMetric = /\d+%|\d+Cr|\d+k|\d+M|\d+\+/i.test(bullet);
                              return (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-3 text-white/70"
                                >
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                  <span className={cn("leading-relaxed", hasMetric && "text-white/90 font-medium")}>
                                    {bullet}
                                  </span>
                                </motion.li>
                              );
                            })}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
