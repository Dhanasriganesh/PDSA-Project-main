import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Service from '../pages/Service.jsx';
import Industry from '../pages/Industry.jsx';
import IndustryDetail from '../pages/industries/IndustryDetail.jsx';
import Technology from '../pages/Technology.jsx';
import Client from '../pages/Client.jsx';
import About from '../pages/About.jsx';
import Career from '../pages/Career.jsx';
import Contact from '../pages/Contact.jsx';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/industry" element={<Industry />} />
      <Route path="/industry/:slug" element={<IndustryDetail />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/client" element={<Client />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Routers;
