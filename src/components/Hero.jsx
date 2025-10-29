import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/20 to-black" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-4 md:px-6 flex items-center">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Hi, I'm Your Name
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 max-w-xl text-white/80"
          >
            A creative developer crafting immersive, animated experiences for the web.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition-colors"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
