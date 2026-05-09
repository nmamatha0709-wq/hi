/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PrismButton, GlassCard } from '../components/UI';
import { Radiology, HeartPulse, Brain, MonitorPlay, CheckCircle, Zap, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
        {/* Spectral Background Elements */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary spectral-blur rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-tertiary spectral-blur rounded-full"></div>
        
        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/30 text-primary text-[12px] font-bold tracking-[0.05em] mb-8"
          >
            FUTURE OF CARE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display-xl mb-8"
          >
            Clinical Precision. <br/>
            <span className="text-transparent bg-clip-text prism-gradient">Spectral Warmth.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12"
          >
            Experience healthcare reimagined through the lens of clarity and high-tech innovation. We combine advanced diagnostics with a compassionate, human-centered approach.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link to="/booking">
              <PrismButton className="px-10 py-5 text-lg">
                Book Appointment
              </PrismButton>
            </Link>
            <Link to="/specialists">
              <PrismButton variant="glass" className="px-10 py-5 text-lg prism-border">
                Find a Doctor
              </PrismButton>
            </Link>
          </motion.div>
        </div>

        {/* Hero Glass Card Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden prism-border shadow-2xl relative"
        >
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-QHvifId1KoCJimC2tSJvLqluD0u2FouYislbHvoZXQs2Q-bedPE1qHVtWnXTWIMe4JRkTXw3GTz64CS_IMUBpkCCc_rixM4sFT8z_51nuv6XqGzz1F83VfguziPkovVfmQsVh2r4C-PQyXY80Kbf4-HeKLrFCqpD0FOTut9zIXk1hXLTgSmmjKglUVhe8HnNSvKub7NC81NpL9w3LOq4fPNb40gPKHk8ti9rEWCF53BYXRTq6PbRmxpxi4V_Xy-tJx6H7hAbncM"
            alt="Spectral Health Lab"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-gap max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4 text-on-surface">Our Services</h2>
            <p className="text-lg text-on-surface-variant max-w-xl">
              Comprehensive medical care powered by the latest spectral imaging and diagnostic technologies.
            </p>
          </div>
          <Link to="/services" className="text-primary font-bold flex items-center group">
            View All Services 
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <GlassCard className="md:col-span-8 group overflow-hidden relative min-h-[320px]">
            <div className="absolute top-0 right-0 w-64 h-64 prism-gradient spectral-blur opacity-20 -mr-20 -mt-20 group-hover:opacity-30 transition-opacity"></div>
            <Zap className="text-primary w-12 h-12 mb-8" />
            <h3 className="text-3xl mb-4">Spectral Imaging</h3>
            <p className="text-on-surface-variant max-w-md">Our advanced imaging suite provides unprecedented clarity, detecting conditions earlier with lower exposure than traditional methods.</p>
          </GlassCard>

          <GlassCard className="md:col-span-4 min-h-[320px]">
             <HeartPulse className="text-tertiary w-12 h-12 mb-8" />
             <h3 className="text-3xl mb-4">Cardiology</h3>
             <p className="text-on-surface-variant">Precision heart health monitoring using real-time data visualizations.</p>
          </GlassCard>

          <GlassCard className="md:col-span-4 min-h-[320px]">
             <Brain className="text-secondary w-12 h-12 mb-8" />
             <h3 className="text-3xl mb-4">Neurology</h3>
             <p className="text-on-surface-variant">Unlocking the complexities of the brain through integrated neural mapping.</p>
          </GlassCard>

          <GlassCard className="md:col-span-8 group overflow-hidden relative min-h-[320px]">
            <div className="absolute bottom-0 right-0 w-80 h-40 prism-gradient spectral-blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <MonitorPlay className="text-primary w-12 h-12 mb-8" />
            <h3 className="text-3xl mb-4">Personalized Telehealth</h3>
            <p className="text-on-surface-variant max-w-md">Connect with specialists instantly from anywhere, supported by high-fidelity video and integrated remote diagnostics.</p>
          </GlassCard>
        </div>
      </section>

      {/* Redefining Experience Section */}
      <section className="bg-surface-container-low section-gap relative overflow-hidden px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="prism-border rounded-[3rem] p-4 bg-white/50 backdrop-blur-md">
              <div className="rounded-[2.5rem] overflow-hidden aspect-square">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFIMxSXSbEXOwTcUsrTa3TM6u9HeBq5PGD8nu6I1VSBNJ6K4xEQQwniJ232CoS2Bp8zC92Tz36ERVbeA_SYH3dyeZMDvbU4nonybDJgBZ43bh5ROauQitYCW85UZJZId4DN8onY1coj6jgBB3FZwTK6-0JgGSCkvQDtnnb6RLD0n_N8i1uzptfvehYmcC9DeYZp2M-jnwHnS5mp5_WIXhaTSTHeA7leRC7dYVYskEJU6e1HIv7jjxzkmmdVzz5g_2_Lk2Fu8L0chw"
                  alt="Doctor with tablet"
                />
              </div>
            </div>
            {/* Floater Badge */}
            <motion.div 
               initial={{ x: 20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-[280px] backdrop-blur-xl"
            >
              <div className="flex items-center space-x-2 text-primary mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-bold">Patient Choice Award</span>
              </div>
              <p className="text-sm text-on-surface-variant">Rated #1 for diagnostic accuracy and patient satisfaction in 2023.</p>
            </motion.div>
          </div>

          <div className="lg:pl-12">
            <h2 className="text-4xl md:text-5xl mb-12">Redefining the <br/><span className="text-primary">Patient Experience</span></h2>
            <ul className="space-y-10">
              {[
                { icon: <CheckCircle />, color: 'primary', title: 'Transparent Outcomes', desc: 'Access your health data through intuitive spectral visualizations that make complex information easy to understand.' },
                { icon: <Zap />, color: 'secondary', title: 'Effortless Speed', desc: 'Zero-wait clinics and instant telehealth connections mean your care starts the moment you need it.' },
                { icon: <Users />, color: 'tertiary', title: 'Integrated Teams', desc: 'Your care team is digitally connected, ensuring every specialist has the full spectral view of your health history.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className={`w-12 h-12 rounded-2xl bg-${item.color}/10 flex items-center justify-center shrink-0 mr-6 text-${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 section-gap">
        <div className="prism-gradient rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl mb-8">Ready for a clearer view of your health?</h2>
            <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">Join the future of healthcare at Spectral Health. Schedule your first spectral analysis today.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/booking">
                <PrismButton className="!bg-white !text-primary px-12 py-5 text-xl !shadow-none hover:scale-105">
                  Book Now
                </PrismButton>
              </Link>
              <PrismButton variant="outline" className="!text-white !border-white px-12 py-5 text-xl hover:bg-white/10">
                Talk to a Care Coordinator
              </PrismButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
