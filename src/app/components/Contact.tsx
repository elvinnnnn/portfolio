import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await emailjs.sendForm(
        "service_k8g4wxp",
        "template_lmudgt5",
        form.current!,
        {
          publicKey: "IAf9ASugefBf07Gqk",
        }
      );
      console.log("SUCCESS!", response.text);
    } catch (error) {
      console.log("FAILED...", error);
    }
  };
  return (
    <div className="about-container">
      <div className="page-title">contact me!&nbsp;</div>
      <div className="page-content">
        <div className="page-child" style={{ paddingBottom: "1rem" }}>
          please contact me with{" "}
          <a
            href="mailto:elvin.lee@outlook.com.au"
            className="highlight socials"
          >
            elvin.lee@outlook.com.au
          </a>{" "}
          or through this form
        </div>
        <form className="email-form page-child" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="name" />
          <input type="email" name="user_email" placeholder="email" />
          <textarea name="message" placeholder="message" />
          <button className="submit-button" type="submit">
            <svg
              className="socials plane-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
            </svg>
          </button>
        </form>
        <div className="number-contact page-child">
          you can also give me a call on{" "}
          <a href="tel:+61411145464" className="highlight socials">
            +61 411 145 464
          </a>
          !
        </div>
      </div>
    </div>
  );
}
