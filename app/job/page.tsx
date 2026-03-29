"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import JobApplicationForm from '../../components/JobApplicationForm';

const jobs = [
  {
    title: "Registered Nurse (Emergency)",
    department: "Emergency Department",
    location: "Hawassa, Ethiopia",
    type: "Full-Time",
    posted: "2 days ago"
  },
  {
    title: "Internal Medicine Specialist",
    department: "Internal Medicine",
    location: "Hawassa, Ethiopia",
    type: "Full-Time",
    posted: "1 week ago"
  },
  {
    title: "Radiology Technician",
    department: "Diagnostics",
    location: "Hawassa, Ethiopia",
    type: "Full-Time",
    posted: "3 days ago"
  },
  {
    title: "Medical Receptionist",
    department: "Administration",
    location: "Hawassa, Ethiopia",
    type: "Full-Time",
    posted: "5 days ago"
  }
];

const JobPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleApply = (title: string) => {
    setSelectedJob(title);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-900 py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold mb-4">Careers at Alatyon</h1>
          <p className="text-blue-100 max-w-2xl">
            Join our team of dedicated healthcare professionals and make a difference in the lives of our patients.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">WHY JOIN US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                Build Your Career in a Leading Healthcare Institution
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                At Alatyon General Hospital, we provide a supportive and innovative environment where you can grow professionally while delivering exceptional care.
              </p>
              <ul className="space-y-4">
                {[
                  "Competitive salary and benefits",
                  "Modern medical technology and infrastructure",
                  "Opportunities for continuous professional development",
                  "A collaborative and compassionate work culture"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-blue-900 font-bold">
                    <CheckCircle2 className="text-blue-600 w-5 h-5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/image/imageh8.jpg" alt="Team working" className="w-full h-auto" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Open Positions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Browse our current job openings and find the perfect role for your skills and experience.
            </p>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {job.department}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs text-gray-400 font-medium">Posted {job.posted}</span>
                  <button 
                    onClick={() => handleApply(job.title)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 group/btn"
                  >
                    Apply Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <JobApplicationForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={selectedJob} 
      />
    </div>
  );
};

export default JobPage;
