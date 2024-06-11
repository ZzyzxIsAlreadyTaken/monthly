import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import TopNav from "./_components/topnav";
import SessionProvider from "./_components/SessionProvider";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Monthly - training habits",
  description: "Monthly training habits",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <SessionProvider session={session}>
          <TopNav />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
