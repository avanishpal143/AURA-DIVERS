import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' } }),
}

const future = [
  { num: '01', title: 'Liquid Breathing Synthesis', desc: 'Eliminating decompression sickness through oxygenated fluorocarbon integration, allowing humans to dive deeper than ever before thought possible.' },
  { num: '02', title: 'Bioluminescent Infrastructure', desc: 'Developing zero-power underwater lighting systems inspired by deep-sea organisms to minimize ecological impact during observation.' },
  { num: '03', title: 'Swarm Drones', desc: 'Autonomous micro-submersibles that coordinate as a single sensory organism to scout hazardous zones ahead of divers.' },
]

export default function Innovation() {
  return (
    <div className="min-h-screen bg-[#081423] flex flex-col">
      {/* Hero */}
      <main className="flex-grow pt-24 blueprint-grid">
        <section className="relative px-8 py-20 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, #44ddc2 0%, transparent 70%)' }} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <motion.span
                variants={fadeUp} initial="hidden" animate="visible"
                className="text-[#44ddc2] text-sm tracking-[0.2em] uppercase block mb-4"
              >
                Research &amp; Development Phase 09
              </motion.span>
              <motion.h1
                variants={fadeUp} initial="hidden" animate="visible" custom={1}
                className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Subaquatic <span className="text-[#44ddc2]">Intelligence.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp} initial="hidden" animate="visible" custom={2}
                className="text-xl text-[#b9c7e4] max-w-xl mb-10 leading-relaxed font-light"
              >
                At Aura Divers, we don't just explore the depths; we reinvent the interface between human and abyss. Discover the future of precision diving and sonar visualization.
              </motion.p>
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={3}
                className="flex gap-4"
              >
                <motion.button
                  className="px-8 py-4 bg-[#44ddc2] text-[#00382f] rounded-lg font-bold tracking-wide shadow-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(68,221,194,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Prototypes
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-[#85948f]/20 backdrop-blur-md rounded-lg font-bold tracking-wide hover:bg-[#1f2b3b] transition-all"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Technical Whitepaper
                </motion.button>
              </motion.div>
            </div>
            <div className="lg:col-span-5 relative">
              <motion.div
                className="relative bg-[#1f2b3b]/40 backdrop-blur-2xl rounded-xl p-8 border border-[#3c4a46]/10 shadow-2xl"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  className="w-full h-auto opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt9omdPPvC-KGcD1RDtiAqugTBaJXxH97LVZZbUAANEFmIwkMav4yXPGYdH4-3niUsfEb7MnRdaO2tylBabMpVICKgXMvXwqKqBsMQzhP1-4qrqdL9cf7CZ9ST_JFGHU13fi2vOI0ByiQaG2Dm6Cjx4ZdWIJvPtOTQoBXrOE63Ah0kCBTRRcsWSvNXbFs4BtXpFdJSq9qUvYGHUmLBxESOicL94WFWrZw4pIMnMP0iHxze8KvVVY-JyiaaATBbn0oUvQDco0bkmSo"
                  alt="Mk. IV Hydro-Rig blueprint"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#2a3546] p-4 rounded-lg shadow-xl border border-teal-400/20 max-w-[200px]">
                  <p className="text-[10px] text-[#44ddc2] tracking-widest uppercase mb-1">Status: Active</p>
                  <p className="text-sm font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Mk. IV Hydro-Rig</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proprietary Technologies Bento */}
        <section className="px-8 py-24 max-w-7xl mx-auto">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Proprietary Technologies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Neural Sonar - large */}
            <motion.div
              className="md:col-span-2 bg-[#111c2c] rounded-xl overflow-hidden group hover:bg-[#152030] transition-all duration-500 relative"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <div className="p-10 flex flex-col h-full justify-between z-10 relative">
                <div>
                  <span className="p-3 bg-teal-400/10 rounded-full inline-block mb-6">
                    <span className="material-symbols-outlined text-[#44ddc2] text-3xl">radar</span>
                  </span>
                  <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Neural-Mapping Sonar</h3>
                  <p className="text-[#b9c7e4] max-w-md">Our AI interprets sound waves in real-time to generate photorealistic 3D environments, revealing what the naked eye cannot see in total darkness.</p>
                </div>
                <div className="mt-8 pt-8 border-t border-[#85948f]/10 flex items-center gap-6">
                  {[{ label: 'Resolution', value: '0.4mm / px' }, { label: 'Latency', value: '< 2ms' }].map((s) => (
                    <div key={s.label}>
                      <p className="text-xs uppercase tracking-widest text-[#44ddc2]">{s.label}</p>
                      <p className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                <img
                  className="object-cover w-full h-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwdb9JYNZF9lrjSDnOh46OFp9DIOnSiJGxkg13CoHKYzWrmg_1znM0lI4MAFD50XzrlzJ4N2uZQKj0JyOKFsZ8M7jyhPE8h5G1KNQ8amkZn8Ri_qQfmlkLHETX36yYxlStlANkwEa7z6Vnoxe-Vgmf0MiflncDKJph_lS6knkslaJ8bdr4MjTk7icaRl3rtJ0Zq_jyD_uIKhLKEQOVTojaQoT2mQExuCpHheSDXs38c52F8LtuK6vA6OqGcAG5LisUdMGDM5_jBck"
                  alt="Sonar visualization"
                />
              </div>
            </motion.div>

            {/* Aura-Mesh */}
            <motion.div
              className="bg-[#2a3546] rounded-xl p-10 flex flex-col items-center text-center justify-center border border-teal-400/5"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}
            >
              <span className="material-symbols-outlined text-[#44ddc2] text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Aura-Mesh Fabric</h3>
              <p className="text-[#bbcac5] text-sm leading-relaxed">Synthetic bio-polymers that mimic shark skin hydrodynamics, manufactured with 100% recycled ocean plastics.</p>
              <button className="mt-8 text-[#44ddc2] text-xs tracking-widest uppercase hover:underline">Learn more</button>
            </motion.div>

            {/* Deep-Link GPS */}
            <motion.div
              className="bg-[#111c2c] rounded-xl p-10 relative overflow-hidden group"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Deep-Link GPS</h3>
              <p className="text-[#b9c7e4] text-sm mb-6">Satellite-independent navigation using tectonic resonance triangulation for sub-meter accuracy at any depth.</p>
              <div className="rounded-lg overflow-hidden border border-[#85948f]/10 bg-[#081423]">
                <img
                  className="w-full h-32 object-cover opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe__Gw3gpZQycq3MgkluaIZ-JJnAq3DzkflfnQcBo38Txrj_SO1JbpHeme2Y376h_el4tW8Etya2jH0FY9epIKWu257xvLvUttahY-fGb-EMpB6QBVGCt_Pu-6LMkESYeRLnOVUmp4AKzcUW0bwkKLeUn7N2ZTCpnm5whSjTlKRIFgG_Vh4JXQtQJD-HfC99r2Ux1GSDNAXN5YmHwspw6AC2vC9NU_KMXbD-r4E7fAiotXfMqcedajCds0Ty3WjY5e_XhBjKldRHQ"
                  alt="GPS interface"
                />
              </div>
            </motion.div>

            {/* Patent Showcase */}
            <motion.div
              className="md:col-span-2 bg-[#111c2c] rounded-xl p-10 flex items-center gap-10 border border-[#85948f]/5"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}
            >
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#44ddc2]">verified</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#b9c7e4]">Registry Authorized</span>
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Pressure-Lock Seals</h3>
                <p className="text-[#b9c7e4] text-sm mb-6">Our patented magnetic-seal tech ensures zero-failure performance at depths exceeding 6,000 meters. Standard equipment on all Aura vessels.</p>
                <div className="flex gap-2">
                  {['PAT #884-X9', 'ISO-9002'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#2a3546] rounded-full text-[10px] text-[#68fade] uppercase">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:block w-48 shrink-0">
                <img
                  className="w-full h-auto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo9YqBhjg1XndZETaQqfaRcg778NbcwLtKRfCDx1X-FiVCE6XgaFSshD45xZ2SwFegZTU__w-uxCV_ph-E6Yc3zQ1xWj3dmgKGxyHOHOUG0qtOb8ryyO6cG4UAkz1lS7YpLBi7yFhlOemdTlR12R5071seQdm4ZlJOn8s4SzbzKuPY7e65R8LbyqBC3P38W-2cZGihMKgMI-6FtiI-JlSNOIXFiqdMJUaHRBvz53msAG293f9cIvBFpIFSZFoEvw-q-kPYA8kgBo0"
                  alt="Pressure-Lock Seals"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future Engineering */}
        <section className="bg-[#040f1e] py-32 px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <motion.h2
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-5xl font-bold tracking-tighter mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                The Future of Subaquatic Engineering
              </motion.h2>
              <div className="h-1 w-24 bg-[#44ddc2]" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                {future.map((f, i) => (
                  <motion.div
                    key={f.num}
                    className="flex gap-8 items-start"
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
                  >
                    <div className="text-[#44ddc2] text-5xl font-bold opacity-30" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{f.num}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{f.title}</h4>
                      <p className="text-[#bbcac5] leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="relative group"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-[#38debb]/20 rounded-2xl blur-2xl group-hover:opacity-100 transition duration-1000 opacity-70" />
                <div className="relative bg-[#081423] rounded-2xl overflow-hidden border border-[#3c4a46]/10">
                  <img
                    className="w-full aspect-video object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCALPtqF7gOaDxa_9TruZozgRLzx-4natyvcn3t87n8-uB24Vl3F8PQ-7X9fhSUJkZ09GE-cBru5aLRUHuMVVBpqKYjlS8vHXfbSp6mGXxML1HUXsSMGwbjLd4FH8UXHBtXfEOR-RJAVlFoUCY9RL5tT94mpyiLOlX--nnDwDuwvXvamc0pK_Lv2WKiN1_TLWhg7kHThOOdByZnlOgwYwYuOKibNf0f4N5kO0vLrwK_rU_eL3_oBkDCRJUp4eOaRxT_yoy7fjcw3zI"
                    alt="Deep-Sea Habitat Module"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081423] to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-xs text-[#44ddc2] uppercase tracking-widest mb-2">Prototype Alpha</p>
                    <h5 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Deep-Sea Habitat Module</h5>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-8 text-center bg-[#081423] relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20" />
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-4xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Stay at the cutting edge.
            </motion.h2>
            <p className="text-[#b9c7e4] mb-10">Join our engineering network for bi-weekly technical briefings on subaquatic R&D and upcoming mission deployments.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                className="bg-[#2a3546] border-none rounded-lg px-6 py-4 w-full sm:w-80 text-[#d7e3f9] outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your credentials"
                type="email"
              />
              <motion.button
                className="bg-[#44ddc2] text-[#00382f] font-bold px-8 py-4 rounded-lg"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(68,221,194,0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe to Briefing
              </motion.button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
