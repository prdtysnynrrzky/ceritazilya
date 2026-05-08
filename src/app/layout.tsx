import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = "https://ceritazilya.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "cerita - Nadzillah & Praditya",
    template: "%s | cerita",
  },

  description: "beberapa momen yang ingin terus diingat.",

  openGraph: {
    title: "cerita - Nadzillah & Praditya",
    description: "beberapa momen yang ingin terus diingat.",
    url: siteUrl,
    siteName: "cerita - Nadzillah & Praditya",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "cerita - Nadzillah & Praditya preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "cerita - Nadzillah & Praditya",
    description: "beberapa momen yang ingin terus diingat.",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
