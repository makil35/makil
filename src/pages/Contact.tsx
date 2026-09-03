import { useState, useRef, useEffect, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import NextStep from "@/components/NextStep";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSeo } from "@/hooks/useSeo";
import { localizedPath } from "@/lib/routes";
import { toast } from "sonner";

const EMAIL = "richard@makil.fr";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
});

const Field = ({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground mb-3"
    >
      {label}
    </label>
    {children}
  </div>
);

const inputClass =
  "w-full bg-transparent border-b border-foreground/15 focus:border-foreground outline-none py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 transition-colors duration-500";

const Contact = () => {
  const { t } = useLanguage();
  useSeo({
    path: "/contact",
    titleKey: "seo.contact.title",
    descriptionKey: "seo.contact.description",
    keywords:
      "contact private adviser, request confidential conversation, personal branding adviser Paris, private advisory enquiry, Makil-Herrero Richard, MAKIL contact, ultra-luxury adviser",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact · MAKIL",
      description:
        "Request a confidential conversation with Makil-Herrero Richard, private adviser in ultra-luxury and personal branding, based in Paris.",
      url: "https://makil.fr/contact",
      inLanguage: "en-GB",
      isPartOf: { "@type": "WebSite", name: "MAKIL", url: "https://makil.fr" },
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [searchParams] = useSearchParams();
  const carriedQuery = (searchParams.get("q") ?? "").slice(0, 300);
  const [message, setMessage] = useState(
    carriedQuery ? `Request: ${carriedQuery}\n\n` : ""
  );
  const [org, setOrg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  // Anti-spam: honeypot field (invisible to humans) + minimum fill time
  const [company, setCompany] = useState("");
  const mountedAt = useRef<number>(Date.now());

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email, message });
    if (!parsed.success) {
      toast.error(t("contact.error.invalid"));
      return;
    }
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-contact", {
        body: {
          ...parsed.data,
          message: org.trim() ? `Company / Family office: ${org.trim()}\n\n${parsed.data.message}` : parsed.data.message,
          company,
          elapsedMs: Date.now() - mountedAt.current,
        },
      });
      if (error || !data?.success) throw error ?? new Error("send_failed");

      toast.success(t("contact.success"));
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      setOrg("");
      setCompany("");
      mountedAt.current = Date.now();
    } catch {
      toast.error(t("contact.error.send"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow container mx-auto px-6 lg:px-10 py-24 mt-16">
        <div className="max-w-5xl mx-auto">
          <PageIntro crumbs={[{ label: t("contact.kicker") }]} />

          <header className="mt-16 mb-20 max-w-3xl">
            <p className="text-[10px] font-body tracking-[0.45em] uppercase text-muted-foreground">
              {t("contact.page.kicker")}
            </p>
            <h1 className="mt-8 text-5xl sm:text-6xl font-display leading-[1.05] tracking-tight text-foreground">
              {t("contact.page.title1")} <br />
              <em className="italic">{t("contact.page.title2")}</em>
            </h1>
            <div aria-hidden="true" className="mt-10 h-px w-16 bg-foreground/25" />
            <p className="mt-10 max-w-xl text-sm font-body text-muted-foreground leading-loose">
              {t("contact.page.intro")}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            {/* Details */}
            <aside className="lg:col-span-4 space-y-12">
              <div>
                <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground mb-4">
                  {t("contact.page.direct")}
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-display text-lg sm:text-xl text-foreground underline decoration-foreground/25 decoration-[0.5px] underline-offset-[6px] transition-smooth hover:decoration-foreground/70"
                >
                  {EMAIL}
                </a>
              </div>

              <div>
                <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground mb-4">
                  {t("contact.page.availability")}
                </p>
                <p className="text-sm font-body text-foreground/75 leading-loose">
                  {t("contact.page.availabilityValue")}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground mb-4">
                  {t("contact.page.locations")}
                </p>
                <p className="text-sm font-body text-foreground/75 leading-loose">
                  {t("contact.page.locationsValue")}
                </p>
              </div>

              <div aria-hidden="true" className="h-px w-12 bg-foreground/15" />

              <p className="text-xs font-body text-muted-foreground leading-loose max-w-[280px]">
                {t("contact.page.discretion")}
              </p>
            </aside>

            {/* Form */}
            <div className="lg:col-span-8">
              {sent ? (
                <div className="border-t border-foreground/10 pt-12 space-y-6">
                  <p className="text-[10px] font-body tracking-[0.35em] uppercase text-muted-foreground">
                    {t("contact.kicker")}
                  </p>
                  <p className="font-display text-3xl sm:text-4xl leading-tight text-foreground">
                    {t("contact.success")}
                  </p>
                  <p className="text-sm font-body text-muted-foreground leading-loose max-w-md">
                    {t("contact.page.discretion")}
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-10 border-t border-foreground/10 pt-12">
                  {/* Honeypot · hidden from humans, bots tend to fill it */}
                  <div
                    className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
                    aria-hidden="true"
                  >
                    <label htmlFor="contact-company">Company</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <Field id="contact-name" label={t("contact.field.name")}>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        maxLength={120}
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass}
                      />
                    </Field>
                    <Field id="contact-email" label={t("contact.field.email")}>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        maxLength={255}
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field id="contact-org" label={t("contact.field.org")}>
                    <input
                      id="contact-org"
                      type="text"
                      maxLength={160}
                      autoComplete="organization"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field id="contact-message" label={t("contact.field.message")}>
                    <textarea
                      id="contact-message"
                      required
                      maxLength={5000}
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex items-center gap-5 px-9 py-5 border border-foreground/25 text-[11px] font-body tracking-[0.35em] uppercase text-foreground transition-smooth hover:border-foreground hover:bg-foreground hover:text-background disabled:opacity-50"
                    >
                      {submitting ? t("contact.sending") : t("contact.send")}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <NextStep
            links={[
              { kicker: "The practice", label: "Back to Makil", to: localizedPath("home") },
              { kicker: "Journal", label: "Notes and perspective", to: "/journal" },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
