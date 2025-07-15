import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const whatsappNumber = "5519997027738"; // Substitua pelo número real
  const whatsappMsg = encodeURIComponent(
    `Olá! Tenho interesse no produto: ${
      product.name
    } (R$ ${product.price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    })})`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 py-8 w-full">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 flex flex-col gap-6">
        <div className="w-full flex justify-center">
          <Image
            src="/placeholder.webp"
            alt={product.name}
            width={320}
            height={240}
            className="rounded-lg object-contain w-full max-w-xs h-auto"
            priority
          />
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
            {product.category}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <div className="text-lg sm:text-xl font-bold text-yellow-600 mb-2">
            R${" "}
            {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <Button
            asChild
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 text-base w-full sm:w-auto"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Negociar via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
