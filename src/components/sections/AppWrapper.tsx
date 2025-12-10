"use client";

import { useState, useEffect } from "react";
import IntroLoader from "./IntroLoader";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if intro has been shown in this session
    const introShown = sessionStorage.getItem("introShown");
    if (introShown) {
      setShowIntro(false);
      setShowContent(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowContent(true);
    // Mark intro as shown for this session
    sessionStorage.setItem("introShown", "true");
  };

  return (
    <>
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}

      <div
        className={`transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
        style={{ visibility: showContent ? "visible" : "hidden" }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
