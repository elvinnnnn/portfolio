"use client";
import React, { useEffect, useState } from "react";

export default function TypingText() {
  const [text, setText] = useState("Developer");

  useEffect(() => {
    const textCycle = () => {
      setTimeout(() => {
        setText("Developer");
      }, 0);
      setTimeout(() => {
        setText("Artist");
      }, 6000);
      setTimeout(() => {
        setText("Musician");
      }, 12000);
    };

    textCycle();
    const interval = setInterval(textCycle, 18000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div className="typing-text-container">
      <div>
        <span className="text first-text">Hi! I&apos;m Elvin,</span>
      </div>
      <div>
        <span className="text first-text"> an aspiring </span>
        <span className="text second-text">{text}</span>
      </div>
    </div>
  );
}
