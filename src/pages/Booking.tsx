/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PrismButton, GlassCard } from '../components/UI';
import { Stethoscope, Brain, Microscope, Sparkles, CheckCircle, ChevronRight, ArrowLeft, Edit3, Lightbulb, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const specialties = [
  { id: 'cardiology', name: 'Cardiology', icon: <Stethoscope />, desc: 'Heart health, rhythm monitoring, and vascular care.' },
  { id: 'neurology', name: 'Neurology', icon: <Brain />, desc: 'Advanced brain and central nervous system health.' },
  { id: 'oncology', name: 'Oncology', icon: <Microscope />, desc: 'Comprehensive cancer treatment and spectral imaging.' },
  { id: 'dermatology', name: 'Dermatology', icon: <Sparkles />, desc: 'Precision skin care and cellular rejuvenation.' }
];

const physicians = [
  { name: 'Dr. Sarah Chen, MD', title: 'Lead Neurologist • 12 years exp.', next: 'Today, 2:30 PM', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW5hj3_14KCCsdst1SuVDYzeN52OxN9nTUQhXf3tfxUCnVVxF9adva8prvFgsZ6GDSqjsdJRA1Zmj8UgCtVDTpmmPyA6PWszaS0qKuoR6r9vuaP8gwdWpPeKd25T0k7RxgyeIxndfbzBdjcbwG153VGyiVGIVJBM2ad-4eEz_DBxRpfYIeLo4NjQNW4f-2o4meVcl-tnG7u3VfHeyEYWoEcPv1q0Bb7mhLHtMxsMGQyfPMIOZLjXwv2pg89KQ9Famr5LKttHHcaCE' },
  { name: 'Dr. Marcus Thorne, PhD', title: 'Cognitive Specialist • Clinical Director', next: 'Tomorrow, 9:00 AM', selected: true, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVe9xs2YfxdrRprvcbKBVdwQvRoEtNmHb-yj12AKFEBBS0jNYP9OKKhrSrx_h5Cg0PdsNAw1XZLUrwnYokSxysq_2BAUSQE5bT9ktS4VRepQI986AAoDG4wrY576p7_mvXF0Yy3SZjdKpXhMuCNGy6zRuEa1qRSboClAS2zAudZXg4kazqk6-B_3fSyZHxEF8KnmPICF4qaGT3vDzC6WwIQEJBzLIN0CJJImFD5KDZB2oq5bDvMXuC3FXISdzUcqp37h3WgfE_hhk' }
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    specialty: 'neurology',
    physician: 'Dr. Marcus Thorne, PhD',
    patientName: '',
    dob: '',
    insurance: ''
  });

  const nextStep = () => setStep(s => Math.min(3, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  return (
    <main className="pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl mb-4">Book your visit</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl">Precision care starts with a single step. Secure your time with our world-class clinical team.</p>
        </header>

        {/* Multi-step Progress Bar */}
        <div className="w-full h-1.5 bg-surface-container rounded-full mb-20 overflow-hidden">
          <motion.div 
            initial={{ width: "33.33%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            className="h-full prism-gradient transition-all duration-500"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form Section */}
          <div className="lg:col-span-8 space-y-12">
            
            {step === 1 && (
              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                  <h2 className="text-2xl md:text-3xl">Choose a Specialty</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specialties.map(spec => (
                    <button 
                      key={spec.id}
                      onClick={() => setFormData({...formData, specialty: spec.id})}
                      className={`group relative glass-card p-6 rounded-2xl text-left transition-all hover:ring-2 hover:ring-primary/30 ${formData.specialty === spec.id ? 'border-2 border-primary ring-4 ring-primary/5' : ''}`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all ${formData.specialty === spec.id ? 'prism-gradient text-white' : 'bg-primary/10 text-primary'}`}>
                        {spec.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-1">{spec.name}</h3>
                      <p className="text-sm text-on-surface-variant">{spec.desc}</p>
                      {formData.specialty === spec.id && <CheckCircle className="absolute top-4 right-4 w-5 h-5 text-primary fill-current" />}
                    </button>
                  ))}
                </div>
              </motion.section>
            )}

            {step === 2 && (
              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-sm">2</div>
                  <h2 className="text-2xl md:text-3xl">Select Physician</h2>
                </div>
                <div className="space-y-4">
                  {physicians.map((phys, i) => (
                    <div 
                      key={i}
                      onClick={() => setFormData({...formData, physician: phys.name})}
                      className={`glass-card p-5 rounded-2xl flex items-center gap-5 cursor-pointer transition-all ${formData.physician === phys.name ? 'border-2 border-primary/20 bg-primary/5' : 'hover:bg-white'}`}
                    >
                      <img className={`w-20 h-20 rounded-full object-cover ${formData.physician !== phys.name ? 'grayscale hover:grayscale-0' : ''}`} src={phys.image} alt={phys.name} />
                      <div className="flex-grow">
                        <h4 className="font-bold text-lg">{phys.name}</h4>
                        <p className="text-sm text-on-surface-variant font-medium">{phys.title}</p>
                        <div className="flex gap-2 mt-2">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${formData.physician === phys.name ? 'bg-primary text-white' : 'bg-primary/5 text-primary'}`}>
                            {formData.physician === phys.name ? 'Selected' : `Next: ${phys.next}`}
                          </span>
                        </div>
                      </div>
                      {formData.physician === phys.name ? <CheckCircle className="w-6 h-6 text-primary fill-current" /> : <ChevronRight className="w-6 h-6 text-outline" />}
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {step === 3 && (
              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-sm">3</div>
                  <h2 className="text-2xl md:text-3xl">Patient Information</h2>
                </div>
                <GlassCard className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Full Legal Name</label>
                      <input 
                        value={formData.patientName}
                        onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                        className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20" 
                        placeholder="Enter your name" 
                        type="text" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Date of Birth</label>
                      <input 
                        value={formData.dob}
                        onChange={(e) => setFormData({...formData, dob: e.target.value})}
                        className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20" 
                        type="date" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Insurance Provider</label>
                    <select 
                      value={formData.insurance}
                      onChange={(e) => setFormData({...formData, insurance: e.target.value})}
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    >
                      <option value="">Select your insurance</option>
                      <option value="Spectral Shield Premium">Spectral Shield Premium</option>
                      <option>Global Health Partners</option>
                      <option>Aetna Precision</option>
                      <option>Self-Pay</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <p className="text-xs text-on-surface-variant">Data encrypted under HIPAA compliance.</p>
                  </div>
                </GlassCard>
              </motion.section>
            )}

            {/* Navigation Actions */}
            <div className="flex justify-between items-center pt-8">
              <button 
                onClick={prevStep}
                disabled={step === 1}
                className={`text-primary font-bold flex items-center gap-2 px-6 py-3 rounded-full transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'hover:bg-primary/5'}`}
              >
                <ArrowLeft className="w-5 h-5" /> Previous
              </button>
              <PrismButton 
                onClick={step === 3 ? () => alert('Booking Confirmed!') : nextStep}
                className="!px-10"
              >
                {step === 3 ? 'Confirm Booking' : 'Continue'} <ChevronRight className="ml-1 w-5 h-5" />
              </PrismButton>
            </div>
          </div>

          {/* Sidebar Summary */}
          <aside className="lg:col-span-4 self-start sticky top-32 space-y-6">
            <GlassCard withPrismBorder className="!p-6">
              <h3 className="font-bold text-lg mb-6">Summary</h3>
              <div className="space-y-6">
                {[
                  { l: 'Specialty', v: specialties.find(s => s.id === formData.specialty)?.name || formData.specialty, s: 1 },
                  { l: 'Provider', v: formData.physician, s: 2 },
                  { l: 'Name', v: formData.patientName || 'Not entered', s: 3 }
                ].map(item => (
                  <div key={item.l} className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">{item.l}</p>
                      <p className="font-bold">{item.v}</p>
                    </div>
                    <Edit3 
                      onClick={() => setStep(item.s)}
                      className="w-4 h-4 text-primary cursor-pointer hover:scale-110 transition-transform" 
                    />
                  </div>
                ))}
              </div>
              <div className="mt-10 p-5 bg-surface-container-highest rounded-2xl space-y-3">
                <div className="flex justify-between text-sm"><span className="text-on-surface-variant">Fee</span><span className="font-bold">$0.00</span></div>
                <div className="flex justify-between text-sm"><span className="text-on-surface-variant">Coverage</span><span className="text-primary font-bold">100% Verified</span></div>
              </div>
            </GlassCard>
            <div className="p-6 bg-secondary/5 border border-secondary/10 rounded-2xl flex gap-4">
              <Lightbulb className="w-5 h-5 text-secondary shrink-0" />
              <div><h4 className="font-bold text-secondary text-sm">Patient Tip</h4><p className="text-xs text-on-surface-variant mt-1">Bringing family history logs will help provide a better spectral analysis.</p></div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Booking;
