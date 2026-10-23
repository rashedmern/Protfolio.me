"use client";

import React from "react";

export default function BackgroundDecorations() {
  return (
    <>
      {/* Recent Searches sticky note */}
      <div className="hidden lg:block fixed top-32 right-6 z-20 max-w-[250px] rotate-2 transition-all duration-700 hover:rotate-0 hover:scale-105 opacity-0 min-[1650px]:opacity-100 pointer-events-none min-[1650px]:pointer-events-auto">
        <div className="bg-paper p-6 shadow-xl border border-primary-200 relative">
          <div className="w-4 h-4 rounded-full bg-primary-500 absolute -top-2 left-1/2 -translate-x-1/2 shadow-sm border border-primary-700 z-30" />
          <h3 className="font-display text-lg text-ink mb-2 underline">
            Recent Searches:
          </h3>
          <ul className="list-disc pl-4 font-hand text-base text-ink-muted space-y-2 leading-tight">
            <li>how to fix slow Next.js app after launch</li>
            <li>automate customer onboarding without hiring</li>
            <li>MVP developer for startup</li>
            <li>AI agent to handle support tickets</li>
            <li>app crashing under traffic fix</li>
            <li>technical co-founder freelance</li>
          </ul>
        </div>
      </div>
    </>
  );
}
