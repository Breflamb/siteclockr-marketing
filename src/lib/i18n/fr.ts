import type { Messages } from "./types";

export const fr: Messages = {
  locale: "fr",
  htmlLang: "fr-FR",

  nav: [
    { label: "Fonctionnalités", href: "/#features" },
    { label: "Comment ça marche", href: "/#how-it-works" },
    { label: "Conformité", href: "/#compliance" },
    { label: "Tarifs", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],

  header: {
    blog: "Blog",
    contact: "Contact",
    login: "Connexion",
    startFree: "Commencer gratuitement",
    openMenu: "Ouvrir le menu",
    chooseCountry: "Choisir votre pays",
    homeAria: "Accueil SiteClockr",
  },

  footer: {
    product: "Produit",
    company: "Entreprise",
    privacy: "Confidentialité",
    gdpr: "RGPD",
    copyright: (year, name) => `© ${year} ${name}. Tous droits réservés.`,
    madeIn: "Conçu en Irlande pour les équipes BTP et terrain.",
    description:
      "SiteClockr est un suivi du temps par GPS et QR pour les équipes BTP et terrain. Pointages géolocalisés, suivi des cartes BTP et habilitations avec rappels d'expiration, vue en direct sur le chantier et exports CSV paie — gratuit pour démarrer.",
  },

  hero: {
    eyebrow: "Temps & présence pour le BTP",
    h1Line1: "Pointez l'équipe.",
    h1Highlight: "Prouvez qui était sur le chantier.",
    ctaStart: "Commencer gratuitement",
    ctaHow: "Voir comment ça marche",
    bullets: ["Aucun matériel à acheter", "Fonctionne sur tout téléphone", "Conforme RGPD"],
    mockCurrentlyOnSite: "Actuellement sur site",
    mockClockedInCount: "12 pointés",
    mockSiteName: "Résidence Les Rives",
    mockSiteLocation: "Bât. C · Lyon",
    mockOnSite: "Sur site",
    mockClockedInLabel: "Pointé",
    mockGeofence: "Dans le périmètre · 12 m du centre",
    mockManualHandling: "Manutention",
    mockValidExp: "Valide · exp. 06/2028",
    mockValidExp2: "Valide · exp. 03/2027",
    mockThisWeek: "Cette semaine",
    mockWeekHours: "38h 15m",
  },

  features: {
    eyebrow: "Tout sur le chantier",
    heading: "Une app pour le temps, la présence et la conformité",
    intro:
      "Fini les bons papier et les cartes expirées. SiteClockr tient un registre précis et vérifiable de qui était où — et s'il était habilité à y être.",
    gpsTitle: "Pointage GPS avec géorepérage",
    gpsBody: (locationLookup) =>
      `Définissez l'emplacement de chaque chantier via le GPS sur place, un repère sur la carte ou ${locationLookup}, puis fixez le rayon. Chaque pointage exige une position GPS en direct à l'intérieur du périmètre avant d'enregistrer l'heure.`,
    qrTitle: "QR code imprimable",
    qrBody:
      "Générez un QR code par chantier, imprimez-le ou téléchargez le PNG avec votre titre et pied de page. Ou Partagez le même lien de pointage par WhatsApp, e-mail, SMS ou copie — les ouvriers l'ouvrent sur leur téléphone, sans store.",
    liveTitle: "Vue en direct sur le chantier",
    liveBody:
      "Voyez exactement qui est pointé en ce moment, avec un compteur « actuellement sur site » filtrable par chantier ou nom. Corrigez ou ajoutez un pointage en quelques secondes.",
    expiryTitle: "Rappels d'expiration automatiques",
    expiryBody: (safetyCardShort) =>
      `Des rappels par e-mail partent avant l'expiration de ${safetyCardShort} et des certificats de manutention — personne n'arrive sur le chantier avec des documents périmés.`,
    timesheetsTitle: "Feuilles de temps hebdo & export CSV",
    timesheetsBody:
      "Les heures validées alimentent des feuilles de temps du lundi au lundi, exportées en CSV dans votre fuseau horaire — prêtes pour la paie.",
  },

  howItWorks: {
    eyebrow: "Comment ça marche",
    heading: "Opérationnel sur le chantier en un après-midi",
    intro:
      "Pas de matériel, pas d'installateur, pas de journée de formation. Si votre équipe sait envoyer un SMS, elle peut utiliser SiteClockr.",
    step1Title: "Configurez vos chantiers",
    step1Body: (locationLookup) =>
      `Ajoutez chaque chantier et son emplacement via le GPS sur place, un repère sur la carte ou ${locationLookup}, puis le rayon de géorepérage — ou imprimez un QR à l'entrée. Depuis l'admin, Partagez le lien du chantier par WhatsApp, e-mail, SMS ou copie — sans téléchargement depuis un store.`,
    step2Title: "L'équipe pointe",
    step2Body: (safetyCardShort) =>
      `Les ouvriers ouvrent SiteClockr sur leur téléphone et pointent. La position est vérifiée dans le périmètre, et le statut ${safetyCardShort} est contrôlé sur place.`,
    step3Title: "Vous récupérez les données",
    step3Body:
      "Les heures alimentent les feuilles de temps hebdo, la conformité est suivie automatiquement et les rappels partent avant toute expiration. Exportez pour la paie quand vous voulez.",
  },

  compliance: {
    eyebrow: "Conformité, gérée",
    cta: "Suivez votre première équipe gratuitement",
    registerTitle: "Registre des qualifications",
    statusValid: "Valide",
    statusExpiring: "Expire bientôt",
    workers: [
      { name: "J. Martin", role: "Ouvrier polyvalent" },
      { name: "M. Dubois", role: "Chef d'équipe" },
      { name: "P. Kowalski", role: "Ferrailleur" },
      { name: "T. Bernard", role: "Conducteur d'engins" },
    ],
  },

  moreFeatures: {
    eyebrow: "Sous le capot",
    heading: "Beaucoup d'autres détails utiles",
    intro: "Les fonctions qui font que SiteClockr s'adapte à vos chantiers.",
    abuseTitle: "Alertes d'abus",
    abuseBody:
      "Recevez un e-mail automatique si quelqu'un tente de pointer sur deux chantiers à la fois, ou si un même téléphone sert à pointer plusieurs ouvriers.",
    apiTitle: "API développeur & webhooks",
    apiBody:
      "Émettez des clés API pour que la paie et les outils RH lisent vos chantiers et statuts de pointage, et recevez les événements entrée/sortie via webhooks.",
    multiTitle: "Multi-chantiers & multi-entreprises",
    multiBody:
      "Gérez plusieurs chantiers — et même plusieurs entreprises — depuis un seul compte, chacun avec ses sites, rôles et ouvriers.",
    portalTitle: "Portail employé",
    portalBody:
      "Les ouvriers consultent leurs heures et demandent des congés depuis leur téléphone, sans encombrer le bureau.",
    manualTitle: "Saisies & corrections manuelles",
    manualBody:
      "Ajoutez ou corrigez un pointage quand quelqu'un oublie son téléphone. Les modifications sensibles sont enregistrées dans un journal d'audit admin.",
    backupTitle: "Sauvegardes complètes",
    backupBody:
      "Téléchargez une sauvegarde complète de votre organisation à tout moment en JSON ou lot CSV — vos données restent les vôtres.",
    coloursTitle: "Vos couleurs",
  },

  pricing: {
    eyebrow: "Tarifs",
    heading: "Commencez gratuitement. Évoluez avec l'équipe.",
    intro:
      "Sole Trader reste gratuit à vie. Les formules payantes démarrent à 29 €/mois avec 21 jours d'essai gratuit — sans carte — facturées en euro. Résiliable à tout moment.",
    mostPopular: "Le plus populaire",
    soleTrader: {
      name: "Sole Trader",
      price: "Gratuit",
      period: "à vie",
      blurb: "Pour un artisan seul qui quitte le papier.",
      features: [
        "1 utilisateur",
        "1 chantier actif (changement de site avec délai 24 h)",
        "1 ouvrier",
        "Pointage GPS & QR",
        "Feuilles de temps CSV hebdo",
      ],
      cta: "Commencer gratuitement",
    },
    starter: {
      name: "Starter",
      price: "29 €",
      period: "/ mois",
      trialNote: "21 jours d'essai gratuit · sans carte",
      blurb: "Pour une entreprise en croissance avec quelques chantiers.",
      features: (safetyLine) => [
        "Jusqu'à 3 chantiers actifs",
        "25 ouvriers inclus",
        "+1,50 €/mois par ouvrier supplémentaire",
        safetyLine,
        "Rappels d'expiration automatiques",
        "Vue en direct & alertes d'abus",
      ],
      cta: "Essai gratuit",
    },
    business: {
      name: "Business",
      price: "59 €",
      period: "/ mois",
      trialNote: "21 jours d'essai gratuit · sans carte",
      blurb: "Pour les entreprises établies avec plusieurs chantiers.",
      features: [
        "Jusqu'à 25 chantiers actifs",
        "50 ouvriers inclus",
        "+1,50 €/mois par ouvrier supplémentaire",
        "Tout Starter inclus",
        "Clés API & webhooks",
        "Sauvegardes complètes & journal d'audit",
      ],
      cta: "Essai gratuit",
    },
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Questions du bureau de chantier",
    q1: "Les ouvriers doivent-ils télécharger une app ?",
    a1: "Non. SiteClockr fonctionne dans le navigateur du téléphone — rien à installer depuis un store. Les ouvriers ouvrent un lien ou scannent le QR du chantier et pointent.",
    q2: "Comment fonctionne le pointage GPS ?",
    gpsAnswer: (locationLookup) =>
      `Vous définissez l'emplacement de chaque chantier comme vous voulez — GPS sur place, point sur la carte ou ${locationLookup} — puis un rayon en mètres. Au pointage, SiteClockr prend une position GPS fraîche et vérifie qu'elle est dans le périmètre avant d'enregistrer l'heure.`,
    q4: "Puis-je voir qui est sur le chantier maintenant ?",
    a4: "Oui. Le tableau de bord admin affiche une vue « actuellement pointés » avec un compteur filtrable par chantier ou nom, pour savoir qui est où en un coup d'œil.",
    q5: "Est-ce connecté à la paie ou d'autres systèmes ?",
    a5: "Vous pouvez exporter les feuilles de temps hebdo en CSV pour toute paie, télécharger des sauvegardes complètes en JSON ou CSV, et utiliser des clés API et webhooks pour que d'autres outils lisent vos chantiers et statuts et reçoivent les événements entrée/sortie.",
    q6: "Puis-je gérer plusieurs chantiers ou entreprises ?",
    a6: "Oui. SiteClockr est multi-chantiers et multi-entreprises. Votre formule fixe le nombre de chantiers et ouvriers actifs inclus ; les ouvriers supplémentaires coûtent 1,50 € chacun par mois.",
    q7: "Combien coûte le démarrage ?",
    a7: "Sole Trader est gratuit à vie. Starter est à 29 €/mois et Business à 59 €/mois, chacun avec 21 jours d'essai sans carte — ensuite un abonnement mensuel simple en euro, résiliable à tout moment.",
    q8: "Mes données sont-elles protégées ?",
    a8: "Oui. Les données sont stockées de façon sécurisée, la plateforme est conçue dans l'esprit RGPD, et vous pouvez télécharger une sauvegarde complète de votre organisation à tout moment. Vous gardez le contrôle des informations de vos ouvriers.",
  },

  ctaBand: {
    heading: "Faites pointer votre chantier dès demain matin",
    intro: "Configurez votre premier site en quelques minutes. Gratuit pour démarrer — sans carte, sans matériel, sans prise de tête.",
    startFree: "Commencer gratuitement",
    bookDemo: "Réserver une démo",
  },

  contact: {
    title: "Contact",
    intro: "Des questions sur SiteClockr, les tarifs ou la mise en place de votre premier chantier ? Écrivez-nous — nous répondons en général sous un jour ouvré.",
    demoIntro: "Parlez-nous de votre équipe et de vos chantiers — nous vous recontacterons pour organiser une démonstration.",
    nameLabel: "Nom",
    emailLabel: "E-mail",
    companyLabel: "Entreprise (facultatif)",
    companyPlaceholder: "Votre entreprise BTP",
    phoneLabel: "Téléphone (facultatif)",
    phonePlaceholder: "Pour vous rappeler",
    topicLabel: "Objet de votre message",
    topicOptions: {
      general: "Question générale",
      demo: "Réserver une démo",
      pricing: "Tarifs & formules",
      support: "Aide avec mon compte",
      other: "Autre",
    },
    teamSizeLabel: "Ouvriers en paie (facultatif)",
    teamSizePlaceholder: "Choisir…",
    teamSizeOptions: {
      unknown: "Je préfère ne pas dire",
      solo: "Uniquement moi",
      small: "2–25 ouvriers",
      medium: "26–50 ouvriers",
      large: "50+ ouvriers",
    },
    sitesLabel: "Chantiers actifs (facultatif)",
    sitesPlaceholder: "Choisir…",
    sitesOptions: {
      unknown: "Je préfère ne pas dire",
      one: "1 chantier",
      few: "2–3 chantiers",
      several: "4–10 chantiers",
      many: "10+ chantiers",
    },
    messageLabel: "Message",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
    demoMessagePlaceholder: "Nombre de chantiers, d'ouvriers, outil actuel…",
    submit: "Envoyer",
    sending: "Envoi…",
    successTitle: "Message envoyé",
    successBody: "Merci — nous avons bien reçu votre message et vous répondrons par e-mail sous peu.",
    errorGeneric: "Une erreur s'est produite. Réessayez ou écrivez-nous directement.",
    captchaRequired: "Veuillez compléter la vérification de sécurité ci-dessous.",
    notConfiguredTitle: "Formulaire indisponible",
    notConfiguredBody: "Le formulaire n'est pas configuré sur cette version. Écrivez-nous directement :",
    emailInstead: "Nous écrire",
    privacyNote: "Nous utilisons vos coordonnées uniquement pour vous répondre. Voir notre",
    privacyLink: "politique de confidentialité",
    demoSubject: "Demande de démo SiteClockr",
    defaultSubject: "Formulaire de contact SiteClockr",
  },
};
