import type { Metadata } from "next";
import { Fira_Sans, Merriweather_Sans, Bokor } from 'next/font/google'
import "./globals.css";

const firaSans = Fira_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fira-sans',
});

const merriweatherSans = Merriweather_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
});

const bokor = Bokor({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bokor',
});

export const metadata: Metadata = {
  title: "Camp & Retreat",
  description: "Find your perfect camp or retreat for your next adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} ${merriweatherSans.variable} ${bokor.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
