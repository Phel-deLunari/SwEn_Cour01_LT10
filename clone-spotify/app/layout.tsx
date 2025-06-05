import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import { get } from "http";
import getSongsByUserId from "@/actions/getSongsByUser";
import Player from "@/components/Player";

const FigtreeSans = Figtree({
  variable: "--font-Figtree-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "spotify",
  description: "listen to your favorite music",
};
export const revalidate = 0; // Disable caching for this layout

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSong = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={`${FigtreeSans.variable} antialiased`}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Sidebar songs={userSong}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
