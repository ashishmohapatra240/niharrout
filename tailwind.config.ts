import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-tight': ['var(--font-inter-tight)'],
      },
      colors: {
        primary: "#007AFF",
        neutral: {
          0: "#FFFFFF",
          10: "#F9FAFB",
          20: "#e5e7eb",
          30: "#d1d5db",
          40: "#9ca3af",
          50: "#6b7280",
          60: "#4b5563",
          70: "#374151",
          80: "#1f2937",
          90: "#111827",
          100: "#030712",
        },
      },
      fontSize: {
        'body-28': ['28px', { lineHeight: '120%' }],
        'body-22': ['22px', { lineHeight: '130%' }],
        'body-18': ['18px', { lineHeight: '150%' }],
        'body-16': ['16px', { lineHeight: '150%' }],
        'body-14': ['14px', { lineHeight: '150%' }],
        'body-12': ['12px', { lineHeight: '150%' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
