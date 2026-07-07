import React from "react";
import ReactDOM from "react-dom/client";
import LegalLayout from "./components/LegalLayout";
import content from "./content/site.json";
import "./index.css";

function PolitiqueConfidentialite() {
  const { legal } = content;

  return (
    <LegalLayout title="Politique de confidentialité">
      <section>
        <h2 className="font-display text-lg text-sand">
          Données collectées
        </h2>
        <p>
          Ce site ne comporte aucun formulaire ni compte utilisateur. Il ne
          collecte aucune donnée personnelle.
        </p>
        <p className="mt-3">
          Les polices de caractères sont hébergées directement sur ce site :
          aucune donnée (y compris l'adresse IP) n'est transmise à Google ou à
          un autre service tiers lors de l'affichage des pages.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">Cookies</h2>
        <p>
          Ce site n'utilise aucun cookie de suivi, de mesure d'audience ou
          publicitaire. Aucun bandeau de consentement n'est donc requis en
          l'état actuel du site.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">Liens externes</h2>
        <p>
          Ce site contient des liens vers LinkedIn et vers un client de
          messagerie (email). Ces services tiers appliquent leur propre
          politique de confidentialité, indépendante de celle de ce site.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">
          Responsable du traitement
        </h2>
        <p>
          Delphine Planes
          <br />
          Contact : {legal.contactEmail}
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">
          Vos droits (RGPD)
        </h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données,
          vous disposez d'un droit d'accès, de rectification et de suppression
          de vos données. Pour toute question, contactez {legal.contactEmail}.
        </p>
      </section>
    </LegalLayout>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PolitiqueConfidentialite />
  </React.StrictMode>
);
