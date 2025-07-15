// TestimonialCard.tsx
// Componente para exibir um depoimento de cliente na home.
// Recebe nome, cargo, depoimento, imagem e children opcionais.
//
// Exemplo de uso:
// <TestimonialCard name="Fernanda Alves" role="Designer de produtos" testimonial="A máquina laser da Sideral transformou o meu negócio!" image="/placeholder.svg" />

"use client";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  /** Nome do cliente */
  name: string;
  /** Cargo ou função */
  role: string;
  /** Texto do depoimento */
  testimonial: string;
  /** Caminho da imagem */
  image: string;
  /** Alt da imagem */
  imageAlt?: string;
  /** Children opcionais */
  children?: React.ReactNode;
  /** Classe extra opcional */
  className?: string;
}

/**
 * Componente visual para exibir um depoimento de cliente com nome, cargo, texto e imagem.
 */
export default function TestimonialCard({
  name,
  role,
  testimonial,
  image,
  imageAlt = "Cliente",
  children,
  className = "",
}: TestimonialCardProps) {
  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <p className="text-gray-700 mb-6">{testimonial}</p>
      <div className="flex items-center">
        <Image
          src={image}
          alt={imageAlt}
          width={50}
          height={50}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="text-left">
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-gray-600 text-sm">{role}</div>
        </div>
        {children}
      </div>
    </div>
  );
}
