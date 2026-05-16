import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Play, Youtube, Users, Eye } from "lucide-react";

const videos = [
  { title: "Clean Architecture in Flutter — The Right Way", views: "12K", duration: "18:42" },
  { title: "Bloc vs Cubit: When to use which (with real apps)", views: "8.4K", duration: "14:21" },
  { title: "Building a real-time chat with WebSocket + Flutter", views: "21K", duration: "26:08" },
];

export function YoutubeSection() {
  return (
    <section id="youtube" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Content"
          title={<>Teaching modern Flutter on <span className="text-gradient"> HappyTech</span>.</>}
          description="I share the architectures, patterns and pitfalls I learn shipping production Flutter apps — to help the next generation of mobile devs."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-7 lg:col-span-1 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-rose-500/20 blur-3xl" />
            <div className="h-12 w-12 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-400">
              <Youtube size={24} />
            </div>
            <h3 className="mt-5 text-2xl font-semibold"> HappyTech</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              A growing channel where I break down clean architecture, state management and real-world Flutter
              engineering — no fluff.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="glass rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Users size={12} /> Subs
                </div>
                <div className="mt-1 text-xl font-bold text-gradient">5K+</div>
              </div>
              <div className="glass rounded-xl p-3">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Eye size={12} /> Views
                </div>
                <div className="mt-1 text-xl font-bold text-gradient">120K+</div>
              </div>
            </div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              <Youtube size={14} /> Visit Channel
            </a>
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {videos.map((v, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group glass rounded-2xl p-4 hover:glow-ring transition-all ${i === 0 ? "sm:col-span-2" : ""}`}
              >
                <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br from-rose-500/30 to-fuchsia-500/20 ${i === 0 ? "h-48" : "h-32"}`}>
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={18} className="text-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 text-[10px] bg-black/60 backdrop-blur px-1.5 py-0.5 rounded">
                    {v.duration}
                  </span>
                </div>
                <h4 className="mt-3 font-medium text-sm leading-snug">{v.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{v.views} views</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
