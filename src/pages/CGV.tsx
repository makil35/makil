import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const CGV = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            {t("cgv.title")}
          </h1>
          <p className="text-muted-foreground font-body text-sm mb-12">
            {t("cgv.lastUpdate")} {new Date().toLocaleDateString('fr-FR')}
          </p>
          
          <div className="space-y-10 text-foreground/80 font-body leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgv.s1.title")}
              </h2>
              <p>{t("cgv.s1.p1")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgv.s2.title")}
              </h2>
              <p className="mb-4">{t("cgv.s2.p1")}</p>
              <p>{t("cgv.s2.p2")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgv.s3.title")}
              </h2>
              <p className="mb-4">{t("cgv.s3.p1")}</p>
              <p>{t("cgv.s3.p2")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgv.s4.title")}
              </h2>
              <p className="mb-4">{t("cgv.s4.p1")}</p>
              <p>{t("cgv.s4.p2")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgv.s5.title")}
              </h2>
              <p>{t("cgv.s5.p1")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgv.s6.title")}
              </h2>
              <p className="mb-4">{t("cgv.s6.p1")}</p>
              <p>{t("cgv.s6.p2")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgv.s7.title")}
              </h2>
              <p>{t("cgv.s7.p1")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgv.s8.title")}
              </h2>
              <p className="mb-4">{t("cgv.s8.p1")}</p>
              <p>
                {t("cgv.s8.p2")}{" "}
                <Link to="/politique-confidentialite" className="underline hover:text-foreground transition-smooth">
                  {t("cgv.s8.link")}
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgv.s9.title")}
              </h2>
              <p>{t("cgv.s9.p1")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgv.s10.title")}
              </h2>
              <p>{t("cgv.s10.p1")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {t("cgv.s11.title")}
              </h2>
              <p>
                {t("cgv.s11.p1")} richard@makil-maqil.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGV;
