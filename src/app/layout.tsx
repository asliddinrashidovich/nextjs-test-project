import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReduxProvider } from "@/components/redux-provider";
import NProgressProvider from "@/components/nprogress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shopping",
  description: "E-xommerse website for testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <ReduxProvider>
            <NProgressProvider />
            <Header/>
            {children}
            <Footer/>
         </ReduxProvider>
      </body>
    </html>
  );
}
