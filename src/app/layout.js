import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jobick: Job Admin Dashboard",
  description: "The Internship Dashboard Project for Edutech Bangladesh Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            {/* favicon */}
            <link rel="icon" href="/images/logos/favicon.png"/>
            {/* iconify */}
            <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
        </head>
        <body className={`bg-light3 dark:bg-dark3 text-dark3 dark:text-light3 ${inter.className}`}>{children}</body>
    </html>
  );
}
