import type { Metadata } from "next";
import "./sass/all.scss";
import { Inter, Roboto, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', });
const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"], variable: '--font-roboto' })
const poppins = Poppins({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
