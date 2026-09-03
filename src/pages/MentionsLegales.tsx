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

const MentionsLegales = () => {
  const { t } = useLanguage();
  useSeo({ routeKey: "legal", titleKey: "seo.legal.title", descriptionKey: "seo.legal.description" });
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-24 mt-16">
        <div className="max-w-3xl mx-auto">
          <PageIntro crumbs={[{ label: t("legal.title") }]} />

          <header className="mt-16 mb-24">
            <p className="text-[10px] font-body tracking-[0.45em] uppercase text-muted-foreground">
              {t("legal.kicker")}
            </p>
            <h1 className="mt-8 text-5xl sm:text-6xl font-display leading-[1.05] tracking-tight text-foreground">
              {t("legal.title")}
            </h1>
            <div aria-hidden="true" className="mt-10 h-px w-16 bg-foreground/25" />
          </header>

          <div className="space-y-0">
            <Section n="01" title={t("legal.s1.title")}>
              <p>{t("legal.s1.p1")}</p>
              <p>
                <strong className="font-normal text-foreground">{t("legal.s1.site")}</strong>{" "}
                <Link to={localizedPath("home")} className={linkClass}>makil.fr</Link>
                <br />
                <strong className="font-normal text-foreground">{t("legal.s1.email")}</strong>{" "}
                <a href="mailto:richard@makil-private.com" className={linkClass}>richard@makil-private.com</a>
                <br />
                <strong className="font-normal text-foreground">{t("legal.s1.location")}</strong>{" "}
                {t("legal.s1.locationValue")}
              </p>
            </Section>

            <Section n="02" title={t("legal.s2.title")}>
              <p>{t("legal.s2.p1")}</p>
            </Section>

            <Section n="03" title={t("legal.s3.title")}>
              <p>{t("legal.s3.p1")}</p>
              <p>{t("legal.s3.p2")}</p>
            </Section>

            <Section n="04" title={t("legal.s4.title")}>
              <p>{t("legal.s4.p1")}</p>
            </Section>

            <Section n="05" title={t("legal.s5.title")}>
              <p>
                {t("legal.s5.p1a")}{" "}
                <a href="mailto:richard@makil-private.com" className={linkClass}>richard@makil-private.com</a>.
              </p>
            </Section>

            <Section n="06" title={t("legal.s6.title")}>
              <p>{t("legal.s6.p1")}</p>
            </Section>

            <Section n="07" title={t("legal.s7.title")}>
              <p>
                {t("legal.s7.p1a")}{" "}
                <Link to={localizedPath("privacy")} className={linkClass}>
                  {t("legal.s7.link")}
                </Link>.
              </p>
            </Section>

            <Section n="08" title={t("legal.s8.title")}>
              <p>{t("legal.s8.p1")}</p>
            </Section>
          </div>

          <NextStep
            links={[
              { kicker: "The practice", label: "Back to Makil", to: localizedPath("home") },
              { kicker: "Journal", label: "Notes and perspective", to: "/journal" },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
