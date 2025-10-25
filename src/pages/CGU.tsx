import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CGU = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="space-y-8 text-foreground/80 font-body">
            <section>
              <p className="mb-4">
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation 
                du site internet de Makil Business Club accessible à l'adresse www.makilbusinessclub.com
              </p>
              <p>
                <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                1. Objet
              </h2>
              <p>
                Les présentes CGU ont pour objet de définir les conditions et modalités d'utilisation 
                du site ainsi que les droits et obligations des utilisateurs et de Makil Business Club 
                dans le cadre de l'utilisation du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                2. Acceptation des CGU
              </h2>
              <p>
                L'accès et l'utilisation du site impliquent l'acceptation pleine et entière des présentes CGU. 
                En cas de désaccord avec ces conditions, l'utilisateur doit renoncer à l'accès aux services 
                proposés par le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                3. Accès au site
              </h2>
              <p className="mb-4">
                Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. 
                Tous les coûts afférents à l'accès au site, que ce soient les frais matériels, logiciels 
                ou d'accès à Internet, sont exclusivement à la charge de l'utilisateur.
              </p>
              <p>
                Makil Business Club met en œuvre tous les moyens raisonnables à sa disposition pour assurer 
                un accès de qualité au site, mais n'est tenu à aucune obligation d'y parvenir. 
                Makil Business Club ne peut être tenu responsable de tout dysfonctionnement du réseau ou 
                des serveurs ou de tout autre événement échappant au contrôle raisonnable qui empêcherait 
                ou dégraderait l'accès au site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                4. Services proposés
              </h2>
              <p>
                Le site a pour objet de fournir des informations concernant le club d'affaires exclusif 
                Makil Business Club, ses événements, et les opportunités de networking pour les 
                Ultra High Net Worth Individuals (UHNWI). Le site permet également aux visiteurs de 
                soumettre une demande d'adhésion au club.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                5. Inscription et candidature
              </h2>
              <p className="mb-4">
                L'accès à certains services du site nécessite la création d'un compte ou la soumission 
                d'une candidature. L'utilisateur s'engage à fournir des informations exactes, complètes 
                et à jour lors de son inscription ou de sa candidature.
              </p>
              <p className="mb-4">
                Makil Business Club se réserve le droit d'accepter ou de refuser toute candidature 
                à sa seule discrétion, le club étant exclusif et fonctionnant sur invitation uniquement.
              </p>
              <p>
                Chaque utilisateur est responsable de la confidentialité de ses identifiants de connexion 
                et s'engage à informer immédiatement Makil Business Club de toute utilisation non autorisée 
                de son compte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                6. Propriété intellectuelle
              </h2>
              <p className="mb-4">
                L'ensemble du contenu présent sur le site (textes, images, vidéos, graphismes, logos, 
                icônes, sons, logiciels) est la propriété exclusive de Makil Business Club ou de ses 
                partenaires et est protégé par les lois françaises et internationales relatives à la 
                propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou 
                partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, 
                sauf autorisation écrite préalable de Makil Business Club.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                7. Responsabilités
              </h2>
              <p className="mb-4">
                Les informations fournies sur le site le sont à titre indicatif. Makil Business Club 
                s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, 
                mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
                mises à disposition.
              </p>
              <p>
                Makil Business Club ne pourra être tenu responsable des dommages directs ou indirects 
                résultant de l'utilisation du site ou de l'impossibilité d'y accéder.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                8. Protection des données personnelles
              </h2>
              <p>
                Les données personnelles collectées via le site sont traitées conformément au 
                Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés. 
                Pour plus d'informations, consultez notre{" "}
                <a href="/politique-confidentialite" className="text-primary hover:underline">
                  Politique de confidentialité
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                9. Cookies
              </h2>
              <p>
                Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                L'utilisateur peut paramétrer son navigateur pour refuser les cookies, sachant que cela 
                peut affecter certaines fonctionnalités du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                10. Liens hypertextes
              </h2>
              <p>
                Le site peut contenir des liens vers des sites tiers. Makil Business Club n'exerce 
                aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou 
                leur disponibilité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                11. Modification des CGU
              </h2>
              <p>
                Makil Business Club se réserve le droit de modifier les présentes CGU à tout moment. 
                Les modifications entrent en vigueur dès leur publication sur le site. Il est donc 
                recommandé aux utilisateurs de consulter régulièrement les CGU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                12. Droit applicable et juridiction
              </h2>
              <p>
                Les présentes CGU sont régies par le droit français. Tout litige relatif à l'interprétation 
                ou à l'exécution des présentes sera soumis, à défaut d'accord amiable, à la compétence 
                exclusive des tribunaux français.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                13. Contact
              </h2>
              <p>
                Pour toute question concernant les présentes CGU, vous pouvez nous contacter à l'adresse : 
                richard@makilbusinessclub.com
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
