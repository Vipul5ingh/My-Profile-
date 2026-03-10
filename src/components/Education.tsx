import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import resumeData from "../data/resume.json";

export default function Education() {
  const { education, certifications } = resumeData;

  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="py-24 px-6 relative z-10 max-w-5xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          Academic <span className="text-white/40">Background</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-white/60" />
              Education
            </h3>
            <div className="relative border-l border-white/10 ml-4 space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="absolute w-4 h-4 rounded-full bg-white/20 border-2 border-[#050505] -left-[9px] top-1.5" />
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <p className="text-white/60 mb-2">{edu.institution}</p>
                  <p className="text-sm text-white/40">{edu.dates}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-white/60" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-5 h-5 text-white/80" />
                    </div>
                    <p className="text-white/80 font-medium leading-relaxed">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
