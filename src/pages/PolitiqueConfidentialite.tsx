import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">
            Politique de Confidentialité
          </h1>
          
          <div className="space-y-8 text-foreground/80 font-body">
            <section>
              <p className="mb-4">
                La présente Politique de Confidentialité décrit la façon dont Makil Business Club 
                collecte, utilise et protège les informations personnelles que vous nous fournissez 
                via notre site internet.
              </p>
              <p>
                <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                1. Responsable du traitement
              </h2>
              <p>
                Le responsable du traitement des données personnelles est Makil Business Club, 
                dont le siège social est situé à Paris, France.
              </p>
              <p className="mt-2">
                <strong>Contact :</strong> richard@makilbusinessclub.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                2. Données collectées
              </h2>
              <p className="mb-4">
                Nous collectons les données personnelles suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Informations professionnelles (société, fonction)</li>
                <li>Données de navigation (adresse IP, cookies, pages visitées)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                3. Finalités du traitement
              </h2>
              <p className="mb-4">
                Vos données personnelles sont collectées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Traitement de votre demande d'adhésion au club</li>
                <li>Gestion de votre compte membre</li>
                <li>Communication sur nos événements et actualités</li>
                <li>Amélioration de nos services</li>
                <li>Respect de nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                4. Base légale du traitement
              </h2>
              <p>
                Le traitement de vos données personnelles repose sur :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Votre consentement pour l'envoi de communications marketing</li>
                <li>L'exécution du contrat d'adhésion au club</li>
                <li>Notre intérêt légitime à améliorer nos services</li>
                <li>Le respect de nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                5. Destinataires des données
              </h2>
              <p>
                Vos données personnelles sont destinées aux services internes de Makil Business Club. 
                Elles peuvent également être transmises à nos prestataires techniques pour la gestion 
                du site internet et l'envoi de communications, dans le strict respect de la confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                6. Durée de conservation
              </h2>
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire aux finalités 
                pour lesquelles elles ont été collectées, conformément aux obligations légales applicables :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Données des membres actifs : durée de l'adhésion + 3 ans</li>
                <li>Données de prospection : 3 ans à compter du dernier contact</li>
                <li>Données de navigation : 13 mois maximum</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                7. Vos droits
              </h2>
              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique 
                et Libertés, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et y accéder</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse email : 
                richard@makilbusinessclub.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                8. Sécurité des données
              </h2>
              <p>
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées 
                afin de garantir la sécurité et la confidentialité de vos données personnelles, notamment 
                pour empêcher qu'elles soient déformées, endommagées ou que des tiers non autorisés y aient accès.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                9. Cookies
              </h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines 
                fonctionnalités du site pourraient ne pas fonctionner correctement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                10. Modifications de la politique
              </h2>
              <p>
                Nous nous réservons le droit de modifier la présente Politique de Confidentialité 
                à tout moment. Toute modification sera publiée sur cette page avec une nouvelle date 
                de mise à jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                11. Réclamation
              </h2>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous avez la possibilité 
                d'introduire une réclamation auprès de la Commission Nationale de l'Informatique 
                et des Libertés (CNIL) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
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
