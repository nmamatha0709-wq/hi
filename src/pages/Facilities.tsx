/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PrismButton, GlassCard } from '../components/UI';
import { Network, Activity, BrainCircuit, MapPin, Share2, Globe } from 'lucide-react';

const facilities = [
  {
    title: 'Spectral Clarity MRI',
    suite: 'DIAGNOSTIC SUITE',
    desc: 'High-resonance imaging utilizing quantum spectral analysis for 40% higher detail than standard clinical systems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVXyT2hLLdUlFcTAmtY7uATNat9feblwavkqvHErDMzls6gx_SMVb8D-_o_C7HuwoB_pe1iioRl_Wp2yiWPLm_V4503BJewkoxOUcLkpeLIc3z1jlswsWiDCKbf4n_aumXZ5jC_7Uk815EiP_Fpd_n8JTxsGyHXSHckRan1KyWaOZNWbtnk4spuB-dWlWG3Nuj-nGMx76QUm_e_yj0e5adTyfnUL3-TP2NQrcLzdi-UxxzRs9lOtK4yXC0Ynz-NXjF4s-_Li0utEI',
    cols: 'lg:col-span-8'
  },
  {
    title: 'Rapid-Path Genomics',
    suite: 'LABORATORY',
    desc: 'Accelerated blood analysis with AI-integrated sequencing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8n__RCbMyeaO-nKMlbw632lR3FT-2hwLSqQbj7fh3uW-C5hsshnk5-DhTRRZeKTe8OfNLD1EjauEjjPlrGuRnQ8E8F4Y6S6o4iRPtlWQge0fSgl0zkZjtn9VvMIsg-BjlI9UaB1CTrlMMrpZf_rb6K8T50Psyl7bRYtqo6SLzGNl9tTQMbhaAYbndxkKQAvl3p_0zPTLXIYSTcfuM4tcUIS1XZdZJZQaHX3nfQs0fnCcxykusWtJIMT3Is-cDCq9hf_9Ybiaohng',
    cols: 'lg:col-span-4'
  },
  {
    title: 'Patient Atriums',
    desc: 'Healing environments designed with circadian lighting systems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7zE7aYWdN1p9PHR8xWBep0IfvoPvhG8_5TCpqwXzYfKWVf-fF4a_FueYLyyyecGzPPCavJT13aOcTpC3pl0Njmy6uuqQdvkKHuvhVlkKeXcL4WomAB4BjkmiyeMWwDijP2p9qdaUtHlj2VP4urQSv9YjnoA_oxBvzeQuoV16oRV7Acv2W2mYXa6dN0vgqMwqLyrvE1AakUsdhHgnnpX-KdImsRBWncqRBDI_Leh4vu8MSs4Lg5sNaluPaToNx2XEKnH9OuKaOPrk',
    cols: 'md:col-span-4',
    color: 'primary'
  },
  {
    title: 'Robotic Surgery',
    desc: 'Minimally invasive procedures powered by Spectral robotics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoKAD5EzodnWmJDTjeQn2D0ZJ9VA-F4yBrjSlZE4082tsrq8-MEp0Tuyh0efkGAP1QNzJ40xoAkuZ366Wh4AF0dBPNBneFgYcLA_DNdF_MiHBxFGyIa6K3hS_3bV57mBs2fLuCOPH9SYeMP3kKEh32l_GDhbKOVdRbqqLCBReVmsD4yCO3NaXl1d_zm2GJF0TWzRjJBFNiYwszyFTPZyrOIwnflJFJNYE1rqcePF2_mUiDcyicZzBiE753SoyPM9uwwJypkJ2Y1-Y',
    cols: 'md:col-span-4',
    color: 'secondary'
  },
  {
    title: 'Rehab Pavilions',
    desc: 'Interactive physical therapy labs with motion-tracking tech.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA5ui0sEs_A3rwV4GIDngHCRJEpxhSgVuBsH-HfTPpFMc3peQ_EjWTAc31JY4utwXQ5rNEVoHzuI_jTIk7lxTsLj7YHQ4A_RWWQ7WulBw5j9CRNSxOgcOvoHe87T8kk9CvKJLSl1RCZEKEYH9XeJKYbvU4z9UQxkXrK-Il6tb9GA3boDXwLRjr-ndBu1bE2LEDgPWIBn9rWujnCYAyTofVvOeJBMGzoSv-KONKUuG-n-Esk61uHsHhEQzssZwjrt2qmRjGK_OGDnU',
    cols: 'md:col-span-4',
    color: 'tertiary'
  }
];

const hubs = [
  { name: 'Spectral North Campus, Boston', color: 'primary', desc: 'Oncology & Genomic Research' },
  { name: 'Spectral Pacific, San Francisco', color: 'secondary', desc: 'Neural Sciences & Bio-Engineering' },
  { name: 'Spectral Nexus, Austin', color: 'tertiary', desc: 'Pediatrics & Wellness Rehabilitation' }
];

const Facilities = () => {
  return (
    <main className="pt-32 pb-32">
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text prism-gradient"
        >
          The Architecture of Healing.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto"
        >
          Discover our sanctuary of medical excellence, where advanced spectral technology meets human-centric design to redefine the clinical experience.
        </motion.p>
      </section>

      {/* Main Gallery */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-12 gap-6">
          {facilities.map((fac, i) => (
            <motion.div 
              key={fac.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`col-span-12 ${fac.cols} group relative overflow-hidden rounded-3xl prism-border ${fac.suite ? 'h-[500px] md:h-[600px]' : 'h-[350px] md:h-[400px]'}`}
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src={fac.image} 
                alt={fac.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              <div className={`absolute bottom-0 left-0 p-8 md:p-12 ${!fac.suite ? 'w-full bg-gradient-to-t from-background/95 to-transparent !p-8' : ''}`}>
                 {fac.suite && (
                   <span className="text-[10px] font-bold text-primary-container mb-4 block tracking-[0.2em]">{fac.suite}</span>
                 )}
                 <h2 className={`text-3xl md:text-4xl mb-4 font-bold ${!fac.suite ? `text-${fac.color}` : 'text-white'}`}>{fac.title}</h2>
                 <p className={`text-sm md:text-base font-medium max-w-md ${!fac.suite ? 'text-on-surface-variant' : 'text-white/80'}`}>
                   {fac.desc}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-surface-container-low section-gap">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-[12px] font-bold text-primary tracking-[0.2em] mb-4 block">NEXT GENERATION CARE</span>
              <h2 className="text-4xl md:text-5xl">Spectral Core Technology</h2>
            </div>
            <p className="text-on-surface-variant text-lg max-w-sm mt-4 md:mt-0 font-medium leading-normal">
              Our facilities are powered by a proprietary health-OS that synchronizes data across all departments in real-time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Network className="w-6 h-6" />, color: 'primary', title: 'Unified Patient Cloud', desc: 'Your entire medical history is decrypted and accessible by your care team within milliseconds of your arrival.' },
              { icon: <Activity className="w-6 h-6" />, color: 'secondary', title: 'Ambient Bio-Sensors', desc: 'Non-intrusive sensors in patient suites track vitals via spectral reflection, eliminating the need for constant wiring.' },
              { icon: <BrainCircuit className="w-6 h-6" />, color: 'tertiary', title: 'AI Triage Synthesis', desc: 'Predictive algorithms assist doctors by highlighting potential anomalies before they become visible to the human eye.' }
            ].map(tech => (
              <GlassCard key={tech.title} withPrismBorder className="p-10 shadow-sm hover:-translate-y-1 transition-transform">
                <div className={`w-12 h-12 rounded-xl bg-${tech.color}/10 flex items-center justify-center mb-6 text-${tech.color}`}>
                   {tech.icon}
                </div>
                <h4 className="text-xl mb-4">{tech.title}</h4>
                <p className="text-on-surface-variant leading-relaxed">{tech.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Global Hubs Section */}
      <section className="max-w-7xl mx-auto px-6 section-gap">
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-5 pr-0 lg:pr-8">
            <h2 className="text-4xl md:text-5xl mb-6">Global Hubs of Excellence</h2>
            <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
              Spectral Health operates six primary facilities across North America, each specializing in distinct medical disciplines while maintaining a unified standard of care.
            </p>
            <div className="space-y-4">
              {hubs.map(hub => (
                <div key={hub.name} className="flex items-start p-5 hover:bg-white rounded-2xl transition-all cursor-pointer group hover:shadow-lg hover:shadow-primary/5">
                  <MapPin className={`w-6 h-6 text-${hub.color} mr-4 mt-1`} />
                  <div>
                    <h5 className={`text-lg font-bold group-hover:text-${hub.color} transition-colors`}>{hub.name}</h5>
                    <p className="text-sm text-outline font-medium">{hub.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] h-[500px] prism-border ring-8 ring-white/50">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxnYklP3K0t5kEvEm87rpNkYVWMrbONT_JPT574Gnab9TeKCvqOGqzM2Tb-YjkbUXfj6hB8HqZOsCM2_ZYUr9FM2DBAX60i_XPl7ucfPBz3hnDd1hbAis9PD5TrVwkKYmrUqwF38oS351nCE2yeCS04KlzvIK2IHcC_r45k_kVmBjOZH9eSqQCPUpFDuKXa7AxtVKIhg-twqgotccqEjmapjfoEkwKXCUtBE0vmdjdhj87uJOGX5lrgws-LTzmSzE6H0rzOKGMU5U"
              alt="Global Map"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 section-gap">
        <div className="prism-border p-1 bg-white rounded-[3rem]">
          <div className="bg-white/95 rounded-[2.9rem] px-8 py-20 text-center backdrop-blur-md">
            <h2 className="text-4xl md:text-5xl mb-6">Experience the Future of Health.</h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
              Schedule a facility tour or book an initial consultation with our world-class specialists today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <PrismButton className="!px-12 !py-5 text-xl">
                Book Appointment
              </PrismButton>
              <PrismButton variant="outline" className="!px-12 !py-5 text-xl">
                Take Virtual Tour
              </PrismButton>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Info */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-primary hover:shadow-lg transition-all">
          <Share2 className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-primary hover:shadow-lg transition-all">
          <Globe className="w-5 h-5" />
        </button>
      </div>
    </main>
  );
};

export default Facilities;
