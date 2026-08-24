import "./globals.css";

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

      <body>{children}</body>
    </html>
  );
}