import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const alegreya = Afacad({weight: "400", subsets:["latin"]});

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
