import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' } }),
}

const filters = ['All Vessels', 'Submersibles', 'Autonomous ROVs', 'Support Ships']

const vessels = [
  {
    name: 'Aura Zenith-1', type: 'Manned Exploration Vessel', class: 'Class Alpha', status: 'READY', statusColor: 'text-green-400', pulse: true,
    specs: [{ label: 'Depth Rating', value: '11,000m' }, { label: 'Battery Life', value: '48h' }, { label: 'Payload', value: '2.4t' }],
    features: [{ icon: 'radar', text: 'Multibeam Echosounder 4D' }, { icon: 'videocam', text: '8K Neural Optic Cluster' }],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU2Wib_A-dPRotaFUH3gRFDM8eLejsfu2otdtn2UQ0501cm2t-koH5LuwlKSGCDT1vO2kMKzB-RVUr_nHStFxNJvgzpks23fal-Zvn8uDlI3vGKkD8ramkcsn06KiZTHbrdtazJqctMjgacviOxUfwkdFvLEbwjHe3TmZiYE32anXtVFBnGTlYAM3AhoIpulmlMLB9NQMIBAhOwesrMhbYhlaLX_Nh7u-BWV3JQzsDEp7_920ePrUNl7EQRwXua_0dOQD7rCHEArw',
  },
  {
    name: 'Cortex Probe X-4', type: 'Autonomous Mining Drone', class: 'Class ROV', status: 'ACTIVE', statusColor: 'text-amber-400', pulse: false,
    specs: [{ label: 'Depth Rating', value: '6,500m' }, { label: 'Battery Life', value: '120h' }, { label: 'AI Gen', value: 'v9.4' }],
    features: [{ icon: 'precision_manufacturing', text: 'Triple-Axis Hydraulic Manipulators' }, { icon: 'sensors', text: 'Chemical Trace Analysis Array' }],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3-9e_adCRWyw5v-cI-jGceBRZP248gW_Hwqvxufjv9HNpxvr7-klpuq0lw1XpLEenknzg-qlGwnso_CBCXOskWaid-sRGXer1saCUIaSZH0lU2uekit_tc3mmQqUN9P-IrHqZLJlFEIXqqrK_q2Ym-fuLXkERqIZEv8wjA1myC7dDuBMdBe1ujSexD4jTdO0Prut_kfLfXPBWlwW88iAIQll5yty7gsfQGi9jkAPgIFJeL3-LXjchSo-udoFFmLUW-EcBVeFuEi0',
  },
  {
    name: 'Titan Horizon', type: 'Expedition Support Mother-ship', class: 'Support Fleet', status: 'READY', statusColor: 'text-green-400', pulse: true,
    specs: [{ label: 'Length', value: '142m' }, { label: 'Deck Space', value: '850m²' }, { label: 'Helipad', value: 'Class A' }],
    features: [{ icon: 'satellite_alt', text: 'Global High-Bandwidth Uplink' }, { icon: 'waves', text: 'Active Wave Stabilization System' }],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDU5UJclWkQ0xGfVWmW_yiOGFuD5fBx--LRCW-7F_tUnZjFqIdvj_wTYdv6YPUK4vlrqNxzjFF7kc63KEEgXpZfhB8jk1SlUy_LrssNColc2Kuo0T4YvEOeq09K5pc-eJx2j5AjURDUXwC_KLcPiAyHLfLaGdgVmm1a2Z-247dYDg7A9nN7BpKuH5JEzdxCYjbvbHkfGKMkGbCs0tkghMtaRM_yxTm0zpR4FoaKAxCbUfStT3IdTQ-4JjmPl_ffiWsPkdcisSHPEc',
  },
]

export default function Fleet() {
  const [activeFilter, setActiveFilter] = useState('All Vessels')

  return (
    <div className="min-h-screen bg-[#081423] pt-32 pb-20 px-8 max-w-screen-2xl mx-auto w-full">
      {/* Hero */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <motion.span
              variants={fadeUp} initial="hidden" animate="visible"
              className="text-[#44ddc2] text-sm tracking-[0.2em] uppercase mb-4 block"
            >
              Fleet Registry v4.2
            </motion.span>
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Subsurface <br />
              <span className="text-[#2a3546]/60">Intelligence.</span>
            </motion.h1>
          </div>
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="glass-card p-6 rounded-xl border border-[#3c4a46]/10"
          >
            <div className="flex items-center justify-end gap-2 text-[#44ddc2]">
              <span className="material-symbols-outlined text-lg">hub</span>
              <span className="text-xs uppercase tracking-widest">Active Network</span>
            </div>
            <p className="text-4xl font-light mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              148 <span className="text-sm opacity-50">Units</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
        {filters.map((f) => (
          <motion.button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
              activeFilter === f
                ? 'bg-[#00bfa6] text-[#00473d]'
                : 'bg-[#1f2b3b] text-[#d7e3f9] hover:bg-[#2a3546]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {f}
          </motion.button>
        ))}
      </div>

      {/* Vessel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {vessels.map((v, i) => (
          <motion.div
            key={v.name}
            className="group relative bg-[#111c2c] rounded-xl overflow-hidden"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-64 overflow-hidden relative">
              <img
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                src={v.img}
                alt={v.name}
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#081423]/80 backdrop-blur-md text-[#44ddc2] text-[10px] px-3 py-1 rounded-full border border-teal-400/20 uppercase tracking-widest">
                  {v.class}
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#d7e3f9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{v.name}</h3>
                  <p className="text-[#bbcac5] text-sm mt-1">{v.type}</p>
                </div>
                <div className="text-right">
                  <span className="text-[#68fade] text-xs">STATUS</span>
                  <p className={`text-sm font-bold flex items-center justify-end gap-1 ${v.statusColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${v.statusColor.replace('text-', 'bg-')} ${v.pulse ? 'animate-pulse' : ''}`} />
                    {v.status}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#3c4a46]/10 mb-6">
                {v.specs.map((s) => (
                  <div key={s.label}>
                    <p className="text-[10px] text-[#bbcac5] uppercase tracking-tighter mb-1">{s.label}</p>
                    <p className="text-lg font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-8">
                {v.features.map((f) => (
                  <div key={f.text} className="flex items-center gap-3 text-sm text-[#d7e3f9]">
                    <span className="material-symbols-outlined text-[#44ddc2] text-sm">{f.icon}</span>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
              <motion.button
                className="w-full py-4 border border-teal-400/30 text-[#44ddc2] font-bold uppercase tracking-widest text-xs rounded-lg"
                whileHover={{ backgroundColor: '#44ddc2', color: '#00382f' }}
                transition={{ duration: 0.2 }}
              >
                Request Telemetry
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fleet Status Footer */}
      <motion.div
        className="mt-20 glass-card rounded-2xl p-8 border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#44ddc2] text-4xl">monitoring</span>
          <div>
            <h4 className="font-bold text-lg uppercase tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Real-Time Fleet Status</h4>
            <p className="text-[#bbcac5] text-sm">All vessels are connected via Quantum-Entangled Comms (QEC)</p>
          </div>
        </div>
        <div className="flex gap-12">
          {[{ label: 'Average Depth', value: '4,280 m' }, { label: 'Global Coverage', value: '94.2%' }].map((s) => (
            <div key={s.label}>
              <span className="text-[10px] text-[#44ddc2] block uppercase tracking-widest">{s.label}</span>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
