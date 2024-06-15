import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ColorUp | By Daniel",
  description: "Color Up your websites simply, quickly. Generate comprehensive palettes with primary, secondary, neutrals and utilities with powerful live demos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-neutral-950 min-h-screen flex flex-col">
          <Header/>
            <div className="flex flex-col flex-grow">
              {children}
            </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
