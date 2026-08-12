import React, { useState } from 'react';
import { PageRoute, CompanyInfo } from '../types';
import { Phone, Mail, MapPin, Menu, X, Settings, ArrowRight, Wrench, GraduationCap } from 'lucide-react';

interface Props {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  companyInfo: CompanyInfo;
  onOpenSettings: () => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<Props> = ({
  currentRoute,
  onNavigate,
  companyInfo,
  onOpenSettings,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Accueil', route: 'home' },
    { label: 'Formations', route: 'courses' },
    { label: 'Services', route: 'services' },
    { label: 'Réalisations', route: 'projects' },
    { label: 'À propos', route: 'about' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top Banner (Contact info & Placeholders Editor) */}
      <div className="bg-[#1a365d] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{companyInfo.phone}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 font-medium hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-orange-400" />
              <span>{companyInfo.email}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{companyInfo.interventionZone}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onOpenSettings}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/80 hover:bg-slate-700 text-orange-300 hover:text-orange-200 rounded text-[11px] font-medium border border-slate-700 transition-colors"
              title="Configurer le nom et les coordonnées de l’entreprise"
            >
              <Settings className="w-3 h-3 text-orange-400" />
              <span>Éditer infos entreprise</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1a365d] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-[#152c4d] transition-colors">
            <div className="relative flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-orange-400 absolute -top-1 -left-1" />
              <Wrench className="w-4 h-4 text-white absolute -bottom-1 -right-1" />
            </div>
          </div>
          <div>
            <span className="block font-extrabold text-[#1a365d] text-base sm:text-lg leading-tight tracking-tight group-hover:text-orange-600 transition-colors">
              {companyInfo.name}
            </span>
            <span className="block text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Automatisme • Maintenance • Formations
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-[#1a365d] bg-orange-50/60 font-bold border-b-2 border-orange-500'
                    : 'text-slate-600 hover:text-[#1a365d] hover:bg-slate-100/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-98"
          >
            <span>Demander un devis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#1a365d] hover:bg-slate-100 rounded-lg"
          aria-label="Menu principal"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-orange-50 text-[#1a365d] font-bold border-l-4 border-orange-500'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-orange-500" />}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
