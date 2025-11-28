import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Ads = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user?.plan_name === "Saver" || user?.plan_name === "Pro") return;

    // 1st Script
    const atScript = document.createElement("script");
    atScript.innerHTML = `
      atOptions = {
        'key' : '8fe3ac17ba88695629384c2b506ffeb3',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    document.body.appendChild(atScript);

    const script1 = document.createElement("script");
    script1.src = "//www.highperformanceformat.com/8fe3ac17ba88695629384c2b506ffeb3/invoke.js";
    script1.async = true;
    document.body.appendChild(script1);

    // 2nd Script
    const script2 = document.createElement("script");
    script2.src = "//pl28138644.effectivegatecpm.com/17/f7/97/17f7976742f1680bdf069535503e0f6d.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      atScript.remove();
      script1.remove();
      script2.remove();
    };
  }, [user]);

  if (user?.plan_name === "Saver" || user?.plan_name === "Pro") return null;

  return null
};

export default Ads;
