"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Server, Database, Globe } from "lucide-react";
import Link from "next/link";



export const Skills = () => {
    const categories = [
        { name: "Frontend", icon: Globe, skills: PORTFOLIO_DATA.skills.frontend },
        { name: "Backend", icon: Server, skills: PORTFOLIO_DATA.skills.backend },
        { name: "Database & Cloud", icon: Database, skills: [...PORTFOLIO_DATA.skills.database, ...PORTFOLIO_DATA.skills.cloud] },
        { name: "Tools", icon: Code2, skills: PORTFOLIO_DATA.skills.tools },
    ];

    return (
        <Section id="skills" className="bg-secondary/20 rounded-[3rem] my-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Arsenal</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                                <cat.icon className="w-6 h-6 text-primary" />
                                <h3 className="font-bold text-lg">{cat.name}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-secondary rounded-md text-xs font-medium text-secondary-foreground">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
};

export const Projects = () => {
    return (
        <Section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center md:justify-start gap-3">
                    <span className="text-primary">#</span> Featured Projects
                </h2>

                <div className="grid lg:grid-cols-2 gap-8">
                    {PORTFOLIO_DATA.projects.map((project, idx) => (
                        <div key={idx} className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col">
                            <div className="p-8 flex-1">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                {project.link && (
                                    <Link href={project.link} target="_blank" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-white mb-6">
                                        <ExternalLink className="w-4 h-4" />
                                        {project.link}
                                    </Link>
                                )}
                                <p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {project.points.slice(0, 4).map((point, i) => ( // Showing only top 4 points for layout balance
                                        <li key={i} className="flex gap-2">
                                            <span className="mt-1.5 w-1 h-1 bg-white/20 rounded-full shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
};
