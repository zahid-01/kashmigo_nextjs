import "./globals.css";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { Alegreya_Sans } from "next/font/google";
const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});
export const metadata = {
  title: "Kashmi-Go",
  description: "Enjoy your Vacation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alegreya.className}>
        <Navbar />
        <main className="container w-100vw bg-[#FEFCFB] mx-auto ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
