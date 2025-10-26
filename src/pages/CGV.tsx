import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CGV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-display font-bold mb-8 text-gradient-gold">
            Conditions Générales de Vente
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              1. Objet
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Makil Business Club, ci-après dénommé "le Club", et toute personne souhaitant adhérer aux services du Club, ci-après dénommée "le Membre".
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Le Club propose un réseau exclusif pour Ultra High Net Worth Individuals (UHNWI), offrant des services de networking de luxe, organisation d'événements VIP, et accès à un réseau d'élite d'entrepreneurs fortunés et investisseurs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              2. Adhésion et Souscription
            </h2>
            <h3 className="text-xl font-display font-semibold mb-3 text-primary/80">
              2.1 Conditions d'admission
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              L'adhésion au Makil Business Club est soumise à l'acceptation d'un dossier de candidature. Le Club se réserve le droit d'accepter ou de refuser toute candidature sans avoir à justifier sa décision.
            </p>
            <h3 className="text-xl font-display font-semibold mb-3 mt-4 text-primary/80">
              2.2 Procédure d'adhésion
            </h3>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed">
              <li>Soumission d'un dossier de candidature complet</li>
              <li>Étude du dossier par le comité de sélection</li>
              <li>Entretien personnel avec un représentant du Club</li>
              <li>Notification de la décision sous 15 jours ouvrés</li>
              <li>Signature du contrat d'adhésion et paiement de la cotisation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              3. Tarifs et Modalités de Paiement
            </h2>
            <h3 className="text-xl font-display font-semibold mb-3 text-primary/80">
              3.1 Cotisations
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Les tarifs des adhésions sont communiqués lors de la candidature et peuvent inclure :
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed">
              <li>Frais d'inscription (non remboursables)</li>
              <li>Cotisation annuelle</li>
              <li>Services optionnels et événements spéciaux</li>
            </ul>
            <h3 className="text-xl font-display font-semibold mb-3 mt-4 text-primary/80">
              3.2 Modalités de paiement
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Le paiement s'effectue :
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed">
              <li>Par virement bancaire</li>
              <li>Par carte bancaire</li>
              <li>Par chèque (sous réserve d'acceptation)</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Le paiement de la cotisation annuelle est exigible à la date anniversaire de l'adhésion.
            </p>
            <h3 className="text-xl font-display font-semibold mb-3 mt-4 text-primary/80">
              3.3 Retard de paiement
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Tout retard de paiement entraînera la suspension immédiate de l'accès aux services du Club. En cas de non-paiement après 30 jours, l'adhésion sera résiliée de plein droit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              4. Services Inclus
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              L'adhésion au Club donne accès aux services suivants :
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed">
              <li>Accès au réseau exclusif de membres UHNWI</li>
              <li>Participation aux événements networking organisés par le Club</li>
              <li>Accès aux espaces privés et lounges du Club</li>
              <li>Service de conciergerie premium</li>
              <li>Invitations aux événements VIP et galas exclusifs</li>
              <li>Opportunités d'investissement et partenariats business</li>
              <li>Plateforme numérique de networking</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Certains événements spéciaux ou services peuvent faire l'objet d'une facturation supplémentaire.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              5. Durée et Renouvellement
            </h2>
            <h3 className="text-xl font-display font-semibold mb-3 text-primary/80">
              5.1 Durée
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              L'adhésion est conclue pour une durée d'un an, renouvelable par tacite reconduction sauf dénonciation par l'une des parties.
            </p>
            <h3 className="text-xl font-display font-semibold mb-3 mt-4 text-primary/80">
              5.2 Renouvellement
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Le renouvellement est automatique à la date anniversaire, sauf notification contraire au moins 60 jours avant l'échéance. Le tarif applicable sera celui en vigueur au moment du renouvellement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              6. Résiliation
            </h2>
            <h3 className="text-xl font-display font-semibold mb-3 text-primary/80">
              6.1 Résiliation par le Membre
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Le Membre peut résilier son adhésion à tout moment en adressant une notification écrite par lettre recommandée avec accusé de réception au moins 60 jours avant la date d'échéance annuelle. Aucun remboursement ne sera effectué pour la période en cours.
            </p>
            <h3 className="text-xl font-display font-semibold mb-3 mt-4 text-primary/80">
              6.2 Résiliation par le Club
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Le Club se réserve le droit de résilier l'adhésion d'un Membre dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed">
              <li>Non-respect du règlement intérieur</li>
              <li>Comportement inapproprié ou nuisible à l'image du Club</li>
              <li>Non-paiement des cotisations</li>
              <li>Fausses déclarations lors de la candidature</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              En cas de résiliation pour faute, aucun remboursement ne sera effectué.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              7. Droit de Rétractation
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Conformément à l'article L221-18 du Code de la consommation, le Membre dispose d'un délai de 14 jours à compter de la signature du contrat pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Pour exercer ce droit, le Membre doit notifier sa décision par lettre recommandée avec accusé de réception à l'adresse du Club. En cas de rétractation, le remboursement sera effectué dans un délai de 14 jours, déduction faite des frais d'inscription.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              8. Responsabilité
            </h2>
            <h3 className="text-xl font-display font-semibold mb-3 text-primary/80">
              8.1 Responsabilité du Club
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Le Club s'engage à fournir les services avec diligence et professionnalisme. Toutefois, le Club ne saurait être tenu responsable :
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed">
              <li>Des dommages indirects subis par le Membre</li>
              <li>Des relations ou transactions entre Membres</li>
              <li>De l'annulation ou modification d'événements pour cas de force majeure</li>
              <li>Des problèmes techniques indépendants de sa volonté</li>
            </ul>
            <h3 className="text-xl font-display font-semibold mb-3 mt-4 text-primary/80">
              8.2 Responsabilité du Membre
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Le Membre s'engage à :
            </p>
            <ul className="list-disc pl-6 text-foreground/80 leading-relaxed">
              <li>Respecter le règlement intérieur du Club</li>
              <li>Adopter un comportement respectueux envers les autres Membres</li>
              <li>Ne pas divulguer d'informations confidentielles du Club</li>
              <li>Utiliser les services du Club conformément à leur destination</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              9. Confidentialité
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Les Membres s'engagent à respecter la confidentialité des informations échangées au sein du Club et à ne pas divulguer l'identité des autres Membres sans leur consentement exprès.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              10. Protection des Données Personnelles
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Les données personnelles collectées sont traitées conformément à notre Politique de Confidentialité et au Règlement Général sur la Protection des Données (RGPD). Pour plus d'informations, veuillez consulter notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              11. Modifications des CGV
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Le Club se réserve le droit de modifier les présentes CGV à tout moment. Les Membres seront informés de toute modification par email au moins 30 jours avant leur entrée en vigueur. La poursuite de l'utilisation des services après cette notification vaut acceptation des nouvelles conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              12. Règlement des Litiges
            </h2>
            <h3 className="text-xl font-display font-semibold mb-3 text-primary/80">
              12.1 Réclamations
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Toute réclamation doit être adressée par écrit à : richard@makilbusinessclub.com ou par courrier à l'adresse du siège social.
            </p>
            <h3 className="text-xl font-display font-semibold mb-3 mt-4 text-primary/80">
              12.2 Médiation
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. Le Membre peut recourir à un médiateur de la consommation dans les conditions prévues par le Code de la consommation.
            </p>
            <h3 className="text-xl font-display font-semibold mb-3 mt-4 text-primary/80">
              12.3 Juridiction compétente
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              En cas d'échec de la médiation, les tribunaux français seront seuls compétents. Le droit français est applicable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-semibold mb-4 text-primary">
              13. Contact
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Pour toute question relative aux présentes CGV, vous pouvez nous contacter :
            </p>
            <ul className="list-none text-foreground/80 leading-relaxed mt-4">
              <li><strong>Email :</strong> richard@makilbusinessclub.com</li>
              <li><strong>Téléphone :</strong> 06.26.50.08.80</li>
              <li><strong>Adresse :</strong> Paris, France</li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CGV;
