"use client";
import Image from "next/image";
import { ShoppingCart, Menu, Phone, Mail, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useUser } from "@/components/UserContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, logout } = useUser();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const categories = [
    "aprenda com a sideral",
    "manutenção e cuidados",
    "máquinas a laser",
    "materiais para gravação",
    "peças e componentes",
    "tintas e resinas",
    "vetores e projetos",
  ];

  return (
    <>
      {/* Top Header - apenas desktop */}
      <div className="bg-sideral-graylight w-full py-2 text-xs sm:text-sm text-sideral-graydark hidden sm:flex border-b border-gray-200">
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 flex flex-row justify-between items-center">
          <span>Parcele em até 12x sem juros — Invista no seu negócio!</span>
          <div className="flex flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-sideral-graydark" />
              <span>Fone : (+55) 19 997027138</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sideral-graydark" />
              <span>atendimento@sideralmaquinas.com</span>
            </div>
            <div className="flex items-center gap-2">
              {user ? (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-sideral-graydark" />
                  <button
                    onClick={() => router.push("/conta")}
                    className="text-sm hover:text-sideral-yellow transition-colors"
                    title="Minha Conta"
                  >
                    {user.name}
                  </button>
                  <button
                    onClick={logout}
                    className="text-xs text-gray-500 hover:text-red-600 transition-colors"
                    title="Sair"
                  >
                    <LogOut className="w-3 h-3 text-sideral-graydark" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => router.push("/conta")}
                  className="flex items-center gap-2 hover:text-sideral-yellow transition-colors"
                >
                  <User className="w-4 h-4 text-sideral-graydark" />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-sideral-white w-full py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
          {/* Linha 1: Logo + Carrinho/Menu + (Barra de Pesquisa no desktop) */}
          <div className="flex flex-row items-center justify-between w-full gap-2 sm:gap-4">
            {/* Logo */}
            <div className="flex items-center w-auto flex-shrink-0">
              <button
                onClick={() => router.push("/")}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo-sideral-maquinas.png"
                  alt="Logo Sideral Máquinas"
                  width={180}
                  height={56}
                  className="h-8 w-auto object-contain sm:h-16 sm:w-auto"
                  priority
                />
              </button>
            </div>
            {/* Barra de Pesquisa (desktop) */}
            <div className="hidden sm:flex flex-1 mx-2 sm:mx-4 max-w-xs sm:max-w-2xl">
              <Input
                placeholder="Pesquisar produtos..."
                className="rounded-r-none border-r-0 focus-visible:ring-0 text-xs sm:text-base w-full bg-sideral-white border border-gray-200 text-sideral-graydark"
              />
              <Button className="rounded-l-none bg-sideral-black hover:bg-sideral-yellow px-3 sm:px-6 text-xs sm:text-base text-sideral-white font-semibold">
                Pesquisar
              </Button>
            </div>
            {/* Carrinho e Menu */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-sideral-black" />
                <span className="absolute -top-2 -right-2 bg-sideral-black text-sideral-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
              {/* Hamburger menu só no mobile */}
              <div className="sm:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="p-2">
                      <Menu className="w-6 h-6 text-sideral-black" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-64 p-0">
                    <nav className="flex flex-col gap-2 p-6">
                      <a
                        href="#"
                        className="py-2 px-2 rounded hover:bg-gray-100 font-medium"
                      >
                        Nossos produtos
                      </a>
                      <a
                        href="#"
                        className="py-2 px-2 rounded hover:bg-gray-100 font-medium"
                      >
                        Sobre A Loja
                      </a>
                      <a
                        href="#"
                        className="py-2 px-2 rounded hover:bg-gray-100 font-medium"
                      >
                        Fale Conosco
                      </a>
                      <div className="mt-4 bg-sideral-yellow text-sideral-black px-4 py-2 font-semibold rounded text-center">
                        Frete Grátis Acima De R$ 300,00
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
          {/* Linha 2: Barra de Pesquisa (apenas mobile) */}
          <div className="mt-3 sm:hidden w-full">
            <div className="flex w-full max-w-full">
              <Input
                placeholder="Pesquisar produtos..."
                className="rounded-r-none border-r-0 focus-visible:ring-0 text-xs w-full bg-sideral-white border border-gray-200 text-sideral-graydark"
              />
              <Button className="rounded-l-none bg-sideral-black hover:bg-sideral-yellow px-3 text-xs text-sideral-white font-semibold">
                Pesquisar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar só no desktop */}
      <nav
        className="bg-sideral-black text-sideral-white w-full hidden sm:flex py-2"
        style={{ overflow: "visible" }}
      >
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 flex items-center">
          <div
            className="flex-shrink-0 relative"
            style={{ position: "relative", overflow: "visible" }}
          >
            <button
              onClick={() => setDropdownOpen((open) => !open)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="flex items-center gap-2 bg-sideral-yellow text-sideral-black px-4 py-2 rounded text-xs sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-sideral-yellow transition-colors"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <Menu className="w-4 h-4 mr-2" />
              Nossos produtos
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-56 bg-white rounded shadow-lg z-50 border border-gray-200 animate-fade-in"
                style={{ minWidth: "220px" }}
              >
                <ul className="py-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sideral-black hover:bg-sideral-graylight hover:text-sideral-yellow text-sm font-medium transition-colors"
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <a
                href="#"
                className="hover:text-sideral-yellow py-2 text-xs sm:text-base whitespace-nowrap font-semibold"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-sideral-yellow py-2 text-xs sm:text-base whitespace-nowrap font-semibold"
              >
                Sobre a loja
              </a>
              <a
                href="#"
                className="hover:text-sideral-yellow py-2 text-xs sm:text-base whitespace-nowrap font-semibold"
              >
                Fale conosco
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 ml-auto">
            <div className="bg-sideral-yellow text-sideral-black px-4 py-2 font-semibold text-xs sm:text-base whitespace-nowrap rounded">
              FRETE GRÁTIS ACIMA DE R$ 300,00
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
