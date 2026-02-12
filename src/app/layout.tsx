import type { Metadata } from "next";
import { Fredoka, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

// 1. Playful, rounded English font for kids
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  // We grab a few weights so we can have bold headings and readable text
  weight: ["300", "400", "500", "600", "700"],
});

// 2. Authentic Urdu font for Haroof-e-Tahajji
const notoUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-urdu",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Urdu Adventures - Kids Learning Game",
  description: "Learn Haroof-e-Tahajji with fun animations and AI!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // 3. Apply variables and set default font to Fredoka
        className={`${fredoka.variable} ${notoUrdu.variable} font-fredoka antialiased bg-white text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
