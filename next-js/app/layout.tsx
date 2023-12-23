import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { AppLoaderScreen } from "@/domains/shared/components/app-loader-screen/app-loader-screen";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";

import { QueryProvider } from "@/domains/shared/providers/react-query";
import { WebSocketProvider } from "@/domains/shared/providers/web-socket";

const font = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Word",
  description: "Just a simple game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <ClerkLoading>
            <AppLoaderScreen />
          </ClerkLoading>
          <ClerkLoaded>
            <QueryProvider>
              <WebSocketProvider>{children}</WebSocketProvider>
            </QueryProvider>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
