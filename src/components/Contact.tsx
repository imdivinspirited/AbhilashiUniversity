
import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="university-container">
        <h2 className="section-heading">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
              <h3 className="text-xl font-semibold mb-6 text-university-blue-dark">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={20} className="text-university-blue shrink-0 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-600">
                      Abhilashi University, Chail Chowk<br />
                      District Mandi, Himachal Pradesh<br />
                      PIN: 175028
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="text-university-blue shrink-0 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold mb-1">Helpline</h4>
                    <p className="text-gray-600">
                      <a href="tel:+919418453239" className="hover:text-university-blue">+91-9418453239</a><br />
                      <a href="tel:+911907250407" className="hover:text-university-blue">+91-1907-250407</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="text-university-blue shrink-0 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@abhilashiuniversity.ac.in" className="hover:text-university-blue">
                        info@abhilashiuniversity.ac.in
                      </a><br />
                      <a href="mailto:registrar@abhilashiuniversity.ac.in" className="hover:text-university-blue">
                        registrar@abhilashiuniversity.ac.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-university-blue text-white p-2 rounded-full hover:bg-university-blue-dark transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-university-blue text-white p-2 rounded-full hover:bg-university-blue-dark transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-university-blue text-white p-2 rounded-full hover:bg-university-blue-dark transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="h-full rounded-lg overflow-hidden shadow-sm">
              {/* Replace with actual Google Maps embed. This is a placeholder image */}
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop"
                alt="Map of Abhilashi University"
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
