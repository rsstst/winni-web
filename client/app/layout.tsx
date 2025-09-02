import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const mainFont = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Jendela Tekno Dunia",
	description: "Website berita teknologi dengan update terkini",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={mainFont.className}>
			<head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</head>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
