import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-display font-bold text-gradient-gold">
              MAKIL
            </div>
            <p className="text-sm font-body text-background/70 leading-relaxed">
              Le premier club business exclusif pour les Ultra High Net Worth Individuals.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-primary font-display text-lg font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link
                  to="/"
                  className="text-background/70 hover:text-primary transition-smooth"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/evenements"
                  className="text-background/70 hover:text-primary transition-smooth"
                >
                  Événements
                </Link>
              </li>
              <li>
                <Link
                  to="/galerie"
                  className="text-background/70 hover:text-primary transition-smooth"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  to="/membres"
                  className="text-background/70 hover:text-primary transition-smooth"
                >
                  Membres Premium
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary font-display text-lg font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-center space-x-2 text-background/70">
                <Mail size={16} className="text-primary" />
                <span>richard@makilbusinessclub.com</span>
              </li>
              <li className="flex items-center space-x-2 text-background/70">
                <Phone size={16} className="text-primary" />
                <span>06.26.50.08.80</span>
              </li>
              <li className="flex items-center space-x-2 text-background/70">
                <MapPin size={16} className="text-primary" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-primary font-display text-lg font-semibold mb-4">
              Suivez-nous
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-smooth"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-smooth"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-sm font-body text-background/60">
            &copy; {new Date().getFullYear()} Makil Business Club. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
