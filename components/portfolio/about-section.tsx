"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Code2, Cloud, Cpu, Lightbulb } from "lucide-react";
import { SectionHeading } from "./section-heading";

const highlights = [
  {
    Icon: Brain,
    title: "AI & ML Engineering",
    description: "Building end-to-end machine learning pipelines and deploying production-ready AI systems.",
  },
  {
    Icon: Shield,
    title: "Cybersecurity",
    description: "Developing intelligent threat detection tools and security analysis platforms.",
  },
  {
    Icon: Code2,
    title: "Full Stack Development",
    description: "Creating scalable web applications with modern frameworks and cloud-native architecture.",
  },
  {
    Icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying and managing ML models on AWS with containerized workflows.",
  },
  {
    Icon: Cpu,
    title: "Deep Learning",
    description: "Leveraging transformers, computer vision, and NLP for cutting-edge solutions.",
  },
  {
    Icon: Lightbulb,
    title: "Research-Driven",
    description: "Approaching problems with analytical rigor and data-driven decision making.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building intelligent systems that make a difference"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl border border-border/50 p-8">
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                I&apos;m an <span className="text-foreground font-medium">AI Engineer and ML Developer</span> focused on 
                building scalable, production-ready machine learning systems. Currently pursuing 
                B.Tech in Computer Science (Data Science) at Manipal University Jaipur.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                My expertise spans from developing <span className="text-accent">predictive analytics platforms</span> to 
                building <span className="text-primary">transformer-based security tools</span>. I&apos;m passionate about 
                solving complex problems through data-driven approaches and creating impactful solutions.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Beyond technical work, I lead teams and coordinate large-scale technical events, 
                combining <span className="text-foreground font-medium">engineering excellence with leadership</span> to 
                drive innovation and collaboration.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl border border-border/50 p-5 transition-all hover:border-primary/30 hover:glow-purple"
              >
                <item.Icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
