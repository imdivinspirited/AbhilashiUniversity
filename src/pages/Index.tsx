
import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Administration from "@/components/Administration";
import Faculties from "@/components/Faculties";
import CourseFinder from "@/components/CourseFinder";
import NewsEvents from "@/components/NewsEvents";
import ImportantLinks from "@/components/ImportantLinks";
import Placement from "@/components/Placement";
import ApplicationForm from "@/components/ApplicationForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Administration />
      <Faculties />
      <CourseFinder />
      <NewsEvents />
      <ImportantLinks />
      <Placement />
      <ApplicationForm />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
