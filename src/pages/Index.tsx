import { ArrowRight, ChevronDown, UserRound, Globe, Gem, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import portrait from "@/assets/richard-portrait.jpg";
import terrace from "@/assets/lifestyle-terrace.jpg";
import glove from "@/assets/vision-glove.jpg";
import paris from "@/assets/access-paris.jpg";

const pillars = [
  {
    icon: UserRound,
    title: "Discrétion",
    desc: "La confidentialité est au cœur de chaque engagement.",
  },
  {
    icon: Globe,
    title: "Réseau Mondial",
    desc: "Un accès privilégié aux meilleures ressources et aux bonnes personnes.",
  },
  {
    icon: Gem,
    title: "Excellence",
    desc: "Des standards élevés, une attention obsessionnelle aux détails.",
  },
  {
    icon: Clock,
    title: "Liberté",
    desc: "Vous gagnez du temps. Je m'occupe de tout, sans limites.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO — Portrait éditorial */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none">
          <img
            src={portrait}
            alt="Portrait de Richard Makil-Herrero"
            className="h-full w-full object-cover object-top grayscale contrast-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent lg:from-background lg:via-background/20 lg:to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-10 h-full flex items-end min-h-[calc(100vh-13rem)]">
          <div className="max-w-xl space-y-8">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              Richard Makil-Herrero
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal leading-[1.05] text-foreground">
              L'art de rendre <br />
              <em className="italic">l'exceptionnel, naturel.</em>
            </h1>
            <div className="w-12 h-px bg-accent" aria-hidden="true" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-md">
              J'accompagne une clientèle exigeante dans la réalisation de l'impossible.
              Chaque demande est unique. Chaque expérience, inoubliable.
            </p>
            <a
              href="#univers"
              className="inline-flex flex-col items-start gap-2 group pt-4"
            >
              <span className="text-[11px] font-body tracking-[0.3em] uppercase text-accent group-hover:text-foreground transition-smooth">
                Découvrir mon univers
              </span>
              <ChevronDown size={18} className="text-accent group-hover:translate-y-1 transition-smooth" />
            </a>
          </div>
        </div>
      </section>

      {/* SIGNATURE — Image + texte */}
      <section id="univers" className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div
          className="aspect-[4/3] lg:aspect-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${terrace})` }}
          role="img"
          aria-label="Vue terrasse luxueuse en bord de mer"
        />
        <div className="flex items-center bg-background px-8 sm:px-16 lg:px-24 py-20">
          <div className="max-w-md space-y-6">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              MAKIL
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              Bien plus qu'un service. <br />
              <em className="italic">Une signature.</em>
            </h2>
            <div className="w-12 h-px bg-accent" aria-hidden="true" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Makil, c'est la rencontre entre discrétion absolue, réseau d'influence mondial
              et sens du détail. Un univers où le luxe n'est pas une question d'apparence,
              mais de liberté, de temps et de perfection.
            </p>
            <a
              href="#approche"
              className="inline-flex items-center gap-3 text-[11px] font-body tracking-[0.3em] uppercase text-accent hover:text-foreground transition-smooth pt-4"
            >
              En savoir plus <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* APPROCHE — 4 piliers */}
      <section id="approche" className="py-28 sm:py-36 bg-background border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center space-y-4 mb-20">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              Mon approche
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-foreground">
              Anticiper. <em className="italic">Concevoir.</em> Accomplir.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 max-w-6xl mx-auto">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-background px-8 py-12 text-center space-y-5">
                  <Icon size={36} strokeWidth={1} className="mx-auto text-accent" aria-hidden="true" />
                  <h3 className="text-[11px] font-body tracking-[0.3em] uppercase text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION — Image + texte inversé */}
      <section id="vision" className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-t border-border/40">
        <div className="flex items-center bg-background px-8 sm:px-16 lg:px-24 py-20 order-2 lg:order-1">
          <div className="max-w-md space-y-6">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              Ma vision
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              Le luxe ultime : <br />
              <em className="italic">pouvoir se consacrer à l'essentiel.</em>
            </h2>
            <div className="w-12 h-px bg-accent" aria-hidden="true" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Je transforme vos demandes en expériences sur-mesure, avec une seule promesse :
              l'exception, à chaque instant.
            </p>
          </div>
        </div>
        <div
          className="aspect-[4/3] lg:aspect-auto bg-cover bg-center order-1 lg:order-2"
          style={{ backgroundImage: `url(${glove})` }}
          role="img"
          aria-label="Main gantée ouvrant la portière d'une voiture de luxe"
        />
      </section>

      {/* ACCÈS — CTA final */}
      <section id="acces" className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-t border-border/40">
        <div className="flex items-center bg-background px-8 sm:px-16 lg:px-24 py-20">
          <div className="max-w-md space-y-6">
            <p className="text-[11px] font-body tracking-[0.4em] uppercase text-muted-foreground">
              Accès
            </p>
            <h2 className="text-3xl sm:text-4xl font-display leading-tight text-foreground">
              L'accès à Makil <br />
              <em className="italic">se fait sur invitation.</em>
            </h2>
            <div className="w-12 h-px bg-accent" aria-hidden="true" />
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Chaque collaboration commence par un échange confidentiel afin de comprendre
              vos attentes et vous proposer l'excellence qui vous correspond.
            </p>
            <a
              href="mailto:richard@makil.fr"
              className="inline-flex items-center gap-3 mt-4 px-8 py-4 border border-accent text-[11px] font-body tracking-[0.3em] uppercase text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              Demander un échange confidentiel
            </a>
          </div>
        </div>
        <div
          className="aspect-[4/3] lg:aspect-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${paris})` }}
          role="img"
          aria-label="Vue de Paris la nuit avec la Tour Eiffel"
        />
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
