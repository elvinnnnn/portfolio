"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingText() {
  return (
    <div className="typing-text-container">
      <div>
        <span className="text first-text">Hi! I&apos;m Elvin,</span>
      </div>
      <div className="typewriter-container">
        <div className="text first-text"> an aspiring </div>
        <div className="typewriter">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span style="color: #c3073f; font-size: 3rem; font-weight: 600;">developer.</span>'
                )
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  '<span style="color: #c3073f; font-size: 3rem; font-weight: 600;">artist.</span>'
                )
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  '<span style="color: #c3073f; font-size: 3rem; font-weight: 600;">musician.</span>'
                )
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
        </div>

        <span className="cursor-text">|</span>
      </div>
    </div>
  );
}
