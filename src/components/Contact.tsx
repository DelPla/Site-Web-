import { motion } from "motion/react";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import content from "../content/site.json";

const LINKEDIN = "https://www.linkedin.com/in/delphine-planes-302aa730";

export default function Contact() {
  const { contact, legal } = content;

  return (
    <section id="contact" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-24"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/20 blur-[100px]" />

          <div className="relative">
            <Reveal>
              {contact.photo && (
                <img
                  src={contact.photo}
                  translate="no"
                  alt="Delphine Planes"
                  className="mx-auto mb-7 h-28 w-28 rounded-full border-2 border-gold-500/40 object-cover shadow-[0_16px_36px_-18px_rgba(27,44,70,0.55)] sm:h-36 sm:w-36"
                />
              )}
              <p className="eyebrow">{contact.eyebrow}</p>
              <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-tight text-sand sm:text-5xl">
                {contact.titlePre}{" "}
                <span className="text-gold-gradient">{contact.titleAnd}</span>{" "}
                {contact.titlePost}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-mute">{contact.intro}</p>
            </Reveal>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-3.5 font-medium text-white transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(173,134,54,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <Linkedin className="h-4 w-4" />
                {contact.ctaLinkedin}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`mailto:${legal.contactEmail}?subject=Sourcing%20conversation`}
                className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-medium text-sand transition-all duration-300 hover:border-gold-600/60 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60"
              >
                <Mail className="h-4 w-4 text-gold-400" />
                {contact.ctaEmail}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
