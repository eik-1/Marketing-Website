"use client";

import { createContext, useContext, useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function StackingCards({
  children,
  className,
  scrollOptions,
  scaleMultiplier,
  totalCards,
  ...props
}) {
  const targetRef = useRef(null);
  const [isContainerReady, setIsContainerReady] = useState(false);

  // Check if container is ready
  useEffect(() => {
    if (scrollOptions?.container?.current) {
      setIsContainerReady(true);
    }
  }, [scrollOptions?.container]);

  // Only use scroll when container is ready and we're on client side
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    container: isContainerReady ? scrollOptions?.container : undefined,
  });

  return (
    <StackingCardsContext.Provider
      value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}
    >
      <div className={cn(className)} ref={targetRef} {...props}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

const StackingCardItem = ({
  index,
  topPosition,
  className,
  children,
  ...props
}) => {
  const {
    progress,
    scaleMultiplier,
    totalCards = 0,
  } = useStackingCardsContext();
  const scaleTo = 1 - (totalCards - index) * (scaleMultiplier ?? 0.03);
  const rangeScale = [index * (1 / totalCards), 1];
  const scale = useTransform(progress, rangeScale, [1, scaleTo]);
  // Removed width scaling to maintain full width
  const top = topPosition ?? `${5 + index * 3}%`;

  return (
    <div className={cn("h-full sticky top-0", className)} {...props}>
      <motion.div
        className={"origin-top relative h-full w-full"}
        style={{ top, scale }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const StackingCardsContext = createContext(null);

export const useStackingCardsContext = () => {
  const context = useContext(StackingCardsContext);
  if (!context)
    throw new Error("StackingCardItem must be used within StackingCards");
  return context;
};

export { StackingCardItem };
