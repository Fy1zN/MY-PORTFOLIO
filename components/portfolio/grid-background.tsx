"use client";

export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient orbs */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-[100px] animate-pulse-glow" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/15 blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
    </div>
  );
}
