import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">
            Mentions Légales
          </h1>
          
          <div className="space-y-8 text-foreground/80 font-body">
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                1. Informations générales
              </h2>
              <p className="mb-4">
                Le site <strong>Makil Business Club</strong> est édité par Makil Business Club, 
                société dédiée à la création d'un réseau d'affaires exclusif pour les Ultra High Net Worth Individuals.
              </p>
              <p>
                <strong>Siège social :</strong> Paris, France<br />
                <strong>Email :</strong> richard@makilbusinessclub.com<br />
                <strong>Téléphone :</strong> 06.26.50.08.80
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                2. Directeur de la publication
              </h2>
              <p>
                Le directeur de la publication du site est le représentant légal de Makil Business Club.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                3. Hébergement
              </h2>
              <p>
                Le site est hébergé par Lovable (GPT Ltd.)<br />
                Siège social : 10 Finsbury Square, London, England, EC2A 1AF
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                4. Propriété intellectuelle
              </h2>
              <p className="mb-4">
                L'ensemble des contenus présents sur le site (textes, images, graphismes, logo, icônes, sons, logiciels) 
                est la propriété exclusive de Makil Business Club, à l'exception des marques, logos ou contenus 
                appartenant à d'autres sociétés partenaires ou auteurs.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
                même partielle, de ces différents éléments est strictement interdite sans l'accord exprès 
                par écrit de Makil Business Club.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                5. Responsabilité
              </h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est 
                périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                ou des lacunes. Si vous constatez une lacune, erreur ou ce qui semble être un dysfonctionnement, 
                merci de bien vouloir le signaler par email à l'adresse richard@makilbusinessclub.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                6. Liens hypertextes
              </h2>
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
                Les liens vers ces autres ressources vous font quitter le site. Il est possible de créer un lien 
                vers la page de présentation de ce site sans autorisation expresse de Makil Business Club. 
                Aucune autorisation ou demande d'information préalable ne peut être exigée par l'éditeur à l'égard 
                d'un site qui souhaite établir un lien vers le site de l'éditeur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                7. Protection des données personnelles
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit 
                d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. 
                Pour plus d'informations, consultez notre{" "}
                <a href="/politique-confidentialite" className="text-primary hover:underline">
                  Politique de confidentialité
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                8. Droit applicable et juridiction compétente
              </h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut 
                d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles 
                de compétence en vigueur.
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
