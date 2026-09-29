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
    email: "Email",
    phone: "Téléphone",
  },
  updated: "Dernière mise à jour : septembre 2026.",
  notice: {
    title: "Mentions légales",
    intro: "Informations générales sur le titulaire de ce site web, conformément à la loi espagnole 34/2002 (LSSI-CE).",
    sections: [
      {
        heading: "Titulaire",
        body: [
          "Conformément à l'article 10 de la loi espagnole 34/2002 (LSSI-CE), ce site web appartient à :",
        ],
        owner: true,
      },
      {
        heading: "Utilisation du site",
        body: [
          "L'accès et l'utilisation de ce site vous confèrent la qualité d'utilisateur et impliquent l'acceptation des présentes conditions. L'utilisateur s'engage à faire un usage approprié des contenus et à ne pas les employer à des fins illicites.",
        ],
      },
      {
        heading: "Propriété intellectuelle",
        body: [
          "Les contenus de ce site (textes, images, logos, design) appartiennent au titulaire ou à des tiers ayant autorisé leur utilisation. Leur reproduction sans autorisation expresse est interdite.",
        ],
      },
      {
        heading: "Responsabilité",
        body: [
          "Le titulaire n'est pas responsable des dommages découlant de l'utilisation des informations contenues sur ce site, ni des contenus de sites tiers liés.",
        ],
      },
      {
        heading: "Droit applicable",
        body: [
          "Les présentes mentions légales sont régies par le droit espagnol. Tout litige sera soumis aux juridictions compétentes selon la loi ; si vous êtes consommateur, à celles de votre domicile.",
        ],
      },
    ],
  },
  privacy: {
    title: "Politique de confidentialité",
    intro: "Comment nous traitons les données personnelles que vous nous communiquez via ce site, conformément au RGPD et à la LOPDGDD espagnole.",
    sections: [
      {
        heading: "Responsable du traitement",
        body: [
          "Le responsable du traitement de vos données est :",
        ],
        owner: true,
      },
      {
        heading: "Quelles données nous traitons et pourquoi",
        body: [
          "Les données que vous envoyez via le formulaire de contact ou WhatsApp (nom, email, téléphone et contenu du message) servent uniquement à répondre à votre demande et, si vous le souhaitez, à gérer l'opération que vous nous proposez.",
          "Le nom, l'email et le message sont nécessaires pour vous répondre ; le téléphone est facultatif. Nous ne prenons aucune décision automatisée et n'établissons aucun profil à partir de vos données.",
          "Avec votre consentement, nous utilisons des cookies de mesure pour connaître l'usage du site de manière agrégée. Voir la politique de cookies.",
        ],
      },
      {
        heading: "Base juridique",
        body: [
          "Votre consentement, donné en envoyant le formulaire ou en nous écrivant, et, lorsque vous nous interrogez sur une opération, l'exécution de mesures précontractuelles prises à votre demande.",
          "Vous pouvez retirer votre consentement à tout moment, sans que cela affecte la licéité du traitement effectué auparavant.",
        ],
      },
      {
        heading: "Conservation",
        body: [
          "Nous conservons vos données le temps nécessaire pour traiter votre demande ou pendant toute la durée de la relation, puis bloquées pendant les délais au cours desquels des responsabilités légales peuvent être engagées. Nous les supprimons plus tôt si vous le demandez.",
        ],
      },
      {
        heading: "Destinataires",
        body: [
          "Nous ne communiquons pas vos données à des tiers, sauf obligation légale.",
          "Traitent des données pour notre compte, en tant que sous-traitants : Vercel Inc. (hébergement du site), Resend (envoi des messages du formulaire) et, uniquement si vous acceptez les cookies de mesure, Google Ireland Ltd. (Google Tag Manager et Google Analytics).",
          "Si vous nous écrivez sur WhatsApp, WhatsApp (Meta) traite vos données en tant que responsable indépendant, selon sa propre politique de confidentialité.",
        ],
      },
      {
        heading: "Transferts internationaux",
        body: [
          "Certains de ces prestataires peuvent traiter des données aux États-Unis. Ces transferts reposent sur le cadre de protection des données UE-États-Unis ou sur les clauses contractuelles types approuvées par la Commission européenne.",
        ],
      },
      {
        heading: "Vos droits",
        body: [
          "Vous pouvez exercer vos droits d'accès, de rectification, d'effacement, d'opposition, de limitation du traitement et de portabilité en écrivant à l'adresse email indiquée ci-dessus, sous « Responsable du traitement », en précisant le droit que vous exercez.",
          "Si vous estimez que votre demande n'a pas été correctement traitée, vous pouvez déposer une réclamation auprès de l'Agencia Española de Protección de Datos (www.aepd.es).",
        ],
      },
    ],
  },
  cookies: {
    title: "Politique de cookies",
    intro: "Quels cookies et quel stockage local ce site utilise et comment vous pouvez en décider.",
    sections: [
      {
        heading: "Responsable",
        body: [
          "Le responsable des cookies utilisés sur ce site est :",
        ],
        owner: true,
      },
      {
        heading: "De quoi s'agit-il",
        body: [
          "Les cookies et le stockage local sont de petits fichiers ou données que le site conserve dans votre navigateur pour se souvenir d'informations d'une visite à l'autre.",
        ],
      },
      {
        heading: "Cookies techniques (toujours actifs)",
        body: [
          "« locale » — propre. Mémorise la langue choisie. Durée : 1 an.",
          "« consent » (stockage local) — propre. Conserve votre réponse au bandeau cookies. Durée : jusqu'à ce que vous effaciez les données du site.",
          "Ils sont nécessaires au fonctionnement du site et à la mémorisation de vos choix ; ils ne requièrent donc pas de consentement.",
        ],
      },
      {
        heading: "Cookies de mesure (uniquement si vous les acceptez)",
        body: [
          "« _ga » — Google Analytics (Google Ireland Ltd.). Distingue les visiteurs de manière anonyme pour établir des statistiques agrégées. Durée : 2 ans.",
          "« _ga_<ID> » — Google Analytics. Conserve l'état de la visite. Durée : 2 ans.",
          "Google peut traiter ces données aux États-Unis, dans le cadre de protection des données UE-États-Unis. Plus d'informations sur policies.google.com/privacy.",
        ],
      },
      {
        heading: "Modifier votre décision",
        body: [
          "Vous pouvez modifier votre décision à tout moment depuis « Préférences de cookies », dans le pied de page, ou en effaçant les données du site dans votre navigateur.",
        ],
      },
    ],
  },
};
