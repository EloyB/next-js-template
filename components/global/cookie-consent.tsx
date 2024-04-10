"use client";

import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-8 left-8 p-8 rounded-2xl space-y-8 shadow-xl">
      <p className="text-dark text-base mr-16 w-[250px]">
        This website uses cookies to improve user experience. By using our
        website you consent to all cookies in accordance with our Cookie Policy.
      </p>
      <button
        className="bg-black py-2 px-8 rounded text-white"
        onClick={() => acceptCookie()}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
