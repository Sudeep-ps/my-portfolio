"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
    "Mobile Developer",
    "Full Stack Developer",
    "React.js Developer",
    "Nest.js Developer",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout: NodeJS.Timeout;

        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, roleIndex]);

    return (
        <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left — Text */}
                    <div className="flex-1">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-mono text-[#3B82F6] text-sm tracking-widest mb-4"
                        >
                            Hi, my name is
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-2"
                            style={{ fontFamily: "var(--font-syne)" }}
                        >
                            Sudeep P S
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-3xl lg:text-5xl font-bold text-[#64748B] mb-6 h-14 flex items-center"
                        >
                            <span>{displayed}</span>
                            <span className="cursor-blink ml-1 text-[#3B82F6]">|</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-[#64748B] text-lg leading-relaxed max-w-lg mb-10"
                        >
                            I build fast, scalable mobile and web applications. Passionate about
                            clean code, great UX, and turning ideas into real products.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-[#3B82F6] text-white font-mono text-sm rounded hover:bg-[#2563EB] transition-all duration-200 glow"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 border border-[#1E2D45] text-[#64748B] font-mono text-sm rounded hover:border-[#3B82F6] hover:text-white transition-all duration-200"
                            >
                                Get In Touch
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex gap-5 mt-10"
                        >
                            {[
                                { label: "GitHub", href: "https://github.com/Sudeep-ps" },
                                { label: "LinkedIn", href: "https://www.linkedin.com/in/sudeep-p-s-654859271?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bsp219eRoSK6J6FNGNcEgNw%3D%3D" },

                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs text-[#64748B] hover:text-[#3B82F6] transition-colors tracking-widest uppercase"
                                >
                                    {s.label}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right — Code Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex-shrink-0"
                    >
                        <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                            {/* Floating border */}
                            <div
                                className="absolute inset-0 rounded-2xl border border-[#3B82F6]/30"
                                style={{ animation: "float 4s ease-in-out infinite" }}
                            />
                            <div className="absolute inset-4 rounded-xl bg-[#0D1526] border border-[#1E2D45] flex items-center justify-center overflow-hidden">
                                {/* Code snippet */}
                                <div className="p-6 font-mono text-xs text-left w-full">
                                    <p className="text-[#64748B]">{"// about me"}</p>
                                    <p className="mt-2">
                                        <span className="text-[#818CF8]">const</span>{" "}
                                        <span className="text-[#60A5FA]">developer</span>{" "}
                                        <span className="text-white">{"= {"}</span>
                                    </p>
                                    <p className="pl-4 text-[#34D399]">
                                        name<span className="text-white">: </span>
                                        <span className="text-[#FCD34D]">"Sudeep P S"</span>
                                        <span className="text-white">,</span>
                                    </p>
                                    <p className="pl-4 text-[#34D399]">
                                        role<span className="text-white">: </span>
                                        <span className="text-[#FCD34D]">"Full Stack"</span>
                                        <span className="text-white">,</span>
                                    </p>
                                    <p className="pl-4 text-[#34D399]">
                                        mobile<span className="text-white">: </span>
                                        <span className="text-[#FCD34D]">"Flutter"</span>
                                        <span className="text-white">,</span>
                                    </p>
                                    <p className="pl-4 text-[#34D399]">
                                        web<span className="text-white">: </span>
                                        <span className="text-[#FCD34D]">"React.Js"</span>
                                        <span className="text-white">,</span>
                                    </p>
                                    <p className="pl-4 text-[#34D399]">
                                        available<span className="text-white">: </span>
                                        <span className="text-[#3B82F6]">true</span>
                                    </p>
                                    <p className="text-white">{"}"}</p>
                                    <p className="mt-3">
                                        <span className="text-[#3B82F6] cursor-blink">▋</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="font-mono text-xs text-[#64748B] tracking-widest">SCROLL</span>
                    <div className="w-px h-12 bg-gradient-to-b from-[#3B82F6] to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}