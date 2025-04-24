
import React from 'react';
import { Users, TrendingUp, Building } from 'lucide-react';
import { url } from 'inspector';

const Placement = () => {
  const companies = [
    {
      name: "JustDial",
      logo: "/logos/just_dial.png"
    },
    {
      name: "HDFC Bank",
      logo: "/logos/hdfc.png"
    },
    {
      name: "Dr. TBPL",
      logo: "/logos/DrTBPL.png"
    },
    {
      name: "Ranbaxy Laboratories",
      logo: "/logos/Ranbaxy.png"
    },
    {
      name: "Hindustan Times",
      logo: "/logos/hindustamtimes.png"
    },
    {
      name: "RNLIC",
      logo: "/logos/RNLIC.png"
    }
  ];

  const stats = [
    {
      icon: <Building size={32} className="text-university-blue" />,
      value: "150+",
      label: "Recruiting Companies"
    },
    {
      icon: <TrendingUp size={32} className="text-university-blue" />,
      value: "90%",
      label: "Placement Rate"
    },
    {
      icon: <Users size={32} className="text-university-blue" />,
      value: "3000+",
      label: "Placed Students"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="university-container">
        <h2 className="section-heading">Placement Partners</h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="bg-white shadow-sm rounded-lg p-4 w-32 h-32 flex items-center justify-center hover:shadow-md transition-shadow"
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                className="max-h-16 max-w-full" 
              />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 border border-gray-200 rounded-lg hover:border-university-blue hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-university-blue-dark mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placement;
