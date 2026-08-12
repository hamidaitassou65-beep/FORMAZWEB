import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  // --- A. AUTOMATISME INDUSTRIEL ---
  {
    id: 'auto-01',
    title: 'Initiation aux Automates Programmables Industriels (API / PLC)',
    category: 'automatisme',
    categoryLabel: 'Automatisme industriel',
    shortDescription: 'Acquérir les bases fondamentales du fonctionnement, du câblage et du diagnostic de premier niveau des automates industriels.',
    objectives: [
      'Comprendre l’architecture matérielle et logicielle d’un automate programmable (PLC/API).',
      'Identifier les signaux d’entrées/sorties numériques et analogiques.',
      'Savoir lire un programme simple et interpréter l’état des variables d’automatisme.',
      'Effectuer un diagnostic de premier niveau en cas de dysfonctionnement sur une ligne.'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Architecture des automates industriels',
        topics: [
          'Rôle de l’automate dans le système de contrôle-commande',
          'Cartes d’entrées/sorties TOR (Tout Ou Rien) et analogiques',
          'Processeurs, mémoire, alimentation et cycles d’exécution'
        ]
      },
      {
        moduleTitle: 'Module 2 : Langages de programmation de base',
        topics: [
          'Langage Ladder (LADDER/Schéma à contacts)',
          'Langage Logigramme (FBD) et Liste d’instructions (IL/STL)',
          'Temporisateurs, compteurs et opérations arithmétiques'
        ]
      },
      {
        moduleTitle: 'Module 3 : Diagnostic et recherche de pannes',
        topics: [
          'Utilisation de la console ou du logiciel de programmation en mode ligne (Online)',
          'Forçage d’entrées/sorties et préconisations de sécurité',
          'Interprétation des voyants de diagnostic de la CPU'
        ]
      }
    ],
    targetAudience: 'Techniciens de maintenance, électromécaniciens, opérateurs régleurs, ingénieurs débutants en automatisme.',
    prerequisites: 'Notions de base en électricité industrielle et lecture de schémas électriques.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Initiation',
    modalities: 'Présentiel en nos locaux, sur site client (intra-entreprise) ou classe virtuelle.',
    practicalWork: '70% de travaux pratiques sur bancs pédagogiques réels équipés d’automates et de partie opérative.',
    equipmentAndSoftware: ['Bancs d’essai API (Siemens S7-1200 / Schneider Modicon M221)', 'Logiciels TIA Portal / EcoStruxure Machine Expert', 'Outillage de diagnostic & multimètre'],
    certification: 'Attestation de fin de formation et fiche d’évaluation des compétences acquises.',
    price: 'Sur devis (Tarif dégressif pour groupes d’entreprises)',
    featuredHome: true
  },
  {
    id: 'auto-02',
    title: 'Programmation Avancée des Automates API / PLC',
    category: 'automatisme',
    categoryLabel: 'Automatisme industriel',
    shortDescription: 'Maîtriser la structuration complexe des programmes, le traitement des signaux analogiques et la gestion des blocs fonctionnels.',
    objectives: [
      'Concevoir des programmes structurés en langages Grafcet (SFC), Structured Text (ST) et Ladder.',
      'Configurer et étalonner les cartes de mesure analogiques (4-20mA, 0-10V, PT100).',
      'Créer des blocs fonctionnels réutilisables (FB, FC, DB).',
      'Gérer le traitement des alarmes et des modes de marche/arrêt (GEMMA).'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Structuration de programmes complexes',
        topics: [
          'Découpage fonctionnel selon la norme CEI 61131-3',
          'Mise en œuvre des langages SFC (Grafcet) et ST (Texte Structuré)',
          'Gestion des blocs de données (DB global et instance)'
        ]
      },
      {
        moduleTitle: 'Module 2 : Traitement de la chaîne d’acquisition analogique',
        topics: [
          'Mise à l’échelle (Scaling) des grandeurs physiques (pression, température, débit)',
          'Régulation de boucle fermée (Notions de régulateur PID)'
        ]
      }
    ],
    targetAudience: 'Automaticiens, techniciens supérieurs, ingénieurs d’études et responsables maintenance.',
    prerequisites: 'Avoir suivi la formation initiation ou posséder une expérience pratique sur PLC.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Avancé',
    modalities: 'Présentiel en laboratoire ou sur site industriel client.',
    practicalWork: 'Exercices pratiques sur cahier des charges réel et simulations d’incidents de procédés.',
    equipmentAndSoftware: ['Siemens TIA Portal V18 / Schneider EcoStruxure', 'Bancs de process régulation température/pression'],
    certification: 'Attestation de fin de formation avec validation des objectifs pédagogiques.',
    price: 'Sur devis',
    featuredHome: false
  },
  {
    id: 'auto-03',
    title: 'Programmation des Interfaces Homme-Machine (IHM / HMI)',
    category: 'automatisme',
    categoryLabel: 'Automatisme industriel',
    shortDescription: 'Concevoir et déployer des écrans tactiles opérateurs ergonomiques reliés aux automates industriels.',
    objectives: [
      'Créer des vues synoptiques d’exploitation ergonomiques.',
      'Configurer les liaisons de communication entre l’IHM et le PLC.',
      'Développer la gestion des alarmes, des historiques et des courbes de tendance.',
      'Gérer les niveaux d’accès utilisateurs et la sécurité des données.'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Conception de synoptiques interactifs',
        topics: [
          'Design graphique et principes d’ergonomie industrielle',
          'Animation des objets, boutons, voyants et saisie de consignes'
        ]
      },
      {
        moduleTitle: 'Module 2 : Gestion des événements et données',
        topics: [
          'Journalisation des alarmes et des événements',
          'Graphes et courbes de tendance en temps réel',
          'Recettes de fabrication et sauvegarde des paramètres'
        ]
      }
    ],
    targetAudience: 'Techniciens en automatisme, développeurs d’équipements, services de maintenance.',
    prerequisites: 'Connaissances de base de la logique d’automatisation.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Intermédiaire',
    modalities: 'Présentiel ou à distance.',
    practicalWork: 'Création intégrale d’une interface de supervision sur écran tactile Siemens Comfort Panel / Schneider Magelis.',
    equipmentAndSoftware: ['WinCC Unified / Vijeo Designer', 'Pupitres tactiles industriels'],
    certification: 'Attestation de fin de formation.',
    price: 'Sur devis',
    featuredHome: false
  },
  {
    id: 'auto-04',
    title: 'Supervision Industrielle SCADA (WinCC / InTouch / PC Vue)',
    category: 'automatisme',
    categoryLabel: 'Automatisme industriel',
    shortDescription: 'Piloter et surveiller l’ensemble des installations d’un site de production grâce à un système SCADA centralisé.',
    objectives: [
      'Comprendre l’architecture client/serveur d’une supervision SCADA.',
      'Créer des synoptiques multipages animés connectés à un réseau d’automates.',
      'Archiver les données de production en base de données SQL.',
      'Gérer les serveurs d’alarmes, astreintes et exports de rapports.'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Architecture & Serveurs SCADA',
        topics: ['Topologie réseau de supervision', 'Serveurs OPC UA et serveurs de drivers']
      },
      {
        moduleTitle: 'Module 2 : Base de données & Historiques',
        topics: ['Archivage haute fréquence des variables', 'Base SQL et exportation automatique Excel/PDF']
      }
    ],
    targetAudience: 'Ingénieurs d’études, responsables informatique industrielle, chefs de projets automatismes.',
    prerequisites: 'Expérience requise en automatisme et réseaux d’entreprise.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Expert',
    modalities: 'Présentiel ou mixte.',
    practicalWork: 'Projet complet de supervision de site fictif avec basculement redondant.',
    equipmentAndSoftware: ['WinCC Professional / PcVue / Wonderware InTouch'],
    certification: 'Attestation de fin de formation.',
    price: 'Sur devis',
    featuredHome: false
  },
  {
    id: 'auto-05',
    title: 'Réseaux et Communication Industriels (PROFINET, Ethernet/IP, Modbus TCP)',
    category: 'automatisme',
    categoryLabel: 'Automatisme industriel',
    shortDescription: 'Configurer, diagnostiquer et sécuriser les réseaux de terrain industriels reliant automates, variateurs et E/S déportées.',
    objectives: [
      'Appréhender les protocoles Ethernet industriels (PROFINET, Ethernet/IP, Modbus TCP).',
      'Configurer la topologie matérielle et les adresses IP/Noms d’appareils.',
      'Utiliser des outils d’analyse trame (Wireshark) pour localiser les pannes réseau.',
      'Appliquer les bonnes pratiques de câblage et d’immunité CEM.'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Les standards des réseaux de terrain',
        topics: ['Différences entre Ethernet standard et Ethernet Temps Réel', 'Switchs administrés, VLAN et découpage sous-réseau']
      },
      {
        moduleTitle: 'Module 2 : Diagnostic et dépannage réseau',
        topics: ['Topologies en anneau (MRP/DLR)', 'Diagnostic de pannes de communication']
      }
    ],
    targetAudience: 'Techniciens réseaux industriels, automaticiens, ingénieurs réseaux et maintenance.',
    prerequisites: 'Bases en automatisme et micro-informatique.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Intermédiaire',
    modalities: 'Présentiel sur bancs d’essais avec équipements réseau réels.',
    practicalWork: 'Mise en réseau de 5 équipements de marques différentes avec capture de trames.',
    equipmentAndSoftware: ['Switchs Scalance / Hirschmann', 'Wireshark', 'Analysateurs PROFINET'],
    certification: 'Attestation de fin de formation.',
    price: 'Sur devis',
    featuredHome: false
  },
  {
    id: 'auto-06',
    title: 'Diagnostic Rapide des Systèmes Automatisés en Production',
    category: 'automatisme',
    categoryLabel: 'Automatisme industriel',
    shortDescription: 'Méthodologie opérationnelle pour réduire au minimum les temps d’arrêt machine lors de pannes sur systèmes automatisés.',
    objectives: [
      'Suivre une méthodologie structurée de recherche de panne.',
      'Isoler rapidement l’origine de la défaillance (Capteur, Actionneur, Câblage, Programme, Réseau).',
      'Procéder au remplacement de matériel défectueux en toute sécurité.'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Arbre de diagnostic et réflexes de sécurité',
        topics: ['Analyse des symptômes et historique des alarmes', 'Consignation électrique et sécurité des interventions']
      },
      {
        moduleTitle: 'Module 2 : Pratique de dépannage sous contrainte de temps',
        topics: ['Diagnostic d’entrées/sorties hors service', 'Remplacement d’une carte d’extension sans perte de paramètres']
      }
    ],
    targetAudience: 'Équipes de maintenance de quart, techniciens d’intervention d’urgence.',
    prerequisites: 'Pratique de l’environnement industriel.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Intermédiaire',
    modalities: 'Présentiel uniquement.',
    practicalWork: 'Dépannage en situation réelle sur lignes de test piégées.',
    equipmentAndSoftware: ['Ligne d’entraînement automatisée piégée'],
    certification: 'Attestation de fin de formation.',
    price: 'Sur devis',
    featuredHome: false
  },

  // --- B. VARIATEURS DE VITESSE ---
  {
    id: 'var-01',
    title: 'Paramétrage, Dépannage et Maintenance des Variateurs de Vitesse',
    category: 'variateurs',
    categoryLabel: 'Variateurs de vitesse',
    shortDescription: 'Maîtriser le fonctionnement, le choix, le paramétrage et la résolution de défauts des variateurs de fréquence pour moteurs électriques.',
    objectives: [
      'Comprendre les principes physiques de la variation de vitesse sur moteur asynchrone et synchrone.',
      'Câbler la partie puissance (Réseau, Moteur, Résistance de freinage) et la partie commande.',
      'Paramétrer les rampes, constantes V/f, contrôle vectoriel de flux et protections thermiques.',
      'Interpréter les codes d’alarmes et effectuer le diagnostic de pannes.'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Principes physiques et électronique de puissance',
        topics: [
          'Redresseur, bus continu, onduleur à IGBT et modulation PWM',
          'Influence sur le moteur électrique (surchauffe, isolement, roulements)'
        ]
      },
      {
        moduleTitle: 'Module 2 : Mise en service et paramétrage',
        topics: [
          'Lecture des plaques signalétiques moteur',
          'Procédure d’Auto-tuning (Identification des paramètres moteur)',
          'Configuration des entrées/sorties logiques et analogiques'
        ]
      },
      {
        moduleTitle: 'Module 3 : Diagnostic des pannes et maintenance préventive',
        topics: [
          'Traitement des défauts : Surintensité, Surtension bus DC, Sous-tension, Défaut de terre, Surchauffe',
          'Contrôle des IGBT, condensateurs de filtrage et ventilateurs de refroidissement'
        ]
      }
    ],
    targetAudience: 'Électriciens industriels, techniciens de maintenance, responsables d’équipements, automaticiens.',
    prerequisites: 'Habilitation électrique minimale et notions sur le moteur asynchrone.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Intermédiaire',
    modalities: 'Présentiel sur nos bancs de test multi-marques ou sur votre site d’exploitation.',
    practicalWork: '80% de manipulations directes sur consoles d’affichage et logiciels de paramétrage.',
    equipmentAndSoftware: ['Variateurs Siemens Sinamics, Schneider Altivar, Danfoss VLT, ABB ACS', 'Logiciels Starter/Drive Expert/SoMove', 'Moteurs de test freines'],
    certification: 'Attestation de fin de formation.',
    price: 'Sur devis',
    featuredHome: true
  },
  {
    id: 'var-02',
    title: 'Choix, Dimensionnement et Efficacité Énergétique des Variateurs',
    category: 'variateurs',
    categoryLabel: 'Variateurs de vitesse',
    shortDescription: 'Optimiser la consommation d’énergie des pompes, ventilateurs et compresseurs par le bon choix de variateur.',
    objectives: [
      'Calculer les couples nécessaires selon la charge (Couple constant vs Couple quadratique).',
      'Calculer les gains d’énergie réalisés par la variation de vitesse.',
      'Gérer les perturbations harmoniques et choisir les filtres adaptés (Filtres d’entrée/sortie, d/dt, sinusoïdaux).'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Dimensionnement des entraînements',
        topics: ['Courbes de charge et déclassement en altitude/température', 'Choix des résistances de freinage et réinjection réseau']
      },
      {
        moduleTitle: 'Module 2 : Qualité d’énergie et harmoniques',
        topics: ['Réglementation et calcul du THDi', 'Filtres passifs et actifs']
      }
    ],
    targetAudience: 'Ingénieurs d’études, responsables énergie, responsables de maintenance.',
    prerequisites: 'Connaissances en électrotechnique industrielle.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Avancé',
    modalities: 'Présentiel ou à distance.',
    practicalWork: 'Audits énergétiques simulés et calcul de ROI sur cas d’études industriels.',
    equipmentAndSoftware: ['Outils de calcul de dimensionnement constructeurs'],
    certification: 'Attestation de fin de formation.',
    price: 'Sur devis',
    featuredHome: false
  },

  // --- C. ÉNERGIE ET ÉLECTROTECHNIQUE ---
  {
    id: 'ene-01',
    title: 'Installations Électriques Industrielles et Schémathique',
    category: 'energie',
    categoryLabel: 'Énergie et électrotechnique',
    shortDescription: 'Apprendre à concevoir, lire, interpréter et dépanner des armoires et schémas électriques industriels.',
    objectives: [
      'Lire couramment la symbolique normalisée selon les normes CEI / NF C 15-100.',
      'Comprendre le fonctionnement des appareillages de coupure, de protection et de commande (Contacteurs, Disjoncteurs, Relais thermiques).',
      'Localiser efficacement les pannes électriques dans une armoire industrielle.'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Normes et appareillages de commande',
        topics: ['Régimes de neutre (TT, TN, IT)', 'Disjoncteurs moteurs, différentiels et contacteurs']
      },
      {
        moduleTitle: 'Module 2 : Lecture et suivi de schémas complexes',
        topics: ['Repérage des borniers, câbles et composants', 'Traçage des boucles de sécurité et arrêts d’urgence']
      }
    ],
    targetAudience: 'Électriciens, techniciens de maintenance, monteurs câbleurs.',
    prerequisites: 'Aucun prérequis spécifique, ouvert aux profils en reconversion.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Initiation',
    modalities: 'Présentiel.',
    practicalWork: 'Lecture de dossiers constructeurs réels et dépannage sur armoire sous tension sécurisée.',
    equipmentAndSoftware: ['Armoire électrique de distribution industrielle', 'Multimètres & contrôleurs d’isolement'],
    certification: 'Attestation de fin de formation.',
    price: 'Sur devis',
    featuredHome: true
  },
  {
    id: 'ene-02',
    title: 'Qualité de l’Énergie, Perturbations et Systèmes Photovoltaïques',
    category: 'energie',
    categoryLabel: 'Énergie et électrotechnique',
    shortDescription: 'Mesurer, analyser et corriger la qualité du réseau électrique industriel et intégrer la production photovoltaïque.',
    objectives: [
      'Analyser les creux de tension, harmoniques et déséquilibres du réseau.',
      'Utiliser des centrales de mesure et analyseurs de réseau.',
      'Comprendre le fonctionnement et le raccordement des onduleurs photovoltaïques industriels.'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Analyse de la qualité de l’onde électrique',
        topics: ['Facteur de puissance (Cos phi) et compensation d’énergie réactive', 'Mesure des harmoniques jusqu’au rang 50']
      },
      {
        moduleTitle: 'Module 2 : Systèmes photovoltaïques industriels',
        topics: ['Raccordement, autoconsommation et sécurité des installations PV']
      }
    ],
    targetAudience: 'Responsables d’infrastructures, ingénieurs électriciens, responsables QHSE.',
    prerequisites: 'Habilitation électrique recommandée.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Avancé',
    modalities: 'Présentiel avec mesures réelles.',
    practicalWork: 'Prise de mesure sur réseau électrique avec analyseur Fluke / Chauvin Arnoux.',
    equipmentAndSoftware: ['Analyseur de réseau triphasé Fluke 435', 'Banc de charge capacitif/inductif'],
    certification: 'Attestation de fin de formation.',
    price: 'Sur devis',
    featuredHome: false
  },

  // --- D. MAINTENANCE INDUSTRIELLE ---
  {
    id: 'maint-01',
    title: 'Méthodologie de Recherche de Pannes et Diagnostic sur Lignes Automatisées',
    category: 'maintenance',
    categoryLabel: 'Maintenance industrielle',
    shortDescription: 'Adopter une stratégie systématique et rigoureuse pour éliminer les arrêts non planifiés et maximiser le taux de rendement synthétique (TRS).',
    objectives: [
      'Maîtriser les outils de diagnostic systématique (5 Pourquoi, Ishikawa, Arbre des causes).',
      'Diagnostiquer les pannes combinées (Mécaniques, Pneumatiques, Électriques, Électroniques).',
      'Identifier les défaillances récurrentes des cartes électroniques.'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Méthodes de diagnostic méthodique',
        topics: ['Observation des symptômes et levée de doute', 'Utilisation des contrôleurs physiques et logiques']
      },
      {
        moduleTitle: 'Module 2 : Dépannage pluridisciplinaire',
        topics: ['Capteurs inductifs, capacitifs, optiques et codeurs', 'Électrovannes, vérins pneumatiques et distributeurs']
      }
    ],
    targetAudience: 'Techniciens de maintenance polyvalents, chefs d’équipe, responsables maintenance.',
    prerequisites: 'Expérience générale en maintenance.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Intermédiaire',
    modalities: 'Présentiel.',
    practicalWork: 'Cas pratiques piégés sur système de transfert automatisé.',
    equipmentAndSoftware: ['Ligne de conditionnement automatisée avec pannes programmables'],
    certification: 'Attestation de fin de formation.',
    price: 'Sur devis',
    featuredHome: true
  },
  {
    id: 'maint-02',
    title: 'Diagnostic et Contrôle des Cartes Électroniques Industrielles',
    category: 'maintenance',
    categoryLabel: 'Maintenance industrielle',
    shortDescription: 'Savoir tester hors tension et sous tension les composants discrets des cartes électroniques de puissance et de commande.',
    objectives: [
      'Identifier la fonction des composants électroniques (Diodes, Transistors, IGBT, Optocoupleurs, Condensateurs).',
      'Mesurer et tester les composants à l’aide du multimètre et de l’oscilloscope.',
      'Détecter les courts-circuits, fuites et dérives de valeurs sans dessouder.'
    ],
    program: [
      {
        moduleTitle: 'Module 1 : Composants de l’électronique de puissance',
        topics: ['Fonctionnement des alim à découpage', 'Vérification des ponts de diodes et modules de puissance']
      },
      {
        moduleTitle: 'Module 2 : Utilisation des outils de laboratoire',
        topics: ['Oscilloscope numérique, générateur de signaux, station de dessoudage']
      }
    ],
    targetAudience: 'Techniciens en électronique, électromécaniciens de maintenance.',
    prerequisites: 'Avoir des connaissances de base en électricité.',
    duration: 'Selon le niveau des participants et le besoin',
    level: 'Intermédiaire',
    modalities: 'Présentiel en atelier.',
    practicalWork: 'Diagnostic réel de cartes électroniques de variateurs et d’automates HS.',
    equipmentAndSoftware: ['Postes d’essai électronique, oscilloscopes, générateurs de fonction'],
    certification: 'Attestation de fin de formation.',
    price: 'Sur devis',
    featuredHome: false
  }
];
