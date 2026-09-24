import type { LegalDict } from "@/lib/i18n/types";

export const legal: LegalDict = {
  pending: {
    label: "En attente",
    body: "Les données d'immatriculation du titulaire (raison sociale, numéro fiscal, adresse) sont manquantes. Cet avis disparaît une fois lib/site.ts complété.",
  },
  updated: "Dernière mise à jour : septembre 2026.",
  notice: {
    title: "Mentions légales",
    intro: "Informations générales sur le titulaire de ce site web, conformément à la loi espagnole 34/2002 (LSSI-CE).",
    sections: [
      {
        heading: "Titulaire",
        body: [
          "Ce site web est la propriété de l'entité identifiée dans le pied de page, avec les coordonnées qui y figurent.",
        ],
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
    ],
  },
  privacy: {
    title: "Politique de confidentialité",
    intro: "Comment nous traitons les données personnelles que vous nous communiquez via ce site, conformément au RGPD et à la LOPDGDD espagnole.",
    sections: [
      {
        heading: "Responsable du traitement",
        body: ["Le titulaire identifié dans les mentions légales et dans le pied de page."],
      },
      {
        heading: "Quelles données nous traitons et pourquoi",
        body: [
          "Les données que vous envoyez via le formulaire de contact ou par WhatsApp (nom, email, téléphone et le contenu de votre message) sont utilisées uniquement pour répondre à votre demande.",
          "Avec votre consentement, nous utilisons des cookies de mesure d'audience pour comprendre l'utilisation du site. Voir la politique de cookies.",
        ],
      },
      {
        heading: "Base légale et conservation",
        body: [
          "La base légale est votre consentement et, le cas échéant, l'exécution de mesures précontractuelles. Les données de contact sont conservées pendant la durée de la relation ou jusqu'à ce que vous en demandiez la suppression.",
        ],
      },
      {
        heading: "Destinataires",
        body: [
          "Les messages du formulaire sont transmis via un prestataire d'emails transactionnels (Resend) et le site est hébergé sur Vercel. Les deux agissent en qualité de sous-traitants.",
        ],
      },
      {
        heading: "Vos droits",
        body: [
          "Vous pouvez exercer vos droits d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité en écrivant à l'adresse email indiquée dans le pied de page. Vous pouvez également déposer une réclamation auprès de l'Agencia Española de Protección de Datos.",
        ],
      },
    ],
  },
  cookies: {
    title: "Politique de cookies",
    intro: "Quels cookies et quel stockage local ce site utilise et comment vous pouvez en décider.",
    sections: [
      {
        heading: "Ce que nous utilisons",
        body: [
          "Stockage technique : le choix de langue (le cookie « locale ») et votre réponse à l'avis sur les cookies (localStorage). Les deux sont nécessaires pour que le site se souvienne de vos décisions.",
          "Mesure d'audience : avec votre consentement, Google Tag Manager charge Google Analytics 4 pour mesurer l'utilisation du site de façon agrégée. Sans consentement, aucun cookie de mesure n'est activé.",
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
