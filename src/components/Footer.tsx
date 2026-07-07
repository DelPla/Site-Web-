import { Linkedin } from "lucide-react";
import content from "../content/site.json";

const LINKEDIN = "https://www.linkedin.com/in/delphine-planes-302aa730";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-600/40 font-display text-gold-400">
            DP
          </span>
          <div>
            <p className="font-display text-sand">Delphine Planes</p>
            <p className="text-xs text-mute">
              Global Sourcing &amp; Supplier Management
            </p>
          </div>
        </div>

        <p className="order-last text-center text-xs text-mute sm:order-none">
          {content.footer.tagline}
        </p>

        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Delphine Planes on LinkedIn"
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-mute transition-colors duration-300 hover:border-gold-600/50 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>

      <div className="mx-auto mt-6 flex max-w-content flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-mute/70">
        <a href="/mentions-legales.html" className="hover:text-gold-400">
          Mentions légales
        </a>
        <span aria-hidden>·</span>
        <a href="/confidentialite.html" className="hover:text-gold-400">
          Politique de confidentialité
        </a>
      </div>

      <p className="mx-auto mt-4 max-w-content text-center text-[11px] text-mute/60">
        © {new Date().getFullYear()} Delphine Planes. All rights reserved.
      </p>
    </footer>
  );
}
