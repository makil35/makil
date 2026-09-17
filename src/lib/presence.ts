/**
 * Cities of presence for the house.
 * Single source of truth for metadata and structured data (schema.org City).
 */

export interface PresenceCity {
  name: string;
  countryName: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  wikidata: string;
}

export const PRESENCE_CITIES: PresenceCity[] = [
  {
    name: "Paris",
    countryName: "France",
    countryCode: "FR",
    latitude: 48.856614,
    longitude: 2.352222,
    wikidata: "https://www.wikidata.org/wiki/Q90",
  },
  {
    name: "Monaco",
    countryName: "Monaco",
    countryCode: "MC",
    latitude: 43.738418,
    longitude: 7.424616,
    wikidata: "https://www.wikidata.org/wiki/Q235",
  },
  {
    name: "London",
    countryName: "United Kingdom",
    countryCode: "GB",
    latitude: 51.507351,
    longitude: -0.127758,
    wikidata: "https://www.wikidata.org/wiki/Q84",
  },
  {
    name: "Geneva",
    countryName: "Switzerland",
    countryCode: "CH",
    latitude: 46.204391,
    longitude: 6.143158,
    wikidata: "https://www.wikidata.org/wiki/Q71",
  },
  {
    name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",
    latitude: 25.204849,
    longitude: 55.270783,
    wikidata: "https://www.wikidata.org/wiki/Q612",
  },
  {
    name: "Rome",
    countryName: "Italy",
    countryCode: "IT",
    latitude: 41.902782,
    longitude: 12.496366,
    wikidata: "https://www.wikidata.org/wiki/Q220",
  },
  {
    name: "Luxembourg",
    countryName: "Luxembourg",
    countryCode: "LU",
    latitude: 49.6116,
    longitude: 6.1319,
    wikidata: "https://www.wikidata.org/wiki/Q1842",
  },
  {
    name: "New York",
    countryName: "United States",
    countryCode: "US",
    latitude: 40.7128,
    longitude: -74.006,
    wikidata: "https://www.wikidata.org/wiki/Q60",
  },
];

/** schema.org City objects, geo-located and tied to their country. */
export const presenceAreaServed = () =>
  PRESENCE_CITIES.map((city) => ({
    "@type": "City",
    name: city.name,
    sameAs: city.wikidata,
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.latitude,
      longitude: city.longitude,
    },
    containedInPlace: {
      "@type": "Country",
      name: city.countryName,
      identifier: city.countryCode,
    },
  }));

/** ISO country codes covered, for contact points. */
export const presenceCountryCodes = PRESENCE_CITIES.map((c) => c.countryCode);

/** "Paris · Monaco · London · Geneva · Dubai · Rome" */
export const presenceCityLine = PRESENCE_CITIES.map((c) => c.name).join(" · ");

/** "Paris, Monaco, London, Geneva, Dubai and Rome" */
export const presenceCitySentence = (() => {
  const names = PRESENCE_CITIES.map((c) => c.name);
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
})();

/** Long-tail city keywords, e.g. "private adviser Paris". */
export const presenceKeywords = PRESENCE_CITIES.flatMap((c) => [
  `private adviser ${c.name}`,
  `private advisory ${c.name}`,
]).join(", ");

/** URL slug per city, e.g. "New York" → "new-york" → /presence/new-york. */
export const citySlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export interface CityEditorial {
  slug: string;
  headline: string;
  standfirst: string;
  paragraphs: string[];
  register: string;
  /** <title> for the city page (kept under ~60 characters where possible). */
  seoTitle: string;
  /** Meta description, unique per city (~150-160 characters). */
  seoDescription: string;
  /** Long-tail keywords specific to the city. */
  keywords: string[];
}

/** Editorial copy per city: one page, one register, no repetition. */
export const CITY_EDITORIAL: Record<string, CityEditorial> = {
  paris: {
    slug: "paris",
    headline: "Private adviser in Paris",
    standfirst:
      "The house is read from Paris. Everything else follows from there.",
    paragraphs: [
      "Paris is where the house keeps its address and its silence. Conversations begin here, often in a room no one else knows about, and end here when the matter is closed.",
      "What is asked for in Paris is rarely introduction alone. It is judgement: whom to see, in what order, and what should never be said in writing.",
      "Appointments are held in person, by prior arrangement, and never on a schedule that belongs to someone else.",
    ],
    register: "Address, judgement, and the first conversation.",
    seoTitle: "Private Adviser in Paris · Makil-Herrero Richard",
    seoDescription:
      "Private adviser in Paris: confidential counsel, private introductions and discreet execution, carried personally by Makil-Herrero Richard. By introduction only.",
    keywords: [
      "private adviser Paris",
      "private advisory Paris",
      "confidential adviser Paris",
      "personal branding adviser Paris",
      "discreet adviser France",
      "private introductions Paris",
      "high net worth adviser Paris",
    ],
  },
  monaco: {
    slug: "monaco",
    headline: "Private adviser in Monaco",
    standfirst:
      "A small territory in which everything is observed. Discretion there is a technical requirement.",
    paragraphs: [
      "In Monaco, proximity is the difficulty. Everyone can be reached; almost nothing can be done unnoticed. The work consists of arranging matters so that they leave no visible edge.",
      "Residence, private events and quiet transitions are handled with the fewest people possible, and never through intermediaries who talk.",
      "The measure of a good mandate here is that no one is able to reconstruct it afterwards.",
    ],
    register: "Proximity, restraint, and matters that leave no edge.",
    seoTitle: "Private Adviser in Monaco · Makil-Herrero Richard",
    seoDescription:
      "Private adviser in Monaco: residence, private events and quiet transitions arranged without visible trace by Makil-Herrero Richard. By introduction only.",
    keywords: [
      "private adviser Monaco",
      "private advisory Monaco",
      "confidential adviser Monaco",
      "discreet adviser Monte-Carlo",
      "residence Monaco private adviser",
      "personal branding adviser Monaco",
    ],
  },
  london: {
    slug: "london",
    headline: "Private adviser in London",
    standfirst:
      "London rewards patience. The right name is found quickly; the right moment is not.",
    paragraphs: [
      "London holds the densest concentration of useful people in Europe, and the strongest resistance to being approached badly. An introduction made too early is an introduction spent.",
      "The house waits, prepares the ground, and presents a matter only when it can be received on its own terms.",
      "Legal, cultural and private circles are approached separately, never with the same letter.",
    ],
    register: "Timing, preparation, and introductions that hold.",
    seoTitle: "Private Adviser in London · Makil-Herrero Richard",
    seoDescription:
      "Private adviser in London: introductions prepared and timed, private circles approached separately, matters carried personally. By introduction only.",
    keywords: [
      "private adviser London",
      "private advisory London",
      "confidential adviser London",
      "discreet adviser United Kingdom",
      "private introductions London",
      "personal branding adviser London",
    ],
  },
  geneva: {
    slug: "geneva",
    headline: "Private adviser in Geneva",
    standfirst:
      "Geneva asks fewer questions and expects better answers.",
    paragraphs: [
      "Geneva is a city of custodians. Matters brought here concern continuity: how a name, a family or an interest is carried into the next decade without noise.",
      "The house speaks with advisers already in place rather than around them, and takes on only what it can carry to the end.",
      "Some requests are declined here more often than anywhere else. That is a form of service.",
    ],
    register: "Continuity, custodians, and matters carried to the end.",
    seoTitle: "Private Adviser in Geneva · Makil-Herrero Richard",
    seoDescription:
      "Private adviser in Geneva: continuity of a name, a family or an interest, handled with existing advisers and carried to the end. By introduction only.",
    keywords: [
      "private adviser Geneva",
      "private advisory Geneva",
      "confidential adviser Geneva",
      "discreet adviser Switzerland",
      "family continuity adviser Geneva",
      "personal branding adviser Geneva",
    ],
  },
  dubai: {
    slug: "dubai",
    headline: "Private adviser in Dubai",
    standfirst:
      "Speed is available to everyone in Dubai. Discernment is not.",
    paragraphs: [
      "Dubai answers quickly, which is precisely why a matter can go wrong quickly. The house slows the first stage deliberately: who is actually behind a proposition, and what they intend afterwards.",
      "Introductions in the Gulf are personal before they are institutional. They are made once, by name, and cannot be repeated.",
      "Presence here is regular rather than permanent, and always announced to no one.",
    ],
    register: "Verification, personal introductions, and deliberate slowness.",
    seoTitle: "Private Adviser in Dubai · Makil-Herrero Richard",
    seoDescription:
      "Private adviser in Dubai: verification before speed, personal introductions in the Gulf, discreet execution carried by one name. By introduction only.",
    keywords: [
      "private adviser Dubai",
      "private advisory Dubai",
      "confidential adviser Dubai",
      "discreet adviser United Arab Emirates",
      "private introductions Gulf",
      "personal branding adviser Dubai",
    ],
  },
  rome: {
    slug: "rome",
    headline: "Private adviser in Rome",
    standfirst:
      "Rome teaches that presence does not require publication.",
    paragraphs: [
      "Rome is the oldest lesson the house keeps: influence that has lasted was almost never announced. Doors here open through families, not through offers.",
      "Cultural matters, private hospitality and long acquaintances are handled at the pace the city imposes, which is slower and more durable.",
      "Nothing is signed in Rome on a first visit.",
    ],
    register: "Families, patience, and presence without publication.",
    seoTitle: "Private Adviser in Rome · Makil-Herrero Richard",
    seoDescription:
      "Private adviser in Rome: cultural matters, private hospitality and long acquaintances handled at the pace the city imposes. By introduction only.",
    keywords: [
      "private adviser Rome",
      "private advisory Rome",
      "confidential adviser Rome",
      "discreet adviser Italy",
      "private hospitality Rome adviser",
      "personal branding adviser Rome",
    ],
  },
  luxembourg: {
    slug: "luxembourg",
    headline: "Private adviser in Luxembourg",
    standfirst:
      "Luxembourg is small by design. A name carries further there than anywhere else.",
    paragraphs: [
      "Luxembourg is a territory of custodians. Family capital, private structures and quiet continuity are the ordinary subject of conversation, and the same names appear across them all.",
      "In a place this concentrated, an introduction cannot be corrected afterwards. The house therefore prepares longer, and commits to fewer matters than the city would allow.",
      "Discretion here is not a preference. It is the condition under which everything else functions.",
    ],
    register: "Concentration, continuity, and names that carry.",
    seoTitle: "Private Adviser in Luxembourg · Makil-Herrero Richard",
    seoDescription:
      "Private adviser in Luxembourg: family capital, private structures and quiet continuity, handled with the discretion the city demands. By introduction only.",
    keywords: [
      "private adviser Luxembourg",
      "private advisory Luxembourg",
      "confidential adviser Luxembourg",
      "discreet adviser Luxembourg",
      "family capital adviser Luxembourg",
      "private banking circles Luxembourg",
      "personal branding adviser Luxembourg",
    ],
  },
  "new-york": {
    slug: "new-york",
    headline: "Private adviser in New York",
    standfirst:
      "New York counts loudly. The house counts quietly.",
    paragraphs: [
      "New York offers reach beyond any other city on the list, and rewards only those who know which doors are worth opening. Access is abundant; discernment is not.",
      "Circles of finance, culture and private life are approached separately, never with the same introduction, and never on the strength of a name alone.",
      "Nothing is committed on a first meeting in New York. The second is where the matter begins.",
    ],
    register: "Reach, discernment, and a name used sparingly.",
    seoTitle: "Private Adviser in New York · Makil-Herrero Richard",
    seoDescription:
      "Private adviser in New York: access abundant and discernment rare, with finance, culture and private circles approached separately. By introduction only.",
    keywords: [
      "private adviser New York",
      "private advisory New York",
      "confidential adviser New York",
      "discreet adviser United States",
      "private introductions Manhattan",
      "personal branding adviser New York",
    ],
  },
};

export const editorialFor = (city: PresenceCity) => CITY_EDITORIAL[citySlug(city.name)];
