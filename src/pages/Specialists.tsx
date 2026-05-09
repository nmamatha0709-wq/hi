/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, MapPin, ChevronDown, Star, CheckCircle, ArrowRight, X, Sparkles, Send } from 'lucide-react';
import { GlassCard, PrismButton } from '../components/UI';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const doctors = [
  {
    id: 'julian-vance',
    name: 'Dr. Julian Vance',
    specialty: 'Lead Cardiologist • Ph.D.',
    bio: 'Specializing in minimally invasive cardiac surgery and heart-rhythm management with over 15 years of precision experience.',
    rating: '4.9',
    badge: 'Top Rated',
    location: 'San Francisco, CA',
    insurances: 'Accepts 12 Insurances',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJMWwp1uUNy7m9Mcs_0UTNK39sqZr95mKtSlBs4pXvj5J6FdxzCkZVS8yMWY2rofEh0XbXELuUr5_iiFyRejEOXeCG1NLpdqq4IT2BuyagrlJYlqiClJoWriZqLVmkda5dLxQtbSvDTNIWfeAYX0JNYHCWVatuXRXdFZlzThS90EoKtOzbYLdUx1ZVVZ82Yb5FsaIIKcaqdUB_fzU7igcFklK2U41KHts93hpjWAzbYIfeOwBXp-c9P4SNuhSpQM3R0YYJJ1uUOKo'
  },
  {
    id: 'elena-rodriguez',
    name: 'Dr. Elena Rodriguez',
    specialty: 'Senior Neurologist',
    bio: 'Expert in neurological diagnostics and migraine therapy. Pioneer in spectral neural mapping and cognitive rehabilitation.',
    rating: '4.8',
    badge: 'Telehealth',
    location: 'Oakland, CA',
    insurances: 'Spectral Premium',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtnaJrfssPGOmzCQ0WC_vzZrV768h1N7HcwytECHYmoLixKXJhhXhvQJliBIXR-kJVntw3GFDf137pb38DosPVi-hOwNBZT97tQ3hQqRiMtSDnlDvAgg9XWN_0Aox1pvzZWHXUvbmK8xycOX6dtMVAj5IAqNyEF-8UgbHpV2-wRaPVz1jp5CsNbRnK__V5L4Dhm3LVTYZ2CtvnwznTqaBaSBqBXWyDuzF32HnvAXuN5M6UbB9M4ODxi3lGE3Gdzgdv3PJO-vibj3Q'
  },
  {
    id: 'samuel-chen',
    name: 'Dr. Samuel Chen',
    specialty: 'Pediatric Specialist',
    bio: 'Dedicated to holistic pediatric care and childhood development. Known for a gentle approach and spectral growth tracking.',
    rating: '5.0',
    badge: 'New Patient',
    location: 'Palo Alto, CA',
    insurances: 'Accepts 18 Insurances',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABOyW9yqpuZVCNvrEuOFX_UE-R5YgG52nAoeAyNuVwmLujnPVzSLt6G_Wr3mm_ZuVUF-QzPNXkn5qZGUOH0XVtYvg_an5siVsj2JThQfIqrL3ZiAAH5GFtCTzvYojONIz4RNANG42-dsOKIE0K0A58MW_kBeFclaPP-lDJ0865h52plgN9ckinZfLvwycBZ_MJD_jchqTdxrngGIV7Z-B1aDLrpV0kvefthpP_J74JfCSWcC8USA4PN71pX8piNKvA2OcA1aKa2j0'
  }
];

const Specialists = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: "Hello! I'm your Spectral AI Assistant. Tell me about your symptoms or what kind of care you're looking for, and I'll match you with the perfect specialist." }
  ]);

  const handleSend = () => {
    if (!aiMessage.trim()) return;
    setChatHistory([...chatHistory, { role: 'user', text: aiMessage }]);
    setAiMessage('');
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: 'ai', text: "Based on your symptoms, I recommend booking a consultation with Dr. Julian Vance (Cardiology) or Dr. Elena Rodriguez (Neurology) for a comprehensive spectral analysis." }]);
    }, 1000);
  };

  return (
    <main className="pt-32 pb-32">
      <AnimatePresence>
        {isAiOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAiOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-card rounded-[2.5rem] shadow-2xl overflow-hidden prism-border flex flex-col h-[600px]"
            >
              <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center bg-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full prism-gradient flex items-center justify-center text-white">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Spectral AI Assistant</h3>
                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Always Online</p>
                  </div>
                </div>
                <button onClick={() => setIsAiOpen(false)} className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 space-y-6">
                {chatHistory.map((chat, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={i} 
                    className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-5 rounded-3xl text-sm font-medium leading-relaxed ${chat.role === 'user' ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface'}`}>
                      {chat.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 bg-white/50 border-t border-outline-variant/10">
                <div className="flex gap-4">
                  <input 
                    value={aiMessage}
                    onChange={(e) => setAiMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-grow bg-surface-container-low border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-sm"
                    placeholder="Describe your symptoms..." 
                  />
                  <PrismButton onClick={handleSend} className="!p-4 !rounded-2xl">
                    <Send className="w-5 h-5" />
                  </PrismButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display-xl mb-8"
        >
          Precision Care, <span className="text-primary">Closer Than Ever.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto text-on-surface-variant text-lg mb-12"
        >
          Search our network of over 2,500 board-certified specialists using Spectral’s advanced matching algorithm to find the right care for your journey.
        </motion.p>

        {/* Search Interface */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto prism-border bg-white/70 backdrop-blur-2xl rounded-2xl p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 text-left">
              <label className="text-[12px] font-bold text-on-surface-variant block mb-2 uppercase tracking-wider">Specialty or Name</label>
              <input className="w-full bg-surface-container-low border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="e.g. Cardiology" type="text" />
            </div>
            <div className="md:col-span-3 text-left">
              <label className="text-[12px] font-bold text-on-surface-variant block mb-2 uppercase tracking-wider">Location</label>
              <input className="w-full bg-surface-container-low border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Zip or City" type="text" />
            </div>
            <div className="md:col-span-3 text-left">
              <label className="text-[12px] font-bold text-on-surface-variant block mb-2 uppercase tracking-wider">Insurance</label>
              <div className="relative">
                <select className="w-full bg-surface-container-low border-transparent rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 outline-none appearance-none transition-all">
                  <option>All Providers</option>
                  <option>Blue Shield</option>
                  <option>Aetna Precision</option>
                  <option>Spectral Premium</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
              </div>
            </div>
            <div className="md:col-span-1 flex items-end">
              <PrismButton className="!w-full !aspect-square !p-0">
                <Search className="w-6 h-6" />
              </PrismButton>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 justify-start">
            <span className="text-[12px] font-bold text-on-surface-variant py-2 tracking-widest uppercase">Quick Filters:</span>
            {['Telehealth Available', 'Highly Rated', 'Accepting New Patients'].map(filter => (
              <button key={filter} className="bg-surface-container-low hover:bg-white text-on-surface-variant px-4 py-1.5 rounded-full border border-outline-variant/30 text-sm transition-all">
                {filter}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Results Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl text-on-surface flex items-center">Available Specialists <span className="text-outline text-lg font-normal ml-3">(128 matches)</span></h2>
          <div className="flex items-center space-x-2 text-on-surface-variant">
            <span className="text-sm">Sort by:</span>
            <button className="flex items-center font-bold text-sm">Best Match <ChevronDown className="w-4 h-4 ml-1" /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <motion.div 
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard withPrismBorder className="h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start justify-between mb-6">
                  <img className="w-24 h-24 rounded-2xl object-cover border border-outline-variant/20 shadow-md" src={doc.image} alt={doc.name} />
                  <div className="text-right">
                    <div className="flex items-center justify-end text-amber-500 mb-1">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="font-bold text-sm">{doc.rating}</span>
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {doc.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl mb-1">{doc.name}</h3>
                <p className="text-primary font-bold text-sm mb-4">{doc.specialty}</p>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow">{doc.bio}</p>
                <div className="border-t border-outline-variant/10 pt-6 flex items-center justify-between">
                  <div className="text-xs text-outline space-y-1">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" /> {doc.location}
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" /> {doc.insurances}
                    </div>
                  </div>
                  <Link to={`/specialists/${doc.id}`}>
                    <PrismButton variant="secondary" className="!px-4 !py-2 !text-sm">
                      View Profile
                    </PrismButton>
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}

          {/* AI Matching Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 prism-border bg-white/70 backdrop-blur-2xl rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8"
          >
            <div className="z-10 flex-1">
              <h3 className="text-3xl mb-4">Can't find the right specialist?</h3>
              <p className="text-on-surface-variant mb-6">Our Spectral AI Assistant can help you match with a provider based on your specific symptoms and medical history.</p>
              <PrismButton onClick={() => setIsAiOpen(true)} className="group">
                Start AI Matching
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </PrismButton>
            </div>
            <div className="relative w-full md:w-1/2 h-64 rounded-xl border border-outline-variant/30 overflow-hidden">
               <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfE7El473wDMRj13VuIUwALzX7AoaQ_Q6bCZT9jvIxnzGFNn1yWJVAT4vjxvPRsMlhO9S2f-stB5wPu-1TB93kTu5uJrgCUtd1Iz9j40SrByMqU00KT34aLELIm8g61LynNVoSeblp2yojAroEwZ3R_Es7XCFG6DRDt8DT9oWhmW4D6O09PE4-L8L1u3gakI6VxZRaFXdg5wgJc4CMSjTKGzEPwXLQ3evJO5EDcu3ybknML_jyuyrBP3Or5g29rNWpF1LXbw7nuVQ" alt="Map View" />
               <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] flex items-center justify-center">
                 <span className="text-[12px] font-bold bg-white px-4 py-2 rounded-full shadow-lg text-primary tracking-widest">MAP VIEW ACTIVE</span>
               </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <PrismButton variant="outline" className="!px-12">
            Load More Specialists
          </PrismButton>
        </div>
      </section>
    </main>
  );
};

export default Specialists;
