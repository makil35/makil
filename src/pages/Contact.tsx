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
    company: "",
    position: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("contact.form.success.title"),
      description: t("contact.form.success.desc"),
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-b from-foreground to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-4 sm:mb-6">
              {t("contact.hero.title")} <span className="text-primary">{t("contact.hero.titleHighlight")}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-body text-background/80 leading-relaxed px-4">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4 sm:mb-6">
                  {t("contact.info.title")} <span className="text-gradient-gold">{t("contact.info.titleHighlight")}</span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-6 sm:mb-8">
                  {t("contact.info.subtitle")}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {t("contact.info.email")}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm">
                      richard@makilbusinessclub.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {t("contact.info.phone")}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm">
                      06.26.50.08.80
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {t("contact.info.address")}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm">
                      16 Avenue Montaigne<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-display font-bold text-background mb-3">
                  {t("contact.info.hours")}
                </h3>
                <div className="space-y-2 text-sm font-body text-background/80">
                  <p>{t("contact.info.hours.monday")}</p>
                  <p>{t("contact.info.hours.wednesday")}</p>
                  <p>{t("contact.info.hours.friday")}</p>
                  <p>{t("contact.info.hours.other")}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-elegant">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4 sm:mb-6">
                  {t("contact.form.title")} <span className="text-gradient-gold">{t("contact.form.titleHighlight")}</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-2">
                        {t("contact.form.firstName")} *
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-2">
                        {t("contact.form.lastName")} *
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-2">
                        {t("contact.form.email")} *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-2">
                        {t("contact.form.phone")} *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-2">
                        {t("contact.form.company")} *
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-foreground mb-2">
                        {t("contact.form.position")} *
                      </label>
                      <Input
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">
                      {t("contact.form.message")} *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={t("contact.form.messagePlaceholder")}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-foreground font-body font-semibold shadow-gold transition-smooth"
                  >
                    {t("contact.form.submit")} <Send className="ml-2" size={20} />
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
