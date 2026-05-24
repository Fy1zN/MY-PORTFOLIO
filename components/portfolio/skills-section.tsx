"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

import {
  SiPython,
  SiCplusplus,
  SiC,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiFlask,
  SiFastapi,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiGooglecloud,
  SiLinux,
  SiGit,
  SiStreamlit,
} from "react-icons/si";

import {
  Brain,
  Shield,
  Database,
  BarChart3,
  Cloud,
} from "lucide-react";

import type { IconType } from "react-icons";

interface Skill {
  name: string;
  Icon: IconType | React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    Icon: Database,

    skills: [
      { name: "C++", Icon: SiCplusplus },
      { name: "C", Icon: SiC },
      { name: "SQL", Icon: Database },
      { name: "Python", Icon: SiPython },
    ],
  },

  {
    title: "AI / Machine Learning",
    Icon: Brain,

    skills: [
      { name: "Python", Icon: SiPython },
      { name: "PyTorch", Icon: SiPytorch },
      { name: "TensorFlow", Icon: SiTensorflow },
      { name: "Scikit-learn", Icon: SiScikitlearn },
      { name: "OpenCV", Icon: SiOpencv },
      { name: "NLP & LLMs", Icon: Brain },
    ],
  },

  {
    title: "Full Stack",
    Icon: Database,

    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Flask", Icon: SiFlask },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Streamlit", Icon: SiStreamlit },
    ],
  },

  {
    title: "Cloud & Database",
    Icon: Database,

    skills: [
      { name: "AWS", Icon: Cloud },
      { name: "GCP", Icon: SiGooglecloud },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Firebase", Icon: SiFirebase },
      { name: "Docker", Icon: SiDocker },
    ],
  },

  {
    title: "Cybersecurity",
    Icon: Shield,

    skills: [
      { name: "Burp Suite", Icon: Shield },
      { name: "Wireshark", Icon: Shield },
      { name: "Kali Linux", Icon: SiLinux },
      { name: "Nmap", Icon: Shield },
      { name: "Threat Analysis", Icon: Shield },
    ],
  },

  {
    title: "Tools & Visualization",
    Icon: BarChart3,

    skills: [
      { name: "Git", Icon: SiGit },
      { name: "Power BI", Icon: BarChart3 },
      { name: "Tableau", Icon: BarChart3 },
      { name: "Pandas", Icon: SiPython },
      { name: "Matplotlib", Icon: BarChart3 },
      { name: "Plotly", Icon: BarChart3 },
    ],
  },
];

function SkillCard({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 px-4 py-3 backdrop-blur-sm transition-all hover:border-primary/50 hover:glow-purple"
    >
      <skill.Icon className="h-5 w-5 text-primary" />

      <span className="text-sm font-medium text-foreground">
        {skill.name}
      </span>
    </motion.div>
  );
}

function CategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass rounded-2xl border border-border/50 p-6"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-gradient-primary p-2">
          <category.Icon className="h-5 w-5 text-primary-foreground" />
        </div>

        <h3 className="text-lg font-semibold text-foreground">
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, skillIndex) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I use to build intelligent systems, scalable applications, and AI-powered solutions"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <CategoryCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}