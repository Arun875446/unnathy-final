import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";

const CONTACT_EMAIL = "unnathypro@gmail.com";
const CONTACT_PHONE_RAW = "7200154135";
const CONTACT_PHONE_DISPLAY = "+91 72001 54135";
const CALL_URL = `tel:+91${CONTACT_PHONE_RAW}`;
const MAIL_URL = `mailto:${CONTACT_EMAIL}`;
const WHATSAPP_URL = `https://wa.me/91${CONTACT_PHONE_RAW}`;

const Contact = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const context = gsap.context(() => {
      if (!cardsRef.current) {
        return;
      }

      gsap.fromTo(
        cardsRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.56, stagger: 0.1, ease: "power3.out" }
      );
    });

    return () => context.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="layout-section-tight">
        <div className="layout-container">
          <div className="royal-surface p-6 sm:p-8">
            <span className="section-eyebrow">Contact Us</span>
            <h1 className="mt-4">Need A Product Or Bulk Rate? Message Us</h1>
            <p className="section-copy mt-3">
              Share your list and we will get back with availability and next steps.
            </p>
            <div className="section-divider" />
          </div>
        </div>
      </section>

      <section className="layout-container pb-16">
        <div ref={cardsRef} className="grid gap-5 lg:grid-cols-2">
          <article className="royal-surface p-6 sm:p-8">
            <h2>Primary Channels</h2>
            <div className="mt-5 space-y-4">
              <a href={CALL_URL} className="royal-card flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary p-2 text-primary-foreground">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Call Us</p>
                    <p className="text-sm text-muted-foreground">{CONTACT_PHONE_DISPLAY}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-primary">Open</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="royal-card flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary p-2 text-primary-foreground">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">{CONTACT_PHONE_DISPLAY}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-primary">Open</span>
              </a>

              <a href={MAIL_URL} className="royal-card flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary p-2 text-primary-foreground">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground break-all">{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-primary">Open</span>
              </a>
            </div>
          </article>

          <article className="royal-surface p-6 sm:p-8">
            <h2>Service Details</h2>
            <div className="mt-5 space-y-4">
              <div className="royal-soft p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Clock3 className="h-4 w-4 text-primary" />
                  Working Hours
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Monday to Saturday, 10:00 AM - 6:00 PM IST</p>
              </div>

              <div className="royal-soft p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Location
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Thoothukudi, Tamil Nadu, India</p>
              </div>

              <div className="royal-soft p-4">
                <p className="text-sm font-semibold text-foreground">Best Way To Enquire</p>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>Send product names or photos.</li>
                  <li>Include quantity and city.</li>
                  <li>For bulk, send one combined list.</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Contact;
