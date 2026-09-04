import { Navigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";
import { useSeo } from "@/hooks/useSeo";
import { PRESENCE_CITIES, CITY_EDITORIAL, citySlug } from "@/lib/presence";

const SITE_URL = "https://makil.fr";

const PresenceCity = () => {
  const { city: slug = "" } = useParams();
  const city = PRESENCE_CITIES.find((c) => citySlug(c.name) === slug.toLowerCase());
  const copy = CITY_EDITORIAL[slug.toLowerCase()];

  const path = `/presence/${slug.toLowerCase()}`;
  const others = PRESENCE_CITIES.filter((c) => c !== city).slice(0, 3);

  useSeo({
    path,
    breadcrumbs: [
      { name: "Presence", path: "/presence" },
      { name: city?.name ?? "Presence", path },
    ],
    title: city
      ? `Private Adviser in ${city.name} · Makil-Herrero Richard · MAKIL`
      : "Presence · MAKIL",
    description: city
      ? `Makil-Herrero Richard, private adviser present in ${city.name}, ${city.countryName}: access, private orchestration and discreet execution. By introduction only.`
      : "Presence of the house.",
    keywords: city
      ? `private adviser ${city.name}, private advisory ${city.name}, confidential adviser ${city.name}, personal branding adviser ${city.name}, discreet adviser ${city.countryName}, Makil-Herrero Richard, MAKIL`
      : undefined,
    noindex: !city,
    jsonLd: city
      ? {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: `MAKIL · Private adviser in ${city.name}`,
          url: `${SITE_URL}${path}`,
          inLanguage: "en-GB",
          priceRange: "By arrangement",
          founder: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Makil-Herrero Richard",
            jobTitle: "Private Adviser",
          },
          email: "richard@makil.fr",
          areaServed: {
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
          },
          serviceType: "Private advisory, private orchestration, discreet execution",
          description: city
            ? `Private advisory carried personally in ${city.name}, ${city.countryName}. By introduction only.`
            : undefined,
        }
      : undefined,
  });

  if (!slug) return <Navigate to="/presence" replace />;

  if (!city || !copy) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-grow container mx-auto px-6 lg:px-10 py-20 mt-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl text-foreground">Not a city of the house</h1>
            <p className="mt-6 font-body text-sm text-foreground/70">
              The house is present in six cities only.
            </p>
            <NextStep links={[{ kicker: "Presence", label: "Six cities", to: "/presence" }]} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-20 mt-16">
        <article className="max-w-3xl mx-auto">
          <PageIntro crumbs={[{ label: "Presence", to: "/presence" }, { label: city.name }]} />

          <p className="mt-10 text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            {city.countryName}
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-6">
            {copy.headline}
          </h1>
          <p className="font-display italic text-lg text-foreground/85 max-w-xl">
            {copy.standfirst}
          </p>

          <div className="mt-14 space-y-6">
            {copy.paragraphs.map((p) => (
              <p key={p} className="font-body text-sm leading-loose text-foreground/70 max-w-2xl">
                {p}
              </p>
            ))}
          </div>

          <section aria-labelledby="manner" className="mt-20 space-y-6">
            <h2 id="manner" className="text-2xl font-display text-foreground">
              {`How matters are carried in ${city.name}`}
            </h2>
            <p className="font-body text-sm leading-loose text-foreground/70 max-w-2xl">
              One name, one point of contact, one line of responsibility. Mandates are limited in
              number, accepted by introduction only, and never delegated.
            </p>
            <p className="font-body text-sm leading-loose text-foreground/70 max-w-2xl">
              Enquiries are read personally and answered personally. There is no office, no
              assistant, and no list.
            </p>
          </section>

          <NextStep
            links={[
              ...others.map((c) => ({
                kicker: "Presence",
                label: c.name,
                to: `/presence/${citySlug(c.name)}`,
              })),
              { kicker: "Contact", label: "A direct exchange", to: "/contact" },
            ]}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PresenceCity;
