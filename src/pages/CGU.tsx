import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const CGU = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            {t("cgu.title")}
          </h1>
          <p className="text-muted-foreground font-body text-sm mb-12">
            {t("cgu.lastUpdate")} {new Date().toLocaleDateString('fr-FR')}
          </p>
          
          <div className="space-y-10 text-foreground/80 font-body leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgu.s1.title")}
              </h2>
              <p>{t("cgu.s1.p1")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgu.s2.title")}
              </h2>
              <p>{t("cgu.s2.p1")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgu.s3.title")}
              </h2>
              <p className="mb-4">{t("cgu.s3.p1")}</p>
              <p>{t("cgu.s3.p2")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgu.s4.title")}
              </h2>
              <p>{t("cgu.s4.p1")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgu.s5.title")}
              </h2>
              <p className="mb-4">{t("cgu.s5.p1")}</p>
              <p>{t("cgu.s5.p2")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgu.s6.title")}
              </h2>
              <p className="mb-4">{t("cgu.s6.p1")}</p>
              <p>{t("cgu.s6.p2")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgu.s7.title")}
              </h2>
              <p>
                {t("cgu.s7.p1")}{" "}
                <Link to="/politique-confidentialite" className="underline hover:text-foreground transition-smooth">
                  {t("cgu.s7.link")}
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgu.s8.title")}
              </h2>
              <p>{t("cgu.s8.p1")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgu.s9.title")}
              </h2>
              <p>{t("cgu.s9.p1")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgu.s10.title")}
              </h2>
              <p>{t("cgu.s10.p1")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgu.s11.title")}
              </h2>
              <p>
                {t("cgu.s11.p1")} richard@makil-maqil.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGU;
