import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            MAKIL
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-12">
            Mentions Légales
          </h1>

          <div className="space-y-10 text-foreground/80 font-body text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                1. Éditeur du site
              </h2>
              <p>
                Le site <strong>MAKIL</strong> est édité par Richard Makil-Herrero, à titre personnel.
              </p>
              <p className="mt-3">
                <strong>Site :</strong>{" "}
                <a href="https://makil.fr" className="text-accent hover:underline">https://makil.fr</a><br />
                <strong>Email :</strong>{" "}
                <a href="mailto:richard@makil.fr" className="text-accent hover:underline">richard@makil.fr</a><br />
                <strong>Localisation :</strong> Paris, France
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                2. Directeur de la publication
              </h2>
              <p>Le directeur de la publication est Richard Makil-Herrero.</p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                3. Hébergement
              </h2>
              <p>
                Le site est hébergé par Lovable (GPT Ltd.)<br />
                Siège social : 10 Finsbury Square, London, England, EC2A 1AF
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                4. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble des contenus présents sur le site (textes, images, graphismes, logo, icônes,
                photographies) est la propriété exclusive de Richard Makil-Herrero, sauf mention contraire.
                Toute reproduction, représentation, modification, publication, adaptation totale ou
                partielle de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite
                sans l'autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                5. Responsabilité
              </h2>
              <p>
                Les informations diffusées sur le site sont fournies à titre indicatif. Malgré le soin
                apporté à leur mise à jour, des inexactitudes ou omissions peuvent subsister. Pour signaler
                une erreur, merci d'écrire à{" "}
                <a href="mailto:richard@makil.fr" className="text-accent hover:underline">richard@makil.fr</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                6. Liens hypertextes
              </h2>
              <p>
                Le site peut renvoyer vers d'autres sites tiers. MAKIL n'exerce aucun contrôle sur ces
                ressources externes et décline toute responsabilité quant à leur contenu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                7. Données personnelles
              </h2>
              <p>
                Pour toute information sur le traitement de vos données personnelles, consultez la{" "}
                <a href="/politique-confidentialite" className="text-accent hover:underline">
                  Politique de confidentialité
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                8. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. Tout litige relève de
                la compétence exclusive des tribunaux français.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegales;
