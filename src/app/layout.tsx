import type { Metadata } from "next";
import "./styles/globals.scss";
import Header from "../components/header/header";
import Footer from "@/components/footer/footer";
import ReduxProvider from "@/app/ReduxProvider";

import { Hedvig_Letters_Sans, Chelsea_Market } from 'next/font/google';

const hedvigLettersSans = Hedvig_Letters_Sans({
  subsets: ['latin'], // Optional, specify the subsets you need
  weight: '400', // Adjust weight as needed
  variable: '--font-hedvig', // Optional custom CSS variable
});

const rubikDoodleShadow = Chelsea_Market({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-chelsaea-market',
});

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Pokemon Card Shop",
  description: "Online Pokemon card buying platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={`${hedvigLettersSans.variable} ${rubikDoodleShadow.variable}`}>
      <body>
        <ReduxProvider>
          <div id="modal"></div>
          <Header />
          
          <div className="wrapper">
              {children}
          </div>

          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}