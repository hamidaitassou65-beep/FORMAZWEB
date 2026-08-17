export interface SeoMetadata {
  title: string;
  description: string;
}

export const PAGE_SEO_DATA: Record<string, SeoMetadata> = {
  '/': {
    title: 'INDUSTRIELTECH | Automatisme, Maintenance & Formation au Maroc',
    description: 'INDUSTRIELTECH propose des formations et services en automatisme industriel, maintenance, variateurs de vitesse, électricité et énergie au Maroc.',
  },
  '/formations': {
    title: 'Formations en Automatisme, Maintenance & Énergie | INDUSTRIELTECH',
    description: 'Formations professionnelles en automatisme, Siemens TIA Portal, variateurs de vitesse, électricité industrielle, photovoltaïque et énergie au Maroc.',
  },
  '/services': {
    title: 'Services en Automatisme & Maintenance Industrielle | INDUSTRIELTECH',
    description: 'Services en automatisme, programmation PLC, maintenance industrielle, variateurs de vitesse et réparation de cartes électroniques au Maroc.',
  },
  '/realisations': {
    title: 'Réalisations en Automatisme & Maintenance | INDUSTRIELTECH',
    description: 'Découvrez les réalisations INDUSTRIELTECH en automatisme, maintenance industrielle, électricité, variateurs de vitesse et formation technique.',
  },
  '/a-propos': {
    title: "À propos d'INDUSTRIELTECH | Expertise Industrielle au Maroc",
    description: 'Découvrez INDUSTRIELTECH et son expertise en automatisme, maintenance industrielle, électricité, formation technique et énergie au Maroc.',
  },
  '/contact': {
    title: 'Contact INDUSTRIELTECH | Formation & Services Industriels',
    description: 'Contactez INDUSTRIELTECH pour vos besoins en formation, automatisme, maintenance industrielle, variateurs de vitesse et assistance technique.',
  },
};

export const TOPIC_SEO_DATA: Record<string, SeoMetadata> = {
  // Formations spécifiques
  'auto-01': {
    title: 'Formation Automatisme Industriel au Maroc | INDUSTRIELTECH',
    description: 'Formation pratique en automatisme industriel : automates programmables, PLC, Grafcet, capteurs, actionneurs, diagnostic et applications industrielles.',
  },
  'auto-02': {
    title: 'Formation Siemens TIA Portal & Automates S7 au Maroc',
    description: 'Formation Siemens TIA Portal pour programmer, superviser et diagnostiquer les automates S7-1200 et S7-1500 dans des applications industrielles.',
  },
  'var-01': {
    title: 'Formation Variateurs de Vitesse Industriels | INDUSTRIELTECH',
    description: 'Formation pratique sur les variateurs de vitesse : paramétrage, commande moteur, diagnostic, dépannage et maintenance industrielle.',
  },
  'ene-01': {
    title: 'Formation Électricité Industrielle au Maroc | INDUSTRIELTECH',
    description: 'Formation en électricité industrielle : installations, moteurs, protections, schémas électriques, diagnostic et maintenance des équipements.',
  },
  'ene-02': {
    title: 'Formation Photovoltaïque & Énergie Solaire au Maroc',
    description: "Formation photovoltaïque sur le dimensionnement, l'installation, la maintenance, le diagnostic et l'optimisation des systèmes solaires PV.",
  },
  // Services spécifiques
  'automatisme': {
    title: 'Programmation Automates PLC au Maroc | INDUSTRIELTECH',
    description: "Programmation, modification, diagnostic et optimisation d'automates industriels PLC pour machines, procédés et installations industrielles.",
  },
  'reparation': {
    title: 'Réparation Cartes Électroniques Industrielles au Maroc',
    description: 'Diagnostic et réparation de cartes électroniques industrielles pour variateurs, machines, automatismes et équipements de production.',
  },
  'diagnostic': {
    title: 'Maintenance & Réparation Variateurs de Vitesse au Maroc',
    description: 'Diagnostic, paramétrage, maintenance et réparation de variateurs de vitesse pour moteurs, machines et installations industrielles.',
  },
  'installation': {
    title: 'Maintenance Électrique & Industrielle au Maroc | INDUSTRIELTECH',
    description: 'Services de maintenance industrielle, diagnostic électrique, dépannage et assistance technique pour machines et équipements industriels.',
  },
};

/**
 * Updates DOM document title and meta description tag
 */
export function updateDocumentMetadata(title: string, description: string, pathname?: string) {
  // 1. Update Title
  document.title = title;

  // 2. Update or create Meta Description
  let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  // 3. Update or create Open Graph tags
  let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.content = title;

  let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.content = description;

  // 4. Update or create Canonical link
  if (pathname !== undefined) {
    const cleanPath = pathname === '/' ? '' : pathname;
    const canonicalUrl = `https://industrieltech.com${cleanPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }
}
