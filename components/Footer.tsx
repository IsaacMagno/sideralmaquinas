import Image from "next/image";
import { Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-8 sm:py-12 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 w-full">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    Dúvidas e Informações?
                  </p>
                  <p className="font-semibold text-gray-900">
                    (+55) 19 997027138
                  </p>
                </div>
              </div>
              <div className="text-gray-600 text-sm">
                <p>Rua João Niero 413 Jardim Andrade</p>
                <p>CEP 13.922-112 Pedreira São Paulo</p>
                <p className="mt-2">atendimento@lojasideralmaquinas.com.br</p>
              </div>
            </div>
          </div>

          {/* Minha Conta */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Minha conta
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Central de ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Resgatar voucher
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Rastrear pedido
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Histórico de pedidos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Carrinho de compras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Afiliado
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Conta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Vale-presente
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Central de serviços
                </a>
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Informações
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Suporte ao produto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Finalizar compra
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Política de licença
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Abrir disputa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Localização
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Políticas e regras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Termos e condições
                </a>
              </li>
            </ul>
          </div>

          {/* Detalhes da Empresa */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Detalhes da empresa
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Abrir disputa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Afiliado
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
          <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Loja Sideral Máquinas Laser - WordPress Theme by Avanam
          </p>
          <div className="flex space-x-2 sm:space-x-4">
            <Image
              src="/placeholder.svg?height=30&width=50"
              alt="Visa"
              width={50}
              height={30}
            />
            <Image
              src="/placeholder.svg?height=30&width=50"
              alt="Mastercard"
              width={50}
              height={30}
            />
            <Image
              src="/placeholder.svg?height=30&width=50"
              alt="American Express"
              width={50}
              height={30}
            />
            <Image
              src="/placeholder.svg?height=30&width=50"
              alt="PayPal"
              width={50}
              height={30}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
