import type { Metadata } from "next";
import { Alegreya_Sans_SC } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya_Sans_SC({weight: "300", subsets:["latin"]});

export const metadata: Metadata = {
  title: "Mystical Ritual",
  description: "The honor of your presence is requested at the wedding of Wendy and Chris.",
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={alegreya.className}>{children}</body>
    </html>
  );
}
