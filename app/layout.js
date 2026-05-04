import "./globals.css";
import Footer from "../components/Footer";
import { Nunito, Inter } from "next/font/google";
import Script from "next/script";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Little Minds",
  description: "Simple, thoughtful learning for children",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.className}`}>

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B71S3GSGTW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-B71S3GSGTW');
          `}
        </Script>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}