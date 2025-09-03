import { useEffect } from "react";

interface AdProps {
  step: number | string;
}

export default function AdsterraAd({ step }: AdProps) {
  useEffect(() => {
    const container = document.getElementById("container-f1c21c47e6a3d0697469f51f34e31c53");
    if (container) {
      container.innerHTML = "";
    }

    const oldScript = document.getElementById("adsterra-script");
    if (oldScript) oldScript.remove();

    const script = document.createElement("script");
    script.id = "adsterra-script";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "//pl26687007.profitableratecpm.com/f1c21c47e6a3d0697469f51f34e31c53/invoke.js";

    if (container) {
      container.appendChild(script);
    }
  }, [step]);

  return <div id="container-f1c21c47e6a3d0697469f51f34e31c53"></div>;
}
