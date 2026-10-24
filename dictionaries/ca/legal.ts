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
    registry: "Dades registrals",
    email: "Correu electrònic",
    phone: "Telèfon",
  },
  registryPending: "Falta la inscripció al Registre Mercantil",
  linkLabels: {
    legalNotice: "Avís legal",
    privacy: "Política de privacitat",
    cookies: "Política de galetes",
  },
  updated: "Darrera actualització: octubre de 2026.",
  notice: {
    title: "Avís legal",
    intro: "Informació sobre el titular d'aquest lloc web i condicions d'ús, en compliment de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE).",
    sections: [
      {
        heading: "Titular del lloc web",
        body: [
          "En compliment de l'article 10 de la LSSI-CE, l'informem que aquest lloc web és titularitat de:",
        ],
        owner: true,
      },
      {
        heading: "Objecte",
        body: [
          "Aquest lloc presenta l'activitat de Tarida MC: la compra de pisos, cases i naus industrials als seus propietaris a tota Espanya i el lloguer de naus industrials i habitatges de la seva pròpia cartera. Des d'aquí pot contactar amb nosaltres per formulari, WhatsApp, telèfon o correu electrònic.",
        ],
      },
      {
        heading: "Condicions d'ús",
        body: [
          "L'accés a aquest lloc és gratuït i atribueix la condició d'usuari, la qual cosa implica l'acceptació d'aquest avís legal en la versió publicada en el moment de l'accés.",
          "L'usuari es compromet a utilitzar el lloc i els seus continguts d'acord amb la llei, la bona fe i l'ordre públic, i a no emprar-los per a finalitats il·lícites o que puguin perjudicar els drets de Tarida MC o de tercers, ni el funcionament del lloc.",
        ],
      },
      {
        heading: "Informació sobre immobles",
        body: [
          "La informació que aquest lloc ofereix sobre immobles, incloses superfícies, característiques i disponibilitat, és orientativa i pot canviar sense previ avís. No constitueix una oferta vinculant ni forma part de cap contracte: les condicions de cada operació són les que es pactin per escrit.",
          "Que ens proposi un immoble no ens obliga a comprar-lo: estudiem cada cas i li responem.",
        ],
      },
      {
        heading: "Propietat intel·lectual i industrial",
        body: [
          "Els continguts d'aquest lloc (textos, fotografies, logotips, disseny i codi) són propietat de Tarida MC o de tercers que n'han autoritzat l'ús, i estan protegits per la normativa de propietat intel·lectual i industrial.",
          "Queda prohibida la seva reproducció, distribució, comunicació pública o transformació, total o parcial, sense autorització expressa del titular, excepte per a ús personal i privat.",
        ],
      },
      {
        heading: "Enllaços",
        body: [
          "Aquest lloc pot contenir enllaços a llocs de tercers, com WhatsApp o Google. Tarida MC no controla aquests llocs ni respon dels seus continguts o de les seves polítiques, que es regeixen per les seves pròpies condicions.",
          "Qui vulgui enllaçar aquest lloc pot fer-ho a la pàgina principal o a qualsevol altra, sempre que no doni a entendre una relació amb Tarida MC que no existeix ni presenti els seus continguts com a propis.",
        ],
      },
      {
        heading: "Responsabilitat",
        body: [
          "Tarida MC procura que la informació del lloc sigui correcta i estigui actualitzada, però no garanteix l'absència d'errors ni la disponibilitat ininterrompuda del lloc. No respon dels danys derivats d'interrupcions tècniques, de virus introduïts per tercers ni de l'ús que es faci de la informació publicada.",
        ],
      },
      {
        heading: "Protecció de dades i galetes",
        body: [
          "El tractament de les dades personals que ens faciliti i l'ús de galetes s'expliquen a les polítiques corresponents.",
        ],
        links: ["privacy", "cookies"],
      },
      {
        heading: "Modificacions",
        body: [
          "Tarida MC pot modificar aquest avís legal i els continguts del lloc en qualsevol moment. La versió vigent és la publicada en aquesta pàgina.",
        ],
      },
      {
        heading: "Legislació aplicable i jurisdicció",
        body: [
          "Aquest avís legal es regeix per la legislació espanyola. Qualsevol controvèrsia se sotmetrà als jutjats i tribunals que corresponguin d'acord amb la llei; si vostè és consumidor, als del seu domicili.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacitat",
    intro: "Com tractem les dades personals que ens facilita a través d'aquest lloc i dels nostres canals de contacte, d'acord amb el Reglament (UE) 2016/679 (RGPD) i la Llei orgànica 3/2018 (LOPDGDD).",
    sections: [
      {
        heading: "Responsable del tractament",
        body: [
          "El responsable del tractament de les seves dades és:",
        ],
        owner: true,
      },
      {
        heading: "Delegat de protecció de dades",
        body: [
          "No hem designat cap delegat de protecció de dades. Per a qualsevol qüestió sobre el tractament de les seves dades, pot escriure'ns a l'adreça de correu indicada més amunt.",
        ],
      },
      {
        heading: "Quines dades tractem",
        body: [
          "Tractem únicament les dades que ens facilita i les que genera la seva visita:",
        ],
        list: [
          "Formulari de contacte: nom, correu electrònic, telèfon (opcional), el tipus de consulta i el contingut del missatge.",
          "WhatsApp, telèfon i correu electrònic: les dades de contacte amb què ens escriu o ens truca i el que ens expliqui a la conversa.",
          "Si la consulta tira endavant: les dades de l'immoble i les necessàries per estudiar i formalitzar l'operació.",
          "Navegació: l'adreça IP i dades tècniques del navegador, que el servidor registra en servir les pàgines.",
          "Galetes de mesura, només si les accepta (vegeu la política de galetes).",
        ],
      },
      {
        heading: "Per a què les tractem i amb quina base legal",
        body: [],
        list: [
          "Respondre a la seva consulta o a la proposta del seu immoble. Base legal: el seu consentiment, que ens dona en enviar el formulari o en escriure'ns, i l'aplicació, a petició seva, de mesures precontractuals (art. 6.1.a i 6.1.b RGPD).",
          "Estudiar i, si escau, formalitzar la compra o el lloguer. Base legal: l'execució del contracte o de mesures precontractuals (art. 6.1.b RGPD) i el compliment de les obligacions legals que se'n deriven, com les fiscals (art. 6.1.c RGPD).",
          "Mantenir el lloc segur i en funcionament a partir dels registres del servidor. Base legal: el nostre interès legítim a protegir el lloc (art. 6.1.f RGPD).",
          "Conèixer de forma agregada com s'utilitza el lloc. Base legal: el seu consentiment a les galetes de mesura (art. 6.1.a RGPD).",
        ],
      },
      {
        heading: "Dades obligatòries",
        body: [
          "Al formulari, el nom, el correu electrònic i el missatge són necessaris per respondre-li; si no els facilita, no podrem atendre la seva consulta. El telèfon és opcional.",
          "No prenem decisions automatitzades ni elaborem perfils amb les seves dades, i només les fem servir per a les finalitats indicades.",
        ],
      },
      {
        heading: "Quant de temps les conservem",
        body: [],
        list: [
          "Consultes que no donen lloc a cap operació: el temps necessari per atendre-les i, com a màxim, un any des de l'últim contacte.",
          "Operacions de compra o lloguer: mentre duri la relació i, després, bloquejades durant els terminis en què es puguin exigir responsabilitats legals, com sis anys per a la documentació mercantil (art. 30 del Codi de comerç) o quatre per a la tributària.",
          "Registres del servidor: el termini limitat que aplica el proveïdor d'allotjament.",
          "Galetes: els terminis indicats a la política de galetes.",
        ],
      },
      {
        heading: "Destinataris",
        body: [
          "No venem ni cedim les seves dades a tercers. Només les comuniquem quan la llei ho exigeix o quan és necessari per formalitzar una operació que vostè ha sol·licitat (per exemple, a notaries, registres de la propietat o a l'Administració tributària).",
          "Tracten dades per compte nostre, com a encarregats del tractament i amb contracte d'acord amb l'article 28 del RGPD:",
        ],
        list: [
          "Vercel Inc. — allotjament del lloc web.",
          "Resend — enviament dels missatges del formulari al nostre correu.",
          "El nostre proveïdor de correu electrònic — recepció i arxiu dels missatges.",
          "Google Ireland Ltd. — Google Tag Manager i Google Analytics, només si accepta les galetes de mesura.",
        ],
      },
      {
        heading: "WhatsApp",
        body: [
          "Si ens escriu per WhatsApp, WhatsApp Ireland Ltd. tracta les seves dades com a responsable independent, segons la seva pròpia política de privacitat. Farem servir la conversa només per atendre la seva consulta.",
        ],
      },
      {
        heading: "Transferències internacionals",
        body: [
          "Alguns d'aquests proveïdors tenen la seu als Estats Units o hi poden tractar dades. Aquestes transferències s'emparen en el Marc de Privacitat de Dades UE-EUA, quan el proveïdor s'hi ha adherit, o en les clàusules contractuals tipus aprovades per la Comissió Europea.",
        ],
      },
      {
        heading: "Els seus drets",
        body: [
          "Pot exercir en qualsevol moment, i de forma gratuïta, els drets següents:",
        ],
        list: [
          "Accés: saber si tractem les seves dades i obtenir-ne una còpia.",
          "Rectificació de les dades inexactes o incompletes.",
          "Supressió de les seves dades quan ja no siguin necessàries.",
          "Oposició al tractament basat en el nostre interès legítim.",
          "Limitació del tractament en els casos previstos per la llei.",
          "Portabilitat de les dades que ens ha facilitat.",
          "Retirada del consentiment, sense que afecti la licitud del tractament anterior.",
        ],
      },
      {
        heading: "Com exercir-los",
        body: [
          "Escrigui'ns a l'adreça de correu indicada a «Responsable del tractament» o per correu postal al nostre domicili social, indicant quin dret exerceix. Si tenim dubtes raonables sobre la seva identitat, podrem demanar-li que l'acrediti. Li respondrem en el termini d'un mes, ampliable dos mesos més en casos complexos.",
          "Si considera que no hem atès correctament la seva sol·licitud, pot presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (C/ Jorge Juan, 6, 28001 Madrid; www.aepd.es).",
        ],
      },
      {
        heading: "Menors d'edat",
        body: [
          "Aquest lloc no s'adreça a menors de 14 anys. Si és menor d'aquesta edat, no ens enviï les seves dades.",
        ],
      },
      {
        heading: "Seguretat i exactitud",
        body: [
          "Apliquem mesures tècniques i organitzatives adequades per protegir les seves dades; el lloc se serveix sempre per una connexió xifrada (HTTPS). Li demanem que les dades que ens faciliti siguin certes i que ens comuniqui qualsevol canvi.",
        ],
      },
      {
        heading: "Canvis en aquesta política",
        body: [
          "Podem actualitzar aquesta política per adaptar-la a canvis legals o en la nostra manera de treballar. La versió vigent és sempre la publicada en aquesta pàgina, amb la seva data d'actualització.",
        ],
        links: ["cookies", "legalNotice"],
      },
    ],
  },
  cookies: {
    title: "Política de galetes",
    intro: "Quines galetes i quin emmagatzematge local fa servir aquest lloc, per a què, i com pot acceptar-los, rebutjar-los o canviar d'opinió, d'acord amb l'article 22.2 de la LSSI-CE.",
    sections: [
      {
        heading: "Responsable",
        body: [
          "El responsable de les galetes pròpies d'aquest lloc és:",
        ],
        owner: true,
      },
      {
        heading: "Què són les galetes",
        body: [
          "Les galetes (cookies) són petits fitxers que un lloc web desa al seu navegador per recordar informació entre pàgines o entre visites. L'emmagatzematge local (localStorage) funciona de manera semblant i la llei li dona el mateix tractament, per això també l'incloem aquí.",
        ],
      },
      {
        heading: "Quins tipus fem servir",
        body: [],
        list: [
          "Tècniques, pròpies: necessàries perquè el lloc funcioni i recordi les seves decisions. No requereixen consentiment.",
          "De mesura (analítiques), de tercers: ens diuen de forma agregada quantes persones visiten el lloc i quines pàgines consulten. Només s'instal·len si les accepta.",
        ],
      },
      {
        heading: "Llista de galetes",
        body: [],
        table: {
          head: ["Nom", "Titular", "Finalitat", "Durada", "Tipus"],
          rows: [
            ["locale", "Tarida MC (pròpia)", "Recordar l'idioma que ha triat.", "1 any", "Tècnica"],
            ["consent (emmagatzematge local)", "Tarida MC (pròpia)", "Desar la seva resposta a l'avís de galetes i la data en què la va donar.", "Fins que esborri les dades del lloc", "Tècnica"],
            ["_ga", "Google Ireland Ltd. (tercer)", "Distingir visitants de forma pseudònima per obtenir estadístiques agregades.", "2 anys", "Mesura"],
            ["_ga_<ID>", "Google Ireland Ltd. (tercer)", "Mantenir l'estat de la sessió de Google Analytics.", "2 anys", "Mesura"],
          ],
        },
      },
      {
        heading: "Si rebutja les galetes de mesura",
        body: [
          "No s'instal·la cap galeta de mesura. El lloc fa servir el mode de consentiment de Google: mentre no accepti, les etiquetes de Google només poden enviar avisos sense galetes ni identificadors (per exemple, que s'ha carregat una pàgina), que Google fa servir de forma agregada.",
        ],
      },
      {
        heading: "Com acceptar, rebutjar o canviar d'opinió",
        body: [
          "La primera vegada que visita el lloc li preguntem si accepta les galetes de mesura; acceptar i rebutjar són igual de senzills. Pot canviar la seva decisió en qualsevol moment des de «Preferències de galetes», al peu de cada pàgina.",
          "També pot bloquejar o esborrar les galetes des de la configuració del seu navegador:",
        ],
        external: [
          { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647?hl=ca" },
          { label: "Mozilla Firefox", href: "https://support.mozilla.org/ca/kb/esborrar-galetes-i-dades-dels-llocs-al-firefox" },
          { label: "Safari", href: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" },
          { label: "Microsoft Edge", href: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
        ],
      },
      {
        heading: "Transferències internacionals",
        body: [
          "Google pot tractar les dades de mesura als Estats Units, a l'empara del Marc de Privacitat de Dades UE-EUA. Més informació a policies.google.com/privacy.",
        ],
      },
      {
        heading: "Actualitzacions",
        body: [
          "Si canvien les galetes que fem servir, actualitzarem aquesta llista i, si cal, li tornarem a demanar el consentiment.",
        ],
        links: ["privacy"],
      },
    ],
  },
};
