import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { NetworkProvider } from "@/providers/NetworkProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Penumbra Explorer",
  description: "Welcome to Penumbra Explorer dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black-alt px-8 min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NetworkProvider>{children}</NetworkProvider>
      </body>
    </html>
  );
}
