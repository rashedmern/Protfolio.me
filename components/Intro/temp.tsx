"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          <div className="flex flex-col items-center">

            {/* RASHED */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-[clamp(4rem,12vw,10rem)]
                  font-medium
                  uppercase
                  leading-none
                  tracking-[-0.06em]
                  text-white
                "
              >
                Rashed
              </motion.h1>
            </div>

            {/* Orange underline */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "100%",
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-4
                h-[2px]
                w-full
                bg-orange-400
              "
            />

            {/* Label */}
            <motion.p
              initial={{
                opacity: 0,
                y: -6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-5
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/40
              "
            >
              AI • FULL STACK • RESEARCH
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}