"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export const About = () => {
    return (
        <Section id="about">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center md:justify-start gap-3">
                    <span className="w-2 h-8 bg-primary rounded-full" />
                    About Me
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl text-center md:text-left mx-auto md:mx-0">
                    {PORTFOLIO_DATA.personal.summary}
                </p>
            </motion.div>
        </Section>
    );
};

export const Experience = () => {
    return (
        <Section id="experience" className="bg-secondary/30 rounded-3xl my-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center md:justify-start gap-3">
                    <Briefcase className="w-8 h-8 text-primary" />
                    Experience
                </h2>

                <div className="space-y-12">
                    {PORTFOLIO_DATA.experience.map((exp, idx) => (
                        <div key={idx} className="relative border-l-2 border-primary/30 pl-8 ml-4">
                            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                                    <p className="text-xl text-primary">{exp.company}</p>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                                    <Calendar className="w-4 h-4" />
                                    <span>{exp.duration}</span>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {exp.responsibilities.map((resp, i) => (
                                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                                        <span className="mt-2 w-1.5 h-1.5 bg-primary/60 rounded-full shrink-0" />
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
};

export const Education = () => {
    return (
        <Section id="education">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center md:justify-start gap-3">
                    <GraduationCap className="w-8 h-8 text-primary" />
                    Education
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {PORTFOLIO_DATA.education.map((edu, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                            <p className="text-primary mb-4">{edu.institution}</p>
                            <span className="inline-block px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">
                                {edu.status}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Section>
    )
}
