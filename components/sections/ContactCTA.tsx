import Button from "../ui/Button";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-32 bg-neutral-20">
      <div className="flex flex-col items-center text-center">
        <nav className="mb-16 flex gap-12">
          {[
            { label: "ABOUT ME", href: "#about" },
            { label: "WORKS", href: "#works" },
            { label: "INSIGHTS", href: "#insights" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-neutral-60 hover:text-neutral-90 border-b border-neutral-60 hover:border-neutral-90 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <h2 className="text-[64px] md:text-[100px] font-bold leading-[0.95] mb-8 max-w-7xl">
          <span className="text-neutral-40">Some dreams feel too big,</span>
          <br />
          <span className="text-neutral-90">
            too distant—almost untouchable.
          </span>
        </h2>
        <p className="max-w-7xl text-neutral-60 text-xl mb-12">
          But I believe every great creation starts with a single step, a moment
          of courage to bring an idea to life. Not everyone sees the magic in a
          vision, but together, we can shape it into something real, something
          extraordinary. Are you ready to take that leap?
        </p>
        <Button
          href="https://calendly.com/niharrout/call"
          variant="primary"
        >
          Start Dreaming
        </Button>
      </div>
    </section>
  );
}
