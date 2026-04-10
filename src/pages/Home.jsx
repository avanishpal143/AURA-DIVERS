import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' } }),
}

const services = [
  { icon: 'precision_manufacturing', title: 'Technical Diving', desc: 'Saturation and mixed-gas diving operations reaching depths beyond conventional limits.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjUA0RKe8WtLGR5xECuxesUoLvpVVY2iZjG93bm6M9_Wt0cxMjGGiMahoxX_ciutiw9ZL2Fz7tjSwd4TdG0UlSgKxmT5r0rarBZ0rjDpBjxDZve839Rwflez6eXyfZDsQID541-Yy5kEHhiE5rUPK0UHkq7rd8Wo9zWG93P1o1nVvzQz36pjcCM0KwbhogXi80JeVZhfHW2O2r4KOX4mZ2rgBVE_gsaGivrz-wvyyydRAhcqdQsTiVdYidkDTBjlWc4Q12_ApXPY', large: true },
  { icon: 'explore', title: 'Navigation Systems', desc: 'Advanced acoustic positioning and inertial navigation for sub-meter precision.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDimgK_BEFvN7E6r7VM2zRpKx5jHzSIfNkh3_SXVqPNWiEpi-d3A3h1PzSVoY3rY326NmtVz6pOHP3D5c4Y2xvczbasMCqWjgG0LXkvIJpjXhxNh_t70e3iUXn_6Lv5mN5xtrW0AiELu7X9byj7utiG06sUPXwDkfYGaX8ZZ7wEYvQg1ildxnbTHRcCP42BiFrCkJIoic1X7o6gTTgDnGUOdNcXFPbHhK3CGTWq8YNZwN3bhkopo1ATyFA3lUqCepMh9kox1KBaz3E' },
  { icon: 'visibility', title: 'Inspection', desc: 'Non-destructive testing and high-definition visual telemetry for offshore assets.' },
  { icon: 'eco', title: 'Conservation', desc: 'Ecosystem restoration and environmental impact assessments in sensitive zones.' },
  { icon: 'sailing', title: 'Offshore Support', desc: 'Full-spectrum logistical support and vessel crew coordination for energy sectors.' },
]

const stats = [
  { value: '500+', label: 'Successful Missions' },
  { value: '300m', label: 'Maximum Depth Reach' },
  { value: '15+', label: 'Vessel Support Fleet' },
  { value: '0', label: 'Safety Incidents' },
]

const advantages = [
  { icon: 'verified', title: 'Certified Experts', desc: 'Every operative is IMCA certified and rigorously trained in high-risk environments.' },
  { icon: 'memory', title: 'Proprietary Tech', desc: 'Utilizing custom-engineered HUD systems for real-time telemetry and safety.' },
  { icon: 'health_and_safety', title: 'Zero-Harm Safety', desc: 'A foundational commitment to zero incidents through exhaustive pre-mission planning.' },
  { icon: 'psychology', title: 'Adaptive Standards', desc: 'Procedures that evolve with global maritime regulations and new oceanic science.' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZec1MQRpNxSgRAgobwfndKprVakl5Yt-TIMGiS2uM-IWrSjX5PsCTF1n1tdji8Tzn6KJFVGG83VD9vwjcNhNwgCoZ32I7IwrEIx8YR-L4x6MzxoTk-uQlWqBC8f80AYD0YK5CirXWUTBtM_3CA48aaqWWja3D0pyNTJHH325k_JUdJeM9xf6M-EAw2um0Hm9oqh_uqkUcjYvt43HqPOnHIJPRkQTTfMzScZOesNJwoJ0yqThLWUpFxyn4nEN16fDkEuvXXcoSmao"
            alt="Aura Divers underwater research station"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.span
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-block px-4 py-1 mb-6 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-xs font-bold tracking-widest uppercase"
          >
            Precision in the Abyss
          </motion.span>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Exploring the <span className="text-gradient">Depths</span>.<br />Engineering the Future.
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-xl text-[#b9c7e4] max-w-2xl mx-auto mb-12 opacity-80 leading-relaxed"
          >
            Harnessing bioluminescent technology and elite technical diving to solve the most complex subaquatic challenges on Earth.
          </motion.p>
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={() => navigate('/fleet')}
              className="px-10 py-4 bg-gradient-to-r from-[#44ddc2] to-[#00bfa6] text-[#00382f] font-bold rounded-xl shadow-[0_0_20px_rgba(68,221,194,0.4)]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.button>
            <motion.button
              onClick={() => navigate('/innovation')}
              className="px-10 py-4 border border-[#85948f]/30 backdrop-blur-md text-[#d7e3f9] font-bold rounded-xl hover:bg-[#1f2b3b] transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Technical Specs
            </motion.button>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest font-bold">Descend</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-teal-400 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#111c2c] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
            >
              <div className="text-5xl font-bold text-[#44ddc2] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-[#bbcac5] font-bold">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-32 px-12 bg-[#040f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <div className="max-w-2xl">
              <motion.h2
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Our <span className="text-gradient">Expertise</span>
              </motion.h2>
              <p className="text-[#bbcac5]">Precision services engineered for the world's most demanding environments.</p>
            </div>
            <div className="hidden md:block">
              <span className="material-symbols-outlined text-6xl text-teal-400/20">hub</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className={`group relative ${s.large ? 'md:col-span-2' : ''} h-[400px] rounded-2xl overflow-hidden glass-panel border border-[#3c4a46]/10 cursor-pointer`}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
                whileHover={{ y: -4, boxShadow: '0 0 20px rgba(68,221,194,0.3)' }}
              >
                {s.img && (
                  <img
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                    src={s.img}
                    alt={s.title}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040f1e] via-transparent to-transparent" />
                <div className="absolute bottom-0 p-10">
                  <span className="material-symbols-outlined text-[#44ddc2] text-4xl mb-4 block">{s.icon}</span>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.title}</h3>
                  <p className="text-[#bbcac5] text-sm max-w-md">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-32 px-12 bg-[#081423]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/3">
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-5xl font-bold leading-tight mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              The Aura <br /><span className="text-gradient">Advantage</span>
            </motion.h2>
            <div className="w-24 h-1 bg-[#44ddc2] rounded-full" />
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                className="flex gap-6"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-400/10 flex items-center justify-center border border-teal-400/20">
                  <span className="material-symbols-outlined text-[#44ddc2]">{a.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{a.title}</h4>
                  <p className="text-[#bbcac5] text-sm">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-12 bg-[#040f1e]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-panel p-16 rounded-3xl border border-[#3c4a46]/10 relative"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <span className="material-symbols-outlined text-[#44ddc2] text-6xl absolute -top-8 left-12">format_quote</span>
            <p className="text-2xl leading-relaxed italic text-[#d7e3f9] mb-12">
              "Aura Divers redefined our expectations for subaquatic engineering. Their ability to deploy specialized teams with zero lead time while maintaining industrial safety standards is unmatched in the Gulf region."
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-400/30">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Xu3pYQxI5x8d5JSFMA5q4qzHqITZM0clGLVNCR62DReqQ5qUMj_mJWzO21zjLIgenL1kEXYNn-bfc7VfKUHHavOWiNqV-WojRTgjVD0XA8Bba2xWuhq7vx29c49ASO4MetLLgnDcG0FcLS3C0LrcLFmmybSofpJV6X18KVVKXYC4LRWPKB1FDCDQLdMwNn2o_YoEzix1eVOT09W29v9-m_mYesuWDCFX4KfPSZp_HTM11l9ESViioRMXYnaghHkzNVjiytIWw80"
                  alt="Marcus Sterling"
                />
              </div>
              <div>
                <p className="font-bold text-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Marcus Sterling</p>
                <p className="text-sm text-[#44ddc2] uppercase tracking-widest font-bold">COO, Meridian Offshore</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-12 bg-[#081423]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-5xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Get in <span className="text-gradient">Touch</span>
            </motion.h2>
            <p className="text-[#bbcac5] text-lg mb-12">Stationed in the heart of innovation. Contact our mission coordination center for operational inquiries.</p>
            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#44ddc2]">location_on</span>
                <div>
                  <p className="font-bold">Operational HQ</p>
                  <p className="text-[#bbcac5] text-sm">Masdar City, Siemens Building, Unit 104, Abu Dhabi, UAE</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#44ddc2]">alternate_email</span>
                <div>
                  <p className="font-bold">Inquiries</p>
                  <p className="text-[#bbcac5] text-sm">operations@auradivers.com</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="glass-panel p-12 rounded-3xl border border-[#3c4a46]/10 shadow-2xl"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <form className="space-y-8">
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Commander' },
                { label: 'Corporate Email', type: 'email', placeholder: 'name@company.com' },
              ].map((f) => (
                <div key={f.label} className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-[#44ddc2]">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full bg-[#1f2b3b] border-none border-b border-[#3c4a46] focus:ring-0 focus:border-[#44ddc2] py-4 text-[#d7e3f9] rounded-lg px-4 outline-none"
                  />
                </div>
              ))}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-[#44ddc2]">Mission Brief</label>
                <textarea
                  rows={4}
                  placeholder="Describe the operational requirements..."
                  className="w-full bg-[#1f2b3b] border-none focus:ring-0 py-4 text-[#d7e3f9] rounded-lg px-4 outline-none resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-[#44ddc2] to-[#00bfa6] text-[#00382f] font-bold rounded-xl"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                whileHover={{ boxShadow: '0 0 20px rgba(68,221,194,0.4)', scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Transmit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
