"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";
import {
  SiPython,
  SiStreamlit,
  SiFlask,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";

const projects = [
  {
    title: "TransferIQ",
    subtitle: "AI Football Valuation Platform",
    description:
      "AI-powered football valuation platform using 2022-23 season statistics with player names and market values parsed from Transfermarkt.",
    longDescription:
      "Engineered 90+ performance features across 2,200+ player records and built ensemble regression pipelines evaluated using RMSE, MAE, and R² metrics. Designed interactive analytics dashboards for market value prediction, feature importance analysis, and model diagnostics inspired by modern football scouting systems.",
    tech: ["Python", "Streamlit", "XGBoost", "Scikit-learn", "Plotly", "Pandas"],
    features: [
      "Market value prediction",
      "Analytics dashboards",
      "Feature importance analysis",
      "Football scouting inspired UI",
    ],
    github: "https://github.com/krishmalhotra/transferiq",
    gradient: "from-primary to-accent",
  },
  {
    title: "PhishBERT",
    subtitle: "Transformer-based Phishing Detection",
    description:
      "High-accuracy phishing detection system using BERT achieving 98.7% accuracy and 99.4% recall on 82k+ email records.",
    longDescription:
      "Developed using bert-base-uncased with PyTorch and Hugging Face Transformers, optimizing the training pipeline for NVIDIA CUDA on RTX 3050. Implemented custom text preprocessing and EDA to analyze linguistic patterns in social engineering attacks. Integrated Gmail API pipelines for real-time inbox analysis and threat flagging.",
    tech: ["Python", "BERT", "PyTorch", "Hugging Face", "Gmail API", "CUDA"],
    features: [
      "98.7% detection accuracy",
      "Real-time Gmail integration",
      "Transformer-based model",
      "Threat pattern analysis",
    ],
    github: "https://github.com/krishmalhotra/phishbert",
    gradient: "from-accent to-primary",
  },
  {
    title: "AcceleraX",
    subtitle: "Desktop AutoML Platform",
    description:
      "Desktop AutoML application enabling end-to-end ML workflows for both image and tabular datasets.",
    longDescription:
      "Designed modular pipelines for dataset import, inspection, model recommendation, training, and export using PyTorch-based architectures. Implemented intelligent model recommendation engine suggesting algorithms like Random Forest, ResNet, and YOLO based on dataset characteristics. Developed an interactive GUI using PySide6 with real-time progress tracking and dataset visualization.",
    tech: ["Python", "PyTorch", "PySide6", "Scikit-learn", "OpenCV", "SQLite"],
    features: [
      "Intelligent model recommendation",
      "Image & CSV support",
      "Real-time progress tracking",
      "Model export for deployment",
    ],
    github: "https://github.com/krishmalhotra/accelerax",
    gradient: "from-primary via-accent to-primary",
  },
  {
    title: "GameREX",
    subtitle: "ML Game Recommendation Engine",
    description:
      "Content-based game recommender system using TF-IDF and cosine similarity for personalized recommendations.",
    longDescription:
      "Processed and standardized metadata for 291 games, engineered combined TF-IDF features, and applied cosine similarity to compute similarity scores. Built a responsive web interface allowing users to enter a game name and instantly receive personalized recommendations.",
    tech: ["Python", "Flask", "TF-IDF", "Cosine Similarity", "EDA"],
    features: [
      "Content-based filtering",
      "TF-IDF feature engineering",
      "Responsive web interface",
      "Instant recommendations",
    ],
    github: "https://github.com/krishmalhotra/gamerex",
    gradient: "from-accent to-primary",
  },
];

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Python: SiPython,
  Streamlit: SiStreamlit,
  Flask: SiFlask,
  PyTorch: SiPytorch,
  "Scikit-learn": SiScikitlearn,
};

interface Project {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github: string;
  gradient: string;
}

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50"
    >
      {/* Gradient border effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity group-hover:opacity-10`} />
      
      {/* Content */}
      <div className="relative p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="mb-1 text-xl font-bold text-foreground group-hover:text-gradient transition-all">
            {project.title}
          </h3>
          <p className="text-sm text-primary">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => {
            const Icon = techIcons[tech];
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {Icon && <Icon className="h-3 w-3" />}
                {tech}
              </span>
            );
          })}
          {project.tech.length > 4 && (
            <span className="inline-flex items-center rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            onClick={onSelect}
            variant="outline"
            size="sm"
            className="border-border/50 hover:bg-primary hover:text-primary-foreground group/btn"
          >
            View Details
            <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-4 w-4" />
              Code
            </a>
          </Button>
        </div>
      </div>

      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-2xl md:p-8"
      >
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Content */}
        <div className="mb-6">
          <h3 className="mb-2 text-2xl font-bold text-gradient">{project.title}</h3>
          <p className="text-primary">{project.subtitle}</p>
        </div>

        <p className="mb-6 leading-relaxed text-muted-foreground">
          {project.longDescription}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="mb-3 font-semibold text-foreground">Key Features</h4>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <h4 className="mb-3 font-semibold text-foreground">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button asChild className="bg-gradient-primary text-primary-foreground">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects showcasing AI/ML, full-stack development, and cybersecurity expertise"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
