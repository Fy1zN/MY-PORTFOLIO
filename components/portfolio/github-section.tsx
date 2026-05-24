"use client";

import { motion } from "framer-motion";
import {
  Github,
  GitCommit,
  GitPullRequest,
  Star,
  Flame,
  Award,
  Trophy,
  Code2,
  Zap,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";

const stats = [
  { label: "Repositories", value: "25+", icon: Code2 },
  { label: "Contributions", value: "500+", icon: GitCommit },
  { label: "Pull Requests", value: "50+", icon: GitPullRequest },
  { label: "Stars Earned", value: "100+", icon: Star },
];

const achievements = [
  {
    title: "Open Source Contributor",
    description: "Active contributor to ML and cybersecurity projects",
    icon: Github,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Hackathon Winner",
    description: "Multiple hackathon victories in AI/ML track",
    icon: Trophy,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Research Published",
    description: "Published research in cybersecurity & NLP",
    icon: Award,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Community Leader",
    description: "Leading CyberSpace Programs technical initiatives",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
  },
];

const certifications = [
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    year: "2024",
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon",
    year: "2024",
  },
  {
    name: "TensorFlow Developer",
    issuer: "Google",
    year: "2023",
  },
];

// Generate mock heatmap data
const generateHeatmapData = () => {
  const weeks = 52;
  const days = 7;
  const data: number[][] = [];
  
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      // Random contribution level 0-4
      week.push(Math.floor(Math.random() * 5));
    }
    data.push(week);
  }
  return data;
};

const heatmapData = generateHeatmapData();
const contributionLevels = [
  "bg-secondary/30",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/60",
  "bg-primary/80",
];

export function GithubSection() {
  return (
    <section id="github" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="GitHub & Achievements"
          subtitle="Open source contributions, coding activity, and professional accomplishments"
        />

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm transition-all hover:border-primary/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 transition-transform group-hover:scale-110">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Activity Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Contribution Activity</h3>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">127</span> day streak
              </span>
            </div>
          </div>

          {/* Heatmap Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-[3px]">
              {heatmapData.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((level, dayIndex) => (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                      className={`h-3 w-3 rounded-sm ${contributionLevels[level]} transition-all hover:ring-2 hover:ring-primary/50`}
                      title={`${level * 3} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 flex items-center justify-end gap-2">
            <span className="text-xs text-muted-foreground">Less</span>
            {contributionLevels.map((level, index) => (
              <div key={index} className={`h-3 w-3 rounded-sm ${level}`} />
            ))}
            <span className="text-xs text-muted-foreground">More</span>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Trophy className="h-5 w-5 text-primary" />
            Achievements
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm transition-all hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${achievement.color} shadow-lg`}
                  >
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-gradient transition-all">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Zap className="h-5 w-5 text-primary" />
            Certifications
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm transition-all hover:border-primary/50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-gradient transition-all">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {cert.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground">
            <a
              href="https://github.com/krishmalhotra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
