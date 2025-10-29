import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Immersive Landing',
    desc: 'A high-performance landing page with 3D background and micro-interactions.',
    stack: ['React', 'Three.js', 'Framer Motion'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Portfolio System',
    desc: 'A modern portfolio with a CMS and animated sections built for speed.',
    stack: ['Vite', 'Tailwind', 'MDX'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Interactive Data Viz',
    desc: 'Animated dashboards with smooth transitions and elegant motion.',
    stack: ['D3', 'React', 'Motion'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black to-black">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Projects</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            A snapshot of things I’ve been crafting lately. Focused on delightful motion and performance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                  </div>
                  <ExternalLink className="text-white/60 group-hover:text-white transition-colors" size={18} />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs rounded-full bg-white/10 text-white px-2 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
