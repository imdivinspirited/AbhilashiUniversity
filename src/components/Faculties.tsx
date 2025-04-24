
import React from 'react';
import { Book, Stethoscope, Factory, GraduationCap, Leaf } from 'lucide-react';

const Faculties = () => {
  const faculties = [
    {
      name: "Ayurveda & Health Sciences",
      icon: <Stethoscope size={40} className="text-university-blue" />,
      description: "Offering courses in Ayurvedic medicine, health sciences, and alternative therapies."
    },
    {
      name: "Pharmacy",
      icon: <Book size={40} className="text-university-blue" />,
      description: "Comprehensive programs in pharmaceutical sciences, drug formulation, and clinical pharmacy."
    },
    {
      name: "Engineering & Management",
      icon: <Factory size={40} className="text-university-blue" />,
      description: "Diverse programs in engineering disciplines and business management."
    },
    {
      name: "Education, Humanities & Basic Sciences",
      icon: <GraduationCap size={40} className="text-university-blue" />,
      description: "Training future educators and scholars in arts, humanities, and foundational sciences."
    },
    {
      name: "Agriculture & Veterinary Sciences",
      icon: <Leaf size={40} className="text-university-blue" />,
      description: "Courses in modern agricultural practices, animal husbandry, and sustainable farming."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="university-container">
        <h2 className="section-heading">Faculties & Departments</h2>
        <p className="text-gray-700 mb-10 max-w-3xl">
          Explore our diverse academic disciplines designed to provide comprehensive education
          and develop skilled professionals in various fields.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover transition-all"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {faculty.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-university-blue-dark">
                  {faculty.name}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {faculty.description}
                </p>
                <div className="text-center">
                  <a 
                    href="#" 
                    className="inline-block px-6 py-2 bg-university-blue/10 text-university-blue rounded hover:bg-university-blue/20 transition-colors"
                  >
                    View Departments
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculties;
