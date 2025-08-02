"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function CallToAction() {
  const animation = useRef<AnimationPlaybackControls>();
  const [scope, animate] = useAnimate();
  const [slowDownAnimation, setSlowDownAnimation] = useState(false);

  useEffect(() => {
    if (!scope.current) return;

    const controls = animate(
      scope.current,
      { x: "-50%" },
      {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }
    );

    animation.current = controls;

    return () => {
      controls?.stop?.();
    };
  }, [animate, scope]);

  useEffect(() => {
    if (!animation.current) return;
    animation.current.speed = slowDownAnimation ? 0.5 : 1;
  }, [slowDownAnimation]);

  return (
    <section className="py-24">
      <div className="flex overflow-x-clip p-4">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl font-medium md:text-8xl"
          onMouseEnter={() => setSlowDownAnimation(true)}
          onMouseLeave={() => setSlowDownAnimation(false)}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span
                className={twMerge(
                  "transition-colors duration-300",
                  slowDownAnimation && "text-lime-400"
                )}
              >
                Give it a Try
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
