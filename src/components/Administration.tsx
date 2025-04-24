
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Administration = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  
  const administrators = [
    {
      name: "Dr. R.K. Abhilashi",
      position: "Chancellor",
      imagePath: "/lovable-uploads/6d615e63-24ba-4ed0-bcdc-09b7ab6ed70e.png"
    },
    {
      name: "Dr. Lalit Abhilashi",
      position: "Pro-Chancellor",
      imagePath: "/lovable-uploads/ad7eb49a-a975-48bf-b788-2072d415e8c9.png"
    },
    {
      name: "Prof. H.K. Chaudhary",
      position: "Vice-Chancellor",
      imagePath: "/lovable-uploads/a3e07b74-0a43-4048-8cc8-14beb6593e6a.png"
    },
    {
      name: "Dr. Kapil Kapoor",
      position: "Registrar",
      imagePath: "/lovable-uploads/f3f01cda-eee7-42ab-8011-b37404b8dde3.png"
    }
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? administrators.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === administrators.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // For mobile scroll handling
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      goToNextSlide();
    }
    
    if (touchStart - touchEnd < -75) {
      // Swipe right
      goToPrevSlide();
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="university-container">
        <h2 className="section-heading">University Administration</h2>
        
        <div className="relative">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={slideRef}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {administrators.map((admin, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                      <div className="aspect-square rounded-full overflow-hidden border-4 border-university-gold mx-auto md:mx-0" style={{ maxWidth: '280px' }}>
                        <img 
                          src={admin.imagePath} 
                          alt={admin.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-university-blue-dark mb-2">{admin.name}</h3>
                      <p className="text-xl text-university-gold mb-4">{admin.position}</p>
                      <p className="mb-6 text-gray-700">
                        As {admin.position} of Abhilashi University, {admin.name} brings leadership and vision to our academic community.
                        Their dedication to excellence and innovation has been instrumental in shaping our institution's growth and success.
                      </p>
                      <Button variant="outline" className="border-university-blue text-university-blue hover:bg-university-blue hover:text-white">
                        View Message
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all z-10"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-university-blue" />
          </button>
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all z-10"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-university-blue" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {administrators.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-university-blue" : "w-2.5 bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Administration;
