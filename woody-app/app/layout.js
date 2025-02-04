import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/custom.css'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Woody App",
  description: "Generated by Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
