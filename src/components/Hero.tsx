
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[600px] md:h-[700px] lg:h-[800px] flex items-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/lovable-uploads/eafc0360-c31f-4526-a285-e89f08889c4f.png")',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-university-blue/20"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            Welcome to <span className="text-university-gold block mt-2">Abhilashi University</span>
          </h1>
          
          <div className="w-24 h-1 bg-university-gold mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}></div>
          
          <p className="text-xl md:text-2xl italic mb-8 font-georgia animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            "Education is the most powerful weapon which you can use to change the world."
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" variant="default" className="bg-university-blue hover:bg-university-blue-dark transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl">
              <a href="#about" className="flex items-center">
                Discover More <ArrowRight size={16} className="ml-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-black border-white hover:bg-white/20 hover:text-white transition-all duration-300 text-base font-medium backdrop-blur-sm">
              <a href="#apply" className="flex items-center">
                Apply Now <ArrowRight size={16} className="ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-university-blue-dark to-transparent" />
      
      <div className="absolute bottom-10 left-0 right-0 text-center z-10">
        <div className="flex items-center justify-center space-x-6">
          <div className="text-white text-center">
            <div className="text-4xl font-bold">500+</div>
            <div className="text-sm uppercase tracking-wider">Courses</div>
          </div>
          <div className="h-8 w-px bg-white/30"></div>
          <div className="text-white text-center">
            <div className="text-4xl font-bold">90%</div>
            <div className="text-sm uppercase tracking-wider">Placement Rate</div>
          </div>
          <div className="h-8 w-px bg-white/30"></div>
          <div className="text-white text-center">
            <div className="text-4xl font-bold">50+</div>
            <div className="text-sm uppercase tracking-wider">Industry Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
