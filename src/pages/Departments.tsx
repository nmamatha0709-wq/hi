/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { HeartPulse, Brain, Baby, Microscope, Bone, Eye, RefreshCw, ShieldCheck, ArrowRight } from 'lucide-react';
import { GlassCard, PrismButton } from '../components/UI';

const departments = [
  { name: 'Cardiology', icon: <HeartPulse />, color: 'primary', desc: 'Advanced diagnostic imaging and minimally invasive treatments for complex cardiovascular conditions.' },
  { name: 'Neurology', icon: <Brain />, color: 'secondary', desc: 'Comprehensive care for brain and spinal cord health using spectral mapping and neuro-regenerative therapies.' },
  { name: 'Pediatrics', icon: <Baby />, color: 'tertiary', desc: 'Nurturing healthcare for the next generation, focused on growth, preventive wellness, and specialized pediatric surgery.' },
  { name: 'Oncology', icon: <Microscope />, color: 'primary', desc: 'Precision medicine and immunotherapy paths focused on effective, targeted cancer treatment and holistic recovery.' },
  { name: 'Orthopedics', icon: <Bone />, color: 'secondary', desc: 'Restoring mobility through expert joint replacement, sports medicine, and advanced rehabilitative care.' },
  { name: 'Ophthalmology', icon: <Eye />, color: 'tertiary', desc: 'Protecting the window to your world with laser surgery and specialized treatment for retinal health.' }
];

const Departments = () => {
  return (
    <main className="pt-32 pb-32">
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <span className="text-[12px] font-bold text-primary mb-4 block tracking-[0.2em] uppercase">CLINICAL EXCELLENCE</span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display-xl mb-6 max-w-4xl mx-auto"
        >
          Precision care tailored to every <span className="text-transparent bg-clip-text prism-gradient">spectrum</span> of health.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          Explore our specialized departments, where cutting-edge medical technology meets human-centric compassion.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <motion.div 
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard withPrismBorder className="h-full group hover:-translate-y-2 transition-transform duration-500">
                <div className={`w-16 h-16 rounded-xl bg-${dept.color}/10 flex items-center justify-center mb-8 text-${dept.color} shadow-sm shadow-${dept.color}/20`}>
                  {dept.icon}
                </div>
                <h3 className="text-2xl mb-4">{dept.name}</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">{dept.desc}</p>
                <button className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all">
                  View Department <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Innovation Hub Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="prism-border rounded-[3rem] overflow-hidden glass-card flex flex-col lg:flex-row items-stretch shadow-2xl">
          <div className="flex-1 p-12 lg:p-20">
            <span className="text-[12px] font-bold text-secondary mb-4 block tracking-widest uppercase">INNOVATION HUB</span>
            <h2 className="text-4xl md:text-5xl text-on-surface mb-8">Integrated Health Ecosystem</h2>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
              Our departments don't operate in silos. At Spectral Health, we utilize a unified data fabric to ensure your cardiologists, neurologists, and primary physicians are always in sync.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <span className="font-medium text-on-surface">Real-time cross-department data sharing</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-medium text-on-surface">Encrypted patient privacy protocols</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative min-h-[400px]">
            <img 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDYfpK2c68knQ1QwVjarXpkoE9r9nFMgVQEqdGrnTLiLDqHV-iQkA81sgOzU1HvKE57wZ52NkEZP26s9Z6nQcjFwLC72MnKTPWOIqZkvNz7OAxIXsfMUFAGJJojT7QRsL3L39EfqnKaoN7Ym2m1RJ3XLexULakVaR8ipunynGviC14EcaxTRTNES8kIskUpTyN3ldgqM0HAX6QPNJ1p16cacBD65HzKDhahHrbKwSv1DifC8z8L8hhMnrPDHhCoLuI8sdTnPxiKjU"
              alt="Innovation Hub"
            />
          </div>
        </div>
      </section>

      {/* Tertiary CTA Section */}
      <section className="bg-surface-container py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl mb-4">Can't find a specific specialty?</h2>
            <p className="text-lg text-on-surface-variant">Our concierge team is available 24/7 to help you find the right specialist for your unique health journey.</p>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <PrismButton variant="glass" className="!px-8 !py-4 whitespace-nowrap">Chat with Us</PrismButton>
            <PrismButton className="!px-8 !py-4 whitespace-nowrap">All Services</PrismButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Departments;
