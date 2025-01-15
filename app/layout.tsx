import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import { Metadata } from "next";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Nihar Ranjan Rout',
  description: 'I\'m Nihar, a passionate technologist driven by innovation and a commitment to helping businesses thrive. As a skilled web designer, developer, and software architect, I specialize in crafting exceptional digital products that not only look great but also grow seamlessly alongside your ambitions. Throughout my journey, I have collaborated with a diverse range of business domains, guiding startups, medium-sized enterprises, and large-scale organizations in building and scaling their software products. My extensive knowledge and hands-on experience in the tech landscape have enabled me to deliver customized solutions that perfectly align with my client’s specific needs and aspirations.',
};

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
        <Footer />
      </body>
    </html>
  );
}
