
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";


export const metadata: Metadata = {
  title: "INSPIRUS",
  description: "Insprus is Software Development Agency",
  icons: {
    icon: "/logo.svg",
    
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={` overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
