import React from "react";

export default function SectionDivider() {
  return (
    <div className="my-10 lg:my-14 flex items-center justify-center gap-3 px-8" aria-hidden="true">
      <svg viewBox="0 0 80 4" className="w-20 h-1 text-shell-edge shrink-0">
        <path d="M0,2 Q20,0 40,2 T80,2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary-500 shrink-0 rotate-12">
        <path d="M12 2l2.5 5.5L20 9l-4.5 4 1 6L12 16.5 7.5 19l1-6L4 9l5.5-1.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <svg viewBox="0 0 80 4" className="w-20 h-1 text-shell-edge shrink-0">
        <path d="M0,2 Q20,4 40,2 T80,2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
