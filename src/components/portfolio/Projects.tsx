import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Inbol — Multi-vendor Marketplace",
    tag: "Production App",
    desc: "Large-scale multi-vendor commerce platform with vendor dashboards, real-time orders, chat & payments.",
    problem: "Multiple user roles, complex order flows, real-time updates across vendor & customer apps.",
    solution: "Modular Clean Architecture per feature, Bloc for state, WebSocket for live updates, Stripe payments.",
    tech: ["Flutter", "Bloc", "Clean Arch", "WebSocket", "Stripe", "Firebase"],
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "AI Chatbot Companion",
    tag: "AI Product",
    desc: "ChatGPT-style mobile app with streaming responses, persona switching and offline message history.",
    problem: "Smooth streaming UX, token-level rendering, offline-first storage of conversations.",
    solution: "Custom stream parser, Cubit state, Hive for offline cache, animated message bubbles.",
    tech: ["Flutter", "OpenAI", "Cubit", "Hive", "SSE"],
    accent: "from-fuchsia-400 to-violet-500",
  },
  {
    title: "Sign-Language AI for the Deaf",
    tag: "Social Impact",
    desc: "Camera-based AI assistant translating sign language to text & speech in real time.",
    problem: "On-device inference + low-latency UX for accessibility users.",
    solution: "Camera pipeline + ML backend + accessible UI built around large touch targets and haptics.",
    tech: ["Flutter", "Camera", "Gemini", "TTS"],
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "Event Management App",
    tag: "Live Product",
    desc: "Discover, book and manage events with QR check-in, payments and organizer tooling.",
    problem: "Two distinct user personas (organizer & attendee) with shared design system.",
    solution: "Feature-first architecture with role-based routing, deeplinking and dynamic ticketing.",
    tech: ["Flutter", "Bloc", "QR", "Stripe", "Firebase"],
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Gold Calculator",
    tag: "Utility",
    desc: "Beautiful precise calculator for jewelers with karat conversions, live prices & saved estimates.",
    problem: "Domain accuracy + buttery interactions on a calculator UI.",
    solution: "Custom number-pad widget, decimal-safe math, animated transitions.",
    tech: ["Flutter", "Provider", "REST"],
    accent: "from-yellow-300 to-amber-500",
  },
  {
    title: "Gym SaaS Suite",
    tag: "SaaS Concept",
    desc: "End-to-end gym management — members, plans, attendance, payments and analytics.",
    problem: "Replace spreadsheets with a delightful mobile-first experience for gym owners.",
    solution: "Multi-tenant architecture with Supabase, role-based dashboards & charts.",
    tech: ["Flutter", "Supabase", "Charts", "Riverpod"],
    accent: "from-rose-400 to-pink-500",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Projects that <span className="text-gradient">solve real problems</span>.</>}
          description="A curated set of apps I've architected, shipped or contributed to. Every one of them taught me something."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-primary/40 hover:via-accent/20 transition-all"
            >
              <div className="relative rounded-3xl bg-card/60 backdrop-blur-xl p-6 h-full overflow-hidden">
                <div className={`absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-15 blur-3xl group-hover:opacity-30 transition-opacity`} />

                {/* Mock device preview */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-5 border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                  <div className="absolute inset-0 grid-bg opacity-60" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-20`} />
                  <div className="absolute left-1/2 -translate-x-1/2 top-6 w-32 h-56 rounded-[20px] bg-background/80 border border-white/10 shadow-elegant overflow-hidden">
                    <div className="h-1 w-10 mx-auto mt-1.5 rounded-full bg-white/20" />
                    <div className="px-2 mt-3 space-y-1.5">
                      <div className={`h-2 w-2/3 rounded bg-gradient-to-r ${p.accent}`} />
                      <div className="h-1.5 w-1/2 rounded bg-white/10" />
                      <div className="mt-3 grid grid-cols-2 gap-1">
                        <div className="h-10 rounded bg-white/5" />
                        <div className="h-10 rounded bg-white/5" />
                        <div className="h-10 rounded bg-white/5" />
                        <div className="h-10 rounded bg-white/5" />
                      </div>
                      <div className={`mt-3 h-3 rounded bg-gradient-to-r ${p.accent} opacity-70`} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.tag}</span>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="h-8 w-8 rounded-lg glass flex items-center justify-center hover:bg-white/10">
                      <Github size={14} />
                    </a>
                    <a href="#" className="h-8 w-8 rounded-lg glass flex items-center justify-center hover:bg-white/10">
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-4 grid gap-2 text-xs">
                  <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                    <span className="text-foreground/70 font-medium">Problem · </span>
                    <span className="text-muted-foreground">{p.problem}</span>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                    <span className="text-foreground/70 font-medium">Solution · </span>
                    <span className="text-muted-foreground">{p.solution}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] rounded-md bg-white/5 border border-white/10 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
