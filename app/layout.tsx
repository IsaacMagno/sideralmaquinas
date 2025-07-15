import type { Metadata } from "next";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import { UserProvider } from "@/components/UserContext";
import Header from "@/components/Header";
import NewsletterBar from "@/components/NewsletterBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappNumber = "5519997027738"; // Substitua pelo número real
  const whatsappMsg = encodeURIComponent("Olá! Gostaria de mais informações.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden" }}>
        <UserProvider>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1 w-full">{children}</main>
            <NewsletterBar />
            <Footer />
          </div>
          {/* Botão flutuante WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 transition-colors"
            aria-label="Fale conosco no WhatsApp"
          >
            <FaWhatsapp className="w-8 h-8" />
          </a>
        </UserProvider>
      </body>
    </html>
  );
}
