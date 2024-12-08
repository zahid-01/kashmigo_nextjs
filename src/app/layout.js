import "./globals.css";
import Footer from "./footer/footer";
import { Alegreya_Sans } from "next/font/google";
import Prov from "./Prov";
import Navbar from "./navbar/navbar";

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
        <main className="container w-100vw bg-[#FEFCFB] mx-auto ">
          <Prov>
            <>
              <Navbar className="w-screen" /> {children}
            </>
          </Prov>
        </main>
        <Footer />
      </body>
    </html>
  );
}
