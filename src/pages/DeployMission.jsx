import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' } }),
}

const missionTypes = [
  { label: 'Search & Recovery', icon: 'travel_explore' },
  { label: 'Scientific Research', icon: 'science' },
  { label: 'Structural Inspection', icon: 'precision_manufacturing' },
]

const telemetry = [
  { label: 'Current Depth Capability', value: '11,000 M' },
  { label: 'Fleet Availability', value: '84%' },
  { label: 'Avg Response Time', value: '02:14:00' },
]

export default function DeployMission() {
  return (
    <div
      className="min-h-screen bg-[#081423] text-[#d7e3f9] flex flex-col"
      style={{
        backgroundImage: 'radial-gradient(at 0% 0%, rgba(68,221,194,0.05) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0,191,166,0.05) 0px, transparent 50%)',
      }}
    >
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {/* Header */}
        <header className="mb-12">
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 bg-teal-400/20 border border-teal-400/20 rounded-full mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#44ddc2] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#44ddc2]">System Online: Command Center v4.2</span>
          </motion.div>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Deploy <span className="text-[#44ddc2]">Mission</span>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-[#bbcac5] max-w-2xl text-lg font-light"
          >
            Initialize high-stakes subsurface operations. Configure telemetry parameters and mission objectives for immediate vessel deployment.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <motion.div
            className="lg:col-span-8 space-y-8"
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
          >
            <section className="glass-panel p-8 rounded-xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">settings_input_component</span>
              </div>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Mission Type */}
                  <div className="space-y-3">
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-[#bbcac5]">Mission Type</label>
                    <div className="grid grid-cols-1 gap-2">
                      {missionTypes.map((m, i) => (
                        <motion.button
                          key={m.label}
                          type="button"
                          className={`flex items-center justify-between p-4 rounded-lg border text-left transition-all ${
                            i === 1
                              ? 'bg-[#2a3546]/40 border-teal-400/60'
                              : 'bg-[#1f2b3b] border-transparent hover:border-teal-400/40'
                          }`}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <span className="text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.label}</span>
                          <span className="material-symbols-outlined text-[#44ddc2] text-sm">{m.icon}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Depth & Region */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="block text-[10px] font-bold tracking-widest uppercase text-[#bbcac5]">Operational Depth (Meters)</label>
                      <div className="relative pt-6">
                        <input
                          type="range"
                          min="0"
                          max="11000"
                          step="100"
                          defaultValue="5000"
                          className="w-full h-1 bg-[#2a3546] rounded-lg appearance-none cursor-pointer accent-teal-400"
                        />
                        <div className="flex justify-between mt-4 text-[10px] font-medium text-[#85948f]">
                          <span>0M (SURFACE)</span>
                          <span>11,000M (HADAL)</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 pt-4">
                      <label className="block text-[10px] font-bold tracking-widest uppercase text-[#bbcac5]">Deployment Region</label>
                      <select className="w-full bg-[#111c2c] border-b-2 border-[#3c4a46] focus:border-[#44ddc2] p-4 text-[#d7e3f9] transition-colors outline-none appearance-none rounded-t-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        <option>North Atlantic - Sector 7</option>
                        <option>Mariana Trench - Abyssal Zone</option>
                        <option>Arctic Shelf - Sub-Ice Exploration</option>
                        <option>Indian Ocean - Hydrothermal Vents</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Objectives */}
                <div className="space-y-3">
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-[#bbcac5]">Technical Requirements &amp; Objectives</label>
                  <textarea
                    rows={4}
                    placeholder="Specify vessel class, sensory arrays, and payload details..."
                    className="w-full bg-[#111c2c] border border-[#3c4a46]/30 focus:border-teal-400/50 p-6 text-[#d7e3f9] rounded-lg transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
                  <motion.button
                    type="submit"
                    className="w-full md:w-auto bg-gradient-to-r from-[#44ddc2] to-[#00bfa6] text-[#00382f] px-12 py-5 rounded-md font-bold text-lg tracking-tight flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(68,221,194,0.2)]"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(68,221,194,0.4)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="material-symbols-outlined">rocket_launch</span>
                    INITIATE TRANSMISSION
                  </motion.button>

                  {/* Status indicator */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="absolute inset-0 border-2 border-teal-400/20 rounded-full" />
                      <motion.div
                        className="absolute inset-0 border-2 border-[#44ddc2] rounded-full border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                      />
                      <span className="material-symbols-outlined text-[#44ddc2] text-xl">sensors</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black tracking-widest text-[#44ddc2] uppercase">Transmission Status</span>
                      <span className="text-xs text-[#bbcac5] font-medium">PENDING COMMAND VALIDATION</span>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-4 space-y-6"
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
          >
            {/* Telemetry */}
            <div className="bg-[#111c2c] rounded-xl p-6 border border-white/5 space-y-4">
              <h3 className="font-bold text-sm tracking-wide text-[#b9c7e4] flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="material-symbols-outlined text-lg">monitoring</span>
                REAL-TIME TELEMETRY
              </h3>
              <div className="space-y-4">
                {telemetry.map((t) => (
                  <div key={t.label} className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-[10px] text-[#bbcac5] uppercase">{t.label}</span>
                    <span className="font-bold text-[#44ddc2]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{t.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative rounded-xl overflow-hidden aspect-video group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk6jk6lGTyVQY9atahh8W-deqj-cJKLuO2FUZaas8yrrpuDS8dNdOE_tew_5Xjfz4ih7z7qhVHKHqC665Bx-X-FWfB81ZV2vrtbIFl-HJR5CvNHy8eOGEr0-2cQMQHWSvunPNQLeYlden07NFc8gHSl6X7zyFVWjHKePOHfcAyLRCLorhlCE_PSaVt3hHETMjAjUxpDsS-ZHMYMbYCeZXDK8IA_z2gEvVhQVuywgF1aqBkrKpHR5n-duAsFvotIdvfyEmrD1Zh44c"
                alt="Aura Challenger Class"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081423] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-[10px] font-bold text-[#44ddc2] tracking-widest mb-1 uppercase">Vessel Focus</div>
                <div className="font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Aura Challenger Class</div>
              </div>
            </div>

            {/* Warning */}
            <div className="bg-[#93000a]/10 border border-[#ffb4ab]/20 p-6 rounded-xl">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#ffb4ab]">warning</span>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#ffb4ab] uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Security Protocol Alpha</h4>
                  <p className="text-[11px] leading-relaxed text-[#bbcac5]">All transmissions are encrypted via quantum-tunneling. Unauthorized access to mission parameters is strictly prohibited under Maritime Intelligence Law.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
