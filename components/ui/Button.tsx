import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "icon";
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
}

const Button = ({
  href,
  variant = "primary",
  className = "",
  children,
  showArrow = true,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden";
  const variants = {
    primary:
      "bg-neutral-100 hover:bg-neutral-60 text-white px-6 py-3 rounded-full relative after:absolute after:inset-0 after:bg-neutral-90 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300 after:ease-in-out",
    secondary:
      "bg-white hover:bg-neutral-30 text-neutral-100 border border-neutral-20 px-6 py-3 rounded-full relative after:absolute after:inset-0 after:bg-neutral-10 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300 after:ease-in-out",
    icon: "p-2 hover:bg-neutral-10 rounded-lg transition-colors",
  };

  const content =
    variant === "icon" ? (
      children
    ) : (
      <>
        <span className="relative z-10 text-body-16 font-medium">
          {children}
        </span>
        {showArrow && (
          <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            <Image
              src={
                variant === "primary"
                  ? "/icons/ArrowRightWhite.svg"
                  : "/icons/ArrowRight.svg"
              }
              alt="Arrow"
              width={20}
              height={20}
              className="transition-all duration-300 group-hover:scale-110"
            />
          </div>
        )}
      </>
    );

  if (href) {
    return (
      <Link
        href={href}
        className={`group ${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`group ${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
