import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("contact.form.success.title"),
      description: t("contact.form.success.desc"),
    });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-body tracking-[0.4em] uppercase text-muted-foreground">
              {t("contact.hero.subtitle")}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-normal text-foreground leading-[1.1]">
              {t("contact.hero.title")}{" "}
              <em>{t("contact.hero.titleHighlight")}</em>
            </h1>
            <p className="text-sm sm:text-base font-body text-muted-foreground">
              {t("contact.hero.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 sm:pb-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-normal text-foreground mb-4">
                  {t("contact.info.title")}{" "}
                  <em>{t("contact.info.titleHighlight")}</em>
                </h2>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {t("contact.info.subtitle")}
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: t("contact.info.email"), value: "richard@makil-maqil.com" },
                  { icon: Phone, label: t("contact.info.phone"), value: "06.26.50.08.80" },
                  { icon: MapPin, label: t("contact.info.address"), value: "Paris, France" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-secondary text-foreground w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-body font-medium text-foreground mb-0.5">
                        {item.label}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-foreground p-6">
                <h3 className="text-sm font-body font-medium text-background mb-2">
                  {t("contact.info.hours")}
                </h3>
                <p className="text-sm font-body text-background/60">{t("contact.info.hours.line1")}</p>
                <p className="text-xs font-body text-background/40">{t("contact.info.hours.line2")}</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="border border-border p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-display font-normal text-foreground mb-6">
                  {t("contact.form.title")}{" "}
                  <em>{t("contact.form.titleHighlight")}</em>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-medium text-foreground mb-2 tracking-[0.15em] uppercase">
                        {t("contact.form.firstName")}
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-foreground mb-2 tracking-[0.15em] uppercase">
                        {t("contact.form.lastName")}
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-medium text-foreground mb-2 tracking-[0.15em] uppercase">
                        {t("contact.form.email")}
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-foreground mb-2 tracking-[0.15em] uppercase">
                        {t("contact.form.phone")}
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-body font-medium text-foreground mb-2 tracking-[0.15em] uppercase">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={t("contact.form.messagePlaceholder")}
                      className="bg-background border-border focus:border-foreground resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-foreground hover:bg-foreground/90 text-background font-body text-xs tracking-[0.2em] uppercase transition-smooth"
                  >
                    {t("contact.form.submit")} <Send className="ml-2" size={14} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
