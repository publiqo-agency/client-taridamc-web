import type { LegalDict } from "@/lib/i18n/types";

export const legal: LegalDict = {
  pending: {
    label: "Pendent",
    body: "Falten les dades registrals del titular (raó social, NIF, domicili). Aquest avís desapareix en omplir-les a lib/site.ts.",
  },
  ownerLabels: {
    name: "Raó social",
    taxId: "NIF",
    address: "Domicili social",
    email: "Correu electrònic",
    phone: "Telèfon",
  },
  updated: "Darrera actualització: setembre de 2026.",
  notice: {
    title: "Avís legal",
    intro: "Informació general del titular d'aquest lloc web, en compliment de la Llei 34/2002 (LSSI-CE).",
    sections: [
      {
        heading: "Titular",
        body: [
          "En compliment de l'article 10 de la Llei 34/2002 (LSSI-CE), l'informem que aquest lloc web és titularitat de:",
        ],
        owner: true,
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
      {
        heading: "Legislació aplicable",
        body: [
          "Aquest avís legal es regeix per la legislació espanyola. Qualsevol controvèrsia se sotmetrà als jutjats i tribunals que corresponguin d'acord amb la llei; si vostè és consumidor, als del seu domicili.",
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
        body: [
          "El responsable del tractament de les seves dades és:",
        ],
        owner: true,
      },
      {
        heading: "Quines dades tractem i per a què",
        body: [
          "Les dades que envia pel formulari de contacte o per WhatsApp (nom, correu electrònic, telèfon i el contingut del missatge) s'utilitzen únicament per respondre la seva sol·licitud i, si ho desitja, per gestionar l'operació que ens plantegi.",
          "El nom, el correu electrònic i el missatge són necessaris per poder respondre-li; el telèfon és opcional. No prenem decisions automatitzades ni elaborem perfils amb les seves dades.",
          "Amb el seu consentiment, utilitzem galetes de mesura per conèixer l'ús del lloc de manera agregada. Vegeu la política de galetes.",
        ],
      },
      {
        heading: "Base legal",
        body: [
          "El seu consentiment, que dona en enviar el formulari o en escriure'ns, i, quan ens demana informació sobre una operació, l'aplicació de mesures precontractuals a petició seva.",
          "Pot retirar el seu consentiment en qualsevol moment, sense que això afecti la licitud del tractament anterior.",
        ],
      },
      {
        heading: "Conservació",
        body: [
          "Conservem les seves dades mentre siguin necessàries per atendre la seva sol·licitud o mentre duri la relació i, després, bloquejades durant els terminis en què es puguin exigir responsabilitats legals. Les eliminem abans si ens ho demana.",
        ],
      },
      {
        heading: "Destinataris",
        body: [
          "No cedim les seves dades a tercers, excepte per obligació legal.",
          "Tracten dades per compte nostre, com a encarregats del tractament: Vercel Inc. (allotjament del lloc), Resend (enviament dels missatges del formulari) i, només si accepta les galetes de mesura, Google Ireland Ltd. (Google Tag Manager i Google Analytics).",
          "Si ens escriu per WhatsApp, WhatsApp (Meta) tracta les seves dades com a responsable independent, segons la seva pròpia política de privacitat.",
        ],
      },
      {
        heading: "Transferències internacionals",
        body: [
          "Alguns d'aquests proveïdors poden tractar dades als Estats Units. Aquestes transferències s'emparen en el Marc de Privacitat de Dades UE-EUA o en les clàusules contractuals tipus aprovades per la Comissió Europea.",
        ],
      },
      {
        heading: "Els seus drets",
        body: [
          "Pot exercir els drets d'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat escrivint a l'adreça electrònica indicada més amunt, a «Responsable del tractament», i indicant quin dret exerceix.",
          "Si considera que no hem atès correctament la seva sol·licitud, pot presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de galetes",
    intro: "Quines galetes i emmagatzematge local utilitza aquest lloc i com pot decidir sobre elles.",
    sections: [
      {
        heading: "Responsable",
        body: [
          "El responsable de les galetes que utilitza aquest lloc és:",
        ],
        owner: true,
      },
      {
        heading: "Què són",
        body: [
          "Les galetes i l'emmagatzematge local són petits fitxers o dades que el lloc desa al seu navegador per recordar informació entre visites.",
        ],
      },
      {
        heading: "Galetes tècniques (sempre actives)",
        body: [
          "«locale» — pròpia. Recorda l'idioma que ha triat. Durada: 1 any.",
          "«consent» (emmagatzematge local) — propi. Desa la seva resposta a l'avís de galetes. Durada: fins que esborri les dades del lloc.",
          "Són necessàries perquè el lloc funcioni i recordi les seves decisions, per la qual cosa no requereixen consentiment.",
        ],
      },
      {
        heading: "Galetes de mesura (només si les accepta)",
        body: [
          "«_ga» — Google Analytics (Google Ireland Ltd.). Distingeix visitants de manera anònima per obtenir estadístiques agregades. Durada: 2 anys.",
          "«_ga_<ID>» — Google Analytics. Manté l'estat de la visita. Durada: 2 anys.",
          "Google pot tractar aquestes dades als Estats Units, a l'empara del Marc de Privacitat de Dades UE-EUA. Més informació a policies.google.com/privacy.",
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
