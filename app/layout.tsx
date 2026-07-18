import type { Metadata } from "next";
import {
  Geist_Mono,
  Playfair_Display,
  Instrument_Serif,
  Roboto_Slab,
  Inter,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Vinit kumar",
  description: "Portfolio website of vinit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} ${playfairDisplay.variable} ${instrumentSerif.variable} ${robotoSlab.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
          <Analytics />
        </ThemeProvider>
      
      </body>
    </html>
  );
}
