import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' } }),
}

const alliances = [
  { icon: 'account_balance', title: 'Institutional Partners', desc: 'Joint research initiatives with MIT, Scripps Oceanography, and ETH Zurich.' },
  { icon: 'military_tech', title: 'Defense & Security', desc: 'Protocol development for deep-sea surveillance and acoustic intelligence.' },
  { icon: 'factory', title: 'Industrial Infrastructure', desc: 'Collaborative logistics with Global Ocean Systems and Subsea 7.' },
]

const partners = ['OCEANIX', 'DEEP_CORE', 'SURGE_SYS', 'AQUA_GEN', 'NORTH_STAR', 'VOID_TECH']

const stats = [
  { value: '142', label: 'Research Labs' },
  { value: '28', label: 'Gov Agencies' },
  { value: '650TB', label: 'Shared Telemetry' },
  { value: '2.4k', label: 'Deployments' },
]

export default function Network() {
  return (
    <div className="min-h-screen bg-[#081423] flex flex-col">
      <main className="flex-grow pt-24 hero-mesh">
        {/* Hero */}
        <section className="px-8 py-20 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl">
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible"
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              A Global{' '}
              <span style={{ background: 'linear-gradient(135deg, #44ddc2, #00bfa6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Subsurface
              </span>{' '}
              Intelligence Network
            </motion.h1>
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-xl md:text-2xl text-[#bbcac5] font-light leading-relaxed max-w-2xl"
            >
              Connecting leading research institutions, defense agencies, and industrial innovators to map the final frontier.
            </motion.p>
          </div>
        </section>

        {/* Map & Alliances */}
        <section className="px-8 py-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Map */}
            <motion.div
              className="lg:col-span-8 relative rounded-xl overflow-hidden glass-card aspect-video shadow-2xl"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOVnpxZZdquczCwOXiSa5_E3Z5FONb2pCHeBqEz_W3vQ7MWkmM-Kmm2894ejlXEi-FHdqRirMWL9Cfg9XU8CpUan_BAr3IRwWK3QwhlS3KcF7aFG2WeGkSkbErIWE5oFy1MGXAF3gnoSottMIGyW1u9XYjV_lT8fj5xQmUCWN_VlXBZ-MQgpG1zgd3-BgvsfWzsHpNLv-9kOH_RumpxrxtRRQvZqcL_YZMOwahpzhfXPqIHjsgB7U-Wa6wPd_RBSwV8IPSV4OPXoU"
                  alt="Global network map"
                />
              </div>
              {/* Live Telemetry overlay */}
              <div className="absolute top-6 left-6 z-10 glass-panel p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#44ddc2] animate-pulse" />
                  <span className="text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Live Telemetry</span>
                </div>
                <div className="text-[#bbcac5] text-xs font-mono">
                  ACTIVE HUBS: 14<br />
                  MISSIONS IN PROGRESS: 08
                </div>
              </div>
              {/* Map marker */}
              <div className="absolute bottom-12 right-12 flex gap-4">
                <div className="bg-[#2a3546] p-3 rounded-md glass-panel flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#44ddc2] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <span className="text-xs font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>MARIANA DEEP HUB</span>
                </div>
              </div>
            </motion.div>

            {/* Alliances */}
            <motion.div
              className="lg:col-span-4 space-y-4"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}
            >
              <div className="bg-[#111c2c] p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#44ddc2]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Strategic Alliances</h3>
                <div className="space-y-6">
                  {alliances.map((a) => (
                    <div key={a.title} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-[#b9c7e4]" style={{ fontVariationSettings: "'FILL' 1" }}>{a.icon}</span>
                      <div>
                        <h4 className="font-bold text-[#d7e3f9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{a.title}</h4>
                        <p className="text-sm text-[#bbcac5]">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="px-8 py-24 bg-[#040f1e]">
          <div className="max-w-screen-2xl mx-auto text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#bbcac5] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Ecosystem Members
            </h2>
            <div className="h-px w-24 bg-teal-400/30 mx-auto" />
          </div>
          <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-60">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                className="h-12 w-32 bg-slate-700/20 rounded flex items-center justify-center font-bold italic"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                {p}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-24 max-w-screen-2xl mx-auto">
          <motion.div
            className="bg-[#1f2b3b] rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Integrate your <span className="text-[#44ddc2]">capability</span>.
              </h2>
              <p className="text-lg text-[#bbcac5] mb-10 max-w-lg">
                We are actively seeking new partnerships with technology providers, academic labs, and exploration teams. Access our API, global vessels, and deep-sea infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-[#44ddc2] text-[#00382f] px-8 py-4 rounded-md font-bold text-center"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Propose Collaboration
                </motion.button>
                <motion.button
                  className="border border-[#3c4a46] px-8 py-4 rounded-md font-bold hover:bg-[#2a3546] transition-all text-center"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Network Protocols
                </motion.button>
              </div>
            </div>
            <div className="relative min-h-[400px]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4UffPmPLHSJEzuXwiDk7EfTdFj9BKloMMfWq9CJoId-hNVzE9auO79mS8VySXcT88gDSzH_Z5D1S3EZcUtE6fZ8g_Ic45CNQAqwpXwfr0Pij4jqPJA9fdKs9L5rxmKWaxgKQIQPfC2aj-QGXIubq-W6fGwx9Cs3RK5FvpnexbQ8CmXuGyw3ZwYdupIDRH3Z3iWdc0C5hr24LipmtR7xKqsQ_ISiLngUWHJk90xYGdvFJpGQTetOg2TtsnQCW_k68BjtYU2n_ghx0"
                alt="Control room"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1f2b3b] via-transparent to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="px-8 py-12 mb-20 max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
            >
              <div className="text-4xl font-bold text-[#44ddc2] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-[#bbcac5] font-bold">{s.label}</div>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  )
}
