import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const LinkItem = ({ href, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-4 py-2 text-sm md:text-base text-white/90 hover:text-white transition-colors"
    >
      {label}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <Rocket size={18} />
            </span>
            <span className="font-semibold">My Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center">
            <LinkItem href="#projects" label="Projects" />
            <LinkItem href="#contact" label="Contact" />
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Hire Me
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col rounded-lg border border-white/10 bg-black/50">
              <LinkItem href="#projects" label="Projects" />
              <LinkItem href="#contact" label="Contact" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
