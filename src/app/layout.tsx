import type { Metadata } from "next";
import "./styles/globals.scss";
import { M_PLUS_Rounded_1c } from "next/font/google";

const mplus = M_PLUS_Rounded_1c({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Elvin",
  description: "Portfolio for Elvin Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mplus.className}>{children}</body>
    </html>
  );
}
