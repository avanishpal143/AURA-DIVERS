import { motion } from 'framer-motion'

export default function Logo({ size = 40 }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ rotate: 15, scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Outer ring */}
      <circle cx="20" cy="20" r="18" stroke="#44ddc2" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
      {/* Inner glow circle */}
      <circle cx="20" cy="20" r="12" stroke="#44ddc2" strokeWidth="1" opacity="0.6" />
      {/* Submersible body */}
      <ellipse cx="20" cy="20" rx="7" ry="4" fill="#00bfa6" opacity="0.9" />
      {/* Periscope */}
      <rect x="19" y="12" width="2" height="5" rx="1" fill="#44ddc2" />
      {/* Propeller lines */}
      <line x1="13" y1="20" x2="10" y2="18" stroke="#44ddc2" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="20" x2="10" y2="22" stroke="#44ddc2" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bioluminescent dots */}
      <circle cx="24" cy="20" r="1" fill="#68fade" />
      <circle cx="22" cy="20" r="0.7" fill="#68fade" opacity="0.7" />
      {/* Depth waves */}
      <path d="M8 28 Q14 25 20 28 Q26 31 32 28" stroke="#44ddc2" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M10 32 Q16 29 22 32 Q28 35 34 32" stroke="#44ddc2" strokeWidth="0.7" fill="none" opacity="0.2" />
    </motion.svg>
  )
}
