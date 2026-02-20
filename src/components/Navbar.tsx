import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { NavLink } from "./NavLink";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-lg">
      <div className="layout-container">
        <div className="flex h-16 items-center justify-between sm:h-[4.7rem]">
          <Link to="/" className="text-[2rem] leading-none font-cursive text-primary transition-colors hover:text-primary-hover sm:text-5xl">
            Unnathy
          </Link>

          <div className="hidden md:flex items-center gap-1 rounded-full border border-border/75 bg-card/80 p-1 shadow-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className="rounded-full px-5 py-2 text-[0.98rem] font-semibold text-foreground transition-colors hover:text-primary visited:text-foreground"
                activeClassName="nav-link-active"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card/80 text-foreground transition-colors hover:bg-muted md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-black/30 md:hidden sm:top-[4.7rem]"
            aria-label="Close mobile menu overlay"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-nav"
            className="fixed inset-x-0 top-16 z-50 max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background/95 shadow-xl backdrop-blur-md md:hidden sm:top-[4.7rem] sm:max-h-[calc(100svh-4.7rem)]"
          >
            <div className="layout-container py-6">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary visited:text-foreground"
                    activeClassName="bg-primary/10 text-primary visited:text-primary"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="royal-surface mt-6 p-4">
                <p className="text-sm font-semibold text-foreground">Need help picking products?</p>
                <p className="mt-1 text-sm text-muted-foreground">Call or WhatsApp us at +91 72001 54135</p>
                <div className="mt-3 flex gap-2">
                  <a
                    href="tel:+917200154135"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href="https://wa.me/917200154135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
