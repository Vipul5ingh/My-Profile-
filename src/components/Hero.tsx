import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import resumeData from "../data/resume.json";

export default function Hero() {
  const { name, title, summary } = resumeData.basics;

  const handleScroll = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    // Basic implementation for downloading JSON as a file or opening a new tab
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resumeData, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "Vipul_Singh_Resume.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <section id="top" className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl z-10"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {name}
        </motion.h1>
        
        <motion.h2
          className="text-xl md:text-2xl font-light text-white/80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {title}
        </motion.h2>
        
        <motion.p
          className="text-base md:text-lg text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {summary}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={handleScroll}
            className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 w-full sm:w-auto"
          >
            View Experience
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <button
            onClick={handleDownload}
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            Download Resume
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
