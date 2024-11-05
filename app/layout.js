import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
 



const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Usman's Portfolio",
  description: "WE DESIGN YOUR FEELINGS' CODE EMOTIONS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
