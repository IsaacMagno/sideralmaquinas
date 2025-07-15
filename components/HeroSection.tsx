// HeroSection.tsx
// Componente para exibir o hero principal da home.
// Recebe título, subtítulo, preço, imagem, botão e children opcionais.
//
// Exemplo de uso:
// <HeroSection title="MÁQUINA LASER 1.0" subtitle="CORTE E GRAVAÇÃO" price="A PARTIR DE R$ 16.900,00" image="/laser-machine.png" button={<Button>Negociar Agora!</Button>} />

"use client";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  /** Título principal */
  title: string;
  /** Subtítulo */
  subtitle: string;
  /** Preço ou destaque */
  price: string;
  /** Descrição opcional */
  description?: string;
  /** Caminho da imagem */
  image: string;
  /** Alt da imagem */
  imageAlt?: string;
  /** Botão ou ação principal */
  button?: React.ReactNode;
  /** Children opcionais */
  children?: React.ReactNode;
  /** Classe extra opcional */
  className?: string;
}

/**
 * Componente visual para exibir o hero principal da home com título, subtítulo, preço, imagem e botão.
 */
export default function HeroSection({
  title,
  subtitle,
  price,
  description,
  image,
  imageAlt = "Hero",
  button,
  children,
  className = "",
}: HeroSectionProps) {
  return (
    <div
      className={`bg-gray-50 rounded-lg p-8 relative overflow-hidden ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          {description && <p className="text-gray-600 mb-2">{description}</p>}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
            <br />
            {subtitle}
          </h1>
          <div className="mb-6">
            <div className="text-6xl font-bold text-yellow-500 mb-2">
              {price}
            </div>
          </div>
          {button}
        </div>
        <div className="relative">
          <Image
            src={image}
            alt={imageAlt}
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
      {children}
    </div>
  );
}
