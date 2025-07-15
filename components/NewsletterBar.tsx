import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterBar() {
  return (
    <div className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 w-full">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                Assine nossa Newsletter e ganhe 10% de desconto
              </h3>
              <p className="text-gray-300 text-xs sm:text-base">
                Receba novidades, ofertas e eventos exclusivos no seu e-mail
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full max-w-md">
            <Input
              placeholder="Seu e-mail"
              className="bg-white text-gray-900 border-0 focus-visible:ring-0 w-full"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 sm:px-8 w-full sm:w-auto">
              ASSINAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
