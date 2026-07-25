import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "A marketplace for handcrafted things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
