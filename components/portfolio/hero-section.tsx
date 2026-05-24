"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

const floatingIcons = [
  { Icon: SiPython, delay: 0 },
  { Icon: SiPytorch, delay: 0.2 },
  { Icon: SiTensorflow, delay: 0.4 },
  { Icon: SiReact, delay: 0.6 },
  { Icon: SiNextdotjs, delay: 0.8 },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.5, duration: 0.5 }}
            style={{
              left: `${15 + index * 18}%`,
              top: `${20 + (index % 3) * 25}%`,
            }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="h-12 w-12 md:h-16 md:w-16" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-sm text-muted-foreground">
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="text-foreground">Krish</span>{" "}
          <span className="text-gradient">Malhotra</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-lg text-muted-foreground md:text-xl"
        >
          AI Engineer &bull; ML Developer &bull; Full Stack Builder &bull; Cybersecurity Enthusiast
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-8 max-w-3xl text-xl font-medium text-foreground md:text-2xl lg:text-3xl text-balance"
        >
          Building Intelligent AI Systems & Cybersecurity Solutions
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-muted-foreground text-pretty"
        >
          Focused on building scalable AI systems, intelligent cybersecurity tools, 
          and production-ready machine learning applications that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 group"
          >
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border/50 hover:bg-card">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { Icon: Github, href: "https://github.com/Fy1zN", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/krish-malhotra-903092317/", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:malhotrakrish2016@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border/50 bg-card/50 p-3 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:glow-purple"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/30 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
