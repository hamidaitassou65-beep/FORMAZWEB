import React from 'react';
import { CompanyInfo } from '../types';
import { INDUSTRIAL_TECHNOLOGIES } from '../data/technologies';
import { Building2, ShieldCheck, MapPin, Target, GraduationCap, Wrench, Cpu, CheckCircle2, Award, Zap } from 'lucide-react';

interface Props {
  companyInfo: CompanyInfo;
  onOpenSettings: () => void;
  onOpenQuoteModal: () => void;
}

export const AboutView: React.FC<Props> = ({ companyInfo, onOpenSettings, onOpenQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Hero Banner */}
      <div className="bg-[#1a365d] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-semibold">
          <Building2 className="w-3.5 h-3.5" />
          <span>Ingénierie & Services Techniques Industriels</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          À propos de {companyInfo.name}
        </h1>
        <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
          Nous accompagnons les acteurs industriels dans le développement des compétences techniques de leurs collaborateurs et le maintien en condition opérationnelle de leurs outils de production.
        </p>

        {/* Region badge */}
        <div className="pt-2 flex items-center gap-3">
          <span className="px-3.5 py-1.5 bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span>Zone d’intervention principale : {companyInfo.region}</span>
          </span>
          <button
            onClick={onOpenSettings}
            className="text-xs text-orange-300 hover:underline font-medium"
          >
            [Éditer le nom/région]
          </button>
        </div>
      </div>

      {/* Main Presentation Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Col: Activity & Competences */}
        <div className="lg:col-span-8 space-y-8">
          {/* Section 1: Activité */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-2xl font-bold text-[#1a365d] flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-orange-500" /> L’activité de l’entreprise
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>{companyInfo.name}</strong> rassemble des compétences en automatisme industriel, électronique de puissance et électrotechnique. Notre activité est structurée autour de deux piliers fondamentaux : les formations sur mesure à destination des équipes de maintenance et d'ingénierie, et les interventions techniques spécialisées sur site ou en atelier.
            </p>
          </div>

          {/* Section 2: Domaines de compétence & Secteurs */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-2xl font-bold text-[#1a365d] flex items-center gap-2.5">
              <Target className="w-6 h-6 text-orange-500" /> Domaines de compétence & Secteurs d’activité
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Nous intervenons auprès des entreprises industrielles de tous secteurs nécessitant un haut niveau de disponibilité matérielle :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-800 pt-2">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Agroalimentaire & Conditionnement</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Plasturgie, Chimie & Pharmacie</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Traitement de l’eau & Environnement</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Logistique, Manutention & Convoyage</span>
              </div>
            </div>
          </div>

          {/* Section 3: Approche formation & Diagnostic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50/60 border border-orange-200 rounded-3xl p-6 space-y-3">
              <h3 className="font-bold text-[#1a365d] text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-orange-500" /> Approche de la formation
              </h3>
              <p className="text-xs text-slate-800 leading-relaxed">
                Notre démarche pédagogique privilégie la mise en pratique immédiate. Nos stagiaires manipulent directement des bancs de test réels comprenant des automates, variateurs et interfaces HMI, garantissant un transfert de compétences utilisable dès le retour sur poste.
              </p>
            </div>

            <div className="bg-slate-100/80 border border-slate-200 rounded-3xl p-6 space-y-3">
              <h3 className="font-bold text-[#1a365d] text-lg flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#1a365d]" /> Approche du diagnostic & maintenance
              </h3>
              <p className="text-xs text-slate-800 leading-relaxed">
                Chaque panne fait l’objet d’un diagnostic méthodique afin d’isoler la cause racine avant toute réparation. Nous visons la remise en état durable des équipements pour éviter la récurrence des arrêts.
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Zone d'intervention & Technologies */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#1a365d] text-white rounded-3xl p-6 border border-slate-800 space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5 text-orange-400" /> Zone géographique d’intervention
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Nos techniciens et formateurs se déplacent au sein de votre établissement d'exploitation :
            </p>

            <div className="p-4 bg-slate-800 border border-slate-700 rounded-xl space-y-1 text-xs">
              <span className="text-slate-400 block font-semibold">Territoire couvert :</span>
              <span className="font-bold text-orange-300 text-sm block">{companyInfo.interventionZone}</span>
              <span className="text-[11px] text-slate-400 block pt-1">
                Localisation atelier / centre : {companyInfo.address}
              </span>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-lg shadow-xs transition-colors"
            >
              Vérifier la faisabilité d'intervention
            </button>
          </div>

          {/* Mastered Technologies & Disclaimers */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <h3 className="font-bold text-[#1a365d] text-base flex items-center gap-2">
              <Cpu className="w-5 h-5 text-orange-500" /> Marques & Standards pris en charge
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nous intervenons sur les matériels d’automatisme et de variation des constructeurs majeurs du marché :
            </p>

            <div className="space-y-2 text-xs">
              {INDUSTRIAL_TECHNOLOGIES.slice(0, 6).map((tech) => (
                <div key={tech.name} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                  <span className="font-bold text-[#1a365d]">{tech.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Compatible
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-600 italic border-t border-slate-100 pt-3">
              Note : Les noms de marques cités restent la propriété exclusive de leurs déposants respectifs. Notre entreprise intervient de façon indépendante en tant que prestataire d’ingénierie et de formation technique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
