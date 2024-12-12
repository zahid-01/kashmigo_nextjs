import "./globals.css";
import Footer from "./footer/footer";
import { Roboto } from "next/font/google";
import Prov from "./Prov";
import Navbar from "./navbar/navbar";

const alegreya = Roboto({
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
      <body suppressHydrationWarning={true} className={alegreya.className}>
        <Prov>
          <Navbar />
          <main className="container bg-[#FEFCFB] mx-auto min-h-screen">
            <>{children}</>
          </main>
        </Prov>
        <Footer />
      </body>
    </html>
  );
}
