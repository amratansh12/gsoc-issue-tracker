import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: 'Google Summer of Code Organizations | Your App Name',
  description: 'Discover a diverse array of organizations participating in Google Summer of Code (GSoC) through our platform. Explore detailed project descriptions, goals, and exciting opportunities offered by each organization. Empower your coding journey with valuable insights into GSoC initiatives, all in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
