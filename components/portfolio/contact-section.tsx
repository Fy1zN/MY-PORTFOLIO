"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Send,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "./section-heading";

const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: "malhotrakrish2106@gmail.com",
    href: "mailto:malhotrakrish2106@gmail.com",
  },

  {
    Icon: Phone,
    label: "Phone",
    value: "+91 9372067243",
    href: "tel:+919372067243",
  },

  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/Fy1zN",
    href: "https://github.com/Fy1zN",
  },

  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/krish-malhotra-903092317",
    href: "https://www.linkedin.com/in/krish-malhotra-903092317/",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-border/50 p-6 md:p-8"
          >
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>

                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="border-border/50 bg-card/50 focus:border-primary"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>

                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="border-border/50 bg-card/50 focus:border-primary"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full rounded-md border border-border/50 bg-card/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl border border-border/50 p-6 md:p-8">
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/50 p-4 transition-all hover:border-primary/50 hover:glow-purple"
                    whileHover={{ x: 4 }}
                  >
                    <div className="rounded-lg bg-gradient-primary p-2">
                      <item.Icon className="h-5 w-5 text-primary-foreground" />
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>

                      <p className="font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Opportunity Note */}
            <div className="glass rounded-2xl border border-border/50 p-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Open to opportunities.
                </span>{" "}
                Currently interested in AI/ML engineering roles,
                research positions, and innovative projects in
                cybersecurity and full-stack development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}