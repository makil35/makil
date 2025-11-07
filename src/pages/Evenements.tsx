import { useState, useMemo } from "react";
import { Calendar, MapPin, Users, Utensils, Sparkles, Mountain, Wine, Lock, Award, Plane, Shield, Crown, X, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

interface Event {
  id: string;
  type: string;
  date: Date;
  spots: number;
  titleKey: string;
  dateKey: string;
  locationKey: string;
  spotsKey: string;
  descKey: string;
}

const Evenements = () => {
  const { t, language } = useLanguage();
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSpots, setSelectedSpots] = useState<string>("all");

  // Events data
  const events: Event[] = [
    {
      id: "1",
      type: "dinner",
      date: new Date(2024, 11, 15),
      spots: 8,
      titleKey: "events.calendar.event1.title",
      dateKey: "events.calendar.event1.date",
      locationKey: "events.calendar.event1.location",
      spotsKey: "events.calendar.event1.spots",
      descKey: "events.calendar.event1.desc",
    },
    {
      id: "2",
      type: "retreat",
      date: new Date(2025, 0, 10),
      spots: 15,
      titleKey: "events.calendar.event2.title",
      dateKey: "events.calendar.event2.date",
      locationKey: "events.calendar.event2.location",
      spotsKey: "events.calendar.event2.spots",
      descKey: "events.calendar.event2.desc",
    },
    {
      id: "3",
      type: "collection",
      date: new Date(2025, 0, 25),
      spots: 12,
      titleKey: "events.calendar.event3.title",
      dateKey: "events.calendar.event3.date",
      locationKey: "events.calendar.event3.location",
      spotsKey: "events.calendar.event3.spots",
      descKey: "events.calendar.event3.desc",
    },
    {
      id: "4",
      type: "circle",
      date: new Date(2025, 1, 5),
      spots: 6,
      titleKey: "events.calendar.event4.title",
      dateKey: "events.calendar.event4.date",
      locationKey: "events.calendar.event4.location",
      spotsKey: "events.calendar.event4.spots",
      descKey: "events.calendar.event4.desc",
    },
  ];

  // Filter logic
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Type filter
      if (selectedType !== "all" && event.type !== selectedType) {
        return false;
      }

      // Date filter
      if (selectedDate) {
        const eventDate = new Date(event.date);
        const filterDate = new Date(selectedDate);
        if (
          eventDate.getFullYear() !== filterDate.getFullYear() ||
          eventDate.getMonth() !== filterDate.getMonth() ||
          eventDate.getDate() !== filterDate.getDate()
        ) {
          return false;
        }
      }

      // Spots filter
      if (selectedSpots === "low" && event.spots > 8) {
        return false;
      }
      if (selectedSpots === "medium" && (event.spots <= 8 || event.spots > 12)) {
        return false;
      }
      if (selectedSpots === "high" && event.spots <= 12) {
        return false;
      }

      return true;
    });
  }, [events, selectedType, selectedDate, selectedSpots]);

  const clearFilters = () => {
    setSelectedType("all");
    setSelectedDate(undefined);
    setSelectedSpots("all");
  };
  
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
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4 sm:mb-6 px-4">
              {t("events.calendar.title")} <span className="text-gradient-gold">{t("events.calendar.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg font-body text-muted-foreground px-4">
              {t("events.calendar.subtitle")}
            </p>
          </div>

          {/* Filters */}
          <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
                {/* Type Filter */}
                <div className="flex-1 w-full">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("events.filters.type")}
                  </label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("events.filters.allTypes")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t("events.filters.allTypes")}</SelectItem>
                      <SelectItem value="dinner">{t("events.types.dinner.title")}</SelectItem>
                      <SelectItem value="retreat">{t("events.types.retreat.title")}</SelectItem>
                      <SelectItem value="collection">{t("events.types.collection.title")}</SelectItem>
                      <SelectItem value="circle">{t("events.types.circle.title")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Filter */}
                <div className="flex-1 w-full">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("events.filters.date")}
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP", { locale: language === "fr" ? fr : undefined }) : t("events.filters.selectDate")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Spots Filter */}
                <div className="flex-1 w-full">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t("events.filters.spots")}
                  </label>
                  <Select value={selectedSpots} onValueChange={setSelectedSpots}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("events.filters.allSpots")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t("events.filters.allSpots")}</SelectItem>
                      <SelectItem value="low">{t("events.filters.lowSpots")}</SelectItem>
                      <SelectItem value="medium">{t("events.filters.mediumSpots")}</SelectItem>
                      <SelectItem value="high">{t("events.filters.highSpots")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Clear Filters Button */}
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="w-full sm:w-auto"
                >
                  <X className="mr-2 h-4 w-4" />
                  {t("events.filters.clear")}
                </Button>
              </div>

              {/* Active filters count */}
              {(selectedType !== "all" || selectedDate || selectedSpots !== "all") && (
                <div className="mt-4 text-sm text-muted-foreground">
                  {t("events.filters.showing")} {filteredEvents.length} {t("events.filters.of")} {events.length} {t("events.filters.events")}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {filteredEvents.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">{t("events.filters.noResults")}</p>
                <Button onClick={clearFilters} variant="outline" className="mt-4">
                  {t("events.filters.clear")}
                </Button>
              </div>
            ) : (
              filteredEvents.map((event) => (
                <Card key={event.id} className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <CardTitle className="font-display text-xl mb-2">{t(event.titleKey)}</CardTitle>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{t(event.dateKey)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{t(event.locationKey)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            <span>{t(event.spotsKey)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="font-body mb-4">
                      {t(event.descKey)}
                    </CardDescription>
                    <Button className="w-full">{t("events.calendar.register")}</Button>
                  </CardHeader>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Evenements;
