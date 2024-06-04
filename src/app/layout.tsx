import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import TopNav from "./_components/topnav";

export const metadata = {
  title: "Monthly - training habits",
  description: "Monthly training habits",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
