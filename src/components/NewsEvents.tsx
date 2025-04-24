
import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { url } from 'inspector';

const NewsEvents = () => {
  const newsItems = [
    {
      id: 1,
      title: "Faculty Recruitment - 03.02.2025",
      excerpt: "Abhilashi University invites applications for faculty positions across various departments.",
      date: "February 3, 2025",
      category: "Announcement",
      image: "/lovable-uploads/fr.png"
    },
    {
      id: 2,
      title: "Cleanliness Campaign by NSS Volunteers",
      excerpt: "NSS volunteers organized a campus-wide cleanliness drive promoting Swachh Bharat Abhiyan.",
      date: "January 15, 2025",
      category: "Student Activities",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Appointment of New Vice Chancellor",
      excerpt: "Prof. H.K. Chaudhary appointed as the new Vice Chancellor of Abhilashi University.",
      date: "December 20, 2024",
      category: "Administration",
      image: "/lovable-uploads/vc.png"
    },
    {
      id: 4,
      title: "Tech festival 2025",
      excerpt: "University celebrated TechFest 2025.",
      date: "June 21, 2024",
      category: "Events",
      image: "/lovable-uploads/tf.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="university-container">
        <h2 className="section-heading">News & Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-university-blue text-white px-3 py-1 text-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={14} className="mr-1" />
                  {item.date}
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
                <a
                  href="#apply"
                  className="inline-flex items-center text-university-blue hover:text-university-blue-dark font-medium"
                >
                  Read More <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-university-blue text-university-blue hover:bg-university-blue hover:text-white">
            View All News & Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
