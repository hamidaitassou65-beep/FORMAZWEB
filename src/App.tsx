import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { CompanyInfo, Course, RequestType } from './types';
import { getStoredCompanyInfo } from './data/company';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CompanySettingsModal } from './components/CompanySettingsModal';
import { QuoteModal } from './components/QuoteModal';
import { CourseModal } from './components/CourseModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';

import { HomeView } from './views/HomeView';
import { CoursesView } from './views/CoursesView';
import { ServicesView } from './views/ServicesView';
import { ProjectsView } from './views/ProjectsView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

/**
 * Scroll to top automatically when route pathname changes
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

/**
 * Manages SEO Canonical URL tag & migration of legacy hash URLs
 */
function SeoAndHashMigration() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Detect and migrate any legacy hash-based URLs (e.g. #/projects, #courses) to clean routes
    if (window.location.hash) {
      const cleanHash = window.location.hash.replace('#/', '').replace('#', '');
      const hashMap: Record<string, string> = {
        courses: '/formations',
        formations: '/formations',
        services: '/services',
        projects: '/realisations',
        realisations: '/realisations',
        about: '/a-propos',
        'a-propos': '/a-propos',
        contact: '/contact',
        home: '/',
      };

      if (hashMap[cleanHash]) {
        navigate(hashMap[cleanHash], { replace: true });
      }
    }
  }, [navigate]);

  useEffect(() => {
    // 2. Maintain canonical link tag with clean URL without hash
    const cleanPath = location.pathname === '/' ? '' : location.pathname;
    const canonicalUrl = `https://industrieltech.com${cleanPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [location.pathname]);

  return null;
}

function MainLayout() {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(getStoredCompanyInfo());

  // Modals state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefilledType, setQuotePrefilledType] = useState<RequestType>('Demande de devis');
  const [quotePrefilledSubject, setQuotePrefilledSubject] = useState<string>('');

  const [courseModalData, setCourseModalData] = useState<Course | null>(null);

  const handleOpenQuoteModal = (type: RequestType = 'Demande de devis', subject: string = '') => {
    setQuotePrefilledType(type);
    setQuotePrefilledSubject(subject);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <ScrollToTop />
      <SeoAndHashMigration />

      {/* Navigation Header */}
      <Header
        companyInfo={companyInfo}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenQuoteModal={() => handleOpenQuoteModal('Demande de devis')}
      />

      {/* Main Content Area with Clean Routes */}
      <main className="flex-grow">
        <Routes>
          {/* Main Clean Routes */}
          <Route
            path="/"
            element={
              <HomeView
                companyInfo={companyInfo}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route
            path="/formations"
            element={
              <CoursesView
                onSelectCourse={(course) => setCourseModalData(course)}
                onRequestCourse={(title) => handleOpenQuoteModal('Formation', title)}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesView
                onRequestService={(title) => handleOpenQuoteModal('Diagnostic ou dépannage', title)}
              />
            }
          />
          <Route
            path="/realisations"
            element={
              <ProjectsView
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route
            path="/a-propos"
            element={
              <AboutView
                companyInfo={companyInfo}
                onOpenSettings={() => setIsSettingsOpen(true)}
                onOpenQuoteModal={() => handleOpenQuoteModal('Demande de devis')}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactView
                companyInfo={companyInfo}
                initialType={quotePrefilledType}
                initialSubject={quotePrefilledSubject}
              />
            }
          />

          {/* Legacy route redirects to French clean routes */}
          <Route path="/projects" element={<Navigate to="/realisations" replace />} />
          <Route path="/courses" element={<Navigate to="/formations" replace />} />
          <Route path="/about" element={<Navigate to="/a-propos" replace />} />

          {/* 404 Wildcard redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer
        companyInfo={companyInfo}
        onOpenQuoteModal={() => handleOpenQuoteModal('Demande de devis')}
      />

      {/* Company Settings Modal */}
      <CompanySettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        companyInfo={companyInfo}
        onUpdate={(newInfo) => setCompanyInfo(newInfo)}
      />

      {/* Interactive Quote / Technical Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        prefilledType={quotePrefilledType}
        prefilledSubject={quotePrefilledSubject}
      />

      {/* Course Detail Modal */}
      <CourseModal
        course={courseModalData}
        onClose={() => setCourseModalData(null)}
        onRequestCourse={(title) => handleOpenQuoteModal('Formation', title)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppWidget
        companyInfo={companyInfo}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
