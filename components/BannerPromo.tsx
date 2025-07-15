// BannerPromo.tsx
// Componente para exibir um banner promocional na home (ex: Bosch Mini Drill, Hand Tools).
// Recebe título, subtítulo, preço, imagem, cor de fundo, children opcionais, etc.
//
// Exemplo de uso:
// <BannerPromo title="BOSCH" subtitle="MINI DRILL" price="$29.99 ONLY" image="/placeholder.svg" bgColor="bg-gray-100" />

"use client";
import Image from "next/image";
import React from "react";

interface BannerPromoProps {
  /** Título principal */
  title: string;
  /** Subtítulo */
  subtitle: string;
  /** Preço ou destaque */
  price: string;
  /** Caminho da imagem */
  image: string;
  /** Alt da imagem */
  imageAlt?: string;
  /** Cor de fundo (classe Tailwind) */
  bgColor?: string;
  /** Children opcionais (ex: botão) */
  children?: React.ReactNode;
  /** Classe extra opcional */
  className?: string;
}

/**
 * Componente visual para exibir um banner promocional com título, subtítulo, preço e imagem.
 * Usado na lateral da home ou em outras áreas promocionais.
 */
export default function BannerPromo({
  title,
  subtitle,
  price,
  image = "/placeholder.webp",
  imageAlt = "Banner",
  bgColor = "bg-gray-100",
  children,
  className = "",
}: BannerPromoProps) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden p-4 flex flex-col justify-end min-h-[120px] sm:min-h-[140px] md:min-h-[160px] shadow-lg group ${className}`}
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all z-0" />
      {/* Conteúdo textual */}
      <div className="relative z-10">
        <div className="text-sm text-yellow-200 mb-1 drop-shadow font-semibold">
          {price}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
          {title}
          <br />
          {subtitle}
        </h3>
        {children}
      </div>
    </div>
  );
}
