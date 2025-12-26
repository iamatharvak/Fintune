import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { COMPANY_INFO } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will reach out to you shortly.");
    setFormData({ name: "", email: "", phone: "", query: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden shadow-2xl">
          {/* =======================
              INFO SIDE
          ======================= */}
          <div className="bg-primary p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-slate-950">
                Let’s discuss your requirements
              </h2>

              <p className="text-slate-700 mb-12 leading-relaxed">
                Whether you represent an asset manager, institution, or
                operations team, Fintune helps simplify reporting, compliance,
                and investor communication through automation.
              </p>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-950 uppercase tracking-wide">
                      Email
                    </p>
                    <p className="text-lg font-medium text-slate-950">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                {/* <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-950 uppercase tracking-wide">
                      Phone
                    </p>
                    <p className="text-lg font-medium text-slate-950">
                      {COMPANY_INFO.phone}
                    </p>
                  </div>
                </div> */}

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-950 uppercase tracking-wide">
                      Office
                    </p>
                    <p className="text-base font-medium text-slate-950 leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/15">
              <p className="text-sm text-gray-600">
                Operating hours: Monday–Friday, 9:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>

          {/* =======================
              FORM SIDE
          ======================= */}
          <div className="bg-white p-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-slate-50"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-slate-50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-slate-50"
                    placeholder="+91 90000 00000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-800 mb-2">
                  How can we help?
                </label>
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-slate-50 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-secondary text-gray-500 font-semibold rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Send message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
