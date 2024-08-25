import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/components/NavBar";
import SideNavBar from "./ui/components/SideNav";
import style from "@/app/navBar.module.css"
import Footer from "./ui/components/footerP";
import { AppProvider } from "./context/AppContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blüten",
  description: "Medicine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
            <NavBar />
            <div className="container">
              <div className="sidenav-container">
                <SideNavBar />
              </div>
              <div className="content-container">{children}</div>
            </div>
            <Footer></Footer>
        </AppProvider>
        </body>
    </html>
  );
}
