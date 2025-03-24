import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        {/* Circle Image Container */}
        <div className="relative w-40 h-40 mx-auto mb-14 animate-fade-in">
          <div className="absolute -top-2 -right-2 w-[110%] h-[110%] border-2 border-slate-300 rounded-full animate-pulse" />
          <div className="absolute -top-2 -right-2 w-[110%] h-[110%] border-2 border-slate-200 rounded-full" />
          <Image
            src="/images/hero.png"
            alt="Nihar Ranjan Rout"
            fill
            className="object-cover rounded-full shadow-lg"
            priority
            sizes="160px"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Nihar Ranjan Rout
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
          We design and build custom websites to drive leads, close deals and
          grow your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center animate-fade-in-up delay-200">
          <Button
            href="#portfolio"
            variant="secondary"
            className="px-12 py-4 rounded-full text-lg w-fit hover:scale-105 transition-transform duration-300"
          >
            Get a free quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
