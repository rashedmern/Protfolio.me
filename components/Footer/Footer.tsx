import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center py-12 lg:py-0 font-hand text-on-canvas-muted relative z-10 flex flex-col justify-center items-center gap-4">
      <span className="font-display text-xl text-ink mb-2 bg-paper-tint px-3 py-1 shadow-sketch-sm border border-primary-300">
        Stalk me on:
      </span>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-4">
        {/* GitHub */}
        <Link
          href="https://github.com/rashedmern"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="group flex flex-col items-center gap-1 hover:scale-110 transition-transform text-on-canvas-muted hover:text-primary-500"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-hand font-bold text-sm">GitHub</span>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/rashed-m-3751a2294/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="group flex flex-col items-center gap-1 hover:scale-110 transition-transform text-on-canvas-muted hover:text-primary-500"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.234-1.66-2.234-.906 0-1.446.61-1.683 1.2-.087.21-.109.497-.109.784v5.82h-3.557s.048-9.439 0-10.42h3.557v1.478c.473-.728 1.319-1.768 3.206-1.768 2.341 0 4.096 1.529 4.096 4.814v5.895zM5.337 8.533a2.071 2.071 0 0 1-2.073-2.07 2.071 2.071 0 0 1 2.073-2.069 2.071 2.071 0 0 1 2.073 2.069 2.071 2.071 0 0 1-2.073 2.07zM3.559 20.452h3.559v-10.42H3.559v10.42z" />
          </svg>
          <span className="font-hand font-bold text-sm">LinkedIn</span>
        </Link>

        {/* LeetCode */}
        <Link
          href="https://leetcode.com/u/rashed_webdev/"
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode"
          className="group flex flex-col items-center gap-1 hover:scale-110 transition-transform text-on-canvas-muted hover:text-primary-500"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.173 5.823a1.375 1.375 0 0 0-.016 1.942 1.372 1.372 0 0 0 1.942.016l5.362-5.363A1.375 1.375 0 0 0 13.483 0zM2.208 9.208a1.377 1.377 0 0 0-.016 1.942L7.545 16.5a1.375 1.375 0 0 0 1.942-.016 1.375 1.375 0 0 0 .016-1.942L4.09 9.192a1.375 1.375 0 0 0-1.882.016zM18.84 9.12a1.375 1.375 0 0 0-1.882.016l-5.352 5.34a1.375 1.375 0 0 0 .016 1.942 1.375 1.375 0 0 0 1.942-.016l5.352-5.34A1.375 1.375 0 0 0 18.84 9.12zM.833 4.25A.833.833 0 0 0 0 5.083v13.834c0 .46.374.833.833.833h13.834a.833.833 0 0 0 .833-.833v-3.833a1.375 1.375 0 0 0-2.75 0v2.792H2.75V6.167h8.125a1.375 1.375 0 0 0 0-2.75H.833z" />
          </svg>
          <span className="font-hand font-bold text-sm">LeetCode</span>
        </Link>

        {/* Blog (Medium) */}
        <Link
          href="https://medium.com/@rashedmolla541"
          target="_blank"
          rel="noopener noreferrer"
          title="Blog"
          className="group flex flex-col items-center gap-1 hover:scale-110 transition-transform text-on-canvas-muted hover:text-primary-500"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M6.79 8.2c0-.26-.1-.5-.29-.68L4.6 5.35v-.27h6.13l4.74 10.4 4.17-10.4H25.4v.27l-1.63 1.56a.47.47 0 0 0-.18.46v11.5c-.02.18.05.36.18.46l1.6 1.56v.27h-8.02v-.27l1.65-1.6c.16-.16.16-.21.16-.47V8.5l-4.6 11.68h-.62L8.58 8.5v7.83c-.04.34.07.68.31.93l2.15 2.6v.27H4.93v-.27l2.15-2.6c.24-.25.35-.6.3-.93V8.2z"
              transform="scale(0.85) translate(1.5 0)"
            />
          </svg>
          <span className="font-hand font-bold text-sm">Blog</span>
        </Link>
      </div>

      <div className="flex items-center gap-2 text-lg">
        <span>© 2026 Rashed Molla Antor. Built with caffeine &amp; Payload.</span>
      </div>
    </footer>
  );
}
