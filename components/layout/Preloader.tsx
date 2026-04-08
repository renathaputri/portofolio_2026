"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#020617]" />

          {/* Soft gradient glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[300px] h-[300px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(33,150,243,0.25) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Floating blocks (biar ada motion tapi subtle) */}
          <div className="relative z-10 flex gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -14, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.6,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-3 h-3 rounded-full bg-blue-500"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}