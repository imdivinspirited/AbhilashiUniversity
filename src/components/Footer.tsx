
import React from 'react';
import { MapPin, Mail, Phone, ExternalLink, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="university-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Abhilashi University</h3>
            <p className="text-gray-400 mb-4">
              A premier educational institution committed to excellence in teaching, research, and innovation.
            </p>
            <div className="flex items-center mb-2">
              <MapPin size={16} className="text-university-gold mr-2" />
              <span className="text-gray-300 text-sm">
                Chail Chowk, Mandi, HP - 175028
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={16} className="text-university-gold mr-2" />
              <a href="mailto:info@abhilashiuniversity.ac.in" className="text-gray-300 text-sm hover:text-white">
                info@abhilashiuniversity.ac.in
              </a>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="text-university-gold mr-2" />
              <a href="tel:+919418453239" className="text-gray-300 text-sm hover:text-white">
                +91-9418453239
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Academics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Academic Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> E-Library
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Results
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Fee Payment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Downloads
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Career Portal
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> RTI
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Mandatory Disclosure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-1" /> Anti-Ragging
                </a>
              </li>
            </ul>
          </div>
        </div>
        
            {/* Top bar */}
      <div className="bg-university-blue text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-center md:text-right">
            Abhilashi University, a B+ NAAC accredited institution | Admissions Open 2025–26
          </div>
        </div>
      </div>


        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Abhilashi University. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <div className="text-gray-400 text-sm mr-4">
              <span>Visitors: </span>
              <span className="bg-gray-800 px-2 py-1 rounded">124,578</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
