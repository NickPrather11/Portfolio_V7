import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import dbConnect from "./db/dbConnect";
import compareAndUpdateAlbums from "@/app/db/controllers/compareAndUpdateAlbums";
import Navbar from "./components/navbar/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nick K Prather",
  description: "Generated by create next app",
};

const intializeDB = async () => {
  await dbConnect();
  compareAndUpdateAlbums();
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  intializeDB();
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/AvatarNick.svg" />
      </head>
      <body className="flex flex-col m-0 p-0 min-h-screen text-slate-700 bg-green-50 bg-cover bg-center bg-fixed">
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
