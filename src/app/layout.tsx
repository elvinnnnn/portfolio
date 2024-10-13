import type { Metadata } from "next";
import "./styles/globals.scss";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Head from "next/head";

const mplus = M_PLUS_Rounded_1c({
  weight: "300",
  subsets: ["latin"],
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={mplus.className}>{children}</body>
    </html>
  );
}
