"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
    {
        degree: "MSc Computer Science with Data Science",
        institution: "Cochin University of Science & Technology",
        period: "2023 – 2025",
        grade: "CGPA 8.86",
        description: "Specialized in Data Science, Machine Learning, and advanced software development. Gained strong foundation in algorithms, distributed systems, and modern web technologies.",
    },
    {
        degree: "BSc Computer Science",
        institution: "Government Victoria College, Palakkad",
        period: "2020 – 2023",
        grade: "CGPA 7.47",
        description: "Studied core computer science subjects including data structures, operating systems, database management, and object-oriented programming.",
    },
];

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="py-28 bg-[#0A0F1C]" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="font-mono text-[#3B82F6] text-sm">02.</span>
                    <h2 className="text-3xl font-bold">Education</h2>
                    <div className="flex-1 h-px bg-[#1E2D45]" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="bg-[#0D1526] border border-[#1E2D45] rounded-xl p-6 hover:border-[#3B82F6]/40 transition-all duration-300 group"
                        >
                            {/* Icon + Grade */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                </div>
                                <span className="font-mono text-xs text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/20">
                                    {edu.grade}
                                </span>
                            </div>

                            {/* Degree */}
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#3B82F6] transition-colors duration-300">
                                {edu.degree}
                            </h3>

                            {/* Institution */}
                            <p className="text-[#3B82F6] font-mono text-sm mb-1">{edu.institution}</p>

                            {/* Period */}
                            <p className="text-[#64748B] font-mono text-xs mb-4">{edu.period}</p>

                            {/* Description */}
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}