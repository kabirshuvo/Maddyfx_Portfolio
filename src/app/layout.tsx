import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MaddyFX",
  description: "MaddyFx Portfolio",
  icons: {
    icon: ["https://maddyfx.me/images/MaddyFx_Logo.png"],
    apple: ["https://maddyfx.me/images/MaddyFx_Logo.png"],
    shortcut: ["https://maddyfx.me/images/MaddyFx_Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-950 w-full  text-slate-300 ">
          {children}
        </div>
      </body>
    </html>
  );
}
