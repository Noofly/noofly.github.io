export const projects = [
  {
    id: 1,
    title: {
      en: "Personal Food Inventory Mobile App",
      fr: "Application Mobile de Gestion de Stocks Alimentaires"
    },
    category: "mobile-app",
    type: {
      en: "Mobile App",
      fr: "Application Mobile"
    },
    industry: {
      en: "Daily Life",
      fr: "Vie quotidienne"
    },
    complexity: "high",
    technologies: ["React Native (nativebase)", "Expo", "Firebase", "Redux Persist", "Jest", "CI/CD"],
    thumbnail: "/assets/images/stockchef-qr-illustration.png",
    liveUrl: null,
    metrics: {},
    description: {
      fr: `Face à l'ampleur du gaspillage alimentaire en France (10 millions de tonnes perdues chaque année selon l'ADEME), StockChef est né d'une volonté de donner aux foyers un outil concret pour mieux gérer leurs stocks et transformer leurs habitudes de consommation.\n\nL'application propose une expérience fluide : le scan des codes-barres via smartphone (technologie Expo), l'identification automatique des produits grâce à l'API Open Food Facts, la gestion intelligente des dates de péremption avec alertes personnalisées, et la suggestion de recettes adaptées à ce qu'il reste dans le frigo, générées par IA. \nDéveloppement actuellement en pause.`,
      en: `With food waste reaching 10 million tons per year in France (ADEME), StockChef was created to empower households with a practical tool to manage their food inventory and change consumption habits.\n\nThe app offers a seamless experience: barcode scanning via smartphone (using Expo), automatic product identification through the Open Food Facts API, smart expiration date tracking with custom alerts, and AI-powered recipe suggestions based on what's left in your fridge. StockChef also syncs with online grocery orders to keep your inventory up to date and help you avoid waste and double purchases.\n\nDevelopment is currently paused.`
    },
    shortDescription: {
      fr: `StockChef aide les familles à réduire le gaspillage alimentaire grâce à :\n- un scan intelligent,\n- des alertes de péremption,\n- des recettes IA.\n\nUn assistant malin pour consommer mieux, sans effort.\nDéveloppement actuellement en pause.`,
      en: `StockChef helps families fight food waste with:\n- smart scanning,\n- expiration alerts,\n- AI recipes.\n\nA clever assistant for smarter, easier consumption.\nDevelopment is currently paused.`
    },
    timeline: "6 Mois",
    client: "Projet personnel",
    year: 2025,
    featured: true,
    caseStudy: {
      problem: {
        fr: `Gérer les stocks alimentaires à la maison est souvent source de gaspillage et d'oublis. Les applications existantes sont peu adaptées au marché français et manquent d'automatisation.`,
        en: `Managing food inventory at home often leads to waste and forgotten products. Existing apps are not well adapted to the French market and lack automation.`
      },
      solution: {
        fr: `Développement d'une application mobile avec React Native et Expo, intégrant la reconnaissance de produits, la gestion des dates de péremption, des notifications intelligentes, et la génération de recettes personnalisées. Les données sont synchronisées via Firebase et la persistance est assurée par Redux Persist. CI/CD et tests automatisés avec Jest.`,
        en: `Developed a mobile app using React Native and Expo, featuring product recognition, expiration date management, smart notifications, and personalized recipe generation. Data is synced via Firebase and persistence is handled by Redux Persist. CI/CD and automated tests with Jest.`
      },
      results: [
        {
          fr: `Prototype fonctionnel testé sur Android et iOS. Les utilisateurs tests ont apprécié la simplicité d'usage, mais ils n'ont pas été séduits par la gestion des DLC car elle n'était pas automatique.`,
          en: `Functional prototype tested on Android and iOS. Test users appreciated the ease of use, but they were not convinced by the expiration date management since it was not automatic.`
        },
        {
          fr: `Projet mis en pause avant la mise en production.`,
          en: `Project paused before production release.`
        }
      ],
      lessonsLearned: {
        fr: `L'idée de StockChef reste pertinente, mais les contraintes techniques actuelles ne permettent pas d'accéder à la DLC via un simple scan : les utilisateurs devaient la saisir manuellement, ce qui est trop contraignant pour un usage quotidien. \nLa valeur ajoutée était donc trop faible pour envisager une monétisation, et la priorité du projet a été réduite. \n\nCependant, d'ici 2027, le code-barres sera progressivement remplacé par un QR Code augmenté qui permettra d'accéder à plus d'informations, notamment la DLC... \n\nLe projet n'est donc que temporairement en pause, en attendant cette évolution !`,
        en: `The StockChef idea remains relevant, but current technical constraints do not allow access to expiration dates via a simple scan: users had to enter them manually, which is too cumbersome for daily use. \nThe added value was too low to consider monetization, so the project's priority was reduced and development paused. \n\nHowever, by 2027, barcodes will gradually be replaced by enhanced QR codes that will provide more information, including expiration dates... \n\nSo the project is only on hold, waiting for this evolution!`
      },
      testimonial: {}
    },
    technicalDetails: {
      fr: `**Stack technique** :
React Native (Expo), Firebase, Redux Persist, Jest

**Architecture** :
- Application mobile uniquement (pas de backend custom)
- Données synchronisées en temps réel via Firebase
- Persistance locale avec Redux Persist

**Défis techniques** :
- Intégration du scan de code-barres (API Open Food Facts)
- Gestion des dates de péremption (formats multiples, saisie manuelle)
- Synchronisation multi-appareils

**Tests & CI/CD** :
- Tests unitaires avec Jest
- Déploiement automatisé via Expo

**Accessibilité & UX** :
- Contrastes respectés pour la lisibilité
- Navigation mobile simplifiée

**Évolutivité** :
- Architecture pensée pour intégrer le QR code augmenté à l'avenir

**Limites et choix assumés** :
- Pas de notifications push (MVP)
- Pas de backend custom (Firebase suffit pour le prototype)
- Projet mis en pause en attendant l'évolution des QR codes alimentaires
`,
      en: `**Tech stack**:
React Native (Expo), Firebase, Redux Persist, Jest

**Architecture**:
- Mobile-only app (no custom backend)
- Real-time data sync via Firebase
- Local persistence with Redux Persist

**Technical challenges**:
- Barcode scanning integration (Open Food Facts API)
- Expiration date management (multiple formats, manual entry)
- Multi-device sync

**Testing & CI/CD**:
- Tests unitaires avec Jest
- Déploiement automatisé via Expo

**Accessibility & UX**:
- High-contrast color scheme for readability
- Simplified mobile navigation

**Scalability**:
- Architecture designed to support enhanced QR codes in the future

**Limitations & choices**:
- No push notifications (MVP)
- No custom backend (Firebase is sufficient for the prototype)
- Project paused, awaiting evolution of food QR codes
`
    },
    architectureDiagram: {
      nodes: [
        {
          id: 'frontend',
          label: { fr: 'App Mobile (React Native/Expo)', en: 'Mobile App (React Native/Expo)' },
          icon: 'Smartphone',
          x: 40, y: 160,
          description: {
            fr: 'Interface utilisateur, scan de code-barres, gestion des stocks, suggestions de recettes IA.',
            en: 'User interface, barcode scanning, inventory management, AI recipe suggestions.'
          }
        },
        {
          id: 'firebase',
          label: { fr: 'Firebase (Realtime DB)', en: 'Firebase (Realtime DB)' },
          icon: 'Database',
          x: 500, y: 40,
          description: {
            fr: 'Stockage des données, synchronisation temps réel, authentification, gestion des utilisateurs.',
            en: 'Data storage, real-time sync, authentication, user management.'
          }
        },
        {
          id: 'openfood',
          label: { fr: 'Open Food Facts API', en: 'Open Food Facts API' },
          icon: 'Globe',
          x: 500, y: 160,
          description: {
            fr: 'Identification automatique des produits alimentaires via scan de code-barres.',
            en: 'Automatic food product identification via barcode scan.'
          }
        },
        {
          id: 'redux',
          label: { fr: 'Redux Persist', en: 'Redux Persist' },
          icon: 'Save',
          x: 500, y: 280,
          description: {
            fr: 'Persistance locale des données pour un usage hors-ligne et une expérience fluide.',
            en: 'Local data persistence for offline use and smooth experience.'
          }
        }
      ],
      links: [
        { from: 'frontend', to: 'firebase', label: { fr: 'Synchronisation', en: 'Sync' }, color: 'secondary' },
        { from: 'frontend', to: 'openfood', label: { fr: 'Scan produits', en: 'Product scan' }, color: 'accent' },
        { from: 'frontend', to: 'redux', label: { fr: 'Sauvegarde locale', en: 'Local storage' }, color: 'success' }
      ],
      marginLeft: '0',
    }
  },
  {
    id: 2,
    title: {
      en: "ERP Test Automation Tool",
      fr: "Automatisation de Tests pour ERP Locatif"
    },
    category: "desktop-app",
    type: {
      en: "Software",
      fr: "Logiciel"
    },
    industry: {
      en: "Real Estate",
      fr: "Immobilier"
    },
    complexity: "high",
    technologies: ["Java", "JavaFX", "Selenium", "Cucumber", "Dokiel", "MSI packager"],
    thumbnail: "/assets/images/SIAutomatisator_readme_extract.png",
    liveUrl: null,
    description: {
      fr: `SIAutomatisator est un logiciel qui permet d'automatiser des tâches sur l'ERP ULIS.\n\nInitialement pensé pour faciliter les montées de version en lançant des tests (unitaires/non-régression) d'un simple clic, il est également possible de créer ses propres tests depuis l'application. Tout ça sans avoir à coder la moindre ligne.\n\nCette application sert également à automatiser des tâches répétitives. Il est possible de créer un "test" pour effectuer la tâche d'un simple clic, mais il est également possible de créer un "test itératif" qui utilise un fichier .CSV pour effectuer la tâche autant de fois que nécessaire, avec des valeurs différentes à chaque fois (dépendant du fichier .CSV).\n\nChaque test est défini sous la forme d'un fichier .feature. Ce fichier permet de visualiser les étapes du test sans avoir à lire du code.`,
      en: `SIAutomatisator is a software that automates tasks on the ULIS ERP.\n\nOriginally designed to simplify version upgrades by running (unit/non-regression) tests with a single click, it also allows users to create their own tests directly from the app—no coding required.\n\nThe application also automates repetitive tasks. You can create a "test" to perform a task with one click, or an "iterative test" that uses a .CSV file to repeat the task as many times as needed, with different values each time (from the .CSV file).\n\nEach test is defined as a .feature file, making it easy to visualize test steps without reading code.`
    },
    shortDescription: {
      fr: "Automatisation des tests et tâches sur ERP ULIS sans coder. Création de tests personnalisés, exécution itérative via CSV, et visualisation claire des étapes.",
      en: "Automate tests and tasks on ULIS ERP without coding. Create custom tests, run iterative tasks via CSV, and easily visualize each step."
    },
    metrics: {
      users: 10,
      timeSaved: "Des dizaines d'heures gagnées à chaque montée de version et optimisation du temps des chefs de projets."
    },
    timeline: "1 an",
    client: "SIA Habitat",
    year: 2023,
    featured: true,
    caseStudy: {
      problem: {
        fr: "Les montées de version de l'ERP ULIS prenaient plusieurs semaines, voire mois, car les chefs de projets devaient vérifier manuellement plus de 200 tests de non-régression. Ce processus chronophage mobilisait entièrement les équipes ralentissant considérablement les déploiements.",
        en: "ULIS ERP version upgrades took several weeks, even months, as project managers had to manually verify over 200 non-regression tests. This time-consuming process fully occupied teams, significantly slowing down deployments."
      },
      solution: {
        fr: "Développement d'un outil no-code permettant d'automatiser les tests et tâches répétitives. L'interface intuitive permet de créer des scénarios personnalisés sans coder, avec exécution itérative via fichiers CSV. L'outil fonctionne en arrière-plan, libérant les équipes pour d'autres tâches.",
        en: "Developed a no-code tool to automate tests and repetitive tasks. The intuitive interface allows creating custom scenarios without coding, with iterative execution via CSV files. The tool runs in the background, freeing teams for other tasks."
      },
      results: [
        {
          fr: "Réduction drastique du temps de montée de version : de plusieurs semaines/mois à quelques heures d'exécution automatisée.",
          en: "Dramatic reduction in version upgrade time: from several weeks/months to a few hours of automated execution."
        },
        {
          fr: "Libération des chefs de projets qui peuvent désormais se concentrer sur leurs missions principales pendant que les tests s'exécutent en arrière-plan.",
          en: "Project managers are now freed up to focus on their core missions while tests run in the background."
        },
        {
          fr: "Élimination des erreurs humaines et amélioration de la traçabilité des tests avec des rapports de tests automatiques.",
          en: "Elimination of human errors and improved test traceability with automated tests reports."
        }
      ],
      lessonsLearned: {
        fr: "L'automatisation des tests dans un contexte métier spécifique nécessite une interface très intuitive et une documentation claire pour l'adoption par des non-développeurs. Le plus gros défi technique a été d'anticiper toutes les actions possibles pour permettre la création de tests en no-code. L'adoption prend du temps : les utilisateurs doivent développer le réflexe de créer un nouveau test dès qu'un besoin apparaît, mais une fois intégré, l'outil devient indispensable.",
        en: "Automating tests in a business-specific context requires a highly intuitive interface and clear documentation for adoption by non-developers. The biggest technical challenge was anticipating all possible actions to enable no-code test creation. Adoption takes time: users need to develop the reflex to create a new test whenever a need arises, but once integrated, the tool becomes indispensable."
      }
    },
    technicalDetails: {
      fr: `**Architecture** :\n- Application desktop JavaFX\n- Automatisation des tests via Selenium et Cucumber\n- Interface no-code pour la création de scénarios\n- Génération de documentation automatisée (Dokiel)\n- Packaging MSI pour déploiement\n\n**Points clés** :\n- Exécution de tests sur ERP ULIS sans code\n- Support des fichiers .feature et .CSV\n- Utilisation par des profils non techniques\n- Documentation claire intégrée\n\n**Défis** :\n- Robustesse des tests sur un ERP métier\n- Accessibilité et UX pour utilisateurs métier`,
      en: `**Architecture:**\n- JavaFX desktop application\n- Test automation with Selenium & Cucumber\n- No-code interface for scenario creation\n- Automated documentation (Dokiel)\n- MSI packaging for deployment\n\n**Key points:**\n- Run tests on ULIS ERP without coding\n- Supports .feature and .CSV files\n- Designed for non-technical users\n- Integrated clear documentation\n\n**Challenges:**\n- Robustness of tests on a business ERP\n- Accessibility and UX for business users`
    },
    architectureDiagram: {
      nodes: [
        {
          id: 'csv',
          label: { fr: 'Fichier CSV', en: 'CSV File' },
          icon: 'Table',
          x: 0, y: 40,
          description: {
            fr: 'Source de données pour les tests itératifs (valeurs de test multiples).',
            en: 'Data source for iterative tests (multiple test values).'
          }
        },
        {
          id: 'desktop',
          label: { fr: 'Logiciel (JavaFX)', en: 'Software (JavaFX)' },
          icon: 'Monitor',
          x: 0, y: 180,
          description: {
            fr: `Interface utilisateur graphique pour la création, l'exécution et le suivi des tests automatisés.`,
            en: 'Graphical user interface for creating, running, and monitoring automated tests.'
          }
        },
        {
          id: 'dokiel',
          label: { fr: 'Dokiel', en: 'Dokiel' },
          icon: 'BookOpen',
          x: 0, y: 320,
          description: {
            fr: 'Génération de la documentation utilisateur et des manuels.',
            en: 'User manual and documentation generation.'
          }
        },
        {
          id: 'cucumber',
          label: { fr: 'Cucumber (.feature)', en: 'Cucumber (.feature)' },
          icon: 'FileText',
          x: 400, y: 100,
          description: {
            fr: 'Définition des scénarios de test lisibles et modifiables sans coder.',
            en: 'Definition of readable, editable test scenarios without coding.'
          }
        },
        {
          id: 'selenium',
          label: { fr: 'Selenium', en: 'Selenium' },
          icon: 'Cpu',
          x: 400, y: 260,
          description: {
            fr: `Moteur d'automatisation pour piloter l'ERP et simuler les actions utilisateur.`,
            en: 'Automation engine to control the ERP and simulate user actions.'
          }
        },
        {
          id: 'erp',
          label: { fr: 'ERP ULIS', en: 'ULIS ERP' },
          icon: 'Server',
          x: 800, y: 160,
          description: {
            fr: 'Système cible sur lequel les tests et automatisations sont exécutés.',
            en: 'Target system where tests and automations are executed.'
          }
        }
      ],
      links: [
        { from: 'csv', to: 'desktop', label: { fr: 'Import itératif', en: 'Iterative import' }, color: 'secondary' },
        { from: 'desktop', to: 'cucumber', label: { fr: 'Création de scénarios', en: 'Scenario creation' }, color: 'success' },
        { from: 'desktop', to: 'selenium', label: { fr: 'Lancement des tests', en: 'Test execution' }, color: 'accent' },
        { from: 'cucumber', to: 'selenium', label: { fr: 'Définition des étapes', en: 'Step definitions' }, color: 'accent' },
        { from: 'selenium', to: 'erp', label: { fr: 'Automatisation des actions', en: 'Action automation' }, color: 'secondary' },
        { from: 'desktop', to: 'dokiel', label: { fr: 'Documentation', en: 'Documentation' }, color: 'cta' }
      ],
      marginLeft: '-5rem',
    }
  },
  {
    id: 3,
    title: {
      en: "Discord Social & Referral Campaign Bot",
      fr: "Bot Discord Social & Parrainage"
    },
    category: "bot-discord",
    type: {
      en: "Discord Bot",
      fr: "Bot Discord"
    },
    industry: {
      en: "Finance",
      fr: "Finance"
    },
    complexity: "medium",
    technologies: ["Java", "JDA", "SSH", "PostgreSQL"],
    thumbnail: "https://externlabs.com/blogs/wp-content/uploads/2023/04/discord-bot-1.jpg",
    liveUrl: null,
    description: {
      fr: `Bot Discord avancé pour la gestion de campagnes sociales et la croissance communautaire. \n\nLorsqu'un utilisateur rejoint le serveur, le bot crée un profil en base de données, identifie l'invitant, attribue des points de bienvenue à l'invité et récompense l'invitant (et son parrain, façon MLM). \nLes utilisateurs peuvent consulter leurs points, les modérateurs peuvent gérer les points de tous, et un leaderboard public motive la participation. \nToutes les commandes sont accessibles directement sur Discord, sans manipulation de la base de données. \nPlus de 3000 utilisateurs enregistrés.`,
      en: `Advanced Discord bot for social campaign management and community growth. \n\nWhen a user joins the server, the bot creates a profile in the database, tracks who invited them, gives welcome points to the new user, and rewards the inviter (and their own inviter, MLM-style). \nUsers can check their points, moderators can manage anyone's points, and a public leaderboard encourages participation. \nAll commands are available directly in Discord, no database access needed. \nOver 3000 registered users.`
    },
    shortDescription: {
      fr: "Bot Discord pour campagnes sociales : suivi des invitations, attribution de points, leaderboard, commandes modérateurs. 3000+ utilisateurs.",
      en: "Discord bot for social campaigns: invite tracking, points, leaderboard, moderator commands. 3000+ users."
    },
    metrics: {
      users: 3000,
      leaderboard: true
    },
    timeline: "1 mois",
    client: "Volume Finance",
    year: 2024,
    featured: true,
    caseStudy: {
      problem: {
        fr: "L'acquisition de nouveaux utilisateurs est un facteur primordial de croissance pour une entreprise, et qui de mieux placé que les utilisateurs eux-mêmes pour le faire ? \nCependant il est difficile de motiver et récompenser la croissance d'une communauté Discord sans outil automatisé. Le suivi manuel des invitations est impossible, et il faut gamifier l'expérience pour donner envie aux utilisateurs de participer. \nLe client cherchait donc à créer un outil pour automatiser la gestion de la communauté.",
        en: "New user acquisition is a key growth factor for a company, and who better than users themselves to do it? \nHowever, it's hard to motivate and reward Discord community growth without automation. Manual tracking of invites is impossible, and it's necessary to gamify the experience to make users want to participate. \nThe client wanted to create a tool to automate the community management."
      },
      solution: {
        fr: "Développement d'un bot Discord qui automatise la création de profils, le suivi des invitations, l'attribution de points de bienvenue et de parrainage (jusqu'à 2 niveaux), la gestion d'un leaderboard public et la modération des points via commandes Discord. \nToutes les actions sont traçables et accessibles sans accès direct à la base de données.",
        en: "Developed a Discord bot that automates profile creation, invite tracking, welcome and referral points (up to 2 levels), public leaderboard management, and moderator point controls via Discord commands. \nAll actions are traceable and require no direct database access."
      },
      results: [
        {
          fr: "Plus de 3000 utilisateurs enregistrés, forte participation aux campagnes sociales.",
          en: "Over 3000 registered users, strong participation in social campaigns."
        },
        {
          fr: "Gain de temps pour les modérateurs, fiabilité accrue du suivi des contributions.",
          en: "Time saved for moderators, increased reliability of contribution tracking."
        },
        {
          fr: "Leaderboard public qui motive la communauté à inviter et participer.",
          en: "Public leaderboard motivates the community to invite and participate."
        }
      ],
      lessonsLearned: {
        fr: "L'automatisation du suivi communautaire nécessite une gestion fine des droits et une interface simple pour les modérateurs. L'effet de réseau (parrainage à plusieurs niveaux) booste l'engagement, mais il faut surveiller les abus potentiels. \nCouplé à un autre bot qui vérifiait la légétimité des invitations, le bot Discord a permis de réduire les faux comptes et d'améliorer la qualité de la communauté.",
        en: "Automating community tracking requires fine-grained permission management and a simple interface for moderators. Multi-level referral boosts engagement, but potential abuse must be monitored. \nCoupled with another bot that verified the legitimacy of invites, the Discord bot reduced fake accounts and improved the quality of the community."
      },
      testimonial: {}
    },
    technicalDetails: {
      fr: `**Stack technique** :\nJava, JDA, PostgreSQL, SSH\n\n**Fonctionnalités principales** :\n- Création automatique de profils utilisateurs à l'arrivée sur le serveur\n- Suivi des invitations et attribution de points (bonus de bienvenue, parrainage à 2 niveaux)\n- Leaderboard public et commandes de consultation des points\n- Commandes modérateurs pour ajouter/retirer des points sans accès BDD\n- Migration et déploiement sur serveur distant via SSH\n\n**Défis** :\n- Gestion des droits et sécurité des commandes\n- Prévention des abus (multi-comptes, invitations frauduleuses)\n- Scalabilité pour 3000+ utilisateurs`,
      en: `**Tech stack**:\nJava, JDA, PostgreSQL, SSH\n\n**Main features**:\n- Automatic user profile creation on server join\n- Invite tracking and point attribution (welcome bonus, 2-level referral)\n- Public leaderboard and point check commands\n- Moderator commands to add/remove points without DB access\n- Migration and deployment to remote server via SSH\n\n**Challenges**:\n- Permission management and command security\n- Preventing abuse (multi-accounts, fake invites)\n- Scalability for 3000+ users`
    }
  },
  {
    id: 4,
    title: {
      en: "Mobile Game Automation Bot (Dungeon Crawler)",
      fr: "Bot d'Automatisation pour Jeu Mobile (Dungeon Crawler)"
    },
    category: "bot-game",
    type: {
      en: "Game Bot",
      fr: "Bot Jeu Vidéo"
    },
    industry: {
      en: "Video Game",
      fr: "Jeu vidéo"
    },
    complexity: "medium",
    technologies: ["Python", "Computer Vision", "OpenCV", "pyautogui", "Bluestacks"],
    thumbnail: "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.gam3s.gg%2FLoot_Legends_Banner_9268482432.png&w=3840&q=80",
    liveUrl: null,
    description: {
      fr: `Bot d'automatisation avancé pour le jeu mobile Loot Legends (un Dungeon Crawler), développé en Python avec des techniques de vision par ordinateur. \n\nLe bot utilise OpenCV et pyautogui pour analyser l'écran en temps réel, détecter les éléments de jeu (boutons, menus, ennemis), et automatiser les actions répétitives comme la navigation dans les donjons, la collecte de récompenses, et la gestion de l'inventaire. \n\nFonctionnalités principales : reconnaissance d'images pour identifier les éléments de jeu, navigation automatique dans les menus, gestion des combats et des récompenses, collecte de ressources, et optimisation de la progression du personnage. \n\nLe bot fonctionne via Bluestacks (émulateur Android) et permet de maximiser l'efficacité de jeu sans intervention humaine.`,
      en: `Advanced automation bot for Loot Legends mobile game (a Dungeon Crawler), developed in Python with computer vision techniques. \n\nThe bot uses OpenCV and pyautogui to analyze the screen in real-time, detect game elements (buttons, menus, enemies), and automate repetitive actions like dungeon navigation, reward collection, and inventory management. \n\nMain features: image recognition to identify game elements, automatic menu navigation, combat and reward management, resource collection, and character progression optimization. \n\nThe bot runs via Bluestacks (Android emulator) and maximizes gaming efficiency without human intervention.`
    },
    shortDescription: {
      fr: "Bot Python pour automatiser la progression dans un jeu mobile via reconnaissance d'images et Bluestacks. Navigation automatique, gestion des combats et collecte de récompenses.",
      en: "Python bot to automate progression in a mobile game using image recognition and Bluestacks. Automatic navigation, combat management, and reward collection."
    },
    metrics: {
      timeSaved: "Plusieurs heures par jour",
      efficiency: "Progression optimisée 24/7"
    },
    timeline: "1 mois",
    client: "Projet perso",
    year: 2024,
    featured: false,
    caseStudy: {
      problem: {
        fr: `Les jeux mobiles de type Dungeon Crawler sont conçus pour être addictifs avec des mécaniques de progression lentes et répétitives. Les joueurs doivent effectuer les mêmes actions des centaines de fois pour progresser : navigation dans les menus, lancement de combats, collecte de récompenses, gestion de l'inventaire. \n\nCette répétition peut prendre jusqu'à plusieurs heures par jour et devient rapidement fastidieuse, limitant l'engagement et la progression des joueurs qui ont d'autres activités.`,
        en: `Mobile Dungeon Crawler games are designed to be addictive with slow and repetitive progression mechanics. Players must perform the same actions hundreds of times to progress: menu navigation, combat initiation, reward collection, inventory management. \n\nThis repetition takes up to several hours per day and quickly becomes tedious, limiting engagement and progression of players who have other activities.`
      },
      solution: {
        fr: `Développement d'un bot Python qui utilise la vision par ordinateur pour analyser l'écran du jeu en temps réel. Le bot détecte automatiquement les éléments de jeu (boutons, menus, ennemis), navigue dans les interfaces, lance les combats, collecte les récompenses, et optimise la progression du personnage. \n\nL'automatisation fonctionne via Bluestacks, permettant une progression continue sans intervention humaine.`,
        en: `Developed a Python bot that uses computer vision to analyze the game screen in real-time. The bot automatically detects game elements (buttons, menus, enemies), navigates interfaces, initiates combat, collects rewards, and optimizes character progression. \n\nThe automation runs via Bluestacks, enabling continuous progression without human intervention.`
      },
      results: [
        {
          fr: "Gain de temps significatif : plusieurs heures par jour libérées pour d'autres activités.",
          en: "Significant time savings: several hours per day freed up for other activities."
        },
        {
          fr: "Progression optimisée, maximisant l'efficacité de jeu et les récompenses.",
          en: "Optimized progression, maximizing gaming efficiency and rewards."
        },
        {
          fr: "Réduction de la fatigue liée aux tâches répétitives, amélioration de l'expérience de jeu.",
          en: "Reduction of fatigue from repetitive tasks, improved gaming experience."
        }
      ],
      lessonsLearned: {
        fr: `L'automatisation de jeux mobiles nécessite une adaptation constante aux mises à jour du jeu qui peuvent changer l'interface. La reconnaissance d'images doit être robuste pour gérer les variations de résolution, de couleur, et d'éclairage. \n\nLes jeux modernes intègrent souvent des systèmes anti-bot, il faut donc concevoir des comportements qui simulent l'activité humaine (délais aléatoires, mouvements naturels). \n\nL'automatisation permet de profiter du jeu sans les contraintes de temps, mais il faut rester conscient des aspects éthiques et des conditions d'utilisation.`,
        en: `Automating mobile games requires constant adaptation to game updates that can change the interface. Image recognition must be robust to handle resolution, color, and lighting variations. \n\nModern games often integrate anti-bot systems, so behaviors that simulate human activity must be designed (random delays, natural movements). \n\nAutomation allows enjoying the game without time constraints, but ethical aspects and terms of service must be considered.`
      },
      testimonial: {}
    },
    technicalDetails: {
      fr: `**Stack technique** :\nPython, OpenCV (cv2), pyautogui, numpy, Bluestacks\n\n**Architecture** :\n- Bot de vision par ordinateur pour analyse d'écran\n- Automatisation des actions via pyautogui\n- Émulation Android via Bluestacks\n- Gestion d'état et de navigation\n\n**Fonctionnalités principales** :\n- Reconnaissance d'images pour identifier les éléments de jeu\n- Navigation automatique dans les menus et interfaces\n- Gestion des combats et des récompenses\n- Collecte automatique de ressources et d'objets\n- Optimisation de la progression du personnage\n- Gestion de l'inventaire et des équipements\n\n**Défis techniques** :\n- Robustesse de la reconnaissance d'images (résolution, éclairage, couleurs)\n- Adaptation aux mises à jour du jeu qui changent l'interface\n- Simulation de comportements humains pour éviter la détection\n- Gestion des erreurs et des cas d'échec\n- Optimisation des performances pour une exécution fluide\n\n**Contournement Anti-Bots** :\n\n- Comportements qui simulent l'activité humaine\n- Délais aléatoires et mouvements naturels\n- Surveillance pour détecter les changements d'interface\n\n**Évolutivité** :\n- Architecture modulaire pour ajouter de nouvelles fonctionnalités\n- Configuration flexible pour différents jeux\n- Système de templates pour la reconnaissance d'images`,
      en: `**Tech stack**:\nPython, OpenCV (cv2), pyautogui, numpy, Bluestacks\n\n**Architecture**:\n- Computer vision bot for screen analysis\n- Action automation via pyautogui\n- Android emulation via Bluestacks\n- State and navigation management\n\n**Main features**:\n- Image recognition to identify game elements\n- Automatic navigation in menus and interfaces\n- Combat and reward management\n- Automatic resource and item collection\n- Character progression optimization\n- Inventory and equipment management\n\n**Technical challenges**:\n- Robustness of image recognition (resolution, lighting, colors)\n- Adaptation to game updates that change the interface\n- Simulation of human behaviors to avoid detection\n- Error handling and failure cases\n- Performance optimization for smooth execution\n\n**Security and ethics**:\n- Respect for game terms of service\n- Behaviors that simulate human activity\n- Random delays and natural movements\n- Monitoring to detect interface changes\n\n**Scalability**:\n- Modular architecture to add new features\n- Flexible configuration for different games\n- Template system for image recognition`
    }
  },
  {
    id: 5,
    title: {
      en: "NFT Collection Discord Bot (Blockchain Integration)",
      fr: "Bot Discord NFT avec Lecture Blockchain"
    },
    category: "bot-discord",
    type: {
      en: "Discord Bot",
      fr: "Bot Discord"
    },
    industry: {
      en: "Blockchain",
      fr: "Blockchain"
    },
    complexity: "medium",
    technologies: ["Java", "JDA", "OpenSea API", "Web3"],
    thumbnail: "https://i2.seadn.io/ethereum/0x58fd1513b3d07dff3b982b01c9ba8e3bbb7806bc/8d78018060336ca99f02972fb57d31a6.jpeg?w=1000",
    liveUrl: null,
    description: {
      fr: `Bot Discord avancé pour la collection NFT "One Eyed Guys", développé en Java avec JDA. \n\nLe bot utilisait l'API OpenSea pour suivre les ventes en temps réel, afficher les statistiques de la collection (prix floor, volume, rareté), et automatiser la gestion des rôles Discord selon les NFTs détenus par chaque utilisateur. \n\nFonctionnalités principales : suivi automatique des transactions via OpenSea, calcul des statistiques de rareté, attribution automatique des rôles VIP selon la détention de NFTs, commandes de consultation de sa collection et des détails de chaque NFT à la demande. \n\nLe bot a servi pendant la période de lancement de la collection, facilitant la gestion de la communauté et l'engagement des holders. Il a été arrêté suite aux changements de politique de l'API OpenSea qui est devenue trop restrictive.`,
      en: `Advanced Discord bot for the "One Eyed Guys" NFT collection, developed in Java with JDA. \n\nThe bot used the OpenSea API to track sales in real-time, display collection statistics (floor price, volume, rarity), and automate Discord role management based on NFTs held by each user. \n\nMain features: automatic transaction tracking via OpenSea, rarity statistics calculation, automatic VIP role assignment based on NFT ownership, collection and NFT details commands. \n\nThe bot served during the collection's launch period, facilitating community management and holder engagement. It was discontinued due to OpenSea API policy changes that became too restrictive.`
    },
    shortDescription: {
      fr: "Bot Discord pour collection NFT : suivi OpenSea temps réel, statistiques de rareté, attribution automatique des rôles VIP selon les NFTs détenus.",
      en: "Discord bot for NFT collection: real-time OpenSea tracking, rarity statistics, automatic VIP role assignment based on NFT ownership."
    },
    metrics: {
      users: 200,
      status: "Bot désactivé suite aux changements de politique de l'API OpenSea"
    },
    timeline: "3 mois",
    client: "One Eyed Guys NFT",
    year: 2021,
    featured: false,
    caseStudy: {
      problem: {
        fr: `La gestion d'une communauté NFT en pleine croissance nécessitait un suivi constant des transactions, des prix et des détenteurs. Les modérateurs ne pouvant pas passer des heures à vérifier manuellement les wallets des membres pour attribuer les rôles VIP, et les utilisateurs demandaient constamment des informations sur les prix et les statistiques de la collection. \n\nSans automatisation, il était impossible de maintenir une communauté engagée et de fournir les informations en temps réel que les holders attendaient.`,
        en: `Managing a growing NFT community required constant tracking of transactions, prices, and holders. Moderators couldn't spent hours manually checking member wallets to assign VIP roles, and users constantly requested information about prices and collection statistics. \n\nWithout automation, it was impossible to maintain an engaged community and provide the real-time information that holders expected.`
      },
      solution: {
        fr: `Développement d'un bot Discord qui utilise l'API OpenSea pour récupérer les données de la collection en temps réel. Le bot surveille automatiquement les transactions de la collection, calcule les statistiques de rareté, attribue les rôles VIP selon la détention de NFTs, et fournit des commandes pour consulter sa collection, ou les détails d'un NFT à la demande. \n\nL'intégration OpenSea permet un accès fiable aux données de marché et aux métadonnées des NFTs.`,
        en: `Developed a Discord bot that uses the OpenSea API to retrieve collection data in real-time. The bot automatically monitors collection transactions, calculates rarity statistics, assigns VIP roles based on NFT ownership, and provides commands to check collection or NFT details. \n\nOpenSea integration provides reliable access to market data and NFT metadata.`
      },
      results: [
        {
          fr: "Communauté de 200 utilisateurs actifs avec engagement élevé grâce aux informations temps réel.",
          en: "Community of 200 active users with high engagement thanks to real-time information."
        },
        {
          fr: "Réduction drastique du temps de modération : attribution automatique des rôles VIP.",
          en: "Dramatic reduction in moderation time: automatic VIP role assignment."
        },
        {
          fr: "Transparence totale sur les transactions et les prix, renforçant la confiance des holders.",
          en: "Total transparency on transactions and prices, strengthening holder confidence."
        }
      ],
      lessonsLearned: {
        fr: `L'utilisation d'APIs tierces comme OpenSea offre une facilité de développement mais expose à la dépendance aux changements de politique de ces plateformes. L'API OpenSea a évolué vers des restrictions plus strictes, rendant le bot obsolète sans refactorisation majeure. \n\nDans l'écosystème NFT, les besoins évoluent très rapidement et les outils doivent être conçus pour être facilement adaptables. La période de lancement d'une collection NFT est critique et nécessite des outils automatisés, mais une fois la collection établie, l'utilisation diminue naturellement. \n\nIl est important d'anticiper l'obsolescence des APIs et de prévoir des alternatives ou une architecture modulaire pour faciliter les migrations futures.`,
        en: `Using third-party APIs like OpenSea offers development ease but exposes dependency on platform policy changes. The OpenSea API evolved toward stricter restrictions, making the bot obsolete without major refactoring. \n\nIn the NFT ecosystem, needs evolve very quickly and tools must be designed to be easily adaptable. The launch period of an NFT collection is critical and requires automated tools, but once the collection is established, usage naturally decreases. \n\nIt's important to anticipate API obsolescence and plan alternatives or modular architecture to facilitate future migrations.`
      },
      testimonial: {}
    },
    technicalDetails: {
      fr: `**Stack technique** :\nJava, JDA, OpenSea API, Web3\n\n**Architecture** :\n- Bot Discord avec intégration API OpenSea\n- Surveillance des transactions de collection en temps réel\n- Calcul automatique des statistiques de rareté\n- Gestion des rôles Discord selon la détention de NFTs\n\n**Fonctionnalités principales** :\n- Suivi automatique des ventes et achats de la collection via OpenSea\n- Calcul et affichage du prix floor et du volume\n- Attribution automatique des rôles VIP selon les NFTs détenus\n- Commandes de consultation de sa collection et des détails d'un NFT\n- Statistiques de rareté en temps réel\n\n**Défis techniques** :\n- Gestion des timeouts et erreurs réseau OpenSea\n- Synchronisation des rôles Discord avec les wallets\n- Optimisation des requêtes API pour éviter les rate limits\n- Adaptation aux changements de politique de l'API OpenSea\n\n**Sécurité** :\n- Protection contre les attaques de spam\n- Gestion sécurisée des permissions Discord\n- Validation des données OpenSea\n\n**Évolutivité** :\n- Architecture modulaire pour ajouter de nouvelles collections\n- Support multi-chaînes (Ethereum, Polygon, etc.)\n- Possibilité de migration vers d'autres APIs NFT`,
      en: `**Tech stack**:\nJava, JDA, OpenSea API, Web3\n\n**Architecture**:\n- Discord bot with OpenSea API integration\n- Real-time collection transaction monitoring\n- Automatic rarity statistics calculation\n- Discord role management based on NFT ownership\n\n**Main features**:\n- Automatic tracking of collection sales and purchases via OpenSea\n- Floor price and volume calculation and display\n- Automatic VIP role assignment based on owned NFTs\n- Collection and NFT details commands\n- Real-time rarity statistics\n\n**Technical challenges**:\n- Handling OpenSea network timeouts and errors\n- Discord role synchronization with wallets\n- API query optimization to avoid rate limits\n- Adaptation to OpenSea API policy changes\n\n**Security**:\n- Protection against spam attacks\n- Secure Discord permission management\n- OpenSea data validation\n\n**Scalability**:\n- Modular architecture to add new collections\n- Multi-chain support (Ethereum, Polygon, etc.)\n- Possibility to migrate to other NFT APIs`
    }
  },
  {
    id: 6,
    title: {
      en: "Dofus Autonomous Farming Bot",
      fr: "Bot Dofus Exploration & Combat"
    },
    category: "bot-game",
    type: {
      en: "Game Bot",
      fr: "Bot Jeu Vidéo"
    },
    industry: {
      en: "Video Game",
      fr: "Jeu vidéo"
    },
    complexity: "medium",
    technologies: ["Python", "Computer Vision"],
    thumbnail: "/assets/images/Dofus.png",
    liveUrl: null,
    description: {
      fr: `Bot Python pour Dofus, capable de chasser automatiquement les monstres de la zone d'Incarnam. 
Il utilise OpenCV, pyautogui, pytesseract et numpy pour reconnaître la carte, déterminer sa position, détecter les monstres à l'écran, lancer les combats et les sorts, puis envoyer une capture d'écran du butin sur Discord. 
Le bot navigue intelligemment sur la carte, évite les allers-retours inutiles, et redétermine sa position automatiquement s'il est perdu ou après une défaite. 
Il est aussi possible de limiter la chasse à une sous-zone (sous-graphe) spécifique si besoin.`,
      en: `Python bot for Dofus, able to automatically hunt monsters in the Incarnam area. 
It uses OpenCV, pyautogui, pytesseract, and numpy to recognize the map, determine its position, detect monsters on screen, start fights and cast spells, then send a screenshot of the loot to Discord. 
The bot navigates the map intelligently, avoids useless back-and-forth, and recalculates its position if lost or after a defeat. 
It is also possible to restrict hunting to a specific subzone (subgraph) if desired.`
    },
    shortDescription: {
      fr: "Bot Python pour automatiser la chasse aux monstres sur Dofus.",
      en: "Python bot to automate monster hunting in Dofus."
    },
    metrics: null,
    timeline: "1 mois",
    client: "Projet perso",
    year: 2025,
    featured: false,
    caseStudy: {
      problem: {
        fr: "Automatiser la chasse aux monstres sur Dofus sans intervention humaine, tout en gérant la navigation, la reconnaissance visuelle et les combats.",
        en: "Automate monster hunting in Dofus without human intervention, handling navigation, visual recognition, and fights."
      },
      solution: {
        fr: "Développement d'un bot Python qui utilise la vision par ordinateur pour se repérer, détecter les monstres, gérer les combats et envoyer des rapports sur Discord.",
        en: "Developed a Python bot using computer vision to locate itself, detect monsters, manage fights, and send reports to Discord."
      },
      results: [
        {
          fr: "Chasse automatisée, gain de temps, suivi des loots et des échecs via Discord.",
          en: "Automated hunting, time saving, loot and defeat tracking via Discord."
        }
      ],
      lessonsLearned: {
        fr: "La robustesse du template matching et la gestion des cas d'erreur (perte, défaite) sont importantes pour un bot fiable et autonome.",
        en: "Robust template matching and error handling (lost, defeat) are key for a reliable and autonomous bot."
      },
      testimonial: {}
    },
    technicalDetails: {
      fr: `**Stack technique** :\nPython, Computer Vision, Bluestacks\n\n**Fonctionnalités** :\n- Automatisation des actions de jeu\n- Reconnaissance d'images pour navigation\n- Contrôle via Bluestacks\n\n**Défis** :\n- Adaptation aux changements d'interface du jeu`,
      en: `**Tech stack**:\nPython, Computer Vision, Bluestacks\n\n**Features**:\n- Game action automation\n- Image recognition for navigation\n- Control via Bluestacks\n\n**Challenges**:\n- Adapting to game interface changes`
    }
  }
];

// Fonction utilitaire pour obtenir les projets mis en avant (pour le carousel)
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Fonction utilitaire pour obtenir un projet par ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

// Fonction utilitaire pour obtenir les projets par catégorie
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
}; 