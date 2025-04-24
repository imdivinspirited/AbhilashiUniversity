
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CourseFinder = () => {
  const [discipline, setDiscipline] = useState("");
  const [degreeType, setDegreeType] = useState("");
  const [duration, setDuration] = useState("");

  const handleSearch = () => {
    console.log("Searching for courses with criteria:", { discipline, degreeType, duration });
    // In a real implementation, this would trigger an API call or search function
  };

  return (
    <section className="py-16 bg-university-blue text-white">
      <div className="university-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Find Your Perfect Course</h2>
          <p className="text-white/80 mb-8 text-center max-w-2xl mx-auto">
            Use our course finder tool to explore the wide range of academic programs
            offered at Abhilashi University and find the perfect match for your career aspirations.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label htmlFor="discipline" className="block mb-2 text-sm font-medium">
                  Discipline
                </label>
                <Select onValueChange={setDiscipline}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white focus:ring-white/30 focus:border-white">
                    <SelectValue placeholder="Select discipline" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-800">
                    <SelectItem value="ayurveda">Ayurveda & Health Sciences</SelectItem>
                    <SelectItem value="pharmacy">Pharmacy</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="management">Management</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="humanities">Humanities</SelectItem>
                    <SelectItem value="sciences">Basic Sciences</SelectItem>
                    <SelectItem value="agriculture">Agriculture</SelectItem>
                    <SelectItem value="veterinary">Veterinary Sciences</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="degreeType" className="block mb-2 text-sm font-medium">
                  Degree Type
                </label>
                <Select onValueChange={setDegreeType}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white focus:ring-white/30 focus:border-white">
                    <SelectValue placeholder="Select degree" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-800">
                    <SelectItem value="certificate">Certificate</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="ug">Undergraduate</SelectItem>
                    <SelectItem value="pg">Postgraduate</SelectItem>
                    <SelectItem value="phd">Doctoral</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="duration" className="block mb-2 text-sm font-medium">
                  Duration
                </label>
                <Select onValueChange={setDuration}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white focus:ring-white/30 focus:border-white">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-800">
                    <SelectItem value="6m">6 Months</SelectItem>
                    <SelectItem value="1y">1 Year</SelectItem>
                    <SelectItem value="2y">2 Years</SelectItem>
                    <SelectItem value="3y">3 Years</SelectItem>
                    <SelectItem value="4y">4 Years</SelectItem>
                    <SelectItem value="5y">5 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={handleSearch} 
                className="bg-university-gold text-black hover:bg-university-gold-light transition-colors"
                size="lg"
              >
                <Search size={16} className="mr-2" />
                Search Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFinder;
