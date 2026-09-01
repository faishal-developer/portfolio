import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home';
import CaseStudiesList from './Component/CaseStudiesList';
import CaseStudyDetail from './Component/CaseStudyDetail';
import SingleService from './Component/SingleService';
import logo from "./image/faishal-edited.png";
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Md Faishal | Full Stack Software Engineer";
    const link = document.createElement("link");
    link.rel = "shortcut icon";
    link.href = logo;
    document.head.appendChild(link);
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudiesList />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/service/:serviceId" element={<SingleService />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
