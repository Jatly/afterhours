
import "./globals.css";
import { Archivo_Black, Space_Grotesk } from "next/font/google";

const archivo = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AFTERHOURS — No Curfew. No Rules.",
  description:
    "Independent streetwear for those who move differently. Discover AFTERHOURS Collection 001.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${space.variable}`}>
        {children}
      </body>
    </html>
  );
}
