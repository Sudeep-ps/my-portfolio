"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        title: "ChatBond",
        description:
            "A cross-platform real-time chat application supporting Android, iOS, and Web from a single codebase. Features email-based authentication, profile management, and real-time messaging across all registered users using Firebase Firestore.",
        tech: ["Flutter", "Dart", "Firebase", "Firestore"],
        github: "https://github.com/Sudeep-ps/chatbond",
        live: "",
        tag: "Flutter",
    },
    {
        title: "Money Manager",
        description:
            "A personal finance app to track income and expenses with custom transaction categories. Displays real-time balance based on recorded transactions. Deployed as a web app via GitHub Pages.",
        tech: ["Flutter", "Dart", "Firebase", "GitHub Pages"],
        github: "https://github.com/Sudeep-ps/Sudeep-ps.github.io",
        live: "https://sudeep-ps.github.io/",
        tag: "Flutter",
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-28 bg-[#0A0F1C]" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="font-mono text-[#3B82F6] text-sm">04.</span>
                    <h2 className="text-3xl font-bold">Projects</h2>
                    <div className="flex-1 h-px bg-[#1E2D45]" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="group bg-[#0D1526] border border-[#1E2D45] rounded-xl p-6 hover:border-[#3B82F6]/50 transition-all duration-300 flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-[#3B82F6]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
                                        </svg>
                                    </div>
                                    <span className="font-mono text-xs text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-0.5 rounded border border-[#3B82F6]/20">
                                        {project.tag}
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#64748B] hover:text-white transition-colors"
                                            title="GitHub"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#64748B] hover:text-white transition-colors"
                                            title="Live Demo"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-[#64748B] text-sm leading-relaxed flex-1 mb-5">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2 py-0.5 bg-[#080C14] text-[#64748B] font-mono text-xs rounded border border-[#1E2D45]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="https://github.com/Sudeep-ps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-sm text-[#3B82F6] hover:text-white border border-[#3B82F6]/30 hover:border-white px-6 py-3 rounded transition-all duration-200"
                    >
                        View All Projects on GitHub
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}