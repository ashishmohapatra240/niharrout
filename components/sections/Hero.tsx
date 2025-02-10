import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-32 pb-16 md:py-32">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="w-full lg:w-[90%] xl:w-[100%]">
              <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[64px] text-neutral-100">
                I&apos;m Nihar,{" "}
                <span className="text-neutral-100 font-medium">
                  helping businesses and founders build scalable digital
                  products
                </span>
              </h1>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                href="https://calendly.com/niharrout/book-call"
                variant="primary"
                className="h-12 sm:h-14 md:h-16 w-32 sm:w-34 md:w-36 text-body-16 sm:text-body-18 md:text-body-22 whitespace-nowrap"
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="aspect-square w-full max-w-[445px] mx-auto lg:max-w-none lg:h-[445px] relative">
              <Image
                src="/images/hero.png"
                alt="Hero Image"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 445px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
