import React, { useState, useEffect } from 'react';
import { Mail, Phone, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Navigation */}
      <nav 
        className={`bg-white py-3 w-full z-30 transition-all duration-300 ${
          isScrolled ? 'sticky top-0 shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/f2113871-b7eb-4d11-b8ef-11c1245652da.png" 
              alt="Abhilashi University Logo" 
              className="h-14 mr-3 object-contain" 
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-university-blue">Abhilashi University</h1>
              <p className="text-xs text-gray-600">Chail Chowk, Mandi, Himachal Pradesh</p>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2 bg-white">
                      <li><NavigationMenuLink href="#about">About Us</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#admin">Administration</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#iqac">IQAC</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#ipr">IPR</NavigationMenuLink></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2 bg-white">
                      <li><NavigationMenuLink href="#courses">Courses</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#departments">Departments</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#exams">Examinations</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#rankings">Rankings</NavigationMenuLink></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Admission</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2 bg-white">
                      <li><NavigationMenuLink href="#apply">Apply Now</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#prospectus">Prospectus</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#fees">Fees Structure</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#scholarships">Scholarships</NavigationMenuLink></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Campus Life</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2 bg-white">
                      <li><NavigationMenuLink href="#facilities">Facilities</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#placement">Placement</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#alumni">Alumni</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#cells">Committees & Cells</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#grievance">Grievance</NavigationMenuLink></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#contact"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="hover:text-university-blue">
                <a href="#apply" className="flex items-center">
                  Apply Now <ArrowRight size={16} className="ml-1" />
                </a>
              </Button>
              <Button variant="default" className="bg-university-blue hover:bg-university-blue-dark">
                <a href="#contact" className="flex items-center">
                  Contact Us <ArrowRight size={16} className="ml-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-university-blue focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-white shadow-lg absolute left-0 right-0 z-20 animate-slide-in-right"
          >
            <div className="container mx-auto px-4 py-3">
              <ul className="flex flex-col space-y-3">
                <li><a href="/" className="block py-2 hover:text-university-blue">Home</a></li>
                <li className="py-2">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between hover:text-university-blue">
                      About
                      <span className="shrink-0 transition group-open:rotate-180">
                        <ChevronDown size={16} />
                      </span>
                    </summary>
                    <ul className="mt-2 space-y-2 pl-4">
                      <li><a href="#about" className="block py-1 hover:text-university-blue">About Us</a></li>
                      <li><a href="#admin" className="block py-1 hover:text-university-blue">Administration</a></li>
                      <li><a href="#iqac" className="block py-1 hover:text-university-blue">IQAC</a></li>
                      <li><a href="#ipr" className="block py-1 hover:text-university-blue">IPR</a></li>
                    </ul>
                  </details>
                </li>
                <li className="py-2">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between hover:text-university-blue">
                      Academics
                      <span className="shrink-0 transition group-open:rotate-180">
                        <ChevronDown size={16} />
                      </span>
                    </summary>
                    <ul className="mt-2 space-y-2 pl-4">
                      <li><a href="#courses" className="block py-1 hover:text-university-blue">Courses</a></li>
                      <li><a href="#departments" className="block py-1 hover:text-university-blue">Departments</a></li>
                      <li><a href="#exams" className="block py-1 hover:text-university-blue">Examinations</a></li>
                      <li><a href="#rankings" className="block py-1 hover:text-university-blue">Rankings</a></li>
                    </ul>
                  </details>
                </li>
                <li className="py-2">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between hover:text-university-blue">
                      Admission
                      <span className="shrink-0 transition group-open:rotate-180">
                        <ChevronDown size={16} />
                      </span>
                    </summary>
                    <ul className="mt-2 space-y-2 pl-4">
                      <li><a href="#apply" className="block py-1 hover:text-university-blue">Apply Now</a></li>
                      <li><a href="#prospectus" className="block py-1 hover:text-university-blue">Prospectus</a></li>
                      <li><a href="#fees" className="block py-1 hover:text-university-blue">Fees Structure</a></li>
                      <li><a href="#scholarships" className="block py-1 hover:text-university-blue">Scholarships</a></li>
                    </ul>
                  </details>
                </li>
                <li className="py-2">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between hover:text-university-blue">
                      Campus Life
                      <span className="shrink-0 transition group-open:rotate-180">
                        <ChevronDown size={16} />
                      </span>
                    </summary>
                    <ul className="mt-2 space-y-2 pl-4">
                      <li><a href="#facilities" className="block py-1 hover:text-university-blue">Facilities</a></li>
                      <li><a href="#placement" className="block py-1 hover:text-university-blue">Placement</a></li>
                      <li><a href="#alumni" className="block py-1 hover:text-university-blue">Alumni</a></li>
                      <li><a href="#cells" className="block py-1 hover:text-university-blue">Committees & Cells</a></li>
                      <li><a href="#grievance" className="block py-1 hover:text-university-blue">Grievance</a></li>
                    </ul>
                  </details>
                </li>
                <li><a href="#contact" className="block py-2 hover:text-university-blue">Contact</a></li>
              </ul>
              <div className="mt-4 flex flex-col space-y-2">
                <Button variant="outline" asChild className="w-full border-university-blue text-university-blue hover:bg-university-blue hover:text-white">
                  <a href="#apply" className="flex items-center justify-center">
                    Apply Now <ArrowRight size={16} className="ml-1" />
                  </a>
                </Button>
                <Button variant="default" asChild className="w-full bg-university-blue hover:bg-university-blue-dark">
                  <a href="#contact" className="flex items-center justify-center">
                    Contact Us <ArrowRight size={16} className="ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
