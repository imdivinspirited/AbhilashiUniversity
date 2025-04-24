
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue
} from '@/components/ui/select';
import { toast } from 'sonner';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      course: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast('Application Submitted', {
        description: 'We\'ve received your application and will get back to you soon.',
        icon: <CheckCircle className="text-green-500" />,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="apply" className="py-16 bg-university-blue-dark text-white">
      <div className="university-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-white/80 mb-8">
              Fill out the application form to take the first step towards your academic and career goals with Abhilashi University. Our admissions team will guide you through the process.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-university-blue rounded-full p-2 mr-4 shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Submit Application</h3>
                  <p className="text-white/70 text-sm">
                    Fill the form with your details and course preferences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-university-blue rounded-full p-2 mr-4 shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Document Verification</h3>
                  <p className="text-white/70 text-sm">
                    Our team will verify your documents and eligibility.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-university-blue rounded-full p-2 mr-4 shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Admission Confirmation</h3>
                  <p className="text-white/70 text-sm">
                    Receive your admission letter and welcome package.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">Apply Now</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm">
                    Full Name <span className="text-university-gold">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm">
                    Email Address <span className="text-university-gold">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-1 text-sm">
                    Mobile Number <span className="text-university-gold">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block mb-1 text-sm">
                    Course Interested In <span className="text-university-gold">*</span>
                  </label>
                  <Select onValueChange={handleSelectChange} value={formData.course}>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white placeholder:text-white/50">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-gray-800">
                      <SelectItem value="btech">B.Tech</SelectItem>
                      <SelectItem value="bpharma">B.Pharma</SelectItem>
                      <SelectItem value="bams">BAMS</SelectItem>
                      <SelectItem value="mba">MBA</SelectItem>
                      <SelectItem value="bsc-agriculture">B.Sc. Agriculture</SelectItem>
                      <SelectItem value="bed">B.Ed</SelectItem>
                      <SelectItem value="other">Other Courses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific questions or requirements?"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                    rows={4}
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-university-gold text-black hover:bg-university-gold-light"
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      Submit Application <ArrowRight size={16} className="ml-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
