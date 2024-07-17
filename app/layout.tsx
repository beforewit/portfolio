import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HyunYoung  Kim",
  description: "AI Product Designer",
  openGraph:{
    images:['https://img2.stibee.com/28983_2288692_1721212497703294069.png']
  }
};

export const viewport: Viewport = {
  themeColor: "#D0CFF4",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
