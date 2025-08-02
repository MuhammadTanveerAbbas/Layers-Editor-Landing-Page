"use client";

import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();

  useEffect(() => {
    void leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    void rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
  }, [
    leftDesignAnimate,
    rightDesignAnimate,
    leftDesignScope,
    rightDesignScope,
  ]);

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${cursorImage.src}), auto` }}
    >
      <div className="container relative">
        {/* Left Design */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className="absolute -left-32 top-16 hidden lg:block"
          drag
        />

        {/* Left Pointer: motion div with looping bob */}
        <motion.div
          initial={{ opacity: 0, y: 100, x: -200 }}
          animate={{
            opacity: 1,
            x: [-200, -100, -100],
            y: [100, 0, 16, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.25, 0.75, 1],
            loop: Infinity,
          }}
          className="absolute top-96 left-56 hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>

        {/* Right Design */}
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          className="absolute -right-64 -top-16 hidden lg:block"
          drag
        />

        {/* Right Pointer: motion div with looping bob */}
        <motion.div
          initial={{ opacity: 0, x: 275, y: 100 }}
          animate={{
            opacity: 1,
            x: [275, 175, 175],
            y: [100, 0, 20, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.25, 0.75, 1],
            loop: Infinity,
            delay: 1.5,
          }}
          className="absolute -top-4 right-80 hidden lg:block"
        >
          <Pointer color="red" name="Brew" />
        </motion.div>

        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 text-neutral-950 font-semibold">
            ✨ 1.5M+ Designers Choice
          </div>
        </div>

        <h1 className="mt-6 text-center text-6xl font-medium md:text-7xl lg:text-8xl">
          Impactful design, created effortlessly
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-center text-xl text-white/50">
          Design tool shouldn't slow you down. Create, prototype, and test with
          ease.
        </p>

        <form
          className="mx-auto mt-8 flex max-w-lg rounded-full border border-white/50 p-2"
          noValidate
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            aria-label="Email address"
            className="w-full flex-1 bg-transparent px-4 text-white placeholder:text-white/50 rounded-full focus-visible:outline-none"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap rounded-full px-6"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
