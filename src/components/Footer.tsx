import React from "react";
import {
  BarChart2,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { COMPANY_INFO, Footer_NAV_LINKS } from "../constants";
import logo from "../assets/Fintune Logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <img src={logo} alt="logo" className="w-20 h-6" />
              {/* <span className="text-2xl font-bold tracking-tight">{COMPANY_INFO.name}</span> */}
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {COMPANY_INFO.linkedin}
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://in.linkedin.com/company/fintuneweb"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="https://www.facebook.com/fintuneweb/"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/fintuneweb/?hl=en"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {Footer_NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-accent transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#post-hero-services"
                  className="text-sm hover:text-accent transition-colors block"
                >
                  Investment Content Automation
                </a>
              </li>
              <li>
                <a
                  href="#post-hero-services"
                  className="text-sm hover:text-accent transition-colors block"
                >
                  Factsheet & Reporting Automation
                </a>
              </li>
              <li>
                <a
                  href="#post-hero-services"
                  className="text-sm hover:text-accent transition-colors block"
                >
                  Data Analytics & Dashboard Automation
                </a>
              </li>
              <li>
                <a
                  href="#post-hero-services"
                  className="text-sm hover:text-accent transition-colors block"
                >
                  Regulatory-Aligned Automation & Documentation
                </a>
              </li>
              <li>
                <a
                  href="#post-hero-services"
                  className="text-sm hover:text-accent transition-colors block"
                >
                  Process Design & Workflow Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Reach Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium">Email:</span>
                <span className="cursor-pointer">{COMPANY_INFO.email}</span>
              </li>
              {/* <li className="flex items-start gap-3">
                <span className="text-accent font-medium">Phone:</span>
                {COMPANY_INFO.phone}
              </li> */}
              <li className="flex items-start gap-3">
                <span className="text-accent font-medium ">Address:</span>
                <span className="cursor-pointer">{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
