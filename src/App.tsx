import { useState } from "react";
import { AnimatePresence } from "motion/react";
import AnimatedBackground from "./components/AnimatedBackground";
import Splash from "./components/Splash";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white antialiased overflow-x-hidden">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <Navigation />
          <main className="relative z-10 flex flex-col gap-24 pb-32">
            <Hero />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Education />
          </main>
        </>
      )}
    </div>
  );
}
