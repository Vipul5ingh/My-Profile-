import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const interval = 15;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300); // Small delay before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative flex items-center justify-center w-24 h-24 mb-8 border border-white/20 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="text-3xl font-light tracking-widest">VS</span>
        <motion.div
          className="absolute inset-0 border border-white/40 rounded-full"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>

      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
