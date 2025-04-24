
import React from 'react';
import { ExternalLink } from 'lucide-react';

const ImportantLinks = () => {
  const links = [
    {
      title: "RTI",
      description: "Right to Information",
      url: "https://rtionline.gov.in/",
      icon: "/icons/rti.png"
    },
    {
      title: "UGC",
      description: "University Grants Commission",
      url: "https://www.ugc.gov.in/",
      icon: "/icons/ugc.png"
    },
    {
      title: "NIRF",
      description: "National Institutional Ranking Framework",
      url: "https://www.nirfindia.org/",
      icon: "/icons/nirf.png"
    },
    {
      title: "Pharmacy Council of India",
      description: "Statutory Body Governing Pharmacy",
      url: "https://www.pci.nic.in/",
      icon: "/icons/pci.png"
    },
    {
      title: "NCTE",
      description: "National Council for Teacher Education",
      url: "https://ncte.gov.in/website/index.aspx",
      icon: "/icons/ncte.png"
    },
    {
      title: "National Scholarship Portal",
      description: "Government Scholarships",
      url: "https://scholarships.gov.in/",
      icon: "/icons/nsp.png"
    },
    {
      title: "AISHE",
      description: "All India Survey on Higher Education",
      url: "https://aishe.gov.in/",
      icon: "/icons/aishe.png"
    },
    {
      title: "NAD",
      description: "National Academic Depository",
      url: "https://nad.gov.in/",
      icon: "/icons/nad.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="university-container">
        <h2 className="section-heading">Important Links</h2>
        <p className="text-gray-700 mb-10 max-w-3xl">
          Quick access to essential resources and regulatory bodies related to higher education.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <img src={link.icon} alt={link.title} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-semibold text-university-blue-dark mb-1">{link.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{link.description}</p>
              <div className="text-xs flex items-center text-university-blue">
                Visit <ExternalLink size={12} className="ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;
