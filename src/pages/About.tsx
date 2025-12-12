import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import creatingMasala from "@/assets/about/creating-masala.jpg";
import packingBottles from "@/assets/about/packing-bottles.jpg";
import teamWork from "@/assets/about/team-work.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.querySelectorAll(".about-section"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div ref={heroRef} className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Unnathy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting elegance and sophistication through curated lifestyle products
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div ref={contentRef} className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="about-section mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Unnathy was born from a passion for authentic Indian spices and the rich traditions 
                  of masala-making. Our journey began with a simple vision: to bring the finest quality 
                  spices from farms to your kitchen, preserving traditional methods while maintaining 
                  the highest standards of purity.
                </p>
                <p>
                  Each spice in our collection is carefully sourced, hand-picked, and processed by 
                  skilled artisans who understand the art of creating perfect blends. We believe that 
                  the spices we use should not only add flavor but also bring health and joy to every meal.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={creatingMasala} 
                  alt="Women creating traditional masala" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="about-section mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                <img 
                  src={packingBottles} 
                  alt="Team packing spice bottles" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed order-1 md:order-2">
                <p>
                  Our state-of-the-art facility combines traditional expertise with modern hygiene 
                  standards. Every batch of spices goes through rigorous quality checks to ensure 
                  purity, freshness, and authentic flavor.
                </p>
                <p>
                  From grinding and blending to packaging, our team of dedicated women workers 
                  handle each step with care and precision. We take pride in creating employment 
                  opportunities while delivering excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="about-section bg-muted rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">Quality</h3>
                <p className="text-muted-foreground">
                  We source only the finest spices and work with experienced farmers to ensure 
                  every product meets our exacting standards of purity and freshness.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">Tradition</h3>
                <p className="text-muted-foreground">
                  Our products honor time-tested traditional methods of spice processing, 
                  blending ancient wisdom with modern quality standards.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">Authenticity</h3>
                <p className="text-muted-foreground">
                  We believe in genuine craftsmanship and honest practices, building lasting 
                  relationships with our farmers, workers, and customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="about-section mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  At the heart of Unnathy is our dedicated team of women workers who bring 
                  expertise, passion, and attention to detail to every product. Their knowledge 
                  of spices and commitment to quality is what makes our products exceptional.
                </p>
                <p>
                  We're proud to provide meaningful employment opportunities and foster a 
                  supportive work environment where traditional skills are valued and celebrated.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={teamWork} 
                  alt="Team working together in spice facility" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="about-section">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Unnathy, our mission is to bring authentic Indian flavors to every kitchen while 
              preserving traditional spice-making methods. We're committed to celebrating the rich 
              heritage of Indian spices while maintaining the highest standards of quality and purity. 
              Every product tells a story of tradition, craftsmanship, and the warmth of Indian hospitality.
            </p>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Experience Authentic Flavors</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Discover the Unnathy difference. Explore our collection of premium spices and 
            bring the authentic taste of India to your kitchen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
