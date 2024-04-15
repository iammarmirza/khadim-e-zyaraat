import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { MenuBar } from "@/components/MenuBar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Khadim e Zyaraat",
  description: "A go to place for ziyarat and aaamaal of Holy places",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
      <meta name="theme-color" content="#737854" />
      </head>
      <body>
        <main className="min-h-screen flex flex-col">
          <MenuBar />
          {children}
        </main>
      </body>
    </html>
  );
}
