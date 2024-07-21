import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthProvider from "@/provider/authProvider";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ColorUp | By Daniel",
  description: "Generate comprehensive palettes with primary, secondary, neutrals and utilities with powerful live demos. Designed for TailWind and CSS compatibility. Save and Export your favourite color palettes as JSON and many more. Color Up your websites simply, quickly. ",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <div className="bg-neutral-950 min-h-screen flex flex-col">
          <Header/>
            <div className="flex flex-col flex-grow">
              {children}
            </div>
          <Footer/>
        </div>
      </body>
    </html>
    </AuthProvider>
  );
}
