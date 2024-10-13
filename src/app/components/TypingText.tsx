"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingText() {
  return (
    <div className="typing-text-container">
      <div className="title">
        <span className="text first-text">
          Hi! I&apos;m <span className="my-name">Elvin</span>,
        </span>
      </div>
      <div className="typewriter-container">
        <div className="text first-text an"> an&nbsp; </div>
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
                  '<span style="color: #c3073f; font-size: 4rem; font-weight: 600;">developer.</span>'
                )
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  '<span style="color: #c3073f; font-size: 4rem; font-weight: 600;">engineer.</span>'
                )
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  '<span style="color: #c3073f; font-size: 4rem; font-weight: 600;">programmer.</span>'
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
