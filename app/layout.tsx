import type { Metadata } from "next";
import { Geist, Geist_Mono,Playfair_Display,Instrument_Serif, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SiteChrome } from "@/components/site";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight:["400"],
  style:"italic"
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight:["400"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight:["400"],
})

export const metadata: Metadata = {
  title: "Vinit kumar",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${instrumentSerif.variable} ${robotoSlab.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteChrome />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
