import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/useSeo";
import { localizedPath } from "@/lib/routes";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";

const Section = ({ n, title, children }: { n: string; title?: string; children: ReactNode }) => (
  <section className="grid sm:grid-cols-[64px_1fr] gap-4 sm:gap-8 border-t border-foreground/10 py-12 first:border-t-0 first:pt-0">
    <span
      aria-hidden="true"
      className="text-[11px] font-body tracking-[0.3em] text-muted-foreground/60 pt-1"
    >
      {n}
    </span>
    <div>
      {title && (
        <h2 className="font-display text-2xl leading-snug text-foreground mb-5">{title}</h2>
      )}
      <div className="text-foreground/75 font-body text-sm leading-loose space-y-3">
        {children}
      </div>
    </div>
  </section>
);

const linkClass =
  "text-foreground/80 underline decoration-foreground/25 decoration-[0.5px] underline-offset-[6px] transition-smooth hover:text-foreground hover:decoration-foreground/60";

const listClass = "list-none space-y-3 [&>li]:pl-5 [&>li]:relative [&>li]:before:content-['·'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-foreground/40";

const PolitiqueConfidentialite = () => {
  const { t } = useLanguage();
  useSeo({ breadcrumbs: [{ name: "Privacy policy", path: "/privacy-policy" }], routeKey: "privacy", titleKey: "seo.privacy.title", descriptionKey: "seo.privacy.description" });
  const locale = "en-GB";
  const siteLabel = "makil.fr";
  const homePath = localizedPath("home");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-24 mt-16">
        <div className="max-w-3xl mx-auto">
          <PageIntro crumbs={[{ label: t("privacy.title") }]} />

          <header className="mt-16 mb-24">
            <p className="text-[10px] font-body tracking-[0.45em] uppercase text-muted-foreground">
              {t("legal.kicker")}
            </p>
            <h1 className="mt-8 text-5xl sm:text-6xl font-display leading-[1.05] tracking-tight text-foreground">
              {t("privacy.title")}
            </h1>
            <div aria-hidden="true" className="mt-10 h-px w-16 bg-foreground/25" />
          </header>

          <div className="space-y-0">
            <Section n="01">
              <p>
                {t("privacy.intro")} (
                <Link to={homePath} className={linkClass}>{siteLabel}</Link>)
              </p>
              <p className="text-muted-foreground">
                {t("privacy.lastUpdate")} {new Date().toLocaleDateString(locale)}
              </p>
            </Section>

            <Section n="02" title={t("privacy.s1.title")}>
              <p>{t("privacy.s1.p1")}</p>
              <p>
                <strong className="font-normal text-foreground">{t("privacy.s1.contact")}</strong>{" "}
                <a href="mailto:richard@makil.fr" className={linkClass}>richard@makil.fr</a>
              </p>
            </Section>

            <Section n="03" title={t("privacy.s2.title")}>
              <p>{t("privacy.s2.intro")}</p>
              <ul className={listClass}>
                <li>{t("privacy.s2.li1")}</li>
                <li>{t("privacy.s2.li2")}</li>
                <li>{t("privacy.s2.li3")}</li>
                <li>{t("privacy.s2.li4")}</li>
              </ul>
            </Section>

            <Section n="04" title={t("privacy.s3.title")}>
              <ul className={listClass}>
                <li>{t("privacy.s3.li1")}</li>
                <li>{t("privacy.s3.li2")}</li>
                <li>{t("privacy.s3.li3")}</li>
              </ul>
            </Section>

            <Section n="05" title={t("privacy.s4.title")}>
              <p>{t("privacy.s4.p1")}</p>
            </Section>

            <Section n="06" title={t("privacy.s5.title")}>
              <p>{t("privacy.s5.p1")}</p>
            </Section>

            <Section n="07" title={t("privacy.s6.title")}>
              <ul className={listClass}>
                <li>{t("privacy.s6.li1")}</li>
                <li>{t("privacy.s6.li2")}</li>
              </ul>
            </Section>

            <Section n="08" title={t("privacy.s7.title")}>
              <p>{t("privacy.s7.p1")}</p>
              <p>
                {t("privacy.s7.p2a")}{" "}
                <a href="mailto:richard@makil.fr" className={linkClass}>richard@makil.fr</a>.
              </p>
            </Section>

            <Section n="09" title={t("privacy.s8.title")}>
              <p>{t("privacy.s8.p1")}</p>
            </Section>

            <Section n="10" title={t("privacy.s9.title")}>
              <p>
                {t("privacy.s9.p1a")}{" "}
                <Link to={homePath} className={linkClass}>{siteLabel}</Link>{" "}
                {t("privacy.s9.p1b")}
              </p>
            </Section>

            <Section n="11" title={t("privacy.s10.title")}>
              <p>
                {t("privacy.s10.p1a")}{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  www.cnil.fr
                </a>.
              </p>
            </Section>
          </div>

          <NextStep
            links={[
              { kicker: "The house", label: "Back to Makil", to: localizedPath("home") },
              { kicker: "Journal", label: "Notes and perspective", to: "/journal" },
              { kicker: "Mandates", label: "Situations, not services", to: "/mandates" },
              { kicker: "Presence", label: "Six cities", to: "/presence" },
              { kicker: "Introductions", label: "Contact", to: "/contact" },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
