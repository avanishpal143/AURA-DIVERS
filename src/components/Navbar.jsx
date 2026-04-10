import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { label: 'Fleet', path: '/fleet' },
  { label: 'Exploration', path: '/exploration' },
  { label: 'Innovation', path: '/innovation' },
  { label: 'Network', path: '/network' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]' : 'bg-slate-900/20 backdrop-blur-xl'
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <Logo size={36} />
          <motion.span
            className="text-2xl font-bold tracking-tighter text-teal-400 font-headline"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            whileHover={{ textShadow: '0 0 12px rgba(68,221,194,0.6)' }}
          >
            Aura Divers
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {navLinks.map((link) => {
            const active = location.pathname === link.path
            return (
              <Link key={link.path} to={link.path}>
                <motion.span
                  className={`relative text-sm font-semibold tracking-tight transition-colors duration-300 ${
                    active ? 'text-teal-400' : 'text-slate-300 hover:text-teal-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400"
                    />
                  )}
                </motion.span>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => navigate('/deploy')}
            className="bg-gradient-to-br from-[#44ddc2] to-[#00bfa6] text-[#00382f] px-6 py-2 rounded-md font-headline font-bold shadow-[0_0_15px_rgba(68,221,194,0.3)] hidden md:block"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(68,221,194,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Deploy Mission
          </motion.button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-teal-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-8 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`font-headline font-semibold text-sm uppercase tracking-widest py-2 ${
                    location.pathname === link.path ? 'text-teal-400' : 'text-slate-300'
                  }`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { navigate('/deploy'); setMenuOpen(false) }}
                className="mt-2 bg-gradient-to-br from-[#44ddc2] to-[#00bfa6] text-[#00382f] px-6 py-3 rounded-md font-headline font-bold"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Deploy Mission
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
