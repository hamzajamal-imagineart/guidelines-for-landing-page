import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const googleSans = localFont({
  src: "../../fonts/google-sans-flex.woff2",
  variable: "--font-google-sans",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = { title: "Landing Page Kit" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={googleSans.variable}>
      <body>{children}</body>
    </html>
  );
}
