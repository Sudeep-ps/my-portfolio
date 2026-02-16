"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "5+", label: "Projects Completed" },
    { value: "3x", label: "Retention Growth" },
    { value: "5.0+", label: "ROAS Achieved" },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-28 relative" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="font-mono text-[#3B82F6] text-sm">01.</span>
                    <h2 className="text-3xl font-bold">About Me</h2>
                    <div className="flex-1 h-px bg-[#1E2D45]" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                            Hello! I'm <span className="text-white font-semibold">Sudeep P S</span>, a
                            Full Stack Developer based in <span className="text-[#3B82F6]">Palakkad, Kerala</span>.
                        </p>
                        <p className="text-[#64748B] leading-relaxed mb-6">
                            I specialize in building cross-platform mobile applications with <span className="text-[#94A3B8]">Flutter</span> and
                            scalable web applications using <span className="text-[#94A3B8]">React.js</span> and <span className="text-[#94A3B8]">NestJS</span>.
                            At Datcarts, I've shipped features like intelligent barcode scanning, a gamified rewards system,
                            and a real-time monitoring dashboard for distributed retail operations.
                        </p>
                        <p className="text-[#64748B] leading-relaxed mb-8">
                            I also have hands-on experience in AI/ML from my internship at <span className="text-[#94A3B8]">IBM WatsonX</span>, where
                            I built and deployed machine learning models on IBM Cloud. Currently pursuing my{" "}
                            <span className="text-[#94A3B8]">MSc in Computer Science with Data Science</span> at CUSAT (8.86 CGPA).
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {["Flutter", "React.js", "TypeScript", "NestJS", "Node.js", "MongoDB", "Python", "Google ML Kit"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-[#0D1526] border border-[#1E2D45] text-[#3B82F6] font-mono text-xs rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className="bg-[#0D1526] border border-[#1E2D45] rounded-xl p-6 hover:border-[#3B82F6]/50 transition-colors duration-300"
                            >
                                <p className="text-4xl font-extrabold gradient-text mb-1">{stat.value}</p>
                                <p className="text-[#64748B] text-sm font-mono">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}