import './globals.css';
import type { ReactNode } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ChatBot from "@/components/ChatBot";

export const metadata = {
  title: 'Riad Diamond - Marrakech',
  description: 'Un luxe raffiné au cœur de Marrakech'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
