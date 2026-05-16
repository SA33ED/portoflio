import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

const items = [
  {
    Icon: Briefcase,
    role: "Flutter Developer",
    company: "evyx",
    period: "2023 — Present",
    points: [
      "Architecting and shipping production-grade multi-vendor mobile apps used in the wild.",
      "Owning real-time chat, notifications & payments end-to-end with WebSocket + Firebase.",
      "Leading clean-architecture refactors that cut crash rate and improved cold start by ~40%.",
      "Collaborating with designers & backend teams to ship pixel-perfect, performant releases.",
    ],
    stack: ["Flutter", "Bloc", "Clean Arch", "WebSocket", "Firebase", "Stripe"],
  },
  {
    Icon: Sparkles,
    role: "Freelance Mobile Engineer",
    company: "Independent",
    period: "2022 — 2023",
    points: [
      "Delivered 10+ Flutter apps for clients across MENA — events, gold, fitness, AI.",
      "Designed scalable folder architectures that clients still build on today.",
      "Built AI features (chatbots, sign-language assistants) using OpenAI & Gemini APIs.",
    ],
    stack: ["Flutter", "Cubit", "REST", "OpenAI", "Hive"],
  },
  {
    Icon: GraduationCap,
    role: "B.Sc. Computer Science",
    company: "University",
    period: "2019 — 2023",
    points: [
      "Discovered Flutter early and became one of the strongest mobile developers in the cohort.",
      "Built graduation projects that outperformed senior-level submissions.",
      "Started the  HappyTech YouTube channel to share what I was learning.",
    ],
    stack: ["Dart", "Flutter", "Firebase"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title={<>A timeline of <span className="text-gradient">real impact</span>.</>}
          description="From a curious student to shipping production apps — here's the path."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-gradient-primary shadow-glow" />

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                  <div className={`inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground`}>
                    <it.Icon size={12} /> {it.period}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{it.role}</h3>
                  <p className="text-primary text-sm">{it.company}</p>
                </div>

                <div className={`mt-4 md:mt-0 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
                  <div className="glass-strong rounded-2xl p-5">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {it.points.map((p, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" /> {p}
                        </li>
                      ))}
                    </ul>
                    <div className={`mt-4 flex flex-wrap gap-1.5 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                      {it.stack.map((t) => (
                        <span key={t} className="text-[11px] rounded-md bg-white/5 border border-white/10 px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
