import React from "react";
import ReactDOM from "react-dom/client";
import LegalLayout from "./components/LegalLayout";
import content from "./content/site.json";
import "./index.css";

function MentionsLegales() {
  const { legal } = content;

  return (
    <LegalLayout title="Mentions légales">
      <section>
        <h2 className="font-display text-lg text-sand">Éditeur du site</h2>
        <p>
          Nom / Raison sociale : {legal.companyName}
          <br />
          Statut juridique : {legal.legalStatus}
          <br />
          SIRET : {legal.siret}
          <br />
          Adresse du siège : {legal.address}
          <br />
          Numéro de TVA intracommunautaire (si applicable) : {legal.vat}
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">
          Responsable de la publication
        </h2>
        <p>
          Delphine Planes
          <br />
          Contact : {legal.contactEmail}
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">Hébergement</h2>
        <p>
          Ce site est hébergé par :
          <br />
          Netlify, Inc.
          <br />
          512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis
          <br />
          <a
            href="https://www.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 hover:underline"
          >
            netlify.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur ce site (textes, structure,
          identité visuelle) est la propriété de Delphine Planes, sauf mention
          contraire. Toute reproduction sans autorisation préalable est
          interdite.
        </p>
      </section>
    </LegalLayout>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MentionsLegales />
  </React.StrictMode>
);
