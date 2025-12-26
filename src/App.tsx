import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CoreValues from "./components/CoreValues";
import ServicesAfterBanner from "./components/ServicesAfterBanner";
import AboutUsPage from "./components/AboutUsPage";

function HomePage() {
  function handleCallbackSubmit(payload: {
    name: string;
    phone: string;
    subject: string;
    origin?: string | null;
  }): void {
    console.log("Callback request received:", payload);
  }
  return (
    <>
      <Hero />
      <ServicesAfterBanner onCallbackSubmit={handleCallbackSubmit} />
      <Services />
      <Stats />
      <Clients />
      <CoreValues />
      <Testimonials />
      {/* <About /> */}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
