
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const attractions = [
    {
      name: "Nachan Valley",
      description: "Known for its pristine natural beauty and scenic landscapes."
    },
    {
      name: "Janjehli Valley",
      description: "Famous for its lush meadows and panoramic views of the Himalayas."
    },
    {
      name: "Parashar Lake",
      description: "A high altitude lake with a floating island and ancient temple."
    },
    {
      name: "Barot Valley",
      description: "Popular for trout fishing, camping, and hiking experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="university-container">
        <div className="section-title">
          <h2 className="text-university-blue-dark">About Abhilashi University</h2>
          <p>Excellence in education amidst the beautiful Himalayas</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/0fffe5f2-81e2-4150-ab56-1f126b4ddfd6.png" 
                alt="Abhilashi University Campus" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-university-blue-dark to-transparent h-1/2"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Established 2014</div>
            </div>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              Abhilashi University at Chail Chowk, Mandi is established by the Government of Himachal Pradesh 
              vide 'Abhilashi University (Establishment & Regulation) Act, 2014'. It is a Government-recognized 
              University with a right to confer degrees under Section 2(f) and 22(i) of UGC Act, 1956.
            </p>
            
            <p className={`mb-6 text-gray-700 leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
              Located amidst pine forests, oak trees, and lush green valleys, Abhilashi University offers 
              a serene environment conducive to academic excellence. The university campus spreads over acres 
              of land, providing students with state-of-the-art infrastructure, modern laboratories, and 
              a well-equipped library. Our commitment to quality education is reflected in our experienced 
              faculty members, innovative teaching methodologies, and industry-relevant curriculum.
              
              Abhilashi University strives to prepare students not just academically, but also to become 
              responsible citizens who contribute meaningfully to society. Through various co-curricular 
              and extracurricular activities, we ensure the holistic development of our students, equipping 
              them with the skills and knowledge needed to excel in their chosen fields.
            </p>
            
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-university-blue hover:text-university-blue-dark mb-6"
            >
              {isExpanded ? (
                <>Read Less <ChevronUp className="ml-1" size={16} /></>
              ) : (
                <>Read More <ChevronDown className="ml-1" size={16} /></>
              )}
            </Button>
          </div>
          
          <div className="flex flex-col gap-5">
            <Card className="bg-white rounded-xl shadow-md overflow-hidden border-none card-gradient h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-5 text-university-blue-dark flex items-center">
                  <span className="inline-block w-1.5 h-6 bg-university-gold mr-2 rounded-full"></span>
                  Nearby Attractions
                </h3>
                <div className="space-y-5">
                  {attractions.map((attraction, index) => (
                    <div key={index} className="flex items-start animate-hover p-3 rounded-lg hover:bg-gray-50">
                      <MapPin size={18} className="text-university-gold shrink-0 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold text-university-blue-dark">{attraction.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{attraction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline" className="text-university-blue border-university-blue hover:bg-university-blue hover:text-white w-full">
                    View Campus Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
