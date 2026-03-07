import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Home } from './components/Home';
import { ProjectPage } from './components/ProjectPage';

function AppContent() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Force redirect to home on initial load/refresh
    // This ensures the user always lands on the homepage when opening the site
    if (pathname !== '/') {
      navigate('/');
    }
  }, []); // Run once on mount

  return (
    <div className="min-h-screen bg-background text-textMain font-sans overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
      <SpeedInsights />
    </HashRouter>
  );
}

export default App;