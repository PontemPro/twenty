/* Pontem Pro: German UI labels for CUSTOM metadata. Twenty stores one label
 * string per custom object/field; the workspace master language is English.
 * When a member's locale is German these maps overlay the labels at the
 * metadata-selector level, so tables, forms, filters and Kanban follow the
 * user's language. MAINTENANCE: every new custom field needs a line here,
 * otherwise German users see its English label. */

type FieldGerman = {
  label: string;
  options?: Record<string, string>;
};

export const PONTEM_GERMAN_OBJECT_LABELS: Record<
  string,
  { labelSingular: string; labelPlural: string }
> = {
  ansprechpartner: {
    labelSingular: 'Ansprechpartner',
    labelPlural: 'Ansprechpartner',
  },
  aktivitaet: {
    labelSingular: 'Aktivität',
    labelPlural: 'Aktivitäten',
  },
};

export const PONTEM_GERMAN_FIELD_LABELS: Record<string, FieldGerman> = {
  // Lead (foerderfall)
  stufe: {
    label: 'Stufe',
    options: {
      NEU: 'Neu',
      KONTAKTIERT: 'Kontaktiert',
      BERATUNG_TERMINIERT: 'Beratung terminiert',
      GEHT_ZUM_AMT: 'Geht zum Amt',
      ANTRAG_GESTELLT: 'Antrag gestellt',
      AMT_ABGELEHNT_ERNEUT: 'Amt abgelehnt, erneut',
      BEWILLIGT: 'Bewilligt',
      KURSSTART_ERREICHT: 'Kursstart erreicht',
      VERLOREN: 'Verloren',
    },
  },
  foerderinstrument: { label: 'Förderinstrument' },
  naechsteAktion: { label: 'Nächste Aktion (was)' },
  naechsteAktionAm: { label: 'Nächste Aktion am' },
  anfrageDatum: { label: 'Anfrage vom' },
  gueltigBis: { label: 'Gutschein gültig bis' },
  bildungsziel: { label: 'Bildungsziel' },
  statusQuelle: {
    label: 'Status-Quelle',
    options: {
      TEILNEHMER_SAGT: 'Teilnehmer sagt',
      AMT_BESTAETIGT: 'Amt bestätigt',
      DOKUMENT_LIEGT_VOR: 'Dokument liegt vor',
    },
  },
  kursMassnahme: { label: 'Kurs / Maßnahme' },
  verlorenGrund: {
    label: 'Verloren-Grund',
    options: {
      ARBEIT_AUFGENOMMEN: 'Arbeit aufgenommen',
      GUTSCHEIN_ABGELAUFEN: 'Gutschein abgelaufen',
      WETTBEWERBER: 'Bei Wettbewerber eingelöst',
      ABLEHNUNG_AMT: 'Ablehnung durch Amt',
      KEINE_REAKTION: 'Keine Reaktion',
      BILDUNGSZIEL_PASST_NICHT: 'Bildungsziel passt nicht',
      ZUSTAENDIGKEITSWECHSEL: 'Umzug / Zuständigkeitswechsel',
      NICHT_IN_DEUTSCHLAND: 'Nicht in Deutschland',
      SONSTIGES: 'Sonstiges',
    },
  },
  uebergabeStatus: {
    label: 'Übergabe-Status (ERP)',
    options: {
      NICHT_BEREIT: 'Nicht bereit',
      BEREIT: 'Bereit zur Übergabe',
      ANGEFORDERT: 'Angefordert',
      ERLEDIGT: 'Erledigt',
      FEHLER: 'Fehler',
      KONFLIKT: 'Konflikt',
    },
  },
  erpStudentId: { label: 'ERP Student-ID' },
  erpLink: { label: 'Im ERP öffnen' },
  bearbeiter: { label: 'Bearbeiter' },
  sprachniveau: {
    label: 'Sprachniveau',
    options: { UNTER_B1: 'Unter B1', B2_ODER_HOEHER: 'B2 oder höher' },
  },
  jobcenterGemeldet: {
    label: 'Jobcenter gemeldet',
    options: { JA: 'Ja', NEIN: 'Nein' },
  },
  kontaktHinweis: {
    label: 'Kontakt-Hinweis',
    options: { NICHT_ERREICHT: 'Nicht erreicht', FALSCHE_NUMMER: 'Falsche Nummer' },
  },
  kursInteresse: { label: 'Kurs-Interesse (Sheet)' },
  prozessHinweis: { label: 'Prozess (Sheet)' },
  ergebnisHinweis: {
    label: 'Ergebnis (Sheet)',
    options: {
      INTERESSIERT: 'Interessiert',
      SPAETER_KONTAKTIEREN: 'Später kontaktieren',
      KEIN_INTERESSE: 'Kein Interesse',
    },
  },
  pdfGesendet: { label: 'PDF gesendet' },
  neunteKlasseBeglaubigt: {
    label: '9. Klasse beglaubigt',
    options: { JA: 'Ja', NEIN: 'Nein' },
  },
  letzterKontaktAm: { label: 'Letzter Kontakt am' },
  kontaktKanal: {
    label: 'Letzter Kontaktkanal',
    options: {
      TELEFON: 'Telefon',
      WHATSAPP: 'WhatsApp',
      EMAIL: 'E-Mail',
      SMS: 'SMS',
      PERSOENLICH: 'Persönlich',
    },
  },
  kontaktVersuche: { label: 'Kontaktversuche' },
  kontaktiertVon: { label: 'Kontaktiert von' },
  leadsContacted: { label: 'Kontaktierte Leads' },
  // Person
  sprache: {
    label: 'Sprache',
    options: {
      ARABISCH: 'Arabisch',
      DEUTSCH: 'Deutsch',
      UKRAINISCH: 'Ukrainisch',
      ENGLISCH: 'Englisch',
      SONSTIGE: 'Sonstige',
    },
  },
  quelle: {
    label: 'Quelle',
    options: {
      WEBSEITE: 'Webseite',
      EMPFEHLUNG: 'Empfehlung',
      SONSTIGE: 'Sonstige',
      PRAKTIKUM: 'Praktikum-Datenbank',
      ARBEITGEBER: 'Arbeitgeber',
      NETZWERK: 'Netzwerk',
    },
  },
  lebenszyklus: {
    label: 'Lebenszyklus',
    options: {
      INTERESSENT: 'Interessent',
      TEILNEHMER: 'Teilnehmer',
      ALUMNI: 'Alumni',
      KEIN_INTERESSE: 'Kein Interesse',
    },
  },
  forderfalle: { label: 'Leads' },
  // Company
  bereich: { label: 'Bereich' },
  zusammenarbeit: { label: 'Art der Zusammenarbeit' },
  traegerName: { label: 'Träger / Mutterorganisation' },
  notizenImport: { label: 'Notizen (Import)' },
  telefone: { label: 'Telefon' },
  emailAdressen: { label: 'E-Mail' },
  ansprechpartner: { label: 'Ansprechpartner' },
  // Activity (aktivitaet) — one contact attempt on a lead
  typ: {
    label: 'Typ',
    options: {
      ANRUF: 'Anruf',
      WHATSAPP: 'WhatsApp',
      EMAIL: 'E-Mail',
      TERMIN: 'Termin',
    },
  },
  ergebnis: {
    label: 'Ergebnis',
    options: {
      ERREICHT: 'Erreicht',
      NICHT_ERREICHT: 'Nicht erreicht',
      NUMMER_UNGUELTIG: 'Nummer ungültig',
    },
  },
  zeitpunkt: { label: 'Zeitpunkt' },
  notiz: { label: 'Notiz' },
  lead: { label: 'Lead' },
  aktivitaeten: { label: 'Aktivitäten' },
  // Contact Person (ansprechpartner)
  funktion: { label: 'Position' },
  hinweis: { label: 'Hinweis' },
  firma: { label: 'Firma' },
};

export const isPontemGermanLocale = (
  locale: string | null | undefined,
): boolean => (locale ?? '').toLowerCase().startsWith('de');
