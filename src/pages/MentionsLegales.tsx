import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/useSeo";
import { localizedPath } from "@/lib/routes";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";

const MentionsLegales = () => {
  const { t } = useLanguage();
  useSeo({ routeKey: "legal", titleKey: "seo.legal.title", descriptionKey: "seo.legal.description" });
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <PageIntro crumbs={[{ label: t("legal.title") }]} />

          <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            {t("legal.kicker")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-12">
            {t("legal.title")}
          </h1>

          <div className="space-y-10 text-foreground/80 font-body text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("legal.s1.title")}</h2>
              <p>{t("legal.s1.p1")}</p>
              <p className="mt-3">
                <strong>{t("legal.s1.site")}</strong>{" "}
                <Link to={localizedPath("home")} className="text-foreground/80 hover:text-foreground underline underline-offset-4">makil.fr</Link><br />
                <strong>{t("legal.s1.email")}</strong>{" "}
                <a href="mailto:richard@makil-private.com" className="text-foreground/80 hover:text-foreground underline underline-offset-4">richard@makil-private.com</a><br />
                <strong>{t("legal.s1.location")}</strong> {t("legal.s1.locationValue")}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("legal.s2.title")}</h2>
              <p>{t("legal.s2.p1")}</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("legal.s3.title")}</h2>
              <p>
                {t("legal.s3.p1")}<br />
                {t("legal.s3.p2")}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("legal.s4.title")}</h2>
              <p>{t("legal.s4.p1")}</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("legal.s5.title")}</h2>
              <p>
                {t("legal.s5.p1a")}{" "}
                <a href="mailto:richard@makil-private.com" className="text-foreground/80 hover:text-foreground underline underline-offset-4">richard@makil-private.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("legal.s6.title")}</h2>
              <p>{t("legal.s6.p1")}</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("legal.s7.title")}</h2>
              <p>
                {t("legal.s7.p1a")}{" "}
                <Link to={localizedPath("privacy")} className="text-foreground/80 hover:text-foreground underline underline-offset-4">
                  {t("legal.s7.link")}
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("legal.s8.title")}</h2>
              <p>{t("legal.s8.p1")}</p>
            </section>
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
