import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Fire Sprinkler Installation & Service in Texas | E&R Ibukun LLC",
    template: "%s | E&R Ibukun LLC",
  },
  description:
    "E&R Ibukun LLC provides expert fire sprinkler installation, inspection, and emergency services across all of Texas. Licensed contractor SCR-G-3451926. Call (832) 961-8372.",
  metadataBase: new URL("https://texasfiresprinklers.com"),
  openGraph: {
    siteName: "E&R Ibukun LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
