import "./globals.css";
import { DM_Serif_Display, Inter } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Rashed | Software Engineer</title>

        <link
          rel="icon"
          href="/images/fav.png"
          type="image/png"
        />
      </head>

      <body
        className={`${inter.variable} ${dmSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}