import { TechService } from '../types';

export const TECHNICAL_SERVICES: TechService[] = [
  {
    id: 'reparation',
    title: 'Réparation de Cartes Électroniques Industrielles',
    shortDescription: 'Diagnostic au composant, remise en état et tests en charge de vos cartes électroniques de variateurs, automates et machines.',
    fullDescription: 'Nos équipes spécialisées prennent en charge la réparation complète et le reconditionnement des cartes électroniques industrielles devenues introuvables ou coûteuses à remplacer à neuf.',
    subFeatures: [
      'Réparation des cartes électroniques de variateurs de vitesse (Commande & Puissance)',
      'Réparation des cartes de commande d’automates et cartes d’extension d’E/S',
      'Recherche approfondie et remplacement des composants défectueux (IGBT, condensateurs, optocoupleurs)',
      'Nettoyage ultra-sons, désoxydation, contrôle thermique et vernissage de protection',
      'Tests fonctionnels sur bancs de test sous charge réelle avant réexpédition',
      'Réparation des cartes électroniques intégrées aux machines industrielles spéciales'
    ],
    equipmentTypes: [
      'Variateurs de fréquence (Siemens, Danfoss, Altivar, ABB, Leroy-Somer)',
      'Modules d’alimentation à découpage & hacheurs',
      'Cartes d’axes, cartes d’asservissement & cartes d’E/S',
      'Pupitres opérateurs & écrans tactiles industriels'
    ],
    iconName: 'Cpu',
    ctaText: 'Demander une réparation'
  },
  {
    id: 'automatisme',
    title: 'Automatisme Industriel & Programmation API / PLC',
    shortDescription: 'Développement, modification, sauvegarde et rétrofit de programmes pour automates industriels et IHM.',
    fullDescription: 'Nous vous accompagnons de la conception du cahier des charges jusqu’à l’optimisation de vos lignes automatisées, pour accroître votre productivité et pérenniser vos installations.',
    subFeatures: [
      'Création de programmes neufs pour automates API/PLC (Siemens, Schneider, Rockwell, Omron, etc.)',
      'Modification, optimisation et ajout de fonctionnalités sur programmes existants',
      'Rétrofit et migration des anciens automates obsolètes vers les nouvelles gammes (ex: S7-300 vers S7-1500)',
      'Sauvegarde préventive (Backup) et restauration de sécurité des programmes PLC/IHM',
      'Programmation des interfaces Homme-Machine (IHM / HMI) et pupitres de commande',
      'Configuration des bus de communication industriels (PROFINET, Modbus TCP, Ethernet/IP)',
      'Assistance technique à la mise au point des machines de production'
    ],
    equipmentTypes: [
      'Automates Siemens S7-1200 / S7-1500 / S7-300 / LOGO!',
      'Schneider Modicon M221 / M241 / M258 / Premium',
      'Rockwell ControlLogix / CompactLogix / MicroLogix',
      'Écrans tactiles Siemens Comfort Panel, Schneider Magelis, Weintek'
    ],
    iconName: 'Bot',
    ctaText: 'Demander une étude d’automatisme'
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic et Dépannage Technique sur Site',
    shortDescription: 'Intervention d’urgence et diagnostic méthodique de vos pannes électriques, électroniques et d’automatisme.',
    fullDescription: 'Lorsqu’une ligne s’arrête, chaque minute compte. Nos ingénieurs et techniciens interviennent directement sur site ou à distance pour identifier l’origine exacte du dysfonctionnement.',
    subFeatures: [
      'Recherche approfondie des pannes électriques, électroniques et d’automatisme',
      'Diagnostic poussé des variateurs de vitesse et des boucles de régulation',
      'Analyse des historiques d’alarmes et levée de doute sur les capteurs/actionneurs',
      'Dépannage d’urgence sur machines automatisées de production',
      'Intervention rapide sur site dans notre zone de couverture',
      'Assistance technique à distance par télémaintenance sécurisée lorsque disponible'
    ],
    equipmentTypes: [
      'Lignes de conditionnement & d’emballage',
      'Groupes de pompage & ventilation industrielle',
      'Presses, extrudeuses & malaxeurs',
      'Convoyeurs & ponts roulants'
    ],
    iconName: 'Wrench',
    ctaText: 'Demander une intervention d’urgence'
  },
  {
    id: 'installation',
    title: 'Installation et Mise en Service des Équipements',
    shortDescription: 'Intégration, câblage, paramétrage et essais fonctionnels de vos nouvelles armoires et sous-ensembles industriels.',
    fullDescription: 'Assurez-vous d’une mise en service conforme aux normes constructeurs et aux exigences de sécurité, garantissant la longévité de votre investissement.',
    subFeatures: [
      'Installation physique et raccordement des nouveaux équipements industriels',
      'Paramétrage sur mesure des variateurs de vitesse et démarreurs progressifs',
      'Mise en service complète des machines et systèmes de contrôle',
      'Vérification point par point des Entrées/Sorties (Point-to-Point I/O Check)',
      'Essais à vide et essais de fonctionnement en charge réelle',
      'Formation sur le terrain des opérateurs et des équipes d’exploitation',
      'Accompagnement et suivi d’alignement après la mise en service'
    ],
    equipmentTypes: [
      'Armoires de distribution & coffrets d’automatisme',
      'Armoires de variation de vitesse forte puissance',
      'Systèmes de régulation de procédés',
      'Postes de transformation & sous-stations'
    ],
    iconName: 'Settings',
    ctaText: 'Demander une mise en service'
  }
];
