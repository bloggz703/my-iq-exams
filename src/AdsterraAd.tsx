import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AdProps {
  step: number | string;
}

export default function AdsterraAd({ step }: AdProps) {
  const containerId = `ad-container-${step}`;

  useEffect(() => {
    const oldScript = document.getElementById(`adsterra-script-${step}`);
    if (oldScript) oldScript.remove();

    const script = document.createElement("script");
    script.id = `adsterra-script-${step}`;
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "//pl26687007.profitableratecpm.com/f1c21c47e6a3d0697469f51f34e31c53/invoke.js";

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }
  }, [step]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div id={containerId}></div>
      </motion.div>
    </AnimatePresence>
  );
}
