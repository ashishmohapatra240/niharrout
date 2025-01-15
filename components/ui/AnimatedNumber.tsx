import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
}

const AnimatedNumber = ({ value, suffix = "" }: AnimatedNumberProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 15,
  });

  const displayed = useTransform(spring, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [inView, spring, value, hasAnimated]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{displayed}</motion.span>
      {suffix}
    </span>
  );
};

export default AnimatedNumber;
