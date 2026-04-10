import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#040f1e] w-full border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-16 w-full max-w-screen-2xl mx-auto">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Logo size={32} />
            <span className="text-xl font-black text-teal-400 font-headline uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Aura Divers
            </span>
          </div>
          <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed">
            Advancing the horizon of subsurface exploration through ethical intelligence and modular deep-sea technology.
          </p>
          <div className="flex gap-4 mb-6">
            {['hub', 'monitoring', 'radar'].map((icon) => (
              <motion.span
                key={icon}
                className="material-symbols-outlined text-slate-400 cursor-pointer"
                whileHover={{ color: '#44ddc2', scale: 1.2 }}
              >
                {icon}
              </motion.span>
            ))}
          </div>
          <div className="text-teal-400 text-sm tracking-wide uppercase">© 2024 Aura Divers. Subsurface Intelligence Systems.</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            {['Telemetry', 'Protocols'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-slate-400 text-sm tracking-wide uppercase opacity-80"
                whileHover={{ color: '#99f6e4', opacity: 1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {['Vessel Tracking', 'Safety Documentation'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-slate-400 text-sm tracking-wide uppercase opacity-80"
                whileHover={{ color: '#99f6e4', opacity: 1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <motion.a
              href="#"
              className="text-slate-400 text-sm tracking-wide uppercase opacity-80"
              whileHover={{ color: '#99f6e4', opacity: 1 }}
            >
              Contact HQ
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
