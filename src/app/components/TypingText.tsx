"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingText() {
  return (
    <div className="typing-text-container">
      <div className="introduction">
        <span className="text first-text">
          hi, i&apos;m <span className="my-name">elvin!</span>
        </span>
      </div>
      <div className="text first-text description">i like to code.</div>
      <div className="typewriter-container">
        <div className="text first-text"> aspiring </div>
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
                  '<span style="color: #e64833; font-size: 1.8rem; font-weight: 600;">developer.</span>'
                )
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  '<span style="color: #e64833; font-size: 1.8rem; font-weight: 600;">engineer.</span>'
                )
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  '<span style="color: #e64833; font-size: 1.8rem; font-weight: 600;">scientist.</span>'
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
