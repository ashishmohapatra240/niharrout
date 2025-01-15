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
        <h2 className="text-[64px] md:text-[120px] font-bold leading-[0.95] mb-12">
          <span className="text-neutral-90">Want to create</span>
          <br />
          <span className="text-neutral-90">something </span>
          <span className="text-neutral-40">awesome?</span>
        </h2>
        <Button href="https://calendly.com/niharrout/book-call" variant="primary">
          Let&apos;s Talk
        </Button>
      </div>
    </section>
  );
}
