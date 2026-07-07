import type { ReactNode } from "react";
import Background from "./Background";
import Nav from "./Nav";
import Footer from "./Footer";

type Props = { title: string; children: ReactNode };

/** Shared shell for standalone legal pages — reuses the site's chrome (nav, background, footer). */
export default function LegalLayout({ title, children }: Props) {
  return (
    <div className="grain relative min-h-dvh">
      <Background />
      <Nav />
      <main className="relative z-10 px-6 pb-28 pt-40">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl text-sand sm:text-4xl">{title}</h1>
          <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-mute">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
