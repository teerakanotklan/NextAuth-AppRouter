import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";

import SessionProvider from "@/components/auth/SessionProvider";
import NavMenu from "@/components/layout/NavMenu";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Welcome to NLDevelopment",
  description: "NLDevelopment Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={kanit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider session={session}>
            <main className="mx-auto max-w-5xl text-2xl flex gap-2">
              <NavMenu />
              {children}
            </main>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
