import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} font-inter-tight`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
