// FeatureItem.tsx
// Componente para exibir um item de destaque (feature) na home.
// Recebe ícone (SVG ou ReactNode), título, descrição e children opcionais.
//
// Exemplo de uso:
// <FeatureItem icon={<Truck />} title="Frete Grátis" description="Acima R$ 300,00" />

"use client";
import React from "react";

interface FeatureItemProps {
  /** Ícone SVG ou ReactNode a ser exibido */
  icon: React.ReactNode;
  /** Título da feature */
  title: string;
  /** Descrição da feature */
  description: string;
  /** Children opcionais */
  children?: React.ReactNode;
  /** Classe extra opcional */
  className?: string;
}

/**
 * Componente visual para exibir um item de destaque (feature) com ícone, título e descrição.
 * Usado na seção de features da home.
 */
export default function FeatureItem({
  icon,
  title,
  description,
  children,
  className = "",
}: FeatureItemProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center shadow-sm text-center ${className}`}
    >
      <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-3 text-yellow-600 text-3xl">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-sm text-center">{description}</p>
      {children}
    </div>
  );
}
