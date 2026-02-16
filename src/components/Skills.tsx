"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
    {
        title: "Mobile Development",
        icon: "📱",
        skills: [
            { name: "Flutter", level: 92 },
            { name: "Dart", level: 90 },
            { name: "Riverpod", level: 85 },
            { name: "Google ML Kit", level: 78 },
        ],
    },
    {
        title: "Frontend",
        icon: "🖥️",
        skills: [
            { name: "React.js", level: 85 },
            { name: "TypeScript", level: 88 },
            { name: "JavaScript", level: 90 },
            { name: "Tailwind CSS", level: 80 },
        ],
    },
    {
        title: "Backend",
        icon: "⚙️",
        skills: [
            { name: "NestJS", level: 85 },
            { name: "Node.js", level: 83 },
            { name: "REST APIs", level: 90 },
            { name: "JWT Auth", level: 82 },
        ],
    },
    {
        title: "Database & Tools",
        icon: "🗄️",
        skills: [
            { name: "MongoDB", level: 85 },
            { name: "MySQL", level: 78 },
            { name: "Git / GitHub", level: 90 },
            { name: "Firebase", level: 80 },
        ],
    },
    {
        title: "AI & Data Science",
        icon: "🤖",
        skills: [
            { name: "Python", level: 80 },
            { name: "IBM WatsonX", level: 72 },
            { name: "Machine Learning", level: 75 },
            { name: "Chatbot Development", level: 78 },
        ],
    },
    {
        title: "Dev Tools & Platforms",
        icon: "🛠️",
        skills: [
            { name: "Postman / Swagger", level: 85 },
            { name: "CI/CD", level: 75 },
            { name: "Jira", level: 80 },
            { name: "Flutter DevTools", level: 82 },
        ],
    },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-sm text-[#94A3B8] font-mono">{name}</span>
                <span className="text-xs text-[#3B82F6] font-mono">{level}%</span>
            </div>
            <div className="h-1.5 bg-[#1E2D45] rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1, delay, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] rounded-full"
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-28 bg-[#0A0F1C]" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="font-mono text-[#3B82F6] text-sm">02.</span>
                    <h2 className="text-3xl font-bold">Skills</h2>
                    <div className="flex-1 h-px bg-[#1E2D45]" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                            className="bg-[#0D1526] border border-[#1E2D45] rounded-xl p-6 hover:border-[#3B82F6]/30 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">{category.icon}</span>
                                <h3 className="font-bold text-white">{category.title}</h3>
                            </div>
                            {category.skills.map((skill, i) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    delay={catIndex * 0.15 + i * 0.1}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}