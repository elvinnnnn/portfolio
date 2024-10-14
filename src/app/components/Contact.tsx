import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const EMAIL_ID = process.env.NEXT_PUBLIC_EMAIL_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const EMAIL_API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY;
export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await emailjs.sendForm(
        EMAIL_ID ?? "",
        TEMPLATE_ID ?? "",
        form.current!,
        {
          publicKey: EMAIL_API_KEY,
        }
      );
      if (res.status === 200) {
        form.current!.reset();
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 2000);
      }
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
          <input required type="text" name="user_name" placeholder="name" />
          <input required type="email" name="user_email" placeholder="email" />
          <textarea required name="message" placeholder="message" />
          <button className="submit-button pop-in" type="submit">
            <svg
              style={{ display: sent ? "none" : "block" }}
              className="socials plane-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
            </svg>
            <div
              style={{
                display: sent ? "block" : "none",
                paddingBottom: "1.3rem",
                paddingLeft: "1rem",
              }}
              className="sent-text pop-in"
            >
              Sent!
            </div>
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
