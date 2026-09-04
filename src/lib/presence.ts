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
