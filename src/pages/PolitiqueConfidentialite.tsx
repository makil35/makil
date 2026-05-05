import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground mb-4">
            MAKIL
          </p>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground mb-12">
            Politique de Confidentialité
          </h1>

          <div className="space-y-10 text-foreground/80 font-body text-sm leading-relaxed">
            <section>
              <p>
                La présente politique décrit la manière dont MAKIL ({" "}
                <a href="https://makil.fr" className="text-accent hover:underline">https://makil.fr</a>)
                collecte, utilise et protège les données personnelles des visiteurs du site.
              </p>
              <p className="mt-3">
                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString("fr-FR")}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                1. Responsable du traitement
              </h2>
              <p>
                Le responsable du traitement est Richard Makil-Herrero, basé à Paris, France.
              </p>
              <p className="mt-2">
                <strong>Contact :</strong>{" "}
                <a href="mailto:richard@makil.fr" className="text-accent hover:underline">richard@makil.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                2. Données collectées
              </h2>
              <p className="mb-3">Sont susceptibles d'être collectées :</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Contenu du message envoyé</li>
                <li>Données techniques de navigation (adresse IP, cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                3. Finalités du traitement
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Répondre à vos demandes de contact</li>
                <li>Assurer le bon fonctionnement et la sécurité du site</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                4. Base légale
              </h2>
              <p>
                Les traitements reposent sur votre consentement, l'exécution de mesures précontractuelles
                à votre demande, ainsi que notre intérêt légitime à assurer la qualité de nos échanges.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                5. Destinataires des données
              </h2>
              <p>
                Vos données sont strictement destinées à Richard Makil-Herrero et, le cas échéant, aux
                prestataires techniques nécessaires au fonctionnement du site, dans le respect de la
                confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                6. Durée de conservation
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Demandes de contact : 3 ans à compter du dernier échange</li>
                <li>Données de navigation : 13 mois maximum</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                7. Vos droits
              </h2>
              <p className="mb-3">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits
                d'accès, de rectification, d'effacement, de limitation, d'opposition, de portabilité,
                ainsi que du droit de retirer votre consentement à tout moment.
              </p>
              <p>
                Pour exercer ces droits, écrivez à{" "}
                <a href="mailto:richard@makil.fr" className="text-accent hover:underline">richard@makil.fr</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                8. Sécurité
              </h2>
              <p>
                Toutes les mesures techniques et organisationnelles raisonnables sont mises en œuvre
                pour protéger vos données contre la perte, l'altération ou l'accès non autorisé.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                9. Cookies
              </h2>
              <p>
                Le site{" "}
                <a href="https://makil.fr" className="text-accent hover:underline">makil.fr</a>{" "}
                peut déposer des cookies pour mesurer l'audience et améliorer votre expérience. Vous
                pouvez gérer vos préférences via le bandeau de consentement ou les paramètres de votre
                navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display text-foreground mb-4">
                10. Réclamation
              </h2>
              <p>
                Vous pouvez introduire une réclamation auprès de la CNIL :{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
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
