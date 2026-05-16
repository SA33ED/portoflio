import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Award, Rocket, Star, TrendingUp } from "lucide-react";

const items = [
  { Icon: Star, value: 30, suffix: "+", label: "Production projects shipped" },
  { Icon: Rocket, value: 12, suffix: "+", label: "Apps published to stores" },
  { Icon: TrendingUp, value: 100, suffix: "K+", label: "Lines of Flutter written" },
  { Icon: Award, value: 4, suffix: "+", label: "Years of focused growth" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1400;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Highlights"
          title={<>Numbers that reflect the <span className="text-gradient">work</span>.</>}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-3xl p-6 hover:glow-ring transition-all"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-primary/20 flex items-center justify-center text-primary">
                <it.Icon size={18} />
              </div>
              <div className="mt-5 text-4xl md:text-5xl font-bold text-gradient">
                <Counter to={it.value} suffix={it.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{it.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
