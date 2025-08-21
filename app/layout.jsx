import { Carter_One } from "next/font/google";
import "./globals.css";

const carterOne = Carter_One({
  variable: "--font-carter-one",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "My Portfolio",
  description: "Here my project and result for the work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${carterOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
