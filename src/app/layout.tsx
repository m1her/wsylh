import type { Metadata } from "next";
import { Cairo, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { TopMenu } from "@/components/TopMenu";
import { Footer } from "@/components/Footer";
import { Whatsapp } from "@/components/Whatsapp";

export const metadata: Metadata = {
  title: "WSYLH | وسيلة",
  description: "Landing Page for WSYLH, ",
};

const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-kufi" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${cairo.variable} ${kufi.variable}`}>
        <TopMenu />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
