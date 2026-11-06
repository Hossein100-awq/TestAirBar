import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airbar",
  description: "Airbar Website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}