import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";
import Reveal from "@/components/Reveal";
import { useSeo } from "@/hooks/useSeo";
import { presenceAreaServed, presenceKeywords } from "@/lib/presence";

const SITE_URL = "https://makil.fr";

const vignettes = [
  {
    kicker: "Paris",
    title: "A dinner that was never announced",
    body: "Eleven guests. One table. No photographs, no list, no trace afterwards. What was asked for was not a venue but a room in which certain people could speak plainly.",
  },
  {
    kicker: "London",
    title: "An introduction that took four months",
    body: "The right name was known within a week. The right moment was not. Waiting was the work; the meeting itself lasted forty minutes.",
  },
  {
    kicker: "Geneva",
    title: "A matter that was declined",
    body: "The request was legitimate and well paid. It did not belong to this house. Declining it was the service rendered.",
  },
];

const Mandates = () => {
  useSeo({
    path: "/mandates",
    breadcrumbs: [{ name: "Mandates", path: "/mandates" }],
    title: "Private Mandates · Makil-Herrero Richard · Private Adviser",
    description:
      "Private mandates carried personally by Makil-Herrero Richard, private adviser in Paris: access, private orchestration and discreet execution for a select circle. By introduction only.",
    keywords:
      `private mandate, private orchestration, discreet execution, confidential advisory, access and introductions, Makil-Herrero Richard, MAKIL, ${presenceKeywords}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Private mandates",
      serviceType: "Private advisory and private orchestration",
      provider: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Makil-Herrero Richard",
        jobTitle: "Private Adviser",
        url: SITE_URL,
      },
      areaServed: presenceAreaServed(),
      url: `${SITE_URL}/mandates`,
      description:
        "Private mandates carried personally: access, orchestration and discreet execution for a select circle. By introduction only.",
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <PageIntro crumbs={[{ label: "Mandates" }]} />

          <p className="mt-10 text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Mandates
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-6">
            Situations, <em className="italic">not services</em>
          </h1>
          <p className="font-body text-sm leading-loose text-foreground/70 max-w-xl">
            There is no catalogue. Each matter is considered on its own terms: what it truly
            requires, whom it should involve, and how it should be carried out without leaving
            a mark.
          </p>

          <section aria-labelledby="shape" className="mt-20 space-y-6">
            <h2 id="shape" className="text-2xl font-display text-foreground">
              The shape of a mandate
            </h2>
            <p className="font-body text-sm leading-loose text-foreground/70 max-w-2xl">
              A mandate begins with reading, not with a proposal. What is said is weighed against
              what is meant. Only then does a question of method arise: whether the matter calls
              for access, for orchestration, or for both.
            </p>
            <p className="font-body text-sm leading-loose text-foreground/70 max-w-2xl">
              Mandates are limited in number because attention does not scale. One name, one point
              of contact, one line of responsibility from first word to last detail.
            </p>
            <p className="font-display italic text-lg text-foreground/85 pt-2">
              I do not delegate what carries my name.
            </p>
          </section>

          <section aria-labelledby="traces" className="mt-20">
            <h2 id="traces" className="text-2xl font-display text-foreground mb-3">
              Traces
            </h2>
            <p className="font-body text-sm leading-loose text-foreground/60 max-w-2xl mb-12">
              Names are never given. What follows is only the outline of work already done.
            </p>
            <ul className="space-y-12">
              {vignettes.map((v, i) => (
                <Reveal as="li" key={v.title} delay={i * 120} className="space-y-3">
                  <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground">
                    {v.kicker}
                  </p>
                  <h3 className="font-display text-xl text-foreground">{v.title}</h3>
                  <p className="font-body text-sm leading-loose text-foreground/70 max-w-2xl">
                    {v.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </section>

          <section aria-labelledby="access" className="mt-20 space-y-6">
            <h2 id="access" className="text-2xl font-display text-foreground">
              Access
            </h2>
            <p className="font-body text-sm leading-loose text-foreground/70 max-w-2xl">
              This house is entered by introduction. A first exchange is a conversation, not a
              proposal: it establishes whether the matter belongs here at all.
            </p>
          </section>

          <NextStep
            links={[
              { kicker: "Correspondence", label: "Write", to: "/contact" },
              { kicker: "Journal", label: "Read the notes", to: "/journal" },
              { kicker: "Presence", label: "Six cities", to: "/presence" },
              { kicker: "The house", label: "Richard", to: "/#richard" },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Mandates;
