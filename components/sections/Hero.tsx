import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-24 md:pt-20">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        {/* Circle Image Container */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 md:mb-10 animate-fade-in">
          <Image
            src="/images/hero.png"
            alt="Nihar Ranjan Rout"
            fill
            className="object-cover rounded-full border-4 border-slate-200"
            priority
            sizes="160px"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          Nihar Ranjan Rout
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-gray-600 mb-3 animate-fade-in-up delay-100">
          Co-Founder & CEO, Creuto
        </p>

        <p className="text-base md:text-lg text-gray-600 mb-5 animate-fade-in-up delay-100">
          Product Development | MVP Development | Mobile App | Startup
          Consulting
        </p>

        <p className="text-md md:text-lg text-gray-600 mb-4 max-w-5xl mx-auto leading-relaxed animate-fade-in-up delay-100">
          Every great product starts as a dream. When I take a project, I pour
          my heart into transforming it into something impactful—built with the
          right strategy, technology, and user experience to create lasting
          success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center animate-fade-in-up delay-200">
          <Button
            href="https://calendly.com/niharrout/call"
            variant="secondary"
            className="px-8 py-3 rounded-full text-base md:text-lg w-fit hover:scale-105 transition-transform duration-300 mb-4"
          >
            Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
