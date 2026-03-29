"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Send, User, Briefcase, CheckCircle2, Mail, Phone, MapPin, Calendar, Building2, Clock } from 'lucide-react';

interface JobApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ isOpen, onClose, jobTitle }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[105vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {isSubmitted ? (
            <div className="p-12 text-center flex flex-col items-center justify-center h-full">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Application Sent!</h2>
              <p className="text-gray-500 mb-8 max-w-md">
                Thank you for applying for the <span className="font-bold text-blue-600">{jobTitle}</span> position. Our HR team will review your application and get back to you soon.
              </p>
              <button
                onClick={onClose}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              {/* Header Image */}
              <div className="h-32 w-full relative">
                <img 
                  src="/image/imageh4.jpg" 
                  alt="Hospital Header" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/40" />
              </div>

              {/* Header */}
              <div className="p-8 border-b border-gray-100 flex items-center gap-4 bg-white sticky top-0 z-20 -mt-12 mx-8 rounded-2xl shadow-xl">
                <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-600/20">
                  <Building2 className="text-white w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-blue-900 tracking-tight">Alatyon Job-Application</h2>
                  <p className="text-sm text-gray-500 font-medium">Join our world-class medical team</p>
                </div>
              </div>

              {/* Form Body */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white">
                <form id="job-app-form" onSubmit={handleSubmit} className="space-y-12">
                  
                  {/* Personal Information */}
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                        <User className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">Personal Information</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">First Name *</label>
                        <input required type="text" placeholder="E.g. John" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Last Name *</label>
                        <input required type="text" placeholder="E.g. Smith" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Middle Name *</label>
                        <input required type="text" placeholder="E.g. Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="email" placeholder="E.g. john@alatyon.com" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Phone *</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="tel" placeholder="E.g. 0911037882" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Country *</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="text" placeholder="E.g. Ethiopia" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Region *</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="text" placeholder="E.g. Hawassa" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Street Address *</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input required type="text" placeholder="E.g. Addis Ababa" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Background Section */}
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">Background</h3>
                    </div>

                    <div className="space-y-8">
                      {/* Education */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Education Title *</label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input required type="text" placeholder="E.g. BSc in Nursing" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Graduation Date *</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            <input required type="date" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Work Experience */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Company Name *</label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input required type="text" placeholder="E.g. Alatyon" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Years of Experience *</label>
                          <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input required type="text" placeholder="E.g. 3 years / 11 Month" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                          </div>
                        </div>
                      </div>

                      {/* Resume Upload */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Resume Upload *</label>
                        <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-blue-600 hover:bg-blue-50 transition-all cursor-pointer group">
                          <Upload className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                          <p className="text-sm text-gray-500 font-medium">
                            Drag and Drop (or) <span className="text-blue-600 font-bold">Choose Files</span>
                          </p>
                          <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold tracking-widest">Max file size: 10MB (PDF, DOCX)</p>
                        </div>
                      </div>

                      {/* Signature */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-blue-900 uppercase tracking-wider">Signature *</label>
                        <textarea 
                          required
                          placeholder="Type your full name as signature here" 
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 outline-none transition-all text-sm resize-none"
                        ></textarea>
                      </div>

                      {/* Consent */}
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                        <input required type="checkbox" id="consent" className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600" />
                        <label htmlFor="consent" className="text-xs text-blue-900 font-medium leading-relaxed">
                          Consent * <br />
                          Yes, I agree with the <span className="text-blue-600 font-bold cursor-pointer underline">privacy policy</span> and <span className="text-blue-600 font-bold cursor-pointer underline">terms and conditions</span>.
                        </label>
                      </div>
                    </div>
                  </section>
                </form>
              </div>

              {/* Footer */}
              <div className="p-8 border-t border-gray-100 bg-gray-50/50">
                <button
                  type="submit"
                  form="job-app-form"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 transition-all active:scale-95"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default JobApplicationForm;
