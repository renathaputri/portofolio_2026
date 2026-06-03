"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-bg-primary"
        >
          {/* Minimalist block animation */}
          <motion.div
            animate={{
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-10 h-10 bg-bg-inverse"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}