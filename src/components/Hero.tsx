"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Linkedin, Mail, MapPin } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from "next/link";

import Image from "next/image";

export const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 max-w-7xl mx-auto pt-40 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 p-8 md:p-12 rounded-3xl bg-secondary/10 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden"
            >
                {/* Background Glow Effect */}
                <div className="absolute -top-12 -right-12 md:-top-24 md:-right-24 w-48 h-48 md:w-64 md:h-64 bg-primary/30 rounded-full blur-3xl opacity-50 pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 md:-bottom-24 md:-left-24 w-48 h-48 md:w-64 md:h-64 bg-purple-500/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

                <div className="flex-1 flex flex-col items-center md:items-start space-y-6 text-center md:text-left z-20">
                    <span className="text-primary font-medium tracking-wider text-sm md:text-base uppercase">
                        Software Engineer
                    </span>

                    {/* Mobile Hero Image */}
                    <div className="block md:hidden relative w-32 h-32 my-4 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                        <Image
                            src="/samlan.jpeg"
                            alt={PORTFOLIO_DATA.personal.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <h1 className="text-3xl md:text-7xl font-bold tracking-tight text-white">
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{PORTFOLIO_DATA.personal.name}</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl px-2">
                        {PORTFOLIO_DATA.personal.role}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground pt-2 justify-center md:justify-start items-center md:items-start w-full">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-primary transition-colors">{PORTFOLIO_DATA.personal.email}</a>
                        </div>
                        <div className="hidden md:block w-1.5 h-1.5 bg-primary/50 dashed-circle" />
                        <div className="flex items-center justify-center gap-2 text-center w-full md:w-auto">
                            <MapPin className="w-4 h-4 shrink-0" />
                            <span>{PORTFOLIO_DATA.personal.location}</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full justify-center md:justify-start items-center">
                        <Link
                            href={`https://${PORTFOLIO_DATA.personal.linkedin}`}
                            target="_blank"
                            className="p-3 bg-secondary rounded-full hover:bg-primary/20 hover:text-primary transition-colors order-3 sm:order-1"
                        >
                            <Linkedin className="w-6 h-6" />
                        </Link>
                        <Link
                            href={PORTFOLIO_DATA.personal.liveProject}
                            target="_blank"
                            className="inline-flex items-center h-12 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center order-1 sm:order-2"
                        >
                            View Live Project
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Samlan_Resume.pdf"
                            className="inline-flex items-center h-12 px-6 rounded-lg border border-border bg-secondary/50 text-white font-medium hover:bg-secondary/80 transition-colors w-full sm:w-auto justify-center order-2 sm:order-3"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Hero Image - Desktop Only */}
                <div className="hidden md:block relative w-64 h-64 lg:w-80 lg:h-80 shrink-0 z-20">
                    <Image
                        src="/samlan.jpeg"
                        alt={PORTFOLIO_DATA.personal.name}
                        fill
                        className="rounded-full object-cover border-4 border-primary/50 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                    />
                </div>
            </motion.div>
        </section>
    );
};
