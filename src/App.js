import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import EventsSection from './components/EventsSection';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Hero/>
        <About/>
        <EventsSection/>
        <Footer/>
      </Router>
    </>
  );
}
