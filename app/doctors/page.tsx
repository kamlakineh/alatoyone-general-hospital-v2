"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Search } from 'lucide-react';

const doctors = [
  { name: "Dr. Ricad Santoso", role: "Internal Medicine", image: "/image/imaged1.jpg" },
  { name: "Dr. Indra Miracle", role: "Internal Medicine", image: "/image/imaged2.jpg" },
  { name: "Dr. Wendy Yonas", role: "Internal Medicine", image: "/image/imaged3.jpg" },
  { name: "Dr. Daniel Bekele", role: "Emergency Medicine", image: "/image/imaged4.jpg" },
  { name: "Dr. Hana Tesfaye", role: "Radiology", image: "/image/imaged5.jpg" },
  { name: "Dr. Samuel Alemu", role: "Internal Medicine", image: "/image/imaged6.jpg" },
];

const DoctorsPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-900 py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold mb-4">Our Doctors</h1>
          <p className="text-blue-100 max-w-2xl">
            Meet our team of highly qualified specialists dedicated to providing the best healthcare services.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search doctors by name or specialty..." 
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all text-sm"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {['All', 'Internal Medicine', 'Emergency', 'Radiology', 'Surgery'].map((cat) => (
                <button key={cat} className="px-5 py-2 rounded-full bg-gray-100 text-blue-900 text-xs font-bold whitespace-nowrap hover:bg-blue-600 hover:text-white transition-all">
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-900 hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{doc.name}</h4>
                  <p className="text-sm text-blue-600 font-medium mb-4">{doc.role}</p>
                  <button className="w-full py-3 rounded-xl border-2 border-blue-50 text-blue-900 font-bold text-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;
