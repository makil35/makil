import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Accessibilite = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">
            Déclaration d'Accessibilité
          </h1>
          
          <div className="space-y-8 text-foreground/80 font-body">
            <section>
              <p className="mb-4">
                Makil Business Club s'engage à rendre son site internet accessible conformément 
                à l'article 47 de la loi n° 2005-102 du 11 février 2005.
              </p>
              <p>
                <strong>Date de la déclaration :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                1. État de conformité
              </h2>
              <p>
                Le site www.makilbusinessclub.com est en conformité partielle avec le Référentiel 
                Général d'Amélioration de l'Accessibilité (RGAA) version 4.1 en raison des 
                non-conformités et des dérogations énumérées ci-dessous.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                2. Résultats des tests
              </h2>
              <p className="mb-4">
                L'audit de conformité réalisé révèle que :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Les contenus textuels sont structurés avec des titres hiérarchisés</li>
                <li>Les images possèdent des alternatives textuelles pertinentes</li>
                <li>La navigation au clavier est fonctionnelle sur l'ensemble du site</li>
                <li>Le contraste des couleurs respecte les normes WCAG AA</li>
                <li>Le site est responsive et s'adapte aux différentes tailles d'écran</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                3. Contenus non accessibles
              </h2>
              <p className="mb-4">
                Les contenus listés ci-dessous ne sont pas encore totalement accessibles pour les raisons suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Certaines animations peuvent ne pas respecter la préférence "reduced motion" de l'utilisateur</li>
                <li>Quelques formulaires peuvent nécessiter une amélioration des labels explicites</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                4. Technologies utilisées
              </h2>
              <p className="mb-4">
                L'accessibilité du site s'appuie sur les technologies suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>HTML5 sémantique</li>
                <li>CSS3 pour la présentation</li>
                <li>JavaScript pour les interactions</li>
                <li>ARIA (Accessible Rich Internet Applications) pour l'accessibilité avancée</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                5. Établissement de cette déclaration d'accessibilité
              </h2>
              <p>
                Cette déclaration a été établie le {new Date().toLocaleDateString('fr-FR')}. 
                Elle a été mise à jour le {new Date().toLocaleDateString('fr-FR')}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                6. Retour d'information et contact
              </h2>
              <p className="mb-4">
                Si vous n'arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter 
                le responsable du site pour être orienté vers une alternative accessible ou obtenir 
                le contenu sous une autre forme.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email : richard@makilbusinessclub.com</li>
                <li>Téléphone : 06.26.50.08.80</li>
                <li>Adresse : Paris, France</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                7. Voies de recours
              </h2>
              <p className="mb-4">
                Cette procédure est à utiliser dans le cas suivant : vous avez signalé au responsable 
                du site internet un défaut d'accessibilité qui vous empêche d'accéder à un contenu ou 
                à un des services du portail et vous n'avez pas obtenu de réponse satisfaisante.
              </p>
              <p>Vous pouvez :</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>
                  Écrire un message au <a href="https://formulaire.defenseurdesdroits.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Défenseur des droits</a>
                </li>
                <li>
                  Contacter le <a href="https://www.defenseurdesdroits.fr/saisir/delegues" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">délégué du Défenseur des droits</a> dans votre région
                </li>
                <li>
                  Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) :<br />
                  Défenseur des droits<br />
                  Libre réponse 71120<br />
                  75342 Paris CEDEX 07
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                8. Normes et standards respectés
              </h2>
              <p className="mb-4">
                Le site Makil Business Club respecte les standards suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>WCAG 2.1 niveau AA (Web Content Accessibility Guidelines)</li>
                <li>RGAA 4.1 (Référentiel Général d'Amélioration de l'Accessibilité)</li>
                <li>HTML5 et CSS3 valides</li>
                <li>RGPD (Règlement Général sur la Protection des Données)</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibilite;
