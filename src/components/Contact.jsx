import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            I’m available for freelance work, collaborations, or just a friendly chat.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="mailto:hello@example.com"
              className="group flex items-center gap-3 rounded-xl bg-white/5 p-4 text-white hover:bg-white/10 transition-colors"
            >
              <Mail className="text-white/80" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-white/70 text-sm">hello@example.com</div>
              </div>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-xl bg-white/5 p-4 text-white hover:bg-white/10 transition-colors"
            >
              <Github className="text-white/80" />
              <div>
                <div className="font-medium">GitHub</div>
                <div className="text-white/70 text-sm">github.com/yourhandle</div>
              </div>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-xl bg-white/5 p-4 text-white hover:bg-white/10 transition-colors"
            >
              <Linkedin className="text-white/80" />
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-white/70 text-sm">linkedin.com/in/yourhandle</div>
              </div>
            </a>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </section>
  );
}
