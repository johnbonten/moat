"use client";

import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const isMounted = useIsMounted();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smoother, faster spring for minimal lag
  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [moveCursor]);

  // Don't render on server or mobile
  if (!isMounted) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-2 w-2 rounded-full bg-foreground mix-blend-difference"
        />
      </motion.div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          html {
            cursor: none;
          }
          a, button {
            cursor: none;
          }
        }
      `}</style>
    </>
  );
}
