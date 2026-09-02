import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/useSeo";
import { localizedPath } from "@/lib/routes";

const PolitiqueConfidentialite = () => {
  const { t } = useLanguage();
  useSeo({ routeKey: "privacy", titleKey: "seo.privacy.title", descriptionKey: "seo.privacy.description" });
  const locale = "en-GB";
  const siteLabel = "makil.fr";
  const homePath = localizedPath("home");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            {t("legal.kicker")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-12">
            {t("privacy.title")}
          </h1>

          <div className="space-y-10 text-foreground/80 font-body text-sm leading-relaxed">
            <section>
              <p>
                {t("privacy.intro")} (
                <Link to={homePath} className="text-foreground/80 hover:text-foreground underline underline-offset-4">{siteLabel}</Link>)
              </p>
              <p className="mt-3">
                <strong>{t("privacy.lastUpdate")}</strong> {new Date().toLocaleDateString(locale)}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("privacy.s1.title")}</h2>
              <p>{t("privacy.s1.p1")}</p>
              <p className="mt-2">
                <strong>{t("privacy.s1.contact")}</strong>{" "}
                <a href="mailto:richard@makil-private.com" className="text-foreground/80 hover:text-foreground underline underline-offset-4">richard@makil-private.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("privacy.s2.title")}</h2>
              <p className="mb-3">{t("privacy.s2.intro")}</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>{t("privacy.s2.li1")}</li>
                <li>{t("privacy.s2.li2")}</li>
                <li>{t("privacy.s2.li3")}</li>
                <li>{t("privacy.s2.li4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("privacy.s3.title")}</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>{t("privacy.s3.li1")}</li>
                <li>{t("privacy.s3.li2")}</li>
                <li>{t("privacy.s3.li3")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("privacy.s4.title")}</h2>
              <p>{t("privacy.s4.p1")}</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("privacy.s5.title")}</h2>
              <p>{t("privacy.s5.p1")}</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("privacy.s6.title")}</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>{t("privacy.s6.li1")}</li>
                <li>{t("privacy.s6.li2")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("privacy.s7.title")}</h2>
              <p className="mb-3">{t("privacy.s7.p1")}</p>
              <p>
                {t("privacy.s7.p2a")}{" "}
                <a href="mailto:richard@makil-private.com" className="text-foreground/80 hover:text-foreground underline underline-offset-4">richard@makil-private.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("privacy.s8.title")}</h2>
              <p>{t("privacy.s8.p1")}</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("privacy.s9.title")}</h2>
              <p>
                {t("privacy.s9.p1a")}{" "}
                <Link to={homePath} className="text-foreground/80 hover:text-foreground underline underline-offset-4">{siteLabel}</Link>{" "}
                {t("privacy.s9.p1b")}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">{t("privacy.s10.title")}</h2>
              <p>
                {t("privacy.s10.p1a")}{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground underline underline-offset-4">
                  www.cnil.fr
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
