// ProductCard.tsx
// Componente para exibir um produto individual em formato de card.
// Recebe um objeto product (do tipo Product) e pode receber children opcionais (ex: botões, links).
//
// Exemplo de uso:
// <ProductCard product={produto}>
//   <Button>Ver detalhes</Button>
// </ProductCard>

"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/products";

interface ProductCardProps {
  /** Produto a ser exibido */
  product: Product;
  /** Children opcionais, como botões ou links */
  children?: React.ReactNode;
}

/**
 * Componente visual para exibir um produto em destaque.
 * Mostra categoria, nome, preço, descrição e imagem.
 * Permite inserir botões ou links como children.
 */
export default function ProductCard({ product, children }: ProductCardProps) {
  return (
    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg p-4 sm:p-6 md:p-8 relative overflow-hidden flex flex-col">
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="text-xs sm:text-sm font-semibold text-yellow-800 mb-1 sm:mb-2">
          {product.category}
        </div>
        <h3 className="text-lg sm:text-2xl font-bold text-black mb-2 sm:mb-4">
          {product.name}
        </h3>
        <div className="text-base sm:text-lg font-bold text-black mb-1">
          R${" "}
          {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </div>
        <p className="text-black text-xs sm:text-base mb-2 sm:mb-4 flex-1">
          {product.description}
        </p>
        {children}
      </div>
    </div>
  );
}
