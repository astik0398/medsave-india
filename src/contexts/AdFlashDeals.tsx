import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

const AdFlashDeals = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user?.plan_name === "Saver" || user?.plan_name === "Pro") return;

    const script = document.createElement("script");
    script.src = "//pl28138219.effectivegatecpm.com/d39ef736d2fc3e3941b299078915cc28/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.body.appendChild(script);

    return () => script.remove();
  }, [user]);

  if (user?.plan_name === "Saver" || user?.plan_name === "Pro") return null;

  return (
    <div className="my-6 w-full flex justify-center">
      <div id="container-d39ef736d2fc3e3941b299078915cc28"></div>
    </div>
  );
};

export default AdFlashDeals;
