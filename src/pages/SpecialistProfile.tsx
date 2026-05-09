/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Star, MapPin, Calendar, ShieldCheck, Mail, Phone, Award, Quote } from 'lucide-react';
import { PrismButton, GlassCard } from '../components/UI';

// Mock data for the profile (in a real app, this would come from a service)
const doctorProfiles: Record<string, any> = {
  'julian-vance': {
    name: 'Dr. Julian Vance',
    title: 'Lead Cardiologist • Ph.D. Cardiovascular Science',
    rating: '4.9',
    reviews: '1,240',
    location: 'Spectral North Campus, San Francisco',
    bio: 'Dr. Vance is a world-renowned cardiologist specializing in minimally invasive cardiac surgery and heart-rhythm management. With over 15 years of precision experience, he has pioneered several spectral imaging protocols for early heart disease detection.',
    education: [
      'Johns Hopkins University - M.D.',
      'Stanford University - Residency in Cardiology',
      'Harvard Medical School - Fellowship in Advanced Cardiac Imaging'
    ],
    expertise: ['Minimally Invasive Surgery', 'Atrial Fibrillation', 'Spectral Hemodynamics', 'Preventive Cardiology'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJMWwp1uUNy7m9Mcs_0UTNK39sqZr95mKtSlBs4pXvj5J6FdxzCkZVS8yMWY2rofEh0XbXELuUr5_iiFyRejEOXeCG1NLpdqq4IT2BuyagrlJYlqiClJoWriZqLVmkda5dLxQtbSvDTNIWfeAYX0JNYHCWVatuXRXdFZlzThS90EoKtOzbYLdUx1ZVVZ82Yb5FsaIIKcaqdUB_fzU7igcFklK2U41KHts93hpjWAzbYIfeOwBXp-c9P4SNuhSpQM3R0YYJJ1uUOKo'
  }
};

const SpecialistProfile = () => {
  const { id } = useParams();
  const doctor = doctorProfiles[id || 'julian-vance'] || doctorProfiles['julian-vance'];

  return (
    <main className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/specialists" className="inline-flex items-center text-primary font-bold mb-12 hover:gap-2 transition-all group">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Search
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image & Quick Stats */}
          <div className="lg:col-span-4 space-y-8">
            <div className="prism-border rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img className="w-full h-full object-cover" src={doctor.image} alt={doctor.name} />
            </div>
            
            <GlassCard className="p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-outline-variant/10 pb-6">
                <div>
                  <div className="flex items-center text-amber-500 mb-1">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span className="font-bold text-lg">{doctor.rating}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant font-medium">{doctor.reviews} Patient Reviews</p>
                </div>
                <Award className="w-8 h-8 text-primary opacity-50" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold">Office Location</p>
                    <p className="text-sm text-on-surface-variant">{doctor.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold">Next Availability</p>
                    <p className="text-sm text-primary font-bold">Tomorrow, 10:30 AM</p>
                  </div>
                </div>
              </div>

              <PrismButton className="w-full !py-4">
                Book Consultation
              </PrismButton>

              <div className="flex justify-center gap-4 pt-4">
                <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-outline hover:text-primary transition-colors"><Mail className="w-5 h-5" /></button>
                <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-outline hover:text-primary transition-colors"><Phone className="w-5 h-5" /></button>
                <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-outline hover:text-primary transition-colors"><ShieldCheck className="w-5 h-5" /></button>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Bio & Details */}
          <div className="lg:col-span-8 flex flex-col pt-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-4 block">BOARD CERTIFIED SPECIALIST</span>
              <h1 className="text-5xl md:text-6xl font-black mb-4">{doctor.name}</h1>
              <p className="text-xl text-primary font-bold">{doctor.title}</p>
            </motion.div>

            <div className="space-y-12">
              <section>
                <h3 className="text-2xl mb-6 flex items-center gap-3">
                  <Quote className="w-6 h-6 text-primary fill-current opacity-20" /> Professional Bio
                </h3>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                  {doctor.bio}
                </p>
                <div className="flex flex-wrap gap-3">
                  {doctor.expertise.map((exp: string) => (
                    <span key={exp} className="bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-bold border border-primary/10">
                      {exp}
                    </span>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section>
                  <h3 className="text-2xl mb-6 font-bold">Education</h3>
                  <ul className="space-y-4">
                    {doctor.education.map((edu: string, i: number) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2.5"></div>
                        <span className="text-on-surface-variant font-medium">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-surface-container-low p-8 rounded-3xl">
                  <h3 className="text-2xl mb-6 font-bold">Accepted Insurances</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['Blue Shield', 'Aetna', 'Spectral Pro', 'Global Health', 'Cigna Premium', 'Medicare'].map(ins => (
                      <div key={ins} className="flex items-center gap-2 text-sm font-bold text-on-surface-variant">
                        <ShieldCheck className="w-4 h-4 text-primary" /> {ins}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-outline mt-8">* Please verify with your provider for specific plan coverage.</p>
                </section>
              </div>

              {/* Patient Reviews Preview */}
              <section className="pt-12 border-t border-outline-variant/10">
                <h3 className="text-2xl mb-8 font-bold">Patient Experiences</h3>
                <div className="space-y-8">
                  {[
                    { author: 'Elena F.', date: 'Oct 12, 2024', comment: 'Dr. Vance is incredible. His use of spectral analysis helped catch my arrhythmia months before my local clinic could. Truly precise care.' },
                    { author: 'Marcus D.', date: 'Sep 28, 2024', comment: 'Communication was clear and the spectral heart map made it so easy to understand exactly what was going on. Highly recommended.' }
                  ].map((rev, i) => (
                    <div key={i} className="glass-card p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-amber-500">
                          {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span className="text-xs text-outline font-bold uppercase tracking-widest">{rev.date}</span>
                      </div>
                      <p className="text-on-surface-variant italic mb-4">"{rev.comment}"</p>
                      <p className="text-sm font-bold text-on-surface">— {rev.author}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpecialistProfile;
