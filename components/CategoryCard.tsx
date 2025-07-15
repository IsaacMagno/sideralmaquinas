// CategoryCard.tsx
// Componente para exibir uma categoria na seção de categorias da home.
// Recebe nome da categoria, ícone (SVG ou ReactNode) e children opcionais.
//
// Exemplo de uso:
// <CategoryCard name="Máquina a Laser" icon={<MyIcon />}>
//   (opcional) children
// </CategoryCard>

"use client";
import React from "react";

interface CategoryCardProps {
  /** Nome da categoria */
  name: string;
  /** Ícone SVG ou ReactNode a ser exibido */
  icon: React.ReactNode;
  /** Children opcionais */
  children?: React.ReactNode;
  /** Classe extra opcional */
  className?: string;
}

/**
 * Componente visual para exibir uma categoria com ícone e nome.
 * Usado na seção de categorias da home.
 */
export default function CategoryCard({
  name,
  icon,
  children,
  className = "",
}: CategoryCardProps) {
  return (
    <div
      className={`bg-gray-200 rounded-lg p-6 flex flex-col items-center justify-center min-h-[160px] transition-shadow cursor-pointer ${className}`}
    >
      <div className="w-16 h-16 flex items-center justify-center mb-2 text-black">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 text-center text-base mt-0.5">
        {name}
      </h3>
      {children}
    </div>
  );
}
