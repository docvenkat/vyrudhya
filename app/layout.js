import "./globals.css";
import Footer from "../components/Footer";
import { Nunito, Inter } from "next/font/google";

// Load fonts properly (Next.js way)
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
        
        {/* PAGE CONTENT */}
        {children}

        {/* GLOBAL FOOTER */}
        <Footer />

      </body>
    </html>
  );
}