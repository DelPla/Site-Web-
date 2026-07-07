import React from "react";
import ReactDOM from "react-dom/client";
import LegalLayout from "./components/LegalLayout";
import content from "./content/site.json";
import "./index.css";

function PrivacyPolicy() {
  const { legal } = content;

  return (
    <LegalLayout title="Privacy Policy">
      <section>
        <h2 className="font-display text-lg text-sand">Data collected</h2>
        <p>
          This site has no forms and no user accounts. It does not collect any
          personal data.
        </p>
        <p className="mt-3">
          Fonts are hosted directly on this site: no data (including your IP
          address) is sent to Google or any other third-party service when the
          pages are displayed.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">Cookies</h2>
        <p>
          This site uses no tracking, analytics, or advertising cookies. No
          consent banner is therefore required in the site's current state.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">External links</h2>
        <p>
          This site contains links to LinkedIn and to an email client. These
          third-party services apply their own privacy policies, independent of
          this site's.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">Data controller</h2>
        <p>
          Delphine Planes
          <br />
          Contact: {legal.contactEmail}
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg text-sand">Your rights (GDPR)</h2>
        <p>
          In accordance with the General Data Protection Regulation (GDPR), you
          have the right to access, rectify, and erase your data. For any
          question, contact {legal.contactEmail}.
        </p>
      </section>
    </LegalLayout>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrivacyPolicy />
  </React.StrictMode>
);
