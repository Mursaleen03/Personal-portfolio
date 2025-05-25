import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mursaleen - MERN Stack Developer",
  description: "Portfolio website showcasing MERN stack development projects and skills",
  keywords: [
    "MERN Stack",
    "Web Development",
    "Frontend",
    "Backend",
    "React",
    "Node.js",
  ],
  metadataBase: new URL('https://your-portfolio-url.vercel.app'),
  openGraph: {
    title: 'Mursaleen - MERN Stack Developer',
    description: 'Portfolio website showcasing MERN stack development projects and skills',
    url: 'https://your-portfolio-url.vercel.app',
    siteName: 'Mursaleen Portfolio',
    images: [
      {
        url: '/public/profile.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mursaleen - MERN Stack Developer',
    description: 'Portfolio website showcasing MERN stack development projects and skills',
    images: ['/public/profile.png'],
  },
  alternates: {
    canonical: 'https://your-portfolio-url.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Mursaleen.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
