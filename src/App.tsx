/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar, Footer } from './components/Navigation';
import Home from './pages/Home';
import Specialists from './pages/Specialists';
import SpecialistProfile from './pages/SpecialistProfile';
import Departments from './pages/Departments';
import Booking from './pages/Booking';
import Facilities from './pages/Facilities';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex-grow flex flex-col"
      >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/specialists" element={<Specialists />} />
            <Route path="/specialists/:id" element={<SpecialistProfile />} />
            <Route path="/services" element={<Departments />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}
