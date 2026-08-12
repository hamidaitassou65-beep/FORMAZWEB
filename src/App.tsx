import React, { useState, useEffect } from 'react';
import { PageRoute, CompanyInfo, Course, RequestType } from './types';
import { getStoredCompanyInfo } from './data/company';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CompanySettingsModal } from './components/CompanySettingsModal';
import { QuoteModal } from './components/QuoteModal';
import { CourseModal } from './components/CourseModal';

import { HomeView } from './views/HomeView';
import { CoursesView } from './views/CoursesView';
import { ServicesView } from './views/ServicesView';
import { ProjectsView } from './views/ProjectsView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(getStoredCompanyInfo());

  // Modals state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefilledType, setQuotePrefilledType] = useState<RequestType>('Demande de devis');
  const [quotePrefilledSubject, setQuotePrefilledSubject] = useState<string>('');

  const [courseModalData, setCourseModalData] = useState<Course | null>(null);

  // Handle URL hash changes for smooth anchor / routing support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (['home', 'courses', 'services', 'projects', 'about', 'contact'].includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (type: RequestType = 'Demande de devis', subject: string = '') => {
    setQuotePrefilledType(type);
    setQuotePrefilledSubject(subject);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        companyInfo={companyInfo}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenQuoteModal={() => handleOpenQuoteModal('Demande de devis')}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            companyInfo={companyInfo}
            onOpenQuoteModal={handleOpenQuoteModal}
            onSelectCourse={(courseId) => {
              navigateTo('courses');
            }}
          />
        )}

        {currentRoute === 'courses' && (
          <CoursesView
            onSelectCourse={(course) => setCourseModalData(course)}
            onRequestCourse={(title) => handleOpenQuoteModal('Formation', title)}
          />
        )}

        {currentRoute === 'services' && (
          <ServicesView
            onRequestService={(title) => handleOpenQuoteModal('Diagnostic ou dépannage', title)}
          />
        )}

        {currentRoute === 'projects' && (
          <ProjectsView
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentRoute === 'about' && (
          <AboutView
            companyInfo={companyInfo}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onOpenQuoteModal={() => handleOpenQuoteModal('Demande de devis')}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactView
            companyInfo={companyInfo}
            initialType={quotePrefilledType}
            initialSubject={quotePrefilledSubject}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
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
    </div>
  );
};
