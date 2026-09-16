import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factory — Creative + Technology Studio",
  description: "Factory builds brands, content, digital products, automation and experiences."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
