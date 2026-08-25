import React from "react";
import ReactDOM from "react-dom/client";
import LegalLayout from "./components/LegalLayout";
import content from "./content/site.json";
import "./index.css";

function LegalNotice() {
  const { legal } = content;

  return (
    <LegalLayout title="Legal Notice">
      <section>
        <h2 className="font-display text-lg text-sand">Site publisher</h2>
        <p>
          Company name: {legal.companyName}
          <br />
          Legal status: {legal.legalStatus}
          <br />
          Company registration number (SIRET): {legal.siret}
          <br />
          Registered address: {legal.address}
          <br />
          Intra-community VAT number (if applicable): {legal.vat}
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">
          Publication director
        </h2>
        <p>
          <span translate="no" className="notranslate">
            Delphine Planes
          </span>
          <br />
          Contact: {legal.contactEmail}
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">Hosting</h2>
        <p>
          This site is hosted by:
          <br />
          Netlify, Inc.
          <br />
          512 2nd Street, Suite 200, San Francisco, CA 94107, United States
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
        <h2 className="font-display text-lg text-sand">Intellectual property</h2>
        <p>
          All content on this site (text, structure, visual identity) is the
          property of{" "}
          <span translate="no" className="notranslate">
            Delphine Planes
          </span>{" "}
          unless otherwise stated. Any reproduction
          without prior authorization is prohibited.
        </p>
      </section>
    </LegalLayout>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LegalNotice />
  </React.StrictMode>
);
