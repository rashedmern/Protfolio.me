"use client";

import React, { useState } from "react";
import Link from "next/link";

const MONEY_LOADING_STEPS = [
  "Contacting Bank of Bermuda...",
  "Laundering digital assets...",
  "Bribing the firewall...",
  "Verifying infinite wealth...",
  "Wait for it...",
  "Almost there...",
];

export default function Contact() {
  const [mode, setMode] = useState<"message" | "money">("message");
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    message: string;
    status: "idle" | "loading" | "success" | "error";
  }>({
    name: "",
    email: "",
    message: "",
    status: "idle",
  });

  // Money mode states
  const [moneyStatus, setMoneyStatus] = useState<"idle" | "processing" | "error">("idle");
  const [moneyText, setMoneyText] = useState("");

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, status: "loading" }));

    // Prepare mailto link with User Name and Message
    const subject = encodeURIComponent(
      formState.name ? `New Message from ${formState.name}` : "Portfolio Inquiry"
    );
    const body = encodeURIComponent(
      `Hi Rashed,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n`
    );

    // Direct user to default mail client (Gmail/Outlook/Apple Mail)
    window.location.href = `mailto:rashedmolla541@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        message: "",
        status: "success",
      });
    }, 1000);
  };

  const handleSendMoney = () => {
    setMoneyStatus("processing");
    let step = 0;
    setMoneyText(MONEY_LOADING_STEPS[0]);
    const timer = setInterval(() => {
      step++;
      if (step < MONEY_LOADING_STEPS.length) {
        setMoneyText(MONEY_LOADING_STEPS[step]);
      } else {
        clearInterval(timer);
        setMoneyStatus("error");
      }
    }, 1100);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mt-16 lg:mt-32 max-w-4xl mx-auto px-4 relative mb-20">
      {/* Tabs */}
      <div className="absolute -top-10 left-4 md:left-8 flex gap-2 z-10" role="tablist" aria-label="Contact mode">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "message"}
          onClick={() => {
            setMode("message");
            setMoneyStatus("idle");
          }}
          className={`font-display px-4 md:px-6 py-3 text-lg md:text-xl shadow-md transition-transform ${
            mode === "message"
              ? "bg-paper-alt text-ink -rotate-2 scale-110 z-20"
              : "bg-neutral-200 rotate-0 text-ink-muted hover:bg-green-50"
          }`}
        >
          Message
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "money"}
          onClick={() => setMode("money")}
          className={`font-display px-4 md:px-6 py-3 text-lg md:text-xl shadow-md transition-transform ${
            mode === "money"
              ? "bg-paper-alt text-ink -rotate-2 scale-110 z-20"
              : "bg-neutral-200 rotate-0 text-ink-muted hover:bg-green-50"
          }`}
        >
          Send Money $$$
        </button>
      </div>

      {/* Main Container with perforated receipt tear top */}
      <div
        className="bg-paper-alt p-6 md:p-12 shadow-xl rotate-1 border-t-4 border-neutral-200"
        style={{
          clipPath:
            "polygon(0% 10px, 5% 0px, 10% 12px, 15% 0px, 20% 10px, 25% 0px, 30% 12px, 35% 0px, 40% 10px, 45% 0px, 50% 12px, 55% 0px, 60% 10px, 65% 0px, 70% 12px, 75% 0px, 80% 10px, 85% 0px, 90% 12px, 95% 0px, 100% 10px, 100% 100%, 0% 100%)",
        }}
      >
        <h2 id="contact-heading" className="text-3xl md:text-4xl font-display mb-10 text-center text-ink">
          {mode === "message" ? "Let's Ship It Properly" : "Investment Opportunity!"}
        </h2>

        <div className="font-hand text-xl text-ink">
          {mode === "message" ? (
            <>
              {/* Detective Board */}
              <div className="relative mb-12 bg-paper p-6 pt-10 pb-12 border-2 border-dashed border-primary-200 rounded-sm">
                <div
                  className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(transparent, transparent 23px, var(--color-paper-edge) 24px)",
                  }}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0 items-start justify-items-center relative z-10">
                  {/* Pin 1: Spawn Point */}
                  <div className="relative group w-32 md:w-36 transform -rotate-3 hover:rotate-0 transition-transform duration-300 hover:z-30">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-600 shadow z-30" />
                    <div className="bg-paper-alt p-2 pb-6 shadow-md border border-neutral-200 text-center">
                      <div className="bg-neutral-100 h-10 mb-2 flex items-center justify-center">
                        <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <span className="font-hand font-bold text-ink text-sm leading-tight block">
                        Spawn Point
                      </span>
                      <span className="block font-hand text-xs text-ink-muted">
                        Dhaka, BD
                      </span>
                    </div>
                  </div>

                  {/* Pin 2: Hotline */}
                  <div className="relative group md:-translate-x-4 w-36 md:w-40 transform rotate-2 hover:rotate-0 transition-transform duration-300 hover:z-30">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-paper-alt/40 backdrop-blur-sm border border-ink/5 rotate-[-15deg] z-20 shadow-sm pointer-events-none" />
                    <div className="bg-paper p-3 py-6 shadow-sketch-sm border-b border-primary-200 text-center min-h-[110px] flex flex-col justify-center relative overflow-hidden">
                      <Link
                        href="https://wa.me/8801575344516"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/wa-link relative flex flex-col items-center gap-1"
                      >
                        <div className="relative">
                          <svg
                            className="w-8 h-8 text-ink transition-colors group-hover/wa-link:text-green-600"
                            viewBox="0 0 100 100"
                            fill="none"
                          >
                            <path
                              d="M50 10 C27.9 10 10 27.9 10 50 C10 58.1 12.4 65.7 16.9 72.1 L11 91 L30.3 85 C36.4 88.8 43.1 90.8 50 90.8 C72.1 90.8 90 72.9 90 50.8 C90 28.7 72.1 10.8 50 10.8 V10"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M68 60 C67.5 61.5 65.5 63 64 63.5 C62.5 64 60.5 64.5 53.5 61.5 C46.5 58.5 42 51.5 41.5 51 C41 50.5 37.5 45.8 37.5 41 C37.5 36.2 40 33.8 41 32.8 C42 31.8 43.5 32.3 44.5 32.3 C45.5 32.3 46 32.3 47 34.5 C48 36.7 49 39.2 49.3 39.7 C49.6 40.2 49.6 40.8 49.3 41.3 C49 41.8 48.7 42.1 48.2 42.6 C47.7 43.1 47.3 43.5 46.8 44 C46.3 44.5 45.7 45.1 46.3 46 C46.9 46.9 48.8 50 51.7 52.6"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <span className="font-hand font-bold text-ink text-sm leading-tight block">
                          Hotline
                        </span>
                        <span className="block font-hand text-xs text-ink-muted">
                          +880 1575 344516
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Pin 3: Email */}
                  <div className="relative group w-36 md:w-40 transform -rotate-1 hover:rotate-0 transition-transform duration-300 hover:z-30">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-600 shadow z-30" />
                    <div className="bg-paper p-3 py-6 shadow-sketch-sm border-b border-primary-200 text-center min-h-[110px] flex flex-col justify-center">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=rashedmolla541@gmail.com&su=Portfolio%20Inquiry%20from%20Website"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/mail-link flex flex-col items-center gap-1 cursor-pointer"
                      >
                        <svg
                          className="w-8 h-8 text-ink transition-colors group-hover/mail-link:text-primary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="font-hand font-bold text-ink text-sm leading-tight block">
                          Drop a Message
                        </span>
                        <span className="block font-hand text-xs text-ink-muted break-all">
                          rashedmolla541@gmail.com
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleMessageSubmit} className="mt-8 space-y-8 relative">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="flex flex-col group">
                    <label
                      htmlFor="contact-name"
                      className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2 group-focus-within:text-ink transition-colors"
                    >
                      Agent Alias / Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. 007"
                      className="w-full border-b-2 border-neutral-300 bg-transparent py-2 font-hand text-2xl text-ink placeholder-neutral-300 focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>

                  <div className="flex flex-col group">
                    <label
                      htmlFor="contact-email"
                      className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2 group-focus-within:text-ink transition-colors"
                    >
                      Secure Comms (Email)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="agent@HQ.com"
                      className="w-full border-b-2 border-neutral-300 bg-transparent py-2 font-hand text-2xl text-ink placeholder-neutral-300 focus:outline-none focus:border-ink transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col group relative z-10">
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2 group-focus-within:text-ink transition-colors"
                  >
                    Mission Brief / Field Notes
                  </label>
                  <div className="relative">
                    <div
                      className="absolute inset-0 pointer-events-none opacity-10"
                      style={{
                        backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #000 32px)",
                      }}
                    />
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe the objective..."
                      className="w-full bg-[var(--paper-bg)] p-4 font-hand text-xl text-ink leading-8 placeholder-neutral-300 focus:outline-none ring-2 ring-transparent focus:ring-ink/5 rounded-sm transition-all border border-neutral-200"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formState.status === "loading" || formState.status === "success"}
                  className="w-full bg-primary-600 text-on-dark font-display py-4 text-2xl shadow-sketch hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center justify-center gap-3 group border-2 border-transparent hover:border-ink hover:bg-paper-alt hover:text-ink relative z-10"
                >
                  <span>
                    {formState.status === "loading"
                      ? "TRANSMITTING..."
                      : formState.status === "success"
                      ? "MISSION ACCOMPLISHED ✓"
                      : "Send Message"}
                  </span>
                  <svg
                    className="w-6 h-6 transform group-hover:rotate-45 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>

                {formState.status === "success" && (
                  <p className="text-center font-hand text-green-700 text-lg mt-2">
                    Got it — I&apos;ll get back to you within 24 hours.
                  </p>
                )}
              </form>
            </>
          ) : (
            /* Send Money Mode (Funny Easter Egg) */
            <div>
              {moneyStatus === "processing" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-6" />
                  <p className="font-display text-2xl text-green-700 animate-pulse">
                    {moneyText}
                  </p>
                </div>
              ) : moneyStatus === "error" ? (
                <div className="text-center py-6 bg-red-50 border-2 border-red-200 p-6 rotate-1 shadow-lg">
                  <h3 className="font-display text-3xl text-red-600 mb-2">
                    Error 69
                  </h3>
                  <p className="font-hand text-xl text-ink mb-4 leading-tight whitespace-pre-line">
                    The payment attempted a backflip and landed on its face.{"\n"}
                    Also, your wallet seems to be empty.
                  </p>
                  <button
                    type="button"
                    onClick={() => setMoneyStatus("idle")}
                    className="bg-neutral-800 text-white px-6 py-2 font-hand rounded hover:bg-black transform hover:scale-105 transition-transform"
                  >
                    Try Again (Good luck)
                  </button>
                </div>
              ) : (
                <div className="mt-8 space-y-6">
                  <div className="flex flex-col animate-pulse">
                    <label htmlFor="money-amount" className="text-green-800 font-bold text-2xl">
                      Amount (USD):
                    </label>
                    <input
                      id="money-amount"
                      type="text"
                      readOnly
                      defaultValue="$1,000,000"
                      className="border-b-4 border-green-600 bg-green-50 p-2 text-green-900 font-bold text-4xl focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="money-note" className="text-green-800 font-bold">
                      Note:
                    </label>
                    <input
                      id="money-note"
                      type="text"
                      readOnly
                      defaultValue="For being awesome."
                      className="border-b-2 border-green-600 bg-transparent p-2 text-ink text-xl focus:outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSendMoney}
                    className="w-full bg-primary-600 text-on-dark font-display py-4 text-2xl border-2 border-ink shadow-sketch hover:shadow-sketch-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-primary-700 transition-all cursor-pointer"
                  >
                    💸 TRANSFER NOW 💸
                  </button>

                  <p className="text-sm text-center text-ink-faint">
                    * 100% secure (trust me bro)
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
