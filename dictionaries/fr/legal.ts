import type { LegalDict } from "@/lib/i18n/types";

export const legal: LegalDict = {
  pending: {
    label: "En attente",
    body: "Les données d'immatriculation du titulaire (raison sociale, numéro fiscal, adresse) sont manquantes. Cet avis disparaît une fois lib/site.ts complété.",
  },
  ownerLabels: {
    name: "Raison sociale",
    taxId: "NIF",
    address: "Siège social",
    registry: "Immatriculation",
    email: "Email",
    phone: "Téléphone",
  },
  registryPending: "Inscription au Registre du commerce manquante",
  linkLabels: {
    legalNotice: "Mentions légales",
    privacy: "Politique de confidentialité",
    cookies: "Politique de cookies",
  },
  updated: "Dernière mise à jour : octobre 2026.",
  notice: {
    title: "Mentions légales",
    intro: "Informations sur le titulaire de ce site web et conditions d’utilisation, conformément à la loi espagnole 34/2002 sur les services de la société de l’information et le commerce électronique (LSSI-CE).",
    sections: [
      {
        heading: "Titulaire du site",
        body: [
          "Conformément à l’article 10 de la LSSI-CE, nous vous informons que ce site web appartient à :",
        ],
        owner: true,
      },
      {
        heading: "Objet",
        body: [
          "Ce site présente l’activité de Tarida MC : l’achat d’appartements, de maisons et d’entrepôts à leurs propriétaires partout en Espagne, et la location d’entrepôts et de logements de son propre patrimoine. Il permet de nous contacter par formulaire, WhatsApp, téléphone ou email.",
        ],
      },
      {
        heading: "Conditions d’utilisation",
        body: [
          "L’accès à ce site est gratuit et confère la qualité d’utilisateur, ce qui implique l’acceptation des présentes mentions légales dans la version publiée au moment de l’accès.",
          "L’utilisateur s’engage à utiliser le site et ses contenus conformément à la loi, à la bonne foi et à l’ordre public, et à ne pas les employer à des fins illicites ou susceptibles de porter atteinte aux droits de Tarida MC ou de tiers, ou au fonctionnement du site.",
        ],
      },
      {
        heading: "Informations sur les biens",
        body: [
          "Les informations que ce site donne sur les biens, y compris les surfaces, les caractéristiques et la disponibilité, sont indicatives et peuvent changer sans préavis. Elles ne constituent pas une offre ferme et ne font partie d’aucun contrat : les conditions de chaque opération sont celles convenues par écrit.",
          "Nous proposer un bien ne nous oblige pas à l’acheter : nous étudions chaque cas et vous répondons.",
        ],
      },
      {
        heading: "Propriété intellectuelle et industrielle",
        body: [
          "Les contenus de ce site (textes, photographies, logos, design et code) appartiennent à Tarida MC ou à des tiers qui en ont autorisé l’utilisation, et sont protégés par le droit de la propriété intellectuelle et industrielle.",
          "Toute reproduction, distribution, communication publique ou transformation, totale ou partielle, est interdite sans l’autorisation expresse du titulaire, sauf pour un usage personnel et privé.",
        ],
      },
      {
        heading: "Liens",
        body: [
          "Ce site peut contenir des liens vers des sites tiers, comme WhatsApp ou Google. Tarida MC ne contrôle pas ces sites et n’est pas responsable de leurs contenus ni de leurs politiques, régis par leurs propres conditions.",
          "Toute personne peut créer un lien vers la page d’accueil ou toute autre page de ce site, à condition de ne pas laisser entendre une relation avec Tarida MC qui n’existe pas ni présenter ses contenus comme les siens.",
        ],
      },
      {
        heading: "Responsabilité",
        body: [
          "Tarida MC veille à ce que les informations du site soient exactes et à jour, mais ne garantit ni l’absence d’erreurs ni la disponibilité ininterrompue du site. Elle n’est pas responsable des dommages résultant d’interruptions techniques, de virus introduits par des tiers ou de l’usage fait des informations publiées.",
        ],
      },
      {
        heading: "Protection des données et cookies",
        body: [
          "Le traitement des données personnelles que vous nous communiquez et l’usage des cookies sont expliqués dans les politiques correspondantes.",
        ],
        links: ["privacy", "cookies"],
      },
      {
        heading: "Modifications",
        body: [
          "Tarida MC peut modifier les présentes mentions légales et les contenus du site à tout moment. La version en vigueur est celle publiée sur cette page.",
        ],
      },
      {
        heading: "Droit applicable et juridiction",
        body: [
          "Les présentes mentions légales sont régies par le droit espagnol. Tout litige sera soumis aux juridictions compétentes conformément à la loi ; si vous êtes consommateur, à celles de votre domicile.",
        ],
      },
    ],
  },
  privacy: {
    title: "Politique de confidentialité",
    intro: "Comment nous traitons les données personnelles que vous nous communiquez par ce site et nos canaux de contact, conformément au règlement (UE) 2016/679 (RGPD) et à la loi organique espagnole 3/2018 (LOPDGDD).",
    sections: [
      {
        heading: "Responsable du traitement",
        body: [
          "Le responsable du traitement de vos données est :",
        ],
        owner: true,
      },
      {
        heading: "Délégué à la protection des données",
        body: [
          "Nous n’avons pas désigné de délégué à la protection des données. Pour toute question sur le traitement de vos données, vous pouvez nous écrire à l’adresse email indiquée ci-dessus.",
        ],
      },
      {
        heading: "Quelles données nous traitons",
        body: [
          "Nous traitons uniquement les données que vous nous communiquez et celles que génère votre visite :",
        ],
        list: [
          "Formulaire de contact : nom, email, téléphone (facultatif), type de demande et contenu de votre message.",
          "WhatsApp, téléphone et email : les coordonnées depuis lesquelles vous nous écrivez ou nous appelez et ce que vous nous dites dans la conversation.",
          "Si la demande aboutit : les données du bien et celles nécessaires pour étudier et conclure l’opération.",
          "Navigation : l’adresse IP et des données techniques du navigateur, que le serveur enregistre en servant les pages.",
          "Cookies de mesure, uniquement si vous les acceptez (voir la politique de cookies).",
        ],
      },
      {
        heading: "Finalités et bases légales",
        body: [],
        list: [
          "Répondre à votre demande ou à la proposition de votre bien. Base légale : votre consentement, donné en envoyant le formulaire ou en nous écrivant, et l’exécution, à votre demande, de mesures précontractuelles (art. 6.1.a et 6.1.b du RGPD).",
          "Étudier et, le cas échéant, conclure l’achat ou la location. Base légale : l’exécution du contrat ou de mesures précontractuelles (art. 6.1.b du RGPD) et le respect des obligations légales qui découlent de l’opération, notamment fiscales (art. 6.1.c du RGPD).",
          "Assurer la sécurité et le fonctionnement du site à partir des journaux du serveur. Base légale : notre intérêt légitime à protéger le site (art. 6.1.f du RGPD).",
          "Connaître de façon agrégée l’usage du site. Base légale : votre consentement aux cookies de mesure (art. 6.1.a du RGPD).",
        ],
      },
      {
        heading: "Données obligatoires",
        body: [
          "Dans le formulaire, le nom, l’email et le message sont nécessaires pour vous répondre ; sans eux, nous ne pourrons pas traiter votre demande. Le téléphone est facultatif.",
          "Nous ne prenons aucune décision automatisée et n’établissons aucun profil à partir de vos données, et nous ne les utilisons que pour les finalités indiquées.",
        ],
      },
      {
        heading: "Durée de conservation",
        body: [],
        list: [
          "Demandes qui n’aboutissent à aucune opération : le temps nécessaire pour y répondre et, au maximum, un an après le dernier contact.",
          "Opérations d’achat ou de location : pendant toute la relation puis, de façon bloquée, pendant les délais au cours desquels une responsabilité légale peut être engagée, par exemple six ans pour les documents commerciaux (article 30 du Code de commerce espagnol) ou quatre ans pour les documents fiscaux.",
          "Journaux du serveur : la durée limitée appliquée par l’hébergeur.",
          "Cookies : les durées indiquées dans la politique de cookies.",
        ],
      },
      {
        heading: "Destinataires",
        body: [
          "Nous ne vendons ni ne cédons vos données à des tiers. Nous ne les communiquons que si la loi l’exige ou si c’est nécessaire pour conclure une opération que vous avez demandée (par exemple, à des notaires, aux registres fonciers ou à l’administration fiscale).",
          "Traitent des données pour notre compte, en tant que sous-traitants et sous contrat conforme à l’article 28 du RGPD :",
        ],
        list: [
          "Vercel Inc. — hébergement du site.",
          "Resend — envoi des messages du formulaire vers notre messagerie.",
          "Notre fournisseur de messagerie — réception et archivage des messages.",
          "Google Ireland Ltd. — Google Tag Manager et Google Analytics, uniquement si vous acceptez les cookies de mesure.",
        ],
      },
      {
        heading: "WhatsApp",
        body: [
          "Si vous nous écrivez sur WhatsApp, WhatsApp Ireland Ltd. traite vos données en tant que responsable indépendant, selon sa propre politique de confidentialité. Nous n’utiliserons la conversation que pour traiter votre demande.",
        ],
      },
      {
        heading: "Transferts internationaux",
        body: [
          "Certains de ces prestataires sont établis aux États-Unis ou peuvent y traiter des données. Ces transferts reposent sur le cadre de protection des données UE-États-Unis, lorsque le prestataire y adhère, ou sur les clauses contractuelles types approuvées par la Commission européenne.",
        ],
      },
      {
        heading: "Vos droits",
        body: [
          "Vous pouvez exercer à tout moment, et gratuitement, les droits suivants :",
        ],
        list: [
          "Accès : savoir si nous traitons vos données et en obtenir une copie.",
          "Rectification des données inexactes ou incomplètes.",
          "Effacement de vos données lorsqu’elles ne sont plus nécessaires.",
          "Opposition au traitement fondé sur notre intérêt légitime.",
          "Limitation du traitement dans les cas prévus par la loi.",
          "Portabilité des données que vous nous avez communiquées.",
          "Retrait du consentement, sans effet sur la licéité du traitement antérieur.",
        ],
      },
      {
        heading: "Comment les exercer",
        body: [
          "Écrivez-nous à l’adresse email indiquée sous « Responsable du traitement » ou par courrier à notre siège social, en précisant le droit que vous exercez. En cas de doute raisonnable sur votre identité, nous pourrons vous demander de la justifier. Nous vous répondrons dans un délai d’un mois, prolongeable de deux mois pour les demandes complexes.",
          "Si vous estimez que nous n’avons pas correctement traité votre demande, vous pouvez introduire une réclamation auprès de l’Agence espagnole de protection des données (C/ Jorge Juan, 6, 28001 Madrid ; www.aepd.es).",
        ],
      },
      {
        heading: "Mineurs",
        body: [
          "Ce site ne s’adresse pas aux mineurs de moins de 14 ans. Si vous avez moins de cet âge, ne nous envoyez pas vos données.",
        ],
      },
      {
        heading: "Sécurité et exactitude",
        body: [
          "Nous appliquons des mesures techniques et organisationnelles appropriées pour protéger vos données ; le site est toujours servi par une connexion chiffrée (HTTPS). Nous vous demandons de nous communiquer des données exactes et de nous signaler tout changement.",
        ],
      },
      {
        heading: "Modifications de cette politique",
        body: [
          "Nous pouvons mettre à jour cette politique pour l’adapter à l’évolution de la loi ou de notre façon de travailler. La version en vigueur est toujours celle publiée sur cette page, avec sa date de mise à jour.",
        ],
        links: ["cookies", "legalNotice"],
      },
    ],
  },
  cookies: {
    title: "Politique de cookies",
    intro: "Quels cookies et quel stockage local ce site utilise, à quelles fins, et comment les accepter, les refuser ou changer d’avis, conformément à l’article 22.2 de la LSSI-CE.",
    sections: [
      {
        heading: "Responsable",
        body: [
          "Le responsable des cookies propres à ce site est :",
        ],
        owner: true,
      },
      {
        heading: "Qu’est-ce qu’un cookie",
        body: [
          "Les cookies sont de petits fichiers qu’un site enregistre dans votre navigateur pour mémoriser des informations d’une page à l’autre ou d’une visite à l’autre. Le stockage local (localStorage) fonctionne de manière similaire et la loi le traite de la même façon ; nous l’incluons donc ici.",
        ],
      },
      {
        heading: "Types de cookies utilisés",
        body: [],
        list: [
          "Techniques, propres : nécessaires au fonctionnement du site et à la mémorisation de vos choix. Ils ne requièrent pas de consentement.",
          "De mesure (analytiques), tiers : ils nous indiquent de façon agrégée combien de personnes visitent le site et quelles pages elles consultent. Ils ne sont installés que si vous les acceptez.",
        ],
      },
      {
        heading: "Liste des cookies",
        body: [],
        table: {
          head: ["Nom", "Titulaire", "Finalité", "Durée", "Type"],
          rows: [
            ["locale", "Tarida MC (propre)", "Mémoriser la langue que vous avez choisie.", "1 an", "Technique"],
            ["consent (stockage local)", "Tarida MC (propre)", "Enregistrer votre réponse au bandeau cookies et sa date.", "Jusqu’à ce que vous effaciez les données du site", "Technique"],
            ["_ga", "Google Ireland Ltd. (tiers)", "Distinguer les visiteurs de façon pseudonyme pour établir des statistiques agrégées.", "2 ans", "Mesure"],
            ["_ga_<ID>", "Google Ireland Ltd. (tiers)", "Conserver l’état de la session Google Analytics.", "2 ans", "Mesure"],
          ],
        },
      },
      {
        heading: "Si vous refusez les cookies de mesure",
        body: [
          "Aucun cookie de mesure n’est installé. Le site utilise le mode consentement de Google : tant que vous n’avez pas accepté, les balises de Google ne peuvent envoyer que des signaux sans cookies ni identifiants (par exemple, qu’une page a été chargée), que Google utilise de façon agrégée.",
        ],
      },
      {
        heading: "Accepter, refuser ou changer d’avis",
        body: [
          "Lors de votre première visite, nous vous demandons si vous acceptez les cookies de mesure ; accepter et refuser sont aussi simples l’un que l’autre. Vous pouvez modifier votre choix à tout moment depuis « Préférences cookies », en bas de chaque page.",
          "Vous pouvez aussi bloquer ou supprimer les cookies dans les réglages de votre navigateur :",
        ],
        external: [
          { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647?hl=fr" },
          { label: "Mozilla Firefox", href: "https://support.mozilla.org/fr/kb/effacer-cookies-donnees-site-firefox" },
          { label: "Safari", href: "https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" },
          { label: "Microsoft Edge", href: "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
        ],
      },
      {
        heading: "Transferts internationaux",
        body: [
          "Google peut traiter les données de mesure aux États-Unis, dans le cadre de protection des données UE-États-Unis. Plus d’informations sur policies.google.com/privacy.",
        ],
      },
      {
        heading: "Mises à jour",
        body: [
          "Si les cookies que nous utilisons changent, nous mettrons cette liste à jour et, si nécessaire, vous redemanderons votre consentement.",
        ],
        links: ["privacy"],
      },
    ],
  },
};
