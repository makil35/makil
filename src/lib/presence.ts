// ============= Full file contents =============

1: /**
 * Cities of presence for the house.
 * Single source of truth for metadata and structured data (schema.org City).
 */

export interface PresenceCity {
  name: string;
  countryName: string;
  countryCode: string;
10:   latitude: number;
  longitude: number;
  wikidata: string;
}

export const PRESENCE_CITIES: PresenceCity[] = [
  {
    name: "Paris",
    countryName: "France",
    countryCode: "FR",
20:     latitude: 48.856614,
    longitude: 2.352222,
    wikidata: "https://www.wikidata.org/wiki/Q90",
  },
  {
    name: "Monaco",
    countryName: "Monaco",
    countryCode: "MC",
    latitude: 43.738418,
    longitude: 7.424616,
30:     wikidata: "https://www.wikidata.org/wiki/Q235",
  },
  {
    name: "London",
    countryName: "United Kingdom",
    countryCode: "GB",
    latitude: 51.507351,
    longitude: -0.127758,
    wikidata: "https://www.wikidata.org/wiki/Q84",
  },
40:   {
    name: "Geneva",
    countryName: "Switzerland",
    countryCode: "CH",
    latitude: 46.204391,
    longitude: 6.143158,
    wikidata: "https://www.wikidata.org/wiki/Q71",
  },
  {
    name: "Dubai",
50:     countryName: "United Arab Emirates",
    countryCode: "AE",
    latitude: 25.204849,
    longitude: 55.270783,
    wikidata: "https://www.wikidata.org/wiki/Q612",
  },
  {
    name: "Rome",
    countryName: "Italy",
    countryCode: "IT",
60:     latitude: 41.902782,
    longitude: 12.496366,
    wikidata: "https://www.wikidata.org/wiki/Q220",
  },
  {
    name: "Luxembourg",
    countryName: "Luxembourg",
    countryCode: "LU",
    latitude: 49.6116,
    longitude: 6.1319,
70:     wikidata: "https://www.wikidata.org/wiki/Q1842",
  },
  {
    name: "New York",
    countryName: "United States",
    countryCode: "US",
    latitude: 40.7128,
    longitude: -74.006,
    wikidata: "https://www.wikidata.org/wiki/Q60",
  },
80: ];

/** schema.org City objects, geo-located and tied to their country. */
export const presenceAreaServed = () =>
  PRESENCE_CITIES.map((city) => ({
    "@type": "City",
    name: city.name,
    sameAs: city.wikidata,
    geo: {
      "@type": "GeoCoordinates",
90:       latitude: city.latitude,
      longitude: city.longitude,
    },
    containedInPlace: {
      "@type": "Country",
      name: city.countryName,
      identifier: city.countryCode,
    },
  }));

100: /** ISO country codes covered, for contact points. */
export const presenceCountryCodes = PRESENCE_CITIES.map((c) => c.countryCode);

/** "Paris · Monaco · London · Geneva · Dubai · Rome · Luxembourg · New York" */
export const presenceCityLine = PRESENCE_CITIES.map((c) => c.name).join(" · ");

/** "Paris, Monaco, London, Geneva, Dubai and Rome" */
export const presenceCitySentence = (() => {
  const names = PRESENCE_CITIES.map((c) => c.name);
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
110: })();

/** Long-tail city keywords, e.g. "private dinner orchestration Paris". */
export const presenceKeywords = PRESENCE_CITIES.flatMap((c) => [
  `private dinner orchestration ${c.name}`,
  `private dinner ${c.name}`,
]).join(", ");

/** URL slug per city, e.g. "New York" → "new-york" → /presence/new-york. */
export const citySlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");
120: 
export interface CityEditorial {
  slug: string;
  headline: string;
  standfirst: string;
  paragraphs: string[];
  register: string;
  /** <title> for the city page (kept under ~60 characters where possible). */
  seoTitle: string;
  /** Meta description, unique per city (~150-160 characters). */
130:   seoDescription: string;
  /** Long-tail keywords specific to the city. */
  keywords: string[];
}

/** Editorial copy per city: one page, one register, no repetition. */
export const CITY_EDITORIAL: Record<string, CityEditorial> = {
  paris: {
    slug: "paris",
    headline: "Private dinner orchestration in Paris",
    standfirst:
      "The house is read from Paris. Everything else follows from there.",
    paragraphs: [
      "Paris is where the house keeps its address and its silence. A dinner is imagined here first: the room, the table, and the order in which the evening will unfold.",
      "What is asked for in Paris is rarely a venue alone. It is a sequence: who arrives first, who is seated next to whom, and what should never be said in writing.",
      "Appointments are held in person, by prior arrangement, and never on a schedule that belongs to someone else.",
    ],
    register: "Address, judgement, and the first table.",
    seoTitle: "Private Dinner Orchestration in Paris · Makil-Herrero Richard",
    seoDescription:
      "Private dinner orchestration in Paris: closed guest lists, single-point orchestration and discreet execution, carried personally by Makil-Herrero Richard. By introduction only.",
    keywords: [
      "private dinner orchestration Paris",
      "private dinner orchestrator Paris",
      "exclusive private dinner Paris",
      "ultra luxury private dinner Paris",
      "private table Paris",
      "confidential dinner Paris",
    ],
  },
  monaco: {
    slug: "monaco",
    headline: "Private dinner orchestration in Monaco",
    standfirst:
      "A small territory in which everything is observed. Discretion there is a technical requirement.",
    paragraphs: [
      "In Monaco, proximity is the difficulty. Everyone can be reached; almost nothing can be done unnoticed. A dinner here is arranged so that it leaves no visible edge.",
      "Private tables, service reduced to the fewest people possible, and never through intermediaries who talk.",
      "The measure of a good evening here is that no one is able to reconstruct it afterwards.",
    ],
    register: "Proximity, restraint, and evenings that leave no edge.",
    seoTitle: "Private Dinner Orchestration in Monaco · Makil-Herrero Richard",
    seoDescription:
      "Private dinner orchestration in Monaco: closed tables, quiet service and an evening that leaves no visible trace, carried by Makil-Herrero Richard. By introduction only.",
    keywords: [
      "private dinner Monaco",
      "private dinner orchestration Monaco",
      "exclusive private dinner Monaco",
      "private table Monte-Carlo",
      "ultra luxury dinner Monaco",
    ],
  },
  london: {
    slug: "london",
    headline: "Private dinner orchestration in London",
    standfirst:
      "London rewards patience. The right table is found quickly; the right moment is not.",
    paragraphs: [
      "London holds the densest concentration of useful people in Europe, and the strongest resistance to being approached badly. A guest list drawn too early is a guest list spent.",
      "The house waits, prepares the ground, and sets a table only when it can be received on its own terms.",
      "Finance, culture and private circles are seated separately, never at the same table.",
    ],
    register: "Timing, preparation, and tables that hold.",
    seoTitle: "Private Dinner Orchestration in London · Makil-Herrero Richard",
    seoDescription:
      "Private dinner orchestration in London: closed guest lists, careful timing and circles seated separately, carried personally by Makil-Herrero Richard. By introduction only.",
    keywords: [
      "private dinner London",
      "private dinner orchestration London",
      "exclusive private dining London",
      "private table London",
      "ultra luxury dinner London",
    ],
  },
  geneva: {
    slug: "geneva",
    headline: "Private dinner orchestration in Geneva",
    standfirst:
      "Geneva asks fewer questions and expects better answers.",
    paragraphs: [
      "Geneva is a city of custodians. Dinners brought here concern continuity: how a name, a family or an interest is carried into the next decade without noise.",
      "The house speaks with the houses already in place rather than around them, and takes on only what it can carry to the end.",
      "Some requests are declined here more often than anywhere else. That is a form of service.",
    ],
    register: "Continuity, custodians, and tables carried to the end.",
    seoTitle: "Private Dinner Orchestration in Geneva · Makil-Herrero Richard",
    seoDescription:
      "Private dinner orchestration in Geneva: quiet tables, continuity of a name or a family, and an evening carried to the end by Makil-Herrero Richard. By introduction only.",
    keywords: [
      "private dinner Geneva",
      "private dinner orchestration Geneva",
      "exclusive private dinner Geneva",
      "private table Geneva",
      "discreet dinner Switzerland",
    ],
  },
  dubai: {
    slug: "dubai",
    headline: "Private dinner orchestration in Dubai",
    standfirst:
      "Speed is available to everyone in Dubai. Discernment is not.",
    paragraphs: [
      "Dubai answers quickly, which is precisely why an evening can go wrong quickly. The house slows the first stage deliberately: who is actually behind a table, and what they intend afterwards.",
      "Invitations in the Gulf are personal before they are institutional. They are made once, by name, and cannot be repeated.",
      "Presence here is regular rather than permanent, and always announced to no one.",
    ],
    register: "Verification, personal invitations, and deliberate slowness.",
    seoTitle: "Private Dinner Orchestration in Dubai · Makil-Herrero Richard",
    seoDescription:
      "Private dinner orchestration in Dubai: verification before speed, invitations made by name, and an evening carried by one. By introduction only.",
    keywords: [
      "private dinner Dubai",
      "private dinner orchestration Dubai",
      "exclusive private dinner Dubai",
      "private table Dubai",
      "ultra luxury dinner Dubai",
    ],
  },
  rome: {
    slug: "rome",
    headline: "Private dinner orchestration in Rome",
    standfirst:
      "Rome teaches that presence does not require publication.",
    paragraphs: [
      "Rome is the oldest lesson the house keeps: dinners that lasted were almost never announced. Tables here open through families, not through offers.",
      "Cultural matters, private hospitality and long acquaintances are handled at the pace the city imposes, which is slower and more durable.",
      "Nothing is signed in Rome on a first visit.",
    ],
    register: "Families, patience, and presence without publication.",
    seoTitle: "Private Dinner Orchestration in Rome · Makil-Herrero Richard",
    seoDescription:
      "Private dinner orchestration in Rome: tables that open through families, private hospitality and long acquaintances, carried by Makil-Herrero Richard. By introduction only.",
    keywords: [
      "private dinner Rome",
      "private dinner orchestration Rome",
      "exclusive private dinner Rome",
      "private table Rome",
      "private hospitality Rome",
    ],
  },
  luxembourg: {
    slug: "luxembourg",
    headline: "Private dinner orchestration in Luxembourg",
    standfirst:
      "Luxembourg is small by design. A name carries further there than anywhere else.",
    paragraphs: [
      "Luxembourg is a territory of custodians. Family capital, private structures and quiet continuity are the ordinary subject of conversation, and the same names appear across them all.",
      "In a place this concentrated, a guest list cannot be corrected afterwards. The house therefore prepares longer, and sets fewer tables than the city would allow.",
      "Discretion here is not a preference. It is the condition under which everything else functions.",
    ],
    register: "Concentration, continuity, and tables that carry.",
    seoTitle: "Private Dinner Orchestration in Luxembourg · Makil-Herrero Richard",
    seoDescription:
      "Private dinner orchestration in Luxembourg: quiet tables, family capital and continuity, prepared longer and carried by Makil-Herrero Richard. By introduction only.",
    keywords: [
      "private dinner Luxembourg",
      "private dinner orchestration Luxembourg",
      "exclusive private dinner Luxembourg",
      "private table Luxembourg",
      "discreet dinner Luxembourg",
    ],
  },
  "new-york": {
    slug: "new-york",
    headline: "Private dinner orchestration in New York",
    standfirst:
      "New York counts loudly. The house counts quietly.",
    paragraphs: [
      "New York offers reach beyond any other city on the list, and rewards only those who know which tables are worth setting. Access is abundant; discernment is not.",
      "Finance, culture and private life are seated separately, never at the same table, and never on the strength of a name alone.",
      "Nothing is committed on a first meeting in New York. The second is where the evening begins.",
    ],
    register: "Reach, discernment, and a table set sparingly.",
    seoTitle: "Private Dinner Orchestration in New York · Makil-Herrero Richard",
    seoDescription:
      "Private dinner orchestration in New York: access abundant and discernment rare, with finance, culture and private life seated separately. By introduction only.",
    keywords: [
      "private dinner New York",
      "private dinner orchestration New York",
      "exclusive private dining New York",
      "private table Manhattan",
      "ultra luxury dinner New York",
    ],
  },
};

export const editorialFor = (city: PresenceCity) => CITY_EDITORIAL[citySlug(city.name)];
