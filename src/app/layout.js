import { Open_Sans} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";


const OpenSans= Open_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Crown",
  description: "Dress like a king",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" >
      <body 
      className={`${OpenSans.className} w-full max-w-[1400px] mx-auto text-sm sm:text-base flex flex-col text-black antialiased bg-white relative `}
      > 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
