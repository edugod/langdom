import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Courses } from './pages/Courses';
import Header from './components/Header';
import { Tobacco } from './pages/Tobacco';
import { Exchange } from './pages/Exchange';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tobacco" element={<Tobacco />} />
      <Route path="/exchange" element={<Exchange />} />
    </Routes>
  );
};
