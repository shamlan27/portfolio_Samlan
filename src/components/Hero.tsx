"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Linkedin, Mail, MapPin } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 max-w-7xl mx-auto pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 relative z-10 p-8 md:p-12 rounded-3xl bg-secondary/10 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
                {/* Background Glow Effect */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-50 pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

                <span className="text-primary font-medium tracking-wider text-sm md:text-base uppercase">
                    Software Engineer
                </span>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
                    Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{PORTFOLIO_DATA.personal.name}</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                    {PORTFOLIO_DATA.personal.role}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-primary transition-colors">{PORTFOLIO_DATA.personal.email}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{PORTFOLIO_DATA.personal.location}</span>
                    </div>
                </div>

                <div className="flex gap-4 pt-6">
                    <Link
                        href={`https://${PORTFOLIO_DATA.personal.linkedin}`}
                        target="_blank"
                        className="p-3 bg-secondary rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                        <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link
                        href={PORTFOLIO_DATA.personal.liveProject}
                        target="_blank"
                        className="inline-flex items-center h-12 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                    >
                        View Live Project
                    </Link>
                    <a
                        href="/resume.pdf"
                        download="Samlan_Resume.pdf"
                        className="inline-flex items-center h-12 px-6 rounded-lg border border-border bg-secondary/50 text-white font-medium hover:bg-secondary/80 transition-colors"
                    >
                        Download Resume
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
