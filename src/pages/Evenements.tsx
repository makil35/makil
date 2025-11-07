import { Calendar, MapPin, Users, Utensils, Sparkles, Mountain, Wine, Lock, Award, Plane, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Evenements = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-b from-foreground to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-4 sm:mb-6">
              {t("events.hero.title")} <span className="text-primary">{t("events.hero.titleHighlight")}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-body text-background/80 leading-relaxed px-4">
              {t("events.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Events Types Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4 sm:mb-6 px-4">
              {t("events.types.title")} <span className="text-gradient-gold">{t("events.types.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-muted-foreground px-4">
              {t("events.types.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Dîners Privés */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{t("events.types.dinner.title")}</CardTitle>
                <CardDescription className="font-body">{t("events.types.dinner.desc")}</CardDescription>
              </CardHeader>
            </Card>

            {/* Expériences Émotionnelles */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{t("events.types.emotional.title")}</CardTitle>
                <CardDescription className="font-body">{t("events.types.emotional.desc")}</CardDescription>
              </CardHeader>
            </Card>

            {/* Retraites Stratégiques */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{t("events.types.retreat.title")}</CardTitle>
                <CardDescription className="font-body">{t("events.types.retreat.desc")}</CardDescription>
              </CardHeader>
            </Card>

            {/* Soirées de Collection */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wine className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{t("events.types.collection.title")}</CardTitle>
                <CardDescription className="font-body">{t("events.types.collection.desc")}</CardDescription>
              </CardHeader>
            </Card>

            {/* Événements Secrets */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{t("events.types.secret.title")}</CardTitle>
                <CardDescription className="font-body">{t("events.types.secret.desc")}</CardDescription>
              </CardHeader>
            </Card>

            {/* Événements Signature */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{t("events.types.signature.title")}</CardTitle>
                <CardDescription className="font-body">{t("events.types.signature.desc")}</CardDescription>
              </CardHeader>
            </Card>

            {/* Voyages d'Initiation */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{t("events.types.travel.title")}</CardTitle>
                <CardDescription className="font-body">{t("events.types.travel.desc")}</CardDescription>
              </CardHeader>
            </Card>

            {/* The Circle of Silence */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{t("events.types.circle.title")}</CardTitle>
                <CardDescription className="font-body">{t("events.types.circle.desc")}</CardDescription>
              </CardHeader>
            </Card>

            {/* Makil Legacy Summit */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{t("events.types.summit.title")}</CardTitle>
                <CardDescription className="font-body">{t("events.types.summit.desc")}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-12 sm:py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4 sm:mb-6 px-4">
              {t("events.calendar.title")} <span className="text-gradient-gold">{t("events.calendar.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-muted-foreground px-4">
              {t("events.calendar.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Event 1 */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="font-display text-xl mb-2">{t("events.calendar.event1.title")}</CardTitle>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event1.date")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event1.location")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event1.spots")}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="font-body mb-4">
                  {t("events.calendar.event1.desc")}
                </CardDescription>
                <Button className="w-full">{t("events.calendar.register")}</Button>
              </CardHeader>
            </Card>

            {/* Event 2 */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="font-display text-xl mb-2">{t("events.calendar.event2.title")}</CardTitle>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event2.date")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event2.location")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event2.spots")}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="font-body mb-4">
                  {t("events.calendar.event2.desc")}
                </CardDescription>
                <Button className="w-full">{t("events.calendar.register")}</Button>
              </CardHeader>
            </Card>

            {/* Event 3 */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="font-display text-xl mb-2">{t("events.calendar.event3.title")}</CardTitle>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event3.date")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event3.location")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event3.spots")}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="font-body mb-4">
                  {t("events.calendar.event3.desc")}
                </CardDescription>
                <Button className="w-full">{t("events.calendar.register")}</Button>
              </CardHeader>
            </Card>

            {/* Event 4 */}
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="font-display text-xl mb-2">{t("events.calendar.event4.title")}</CardTitle>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event4.date")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event4.location")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{t("events.calendar.event4.spots")}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="font-body mb-4">
                  {t("events.calendar.event4.desc")}
                </CardDescription>
                <Button className="w-full">{t("events.calendar.register")}</Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Evenements;
