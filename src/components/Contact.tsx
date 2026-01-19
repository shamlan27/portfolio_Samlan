"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
    return (
        <footer className="bg-secondary/20 pt-20 pb-10">
            <Section id="contact" className="py-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 mb-20 text-center md:text-left"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let&apos;s Connect</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            {PORTFOLIO_DATA.availability}
                        </p>
                        <div className="flex flex-col gap-4 items-center md:items-start">
                            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="flex items-center gap-4 text-white hover:text-primary transition-colors text-lg">
                                <Mail className="w-6 h-6" />
                                {PORTFOLIO_DATA.personal.email}
                            </a>
                            <div className="flex items-center gap-4 text-muted-foreground text-lg">
                                <Phone className="w-6 h-6" />
                                {PORTFOLIO_DATA.personal.phone}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between items-center md:items-start">
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {PORTFOLIO_DATA.interests.map((interest, idx) => (
                                <span key={idx} className="px-4 py-2 rounded-full border border-white/10 text-sm hover:border-primary/50 transition-colors cursor-default">
                                    {interest}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-6 mt-10 md:mt-0 justify-center md:justify-start">
                            <Link href={`https://${PORTFOLIO_DATA.personal.linkedin}`} target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                                LinkedIn
                            </Link>
                            <Link href={PORTFOLIO_DATA.personal.liveProject} target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                                Live Project
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with Next.js & Tailwind <ArrowUpRight className="w-4 h-4" />
                    </p>
                </div>
            </Section>
        </footer>
    );
};
