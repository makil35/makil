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

/** URL slug per city, e.g. "paris" → /presence/paris. */
export const citySlug = (name: string) => name.toLowerCase();

export interface CityEditorial {
  slug: string;
  headline: string;
  standfirst: string;
  paragraphs: string[];
  register: string;
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
  },
};

export const editorialFor = (city: PresenceCity) => CITY_EDITORIAL[citySlug(city.name)];
