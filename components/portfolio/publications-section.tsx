"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  BookOpen,
  FileText,
  Calendar,
  Tag,
  ChevronDown,
  Award,
  Quote,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";

interface Publication {
  title: string;
  authors: string[];
  abstract: string;
  conference?: string;
  journal?: string;
  year: number;
  status: "published" | "under-review" | "accepted" | "preprint";
  tags: string[];
  doi?: string;
  pdfUrl?: string;
  citation?: string;
}

const publications: Publication[] = [
  {
    title:
      "PM2.5 Prediction in Mumbai Using Machine Learning and Deep Learning Models",

    authors: [
      "Yash Pawar",
      "Krish Malhotra",
      "Sanjeev Kumar Ojha",
    ],

    abstract:
      "This research presents a comparative study of six machine learning and deep learning models for PM2.5 air quality prediction in Mumbai. The study evaluates Random Forest, XGBoost, CNN, RNN, GRU, and LSTM using RMSE, MAPE, and R² metrics on historical AQI data collected from multiple regions of Mumbai including Borivali East, Colaba, Powai, Vile Parle, and Worli. Experimental results demonstrate that LSTM achieved the best predictive performance with the lowest RMSE and highest R² score of 0.961606, proving the effectiveness of sequence-aware deep learning models for long-term AQI forecasting.",

    journal:
      "Department of Data Science and Engineering, Manipal University Jaipur",

    year: 2025,

    status: "under-review",

    tags: [
      "Machine Learning",
      "Deep Learning",
      "AQI Prediction",
      "PM2.5 Forecasting",
      "LSTM",
      "CNN",
      "RNN",
      "GRU",
      "XGBoost",
      "Random Forest",
      "Time Series Analysis",
      "Environmental AI",
    ],

    pdfUrl: "#",

    citation:
      'Pawar, Y., Malhotra, K., Ojha, S. K. (2025). "PM2.5 Prediction in Mumbai Using Machine Learning and Deep Learning Models." Department of Data Science and Engineering, Manipal University Jaipur.',
  },
];

const statusStyles = {
  published: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    label: "Published",
  },

  "under-review": {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/30",
    label: "Under Review",
  },

  accepted: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/30",
    label: "Accepted",
  },

  preprint: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/30",
    label: "Preprint",
  },
};

function PublicationCard({
  publication,
  index,
}: {
  publication: Publication;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const status = statusStyles[publication.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50"
    >
      {/* Animated Glow Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x" />

        <div className="absolute inset-[1px] rounded-2xl bg-card" />
      </div>

      <div className="relative p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/20 to-accent/20">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>

            <div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${status.bg} ${status.text} ${status.border}`}
              >
                <Award className="h-3 w-3" />
                {status.label}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {publication.year}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold leading-tight text-foreground transition-all group-hover:text-gradient">
          {publication.title}
        </h3>

        {/* Authors */}
        <p className="mb-3 text-sm text-muted-foreground">
          {publication.authors.join(", ")}
        </p>

        {/* Journal */}
        {(publication.conference || publication.journal) && (
          <p className="mb-4 text-sm font-medium text-primary">
            {publication.conference || publication.journal}
          </p>
        )}

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {publication.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full border border-border/50 bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              <Tag className="h-2.5 w-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              {/* Abstract */}
              <div className="mb-4 rounded-xl border border-border/30 bg-secondary/30 p-4">
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Quote className="h-4 w-4 text-primary" />
                  Abstract
                </h4>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {publication.abstract}
                </p>
              </div>

              {/* Citation */}
              {publication.citation && (
                <div className="mb-4 rounded-xl border border-border/30 bg-secondary/30 p-4">
                  <h4 className="mb-2 text-sm font-semibold text-foreground">
                    Citation
                  </h4>

                  <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                    {publication.citation}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="border-border/50 hover:bg-primary hover:text-primary-foreground"
          >
            {isExpanded ? "Show Less" : "Read Abstract"}

            <ChevronDown
              className={`ml-1 h-3 w-3 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </Button>

          {publication.pdfUrl && (
            <Button asChild variant="ghost" size="sm">
              <a
                href={publication.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-1 h-4 w-4" />
                PDF
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Publications & Research"
          subtitle="Research contributions in Machine Learning, Deep Learning, and Air Quality Prediction"
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            {
              label: "Publications",
              value: "1",
              icon: BookOpen,
            },

            {
              label: "Models Compared",
              value: "6",
              icon: Tag,
            },

            {
              label: "Best R² Score",
              value: "0.9616",
              icon: Quote,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-2xl font-bold text-gradient">
                  {stat.value}
                </p>

                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Publications Grid */}
        <div className="grid gap-6">
          {publications.map((publication, index) => (
            <PublicationCard
              key={publication.title}
              publication={publication}
              index={index}
            />
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 rounded-xl border border-dashed border-border/50 bg-card/20 p-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Research focused on machine learning, deep learning,
            predictive analytics, and intelligent environmental
            forecasting systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}