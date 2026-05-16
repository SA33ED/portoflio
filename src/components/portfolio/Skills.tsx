import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const categories = [
  {
    title: "Mobile & Flutter",
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Flutter", level: 98 },
      { name: "Dart", level: 96 },
      { name: "Responsive UI", level: 95 },
      { name: "Animations", level: 92 },
    ],
  },
  {
    title: "State & Architecture",
    color: "from-fuchsia-400 to-violet-500",
    skills: [
      { name: "Bloc / Cubit", level: 95 },
      { name: "Clean Architecture", level: 93 },
      { name: "Provider / Riverpod", level: 88 },
      { name: "MVVM / DDD", level: 85 },
    ],
  },
  {
    title: "Backend & Realtime",
    color: "from-emerald-400 to-teal-500",
    skills: [
      { name: "Firebase", level: 94 },
      { name: "REST APIs", level: 95 },
      { name: "WebSocket / Sockets.io", level: 90 },
      { name: "Supabase", level: 80 },
    ],
  },
  {
    title: "Product & Tooling",
    color: "from-amber-400 to-orange-500",
    skills: [
      { name: "AI Integrations (OpenAI, Gemini)", level: 90 },
      { name: "Payment Integrations", level: 85 },
      { name: "Push Notifications", level: 92 },
      { name: "Git / GitHub / CI", level: 90 },
    ],
  },
];

const tags = [
  "Flutter", "Dart", "Bloc", "Cubit", "Clean Architecture", "Firebase", "REST", "WebSocket",
  "GetX", "Riverpod", "Hive", "Isar", "Stripe", "FCM", "OpenAI", "Gemini", "Maps", "Charts",
  "Figma", "GitHub", "CI/CD", "Localization", "Animations", "Responsive UI",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title={<>A toolkit refined by <span className="text-gradient">production</span>.</>}
          description="Years of shipping real apps have shaped a deep, opinionated stack. Here's what I reach for daily."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-strong rounded-3xl p-6 hover:glow-ring transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{cat.title}</h3>
                <span className={`h-2 w-12 rounded-full bg-gradient-to-r ${cat.color}`} />
              </div>
              <div className="mt-5 space-y-4">
                {cat.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-muted-foreground">{s.name}</span>
                      <span className="text-foreground/70 tabular-nums">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* marquee tags */}
        <div className="mt-14 relative overflow-hidden mask-gradient">
          <div className="flex gap-3 animate-marquee w-max">
            {[...tags, ...tags].map((t, i) => (
              <span
                key={i}
                className="glass rounded-full px-4 py-2 text-sm text-muted-foreground whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
