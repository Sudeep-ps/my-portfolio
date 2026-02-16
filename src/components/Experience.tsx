"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        role: "Software Developer",
        company: "Datcarts",
        period: "Dec 2024 – Present",
        type: "Full-time",
        description: [
            "Developed full-stack mobile and web applications focusing on user engagement and retail operations efficiency.",
            "Built intelligent product scanning system with barcode recognition and automated price detection capabilities.",
            "Designed gamification features including rewards system to enhance user engagement and retention by 3x, driving a ROAS of 5.0+.",
            "Developed an ad editor to design and export promotional creatives directly from product images.",
            "Architected scalable backend services and database infrastructure supporting distributed retail operations.",
            "Implemented real-time monitoring system for tracking health of distributed retail servers.",
        ],
        tech: ["React.js", "Next.js", "Node.js", "Flutter", "Firebase"],
    },
    {
        role: "Mobile Developer Intern",
        company: "Rthetapi",
        period: "Aug 2024 – Nov 2024",
        type: "Internship",
        description: [
            "Developed Flutter applications with local storage integration as part of a digital innovations agency.",
            "Contributed to UI development including integrating GPT-based features into mobile interfaces.",
            "Collaborated with the team on various small-scale mobile projects across different domains.",
        ],
        tech: ["Flutter", "Dart", "GPT API", "Local Storage"],
    },
    {
        role: "AI-ML Intern",
        company: "IBM WatsonX",
        period: "Jun 2024 – Jul 2024",
        type: "Internship",
        description: [
            "Built and deployed machine learning models on IBM Cloud as part of a 4-member development team.",
            "Developed an intelligent chatbot using IBM WatsonX, contributing to timely project delivery within a 2-month internship.",
        ],
        tech: ["IBM WatsonX", "IBM Cloud", "Machine Learning", "Python"],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-28 relative" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="font-mono text-[#3B82F6] text-sm">03.</span>
                    <h2 className="text-3xl font-bold">Experience</h2>
                    <div className="flex-1 h-px bg-[#1E2D45]" />
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#1E2D45]" />

                    <div className="space-y-10">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="relative pl-8 md:pl-24"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[-4px] md:left-[28px] top-6 w-2.5 h-2.5 rounded-full bg-[#3B82F6] border-2 border-[#080C14]" />

                                {/* Card */}
                                <div className="bg-[#0D1526] border border-[#1E2D45] rounded-xl p-6 hover:border-[#3B82F6]/40 transition-all duration-300 group">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                                                {exp.role}
                                            </h3>
                                            <p className="text-[#3B82F6] font-mono text-sm">{exp.company}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[#64748B] font-mono text-xs">{exp.period}</p>
                                            <span className="inline-block mt-1 px-2 py-0.5 bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-xs rounded font-mono">
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-5">
                                        {exp.description.map((point, j) => (
                                            <li key={j} className="flex items-start gap-2 text-[#64748B] text-sm leading-relaxed">
                                                <span className="text-[#3B82F6] mt-1 flex-shrink-0">▹</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-0.5 bg-[#080C14] text-[#64748B] font-mono text-xs rounded border border-[#1E2D45]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}