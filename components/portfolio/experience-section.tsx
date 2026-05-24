"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Trophy, Target } from "lucide-react";
import { SectionHeading } from "./section-heading";

const experiences = [
  {
    title: "CyberSpace Programs Team",
    role: "Senior Coordinator",
    organization: "Club Event",
    period: "2024 - 2025",
    description:
      "Spearheaded organization of multiple college-level events with 100+ participants. Led a team of coordinators to ensure smooth execution under tight deadlines.",
    highlights: [
      "100+ participants per event",
      "Team leadership",
      "Event coordination",
      "Tight deadline management",
    ],
    Icon: Target,
  },
  {
    title: "LearnIT Events Team",
    role: "Events Lead",
    organization: "Technical Club",
    period: "2024 - 2025",
    description:
      "Led end-to-end management of a large-scale hackathon with 1,000+ participants. Managed a 1,00,000+ prize pool including coordination with sponsors and finance teams.",
    highlights: [
      "1,000+ hackathon participants",
      "1,00,000+ prize pool managed",
      "Sponsor coordination",
      "Cross-functional team management",
    ],
    Icon: Trophy,
  },
];

function TimelineCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:block" />
      
      {/* Card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="w-full glass rounded-2xl border border-border/50 p-6 transition-all hover:border-primary/50 hover:glow-purple md:w-[calc(50%-2rem)]"
      >
        <div className="mb-4 flex items-start justify-between">
          <div className="rounded-lg bg-gradient-primary p-2">
            <experience.Icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {experience.period}
          </div>
        </div>

        <h3 className="mb-1 text-lg font-bold text-foreground">{experience.title}</h3>
        <p className="mb-2 text-sm text-primary">{experience.role}</p>
        <p className="mb-4 text-sm text-muted-foreground">{experience.organization}</p>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.highlights.map((highlight) => (
            <span
              key={highlight}
              className="flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
            >
              <Users className="h-3 w-3" />
              {highlight}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Leadership & Experience"
          subtitle="Leading teams and organizing impactful technical events"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />

          {/* Timeline cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <TimelineCard key={experience.title} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
