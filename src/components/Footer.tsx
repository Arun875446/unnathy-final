import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border/75 bg-card/70">
      <div className="layout-container py-12 sm:py-14">
        <div className="royal-surface p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div>
              <h3 className="mb-4 text-4xl leading-none font-cursive text-primary">Unnathy</h3>
              <p className="section-copy">
                Nutrition, masala, and utility products from Unnathy.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/" className="transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="transition-colors hover:text-primary">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="transition-colors hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition-colors hover:text-primary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Categories</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/products?category=Nutrition" className="transition-colors hover:text-primary">
                    Nutrition
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=Masala" className="transition-colors hover:text-primary">
                    Masala
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=Tupperware" className="transition-colors hover:text-primary">
                    Tupperware
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="tel:+917200154135" className="transition-colors hover:text-primary">
                    +91 72001 54135
                  </a>
                </li>
                <li>
                  <a href="mailto:unnathypro@gmail.com" className="transition-colors hover:text-primary">
                    unnathypro@gmail.com
                  </a>
                </li>
                <li>Mon-Sat, 10 AM - 6 PM IST</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/80 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Unnathy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
