// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Navbar/Navbar";
import { Footer } from "@/components";
import AOSProvider from "./AOSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Golden Generation",
  description: "Golden Generation Community Development Club Website",
  metadataBase: new URL("https://golden-generation-oyo.netlify.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AOSProvider>{children}</AOSProvider>
        <Footer />
      </body>
    </html>
  );
}
