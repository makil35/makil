import { useState, FormEvent } from "react";
import { z } from "zod";
import { Copy, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
});

const EMAIL = "richard@makil.fr";

const ContactSection = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {/* noop */}
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email, message });
    if (!parsed.success) {
      toast.error(t("contact.error.invalid"));
      return;
    }
    setSubmitting(true);
    try {
      const { data: insert, error: insertError } = await supabase
        .from("contact_submissions")
        .insert(parsed.data)
        .select("id")
        .single();
      if (insertError || !insert) throw insertError ?? new Error("insert failed");

      // Notification to Richard
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-notification",
          recipientEmail: EMAIL,
          idempotencyKey: `contact-notify-${insert.id}`,
          templateData: parsed.data,
        },
      });
      // Confirmation to visitor
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-confirmation",
          recipientEmail: parsed.data.email,
          idempotencyKey: `contact-confirm-${insert.id}`,
          templateData: { name: parsed.data.name },
        },
      });

      toast.success(t("contact.success"));
      setName(""); setEmail(""); setMessage("");
    } catch {
      toast.error(t("contact.error.send"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-background border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-10 max-w-3xl">
        <div className="text-center space-y-4 mb-16">
          <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
            {t("contact.kicker")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground">
            {t("contact.title1")} <em className="italic">{t("contact.title2")}</em>
          </h2>
          <div className="w-12 h-px bg-accent mx-auto" />
          <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-xl mx-auto pt-2">
            {t("contact.desc")}
          </p>
        </div>

        {/* Email visible */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <a
            href={`mailto:${EMAIL}`}
            className="text-base sm:text-lg font-display tracking-wide text-foreground hover:text-accent transition-smooth"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copy}
            aria-label={t("contact.copy")}
            className="p-2 text-muted-foreground hover:text-foreground transition-smooth"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="c-name" className="block text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {t("contact.field.name")}
              </label>
              <input
                id="c-name"
                type="text"
                required
                maxLength={120}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-border/60 focus:border-accent outline-none py-2 text-sm font-body text-foreground transition-colors"
              />
            </div>
            <div>
              <label htmlFor="c-email" className="block text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {t("contact.field.email")}
              </label>
              <input
                id="c-email"
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-border/60 focus:border-accent outline-none py-2 text-sm font-body text-foreground transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="c-msg" className="block text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground mb-2">
              {t("contact.field.message")}
            </label>
            <textarea
              id="c-msg"
              required
              maxLength={5000}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border-b border-border/60 focus:border-accent outline-none py-2 text-sm font-body text-foreground resize-none transition-colors"
            />
          </div>
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-3 px-10 py-4 border border-accent text-[11px] font-body tracking-[0.3em] uppercase text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth disabled:opacity-50"
            >
              {submitting ? t("contact.sending") : t("contact.send")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
