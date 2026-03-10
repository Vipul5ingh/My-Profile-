import { motion, useScroll, useSpring } from "motion/react";
import { Home, Briefcase, Award, Code, GraduationCap, User } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#top", icon: Home },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Skills", href: "#skills", icon: Award },
  { name: "Education", href: "#education", icon: GraduationCap },
];

export default function Navigation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white/20 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Desktop Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300",
                isActive ? "text-black" : "text-white/60 hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                {item.name}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden flex items-center gap-2 px-4 py-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl w-[90%] max-w-sm justify-between">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative p-3 rounded-full transition-colors duration-300 flex flex-col items-center justify-center",
                isActive ? "text-black" : "text-white/60 hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-pill"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon className="w-5 h-5 relative z-10" />
            </a>
          );
        })}
      </nav>
    </>
  );
}
