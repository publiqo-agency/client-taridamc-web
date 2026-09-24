import type { LegalDict } from "@/lib/i18n/types";

export const legal: LegalDict = {
  pending: {
    label: "Pendent",
    body: "Falten les dades registrals del titular (raó social, NIF, domicili). Aquest avís desapareix en omplir-les a lib/site.ts.",
  },
  updated: "Darrera actualització: setembre de 2026.",
  notice: {
    title: "Avís legal",
    intro: "Informació general del titular d'aquest lloc web, en compliment de la Llei 34/2002 (LSSI-CE).",
    sections: [
      {
        heading: "Titular",
        body: [
          "Aquest lloc web és titularitat de l'entitat identificada al peu de pàgina, amb les dades de contacte que hi figuren.",
        ],
      },
      {
        heading: "Ús del lloc",
        body: [
          "L'accés i l'ús d'aquest lloc atribueix la condició d'usuari i implica l'acceptació d'aquestes condicions. L'usuari es compromet a fer un ús adequat dels continguts i a no emprar-los per a activitats il·lícites.",
        ],
      },
      {
        heading: "Propietat intel·lectual",
        body: [
          "Els continguts d'aquest lloc (textos, imatges, logotips, disseny) són propietat del titular o de tercers que n'han autoritzat l'ús. Queda prohibida la seva reproducció sense autorització expressa.",
        ],
      },
      {
        heading: "Responsabilitat",
        body: [
          "El titular no es fa responsable dels danys derivats de l'ús de la informació continguda en aquest lloc ni dels continguts de llocs de tercers enllaçats.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacitat",
    intro: "Com tractem les dades personals que ens facilita a través d'aquest lloc, d'acord amb el RGPD i la LOPDGDD.",
    sections: [
      {
        heading: "Responsable del tractament",
        body: ["El titular identificat a l'avís legal i al peu de pàgina."],
      },
      {
        heading: "Quines dades tractem i per a què",
        body: [
          "Les dades que envia pel formulari de contacte o per WhatsApp (nom, email, telèfon i el contingut del missatge) s'utilitzen únicament per respondre la seva sol·licitud.",
          "Amb el seu consentiment, utilitzem galetes de mesurament per conèixer l'ús del lloc. Vegeu la política de galetes.",
        ],
      },
      {
        heading: "Base legal i conservació",
        body: [
          "La base legal és el seu consentiment i, si escau, l'execució de mesures precontractuals. Les dades de contacte es conserven mentre duri la relació o fins que sol·liciti la seva supressió.",
        ],
      },
      {
        heading: "Destinataris",
        body: [
          "Els missatges del formulari s'envien mitjançant un proveïdor de correu transaccional (Resend) i el lloc s'allotja a Vercel. Tots dos actuen com a encarregats del tractament.",
        ],
      },
      {
        heading: "Els seus drets",
        body: [
          "Pot exercir els drets d'accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a l'email del peu de pàgina. També pot reclamar davant l'Agència Espanyola de Protecció de Dades.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de galetes",
    intro: "Quines galetes i emmagatzematge local utilitza aquest lloc i com pot decidir sobre elles.",
    sections: [
      {
        heading: "Què utilitzem",
        body: [
          "Emmagatzematge tècnic: l'elecció d'idioma (galeta «locale») i la seva resposta a l'avís de galetes (localStorage). Tots dos són necessaris perquè el lloc recordi les seves decisions.",
          "Mesurament: amb el seu consentiment, Google Tag Manager carrega Google Analytics 4 per mesurar l'ús del lloc de forma agregada. Sense consentiment no s'activa cap galeta de mesurament.",
        ],
      },
      {
        heading: "Com canviar la seva decisió",
        body: [
          "Pot canviar la seva decisió en qualsevol moment des de «Preferències de galetes», al peu de pàgina, o esborrant les dades del lloc al seu navegador.",
        ],
      },
    ],
  },
};
