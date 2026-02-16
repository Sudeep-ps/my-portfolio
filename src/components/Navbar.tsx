"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#080C14]/90 backdrop-blur-md border-b border-[#1E2D45]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo — S Monogram */}
                <a href="#" className="group flex items-center justify-center w-11 h-11 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105">
                    <span
                        className="text-white font-extrabold text-xl leading-none select-none"
                        style={{ fontFamily: "var(--font-syne)" }}
                    >
                        S
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i + 0.3 }}
                            className="text-sm text-[#64748B] hover:text-white transition-colors duration-200 font-mono tracking-wide"
                        >
                            <span className="text-[#3B82F6] mr-1">0{i + 1}.</span>
                            {link.label}
                        </motion.a>
                    ))}
                    <motion.a
                        href="/resume.pdf"
                        download="Sudeep_PS_Resume.pdf"
                        target="_blank"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="px-4 py-2 border border-[#3B82F6] text-[#3B82F6] text-sm font-mono rounded hover:bg-[#3B82F6]/10 transition-all duration-200"
                    >
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`block w-6 h-0.5 bg-[#3B82F6] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-[#3B82F6] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-[#3B82F6] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0D1526] border-t border-[#1E2D45] px-6 pb-6"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * i }}
                                onClick={() => setMenuOpen(false)}
                                className="block py-3 text-[#64748B] hover:text-white font-mono text-sm border-b border-[#1E2D45] last:border-0"
                            >
                                <span className="text-[#3B82F6] mr-2">0{i + 1}.</span>
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}