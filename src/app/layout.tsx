import type { Metadata } from "next";
import "./styles/globals.scss";
import Header from "../components/header/header";
import Footer from "@/components/footer/footer";

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
    <html lang="en">
      <body>
        <div id="modal"></div>
        <Header />
        
        <div className="wrapper">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
