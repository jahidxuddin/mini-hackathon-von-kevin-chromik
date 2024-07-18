import type { Metadata } from "next";
import { Bricolage_Grotesque, Poppins, Space_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400"
});

export const metadata: Metadata = {
  title: "CinePicker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={cn("antialiased", fontHeading.className, fontBody.className)}
      >
        {children}
      </body>
    </html>
  );
}
