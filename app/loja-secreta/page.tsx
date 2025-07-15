"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/components/UserContext";

import { Button } from "@/components/ui/button";

export default function LojaSecretaPage() {
  const { user, isLoading, logout } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Aguarda o carregamento inicial do contexto
    if (isLoading) return;

    if (!user) {
      router.replace("/conta?redirect=/loja-secreta");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) return null; // Evita flash de conteúdo

  return (
    <div className="flex flex-col items-center justify-center px-2 py-8">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold text-yellow-500 mb-2 text-center">
          Bem-vindo à Loja Secreta!
        </h1>
        <p className="text-gray-700 text-center mb-4">
          Olá, <span className="font-semibold text-gray-900">{user.name}</span>!
          <br />
          Aqui você encontra ofertas e descontos exclusivos para membros.
        </p>
        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 w-full text-center mb-4">
          <span className="text-lg font-bold text-yellow-700">
            Desconto especial: 30% OFF em toda a loja secreta!
          </span>
        </div>
        {/* Exemplo de produto secreto */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg p-6 w-full flex flex-col items-center">
          <h2 className="text-xl font-bold text-black mb-2">
            Produto Secreto Ultra
          </h2>
          <p className="text-black mb-2">
            Apenas para membros. Estoque limitado!
          </p>
          <span className="text-lg font-bold text-black mb-2">
            R$ 999,00{" "}
            <span className="line-through text-gray-700 text-base ml-2">
              R$ 1.499,00
            </span>
          </span>
          <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold mt-2">
            Negociar Agora!
          </Button>
        </div>
      </div>
    </div>
  );
}
