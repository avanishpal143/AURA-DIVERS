import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' } }),
}

const projects = [
  {
    icon: 'eco', tag: 'Conservation', title: 'Project Azure Pulse',
    desc: 'Restoring 400 hectares of bleaching-resistant coral in the Sulu Sea using CRISPR-enhanced substrates.',
    stats: [{ label: 'Success Rate', value: '84%' }, { label: 'Polyp Deployments', value: '12k' }],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_vfblsOFJw_M_pzTN3Xwxi2_bdrFszX07d4twaHhxMc2QegjvUJSnmcRD007wiH9M9h2a_XK5l6b0gWpJgcc94V2uImrC_02SGqgyI_nh0NyB9i6yBAqmtmWn4DS61a0HX_j3D6teg--bf7CB9xmEkOZrnYbKqQtow-9Gbo3N0En64ETmwY0WeBC66ghy2Az09Tj70dDRmbK7NQlKYTxwpx27hesEqSADNlwULgp5JO6NhkJlvCnMNDlpWMEGN035cn1oZbhlPS0',
  },
  {
    icon: 'radar', tag: 'Exploration', title: 'Mariana V-X',
    desc: 'Autonomous mapping of the Sirena Deep using swarm-intelligence hydro-drones.',
    stats: [{ label: 'Lidar Data', value: '9.2TB' }, { label: 'New Species', value: '42' }],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD27wmqiwaqyYtrJBFFtx2F8FKKbBTqIhtlQnwBjWk1RwNieHpRy1ikeUQm1VRYH-v-4lCr8oviuMFHUfEFy7BXHf9OURqIKOlawYyUIsZmL2X7QNvrXHfGf2jbwd7yZUFMcLgLouHHkFnkXzNeMOIf1BsbaFHI47PgZAgwOqllzTSGBmm9-U1cWQyNNXQ9wCInrb81TQxof1Q8uVZguOjZnvWc2jKM1af1AipsxusLLeA2i4JwCQmCN6ZKp74bmi9Lqdz7Nx568qQ',
  },
  {
    icon: 'science', tag: 'Research', title: 'Thermal Vent Synth',
    desc: 'Isolating extremophile microbes for the development of biodegradable polymer alternatives.',
    stats: [{ label: 'Max Temp Sample', value: '380°C' }, { label: 'Patents Pending', value: '18' }],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuM8UX13nZ8QQU1Ne6iW1lepJf4Z8cixk6UP05bANBy8OZfipU2uSRRlnWh96dojQMfcIVaBtoBm4gRhbgZtK1ly7Y_3zMatqZsLcqzzPZiwp-yS4IvfjdWF0kJx0hxevvRWCfWeiHQsSKmaAFu7Euoh56rGp26-nuAXji2YDow-LOm78gGyaM65ug1M-mMSWnDFoI873uCjDSaMAoufy-PDKcSOjHVNDNqWvVID0W0zw6xJN1L1lcZnQ3G3VrrjQRdiFV_mtN0gc',
  },
]

const stats = [
  { value: '450+', label: 'Missions Logged' },
  { value: '18.5k', label: 'Species Cataloged' },
  { value: '12M+', label: 'Sq km Mapped' },
  { value: '0', label: 'Safety Incidents' },
]

const roadmap = [
  { title: 'Arctic Melt Mapping', desc: 'Deploying cryo-capable probes under the Greenland ice sheet to measure baseline current shifts.', priority: 'High', date: 'Q3 2025' },
  { title: 'Neural Deep-Link', desc: 'Testing direct neural-interface telemetry with deep-diving mammals for non-invasive ecological monitoring.', icon: 'neurology' },
]

export default function Exploration() {
  return (
    <div className="min-h-screen bg-[#081423]">
      {/* Hero */}
      <section className="relative h-[921px] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACc0fzwVeViVlxFU9dQzUJeuwwbku0_-APhr_0YSNgBYhF7OE2ajY3Vjs9H_gBj3anx4Gds4Ew7_N9dy97KbDZOxte1-FOIsthXWBBeRnbVvHoMHvJA5jIgZXXKlat1eK5srXf8PFMB0gKdbIyHGhJWnkTNZuMgZZb6m-rgpDWwQGxxzxlWSMb5b2bLvHA6RNQqTfQekgrg1zG623vvhxD8VPaAdAC7r5bMJS5wpYLD1mouR51LcgiOI2yRsxCMRsj0phm9EF0xq4"
            alt="Exploration hero"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.span
              variants={fadeUp} initial="hidden" animate="visible"
              className="text-xs uppercase tracking-[0.2em] text-[#44ddc2] mb-4 block"
            >
              Current Frontier
            </motion.span>
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Subsurface <br /><span className="text-[#68fade]">Intelligence.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-xl md:text-2xl text-[#b9c7e4] max-w-2xl font-light"
            >
              Documenting the undocumented. Protecting the unseen. Aura Divers leads the global effort in deep-sea mapping and coral restoration.
            </motion.p>
          </div>
          <motion.div
            className="md:col-span-4 flex flex-col items-end"
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
          >
            <div className="glass-panel p-6 rounded-xl border border-white/5 text-right w-full">
              <div className="text-[#68fade] text-4xl font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>11,034M</div>
              <div className="text-[#bbcac5] text-xs uppercase tracking-widest">Max Depth Recorded</div>
              <div className="mt-4 h-1 w-full bg-[#2a3546] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#44ddc2]"
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Protocols */}
      <section className="py-32 bg-[#081423]">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Active Protocols
            </motion.h2>
            <div className="h-px flex-grow bg-[#3c4a46]/30 hidden md:block mx-12" />
            <p className="text-[#bbcac5] max-w-md">Our research spans five oceans, utilizing AI-driven telemetry to monitor reef health and hydrothermal activity in real-time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                className="group"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-8 shadow-2xl">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={p.img}
                    alt={p.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040f1e]/90 to-transparent p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="material-symbols-outlined text-[#44ddc2]" style={{ fontVariationSettings: "'FILL' 1" }}>{p.icon}</span>
                      <span className="text-xs uppercase tracking-widest font-bold">{p.tag}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{p.title}</h3>
                    <p className="text-[#bbcac5] text-sm line-clamp-2">{p.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {p.stats.map((s) => (
                    <div key={s.label} className="bg-[#111c2c] p-4 rounded-lg">
                      <div className="text-[#44ddc2] text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.value}</div>
                      <div className="text-xs text-[#bbcac5] uppercase">{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Bento */}
      <section className="py-32 bg-[#040f1e]">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="mb-20 text-center">
            <span className="text-[#68fade] uppercase tracking-[0.3em] font-bold text-sm">2025 - 2030 Roadmap</span>
            <h2 className="text-5xl font-bold mt-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Next Frontier Missions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px]">
            {/* Main Card */}
            <motion.div
              className="md:col-span-8 relative rounded-xl overflow-hidden group"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv7cZ6kx3EI2YOahNsQjr9iKZDOFlI5CP_1sck9uaauDW5XF022ulk8QytibcQAkj236qo4buuSijf6N2A7ARGkt_fEz6JmLfyxFpeUErkYEFugsDt0DQqh43PX16Ve_dmJHM2afq2sr2Id_msXuk7UecR1WuuikOWB3cvcpYnWG2rkHYSH9dZYMaNOQgiF9-_nkmwS9sUoDc-cCKgNkhvXh-r128mZw1YGcr_2DxTxI-oXtSL3Y_eLh3gtpw-54rQqfG8pxuQ7FA"
                alt="Hades Zone"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#081423] via-transparent to-transparent flex flex-col justify-center p-12">
                <div className="glass-panel p-8 rounded-xl max-w-md border border-white/10">
                  <h3 className="text-3xl font-bold text-[#44ddc2] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The Hades Zone</h3>
                  <p className="text-[#b9c7e4] mb-6 leading-relaxed">Our most ambitious descent yet. We aim to establish a permanent autonomous research station at the bottom of the Philippine Trench.</p>
                  <motion.button
                    className="flex items-center gap-2 text-[#44ddc2] font-bold uppercase text-sm tracking-widest"
                    whileHover={{ gap: '1rem' }}
                  >
                    Mission Briefing <span className="material-symbols-outlined">arrow_forward</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
            {/* Side Cards */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <motion.div
                className="bg-[#1f2b3b] rounded-xl p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden flex-1"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}
              >
                <div className="absolute -right-10 -top-10 opacity-10">
                  <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>waves</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Arctic Melt Mapping</h3>
                  <p className="text-[#bbcac5] text-sm">Deploying cryo-capable probes under the Greenland ice sheet to measure baseline current shifts.</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#44ddc2]">Priority: High</span>
                  <span className="text-xs text-[#bbcac5]">Q3 2025</span>
                </div>
              </motion.div>
              <motion.div
                className="bg-[#00bfa6]/20 rounded-xl p-8 flex flex-col justify-between border border-[#44ddc2]/20 cursor-pointer hover:bg-[#00bfa6]/30 transition-colors flex-1"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.5}
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Neural Deep-Link</h3>
                  <p className="text-[#bbcac5] text-sm">Testing direct neural-interface telemetry with deep-diving mammals for non-invasive ecological monitoring.</p>
                </div>
                <div className="mt-8 text-[#44ddc2]">
                  <span className="material-symbols-outlined text-4xl">neurology</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-20 bg-[#081423] border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
            >
              <div className="text-5xl font-bold text-[#44ddc2] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-[#bbcac5] font-bold">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
