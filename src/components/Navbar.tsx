"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                <Link href="#" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
                    {PORTFOLIO_DATA.personal.name}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={PORTFOLIO_DATA.personal.liveProject}
                        target="_blank"
                        className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                    >
                        View Live
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden p-2 text-white"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "tween" }}
                            className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 p-2 text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-bold text-white hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};
