import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AdProps {
  step: number | string;
}

export default function AdsterraAd({ step }: AdProps) {
  useEffect(() => {
    const container = document.getElementById(
      "container-f1c21c47e6a3d0697469f51f34e31c53"
    );
    if (container) container.innerHTML = "";

    const oldScript = document.getElementById("adsterra-script");
    if (oldScript) oldScript.remove();

    const script = document.createElement("script");
    script.id = "adsterra-script";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "//pl26687007.profitableratecpm.com/f1c21c47e6a3d0697469f51f34e31c53/invoke.js";

    document.body.appendChild(script);
  }, [step]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step} // 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div id="container-f1c21c47e6a3d0697469f51f34e31c53"></div>
      </motion.div>
    </AnimatePresence>
  );
}
