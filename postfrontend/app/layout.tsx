import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ReduxProvider from "./store/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CRUD APP",
    description: "Created By Ahsan Shakil",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <Navbar />
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}
