"use client";

import Image from "next/image";
import {
  ShoppingCart,
  Menu,
  Phone,
  Mail,
  User,
  Truck,
  Shield,
  RotateCcw,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/lib/products";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchBar } from "@/components/ui/search-bar";
import HeroSection from "@/components/HeroSection";
import BannerPromo from "@/components/BannerPromo";
import FeatureItem from "@/components/FeatureItem";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// SwiperCore.use não é mais necessário na v9+ (Next.js + Swiper >=9)

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();
  const uniqueCategories = [...new Set(products.map((p) => p.category))];
  const filteredProducts =
    selectedCategory && selectedCategory !== "Todos"
      ? products.filter((p) => p.category === selectedCategory)
      : products;

  // WhatsApp info para todos os botões
  const whatsappNumber = "5519997027138";
  const whatsappMsg = encodeURIComponent(
    "Olá! Tenho interesse em um produto da loja Sideral."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 w-full overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Hero Section - agora Swiper */}
        <div className="lg:col-span-2">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            className="rounded-xl shadow-lg bg-white"
            style={{ height: "370px", maxHeight: "370px" }}
          >
            {/* Slide 1: S15K */}
            <SwiperSlide>
              <div
                className="w-full h-full flex flex-row items-center justify-between px-8 py-6 md:px-14 md:py-8 gap-8"
                style={{ minHeight: "270px", maxHeight: "370px" }}
              >
                {/* Texto */}
                <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[220px] max-w-[340px]">
                  <span className="text-xs md:text-sm text-gray-700 font-medium tracking-wide mb-1">
                    O SUCESSO QUE VOCÊ MERECE
                  </span>
                  <h2
                    className="text-2xl md:text-4xl font-extrabold text-black leading-tight mb-1 md:mb-2 uppercase"
                    style={{ letterSpacing: "-0.04em", lineHeight: "1.05" }}
                  >
                    MÁQUINA LASER
                    <br />
                    ALTA PRODUÇÃO
                  </h2>
                  <div className="flex items-end gap-2 mb-1">
                    <span
                      className="text-3xl md:text-5xl font-extrabold text-yellow-400 leading-none"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      S15K
                    </span>
                    <span className="text-base md:text-lg font-bold text-black ml-2">
                      140x90 - 130W
                    </span>
                  </div>
                  <span className="text-base md:text-xl font-semibold text-black mb-1">
                    R$ 42.700,00
                  </span>
                  <button className="bg-black text-white font-bold px-6 py-2 rounded-none mt-2 text-xs md:text-base shadow-sm hover:bg-gray-900 transition uppercase tracking-tight">
                    Saiba Mais!
                  </button>
                </div>
                {/* Imagem */}
                <div className="flex-1 flex justify-end items-end h-full">
                  <Image
                    src="/placeholder.webp"
                    alt="Máquina Laser S15K"
                    width={420}
                    height={260}
                    className="object-contain w-auto h-[180px] md:h-[260px] max-w-[420px]"
                    priority
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 2: S15K (cópia) */}
            <SwiperSlide>
              <div
                className="w-full h-full flex flex-row items-center justify-between px-8 py-6 md:px-14 md:py-8 gap-8"
                style={{ minHeight: "270px", maxHeight: "370px" }}
              >
                {/* Texto */}
                <div className="flex-1 flex flex-col justify-center items-start gap-2 min-w-[220px] max-w-[340px]">
                  <span className="text-xs md:text-sm text-gray-700 font-medium tracking-wide mb-1">
                    O SUCESSO QUE VOCÊ MERECE
                  </span>
                  <h2
                    className="text-2xl md:text-4xl font-extrabold text-black leading-tight mb-1 md:mb-2 uppercase"
                    style={{ letterSpacing: "-0.04em", lineHeight: "1.05" }}
                  >
                    MÁQUINA LASER
                    <br />
                    ALTA PRODUÇÃO
                  </h2>
                  <div className="flex items-end gap-2 mb-1">
                    <span
                      className="text-3xl md:text-5xl font-extrabold text-yellow-400 leading-none"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      S15K
                    </span>
                    <span className="text-base md:text-lg font-bold text-black ml-2">
                      140x90 - 130W
                    </span>
                  </div>
                  <span className="text-base md:text-xl font-semibold text-black mb-1">
                    R$ 42.700,00
                  </span>
                  <button className="bg-black text-white font-bold px-6 py-2 rounded-none mt-2 text-xs md:text-base shadow-sm hover:bg-gray-900 transition uppercase tracking-tight">
                    Saiba Mais!
                  </button>
                </div>
                {/* Imagem */}
                <div className="flex-1 flex justify-end items-end h-full">
                  <Image
                    src="/placeholder.webp"
                    alt="Máquina Laser S15K"
                    width={420}
                    height={260}
                    className="object-contain w-auto h-[180px] md:h-[260px] max-w-[420px]"
                    priority
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="space-y-4">
          <BannerPromo
            title="BOSCH"
            subtitle="MINI DRILL"
            price="$29.99 ONLY"
            image="/placeholder.webp"
            imageAlt="Bosch Mini Drill"
            bgColor="bg-gray-100"
            className="px-5 py-3 md:px-7 md:py-5 shadow-lg"
          >
            <Button>Ver Produto</Button>
          </BannerPromo>
          <BannerPromo
            title="BRAND"
            subtitle="HAND TOOLS"
            price="START FROM $9.99"
            image="/placeholder.webp"
            imageAlt="Hand Tools"
            bgColor="bg-yellow-400"
            className="px-5 py-3 md:px-7 md:py-5 shadow-lg"
          >
            <Button>Ver Produto</Button>
          </BannerPromo>
        </div>
      </div>
      {/* Features Section */}
      <div className="w-full bg-white rounded-lg border border-gray-200 flex flex-row items-stretch justify-between overflow-hidden mt-12 mb-8">
        {[
          {
            icon: <Truck className="w-8 h-8 text-yellow-500" />,
            title: "Frete Grátis",
            description: "Acima R$ 300,00",
          },
          {
            icon: <Shield className="w-8 h-8 text-yellow-500" />,
            title: "Garantia Real",
            description: "Máquinas e Peças",
          },
          {
            icon: <RotateCcw className="w-8 h-8 text-yellow-500" />,
            title: "Fácil Devolução",
            description: "07 dias após compra",
          },
          {
            icon: <Headphones className="w-8 h-8 text-yellow-500" />,
            title: "Atendimento",
            description: "Comercial e Técnico",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex-1 flex flex-col items-center justify-center py-6 px-4 ${
              i !== 0 ? "border-l border-gray-200" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="font-bold text-base sm:text-lg text-gray-900">
                {item.title}
              </span>
            </div>
            <span className="text-gray-500 text-sm mt-1">
              {item.description}
            </span>
          </div>
        ))}
      </div>
      {/* Categories Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">
          Loja por Categorias
        </h2>
        <p className="text-gray-600 mb-6">
          Confira todas as categorias de destaque para facilitar a descoberta
          dos produtos.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              name: "Sem categoria (0)",
              icon: (
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              ),
            },
            {
              name: "Aprenda com a Sideral (0)",
              icon: (
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                >
                  <rect
                    x="8"
                    y="8"
                    width="32"
                    height="32"
                    rx="4"
                    strokeWidth="2"
                  />
                  <path d="M16 32h16M16 24h16M16 16h16" strokeWidth="2" />
                </svg>
              ),
            },
            {
              name: "Manutenção e Cuidados (0)",
              icon: (
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                >
                  <path d="M12 36l24-24M36 36L12 12" strokeWidth="2" />
                </svg>
              ),
            },
            {
              name: "Máquina a Laser (0)",
              icon: (
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                >
                  <circle cx="24" cy="24" r="16" strokeWidth="2" />
                  <path d="M24 8v32M8 24h32" strokeWidth="2" />
                </svg>
              ),
            },
            {
              name: "Materias para gravação (0)",
              icon: (
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                >
                  <rect
                    x="12"
                    y="12"
                    width="24"
                    height="24"
                    rx="4"
                    strokeWidth="2"
                  />
                </svg>
              ),
            },
            {
              name: "Peças e Componentes (0)",
              icon: (
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                >
                  <circle cx="24" cy="24" r="16" strokeWidth="2" />
                  <path d="M24 16v16M16 24h16" strokeWidth="2" />
                </svg>
              ),
            },
            {
              name: "Tintas e Resinas (0)",
              icon: (
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                >
                  <path d="M12 36l24-24" strokeWidth="2" />
                </svg>
              ),
            },
            {
              name: "Vetores e Projetos (0)",
              icon: (
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                >
                  <rect
                    x="8"
                    y="8"
                    width="32"
                    height="32"
                    rx="4"
                    strokeWidth="2"
                  />
                </svg>
              ),
            },
          ].map((cat, i) => (
            <CategoryCard key={i} name={cat.name} icon={cat.icon} />
          ))}
        </div>
      </div>
      {/* Filtro de Categorias */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4 mt-6">
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
          <button
            className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors ${
              !selectedCategory || selectedCategory === "Todos"
                ? "bg-yellow-500 text-black border-yellow-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </button>
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-yellow-500 text-black border-yellow-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-yellow-100"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>
      {/* Produtos em Destaque (banners) */}
      <div className="mt-12 mb-4 w-full text-center">
        <h2 className="text-3xl font-bold text-yellow-500 mb-2">
          Produtos em Destaque
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Confira nossa seleção de produtos em destaque, escolhidos para
          impulsionar seus resultados e transformar sua produção com mais
          rentabilidade.
        </p>
      </div>
      <div className="mb-16 flex flex-col md:flex-row gap-6 w-full">
        <div
          className="flex-1 flex flex-row items-center rounded-lg overflow-hidden bg-yellow-400 min-h-[220px] shadow-md relative cursor-pointer"
          onClick={() => router.push("/produto/maquina-laser-s5k")}
        >
          <div className="absolute inset-0">
            <img
              src="/placeholder.webp"
              alt="Ferramentas Elétricas"
              className="object-cover w-full h-full opacity-30"
            />
          </div>
          <div className="flex-1 p-8 flex flex-col justify-center relative z-10">
            <span className="uppercase text-orange-600 font-semibold text-sm mb-2">
              Novidade
            </span>
            <h3 className="text-3xl font-extrabold text-black mb-2 leading-tight">
              Ofertas Quentes
              <br />
              Ferramentas Elétricas
            </h3>
            <a
              href="#"
              className="font-bold underline text-black text-base mt-2"
            >
              Ver Produto
            </a>
          </div>
        </div>
        <div
          className="flex-1 flex flex-row items-center rounded-lg overflow-hidden bg-blue-100 min-h-[220px] shadow-md relative cursor-pointer"
          onClick={() => router.push("/produto/electric-saw")}
        >
          <div className="absolute inset-0">
            <img
              src="/placeholder.webp"
              alt="Serras Elétricas"
              className="object-cover w-full h-full opacity-30"
            />
          </div>
          <div className="flex-1 p-8 flex flex-col justify-center relative z-10">
            <span className="uppercase text-blue-600 font-semibold text-sm mb-2">
              Grande Oferta
            </span>
            <h3 className="text-3xl font-extrabold text-black mb-2 leading-tight">
              Serras Elétricas
              <br />a partir de R$540
            </h3>
            <a
              href="#"
              className="font-bold underline text-black text-base mt-2"
            >
              Ver Produto
            </a>
          </div>
        </div>
        <div
          className="flex-1 flex flex-row items-center rounded-lg overflow-hidden bg-orange-600 min-h-[220px] shadow-md relative cursor-pointer"
          onClick={() => router.push("/produto/navac-pump")}
        >
          <div className="absolute inset-0">
            <img
              src="/placeholder.webp"
              alt="Bombas Navac"
              className="object-cover w-full h-full opacity-30"
            />
          </div>
          <div className="flex-1 p-8 flex flex-col justify-center relative z-10">
            <span className="uppercase text-white font-semibold text-sm mb-2">
              Super Desconto
            </span>
            <h3 className="text-3xl font-extrabold text-white mb-2 leading-tight">
              Em Bombas
              <br />
              Navac
            </h3>
            <a
              href="#"
              className="font-bold underline text-white text-base mt-2"
            >
              Ver Produto
            </a>
          </div>
        </div>
      </div>
      {/* Banner horizontal */}
      <div className="w-full flex justify-center my-12">
        <img
          src="/placeholder.webp"
          alt="Banner Vetores"
          className="w-[900px] h-40 object-cover rounded-lg shadow-md"
        />
      </div>
      {/* Melhor oferta da semana */}
      <div className="w-full border-2 border-red-500 rounded-lg py-10 px-4 my-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-yellow-500 mb-2 text-center">
          Melhor oferta da semana
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-2xl">
          Confira nossa coleção com as melhores ofertas nunca vistas antes nos
          produtos mais recentes.
        </p>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Máquina Laser S5K",
              price: "R$ 16.900,00",
              desc: "A máquina ideal para começar seu negócio de corte a laser.",
              img: "/placeholder.webp",
              tag: "S5K 1.0 A PARTIR",
            },
            {
              name: "Gravadora Laser Portátil",
              price: "R$ 2.990,00",
              desc: "Personalize objetos em segundos com alta precisão.",
              img: "/placeholder.webp",
              tag: "PORTÁTIL EM OFERTA",
            },
            {
              name: "Kit Ferramentas Pro",
              price: "R$ 499,00",
              desc: "Tudo que você precisa para manutenção e ajustes finos.",
              img: "/placeholder.webp",
              tag: "KIT COMPLETO",
            },
          ].map((prod, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md flex flex-col items-start p-6 h-full"
            >
              <span className="text-xs font-bold text-yellow-500 mb-2 uppercase">
                {prod.tag}
              </span>
              <img
                src={prod.img}
                alt={prod.name}
                className="w-full h-32 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {prod.name}
              </h3>
              <span className="text-yellow-600 font-bold mb-2">
                {prod.price}
              </span>
              <p className="text-gray-600 text-sm mb-4 flex-1">{prod.desc}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black font-bold px-4 py-2 rounded hover:bg-yellow-400 transition text-center w-full block"
              >
                Negociar agora!
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Dois produtos aleatórios */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        {[
          {
            name: "MÁQUINA LASER O COMEÇO",
            tag: "S5K 1.0 A PARTIR R$16.900",
            img: "/placeholder.webp",
            cta: "NEGOCIAR AGORA!",
          },
          {
            name: "MDF E ACRÍLICO CORTE E GRAVAÇÃO",
            tag: "S15K A MAIS VENDIDA",
            img: "/placeholder.webp",
            cta: "NEGOCIAR AGORA!",
          },
        ].map((prod, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden min-h-[220px] flex flex-col justify-end shadow-lg group"
          >
            <img
              src={prod.img}
              alt={prod.name}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="relative z-10 p-8 flex flex-col items-start">
              <span className="text-yellow-400 font-bold text-sm mb-2 uppercase">
                {prod.tag}
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-4 leading-tight drop-shadow">
                {prod.name}
              </h3>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black font-bold px-6 py-2 rounded shadow hover:bg-yellow-300 transition"
              >
                {prod.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Remover seções de blog e manter apenas o que for relevante ao MVP */}
      {/* Customer Testimonials */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">
          Veja o que nossos clientes dizem
        </h2>
        <p className="text-gray-600 mb-12">
          Confira os depoimentos mais recentes e compartilhe também a sua
          experiência.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <TestimonialCard
            name="Fernanda Alves"
            role="Designer de produtos"
            testimonial="A máquina laser da Sideral transformou o meu negócio! Hoje ofereço produtos exclusivos com qualidade excepcional e ótima aceitação dos meus clientes"
            image="/placeholder.webp"
            imageAlt="Fernanda Alves"
          />
          <TestimonialCard
            name="Rodrigo Martins"
            role="Empreendedor Criativo"
            testimonial="Além do equipamento de alta qualidade, o suporte e o treinamento oferecidos pela Sideral fizeram toda a diferença para aumentar minha produtividade"
            image="/placeholder.webp"
            imageAlt="Rodrigo Martins"
          />
          <TestimonialCard
            name="Juliana Ribeiro"
            role="Empreendedora"
            testimonial="Sempre sonhei em empreender em casa, e graças às máquinas laser da Sideral hoje tenho autonomia financeira e mais tempo com a minha família"
            image="/placeholder.webp"
            imageAlt="Juliana Ribeiro"
          />
        </div>
      </div>
      {/* Banner de anúncio */}
      <div className="w-full flex justify-center my-12">
        <img
          src="/placeholder.webp"
          alt="Banner Anúncio"
          className="w-[1100px] h-64 object-cover rounded-lg shadow-md"
        />
      </div>
      {/* Slider de marcas */}
      <div className="w-full flex flex-col items-center mb-16">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-row gap-8 items-center py-6 px-2 justify-center flex-wrap">
            {[
              { name: "Escola Sideral", img: "/placeholder.webp" },
              { name: "SKlub", img: "/placeholder.webp" },
              { name: "FK Laser", img: "/placeholder.webp" },
              { name: "CK Laser", img: "/placeholder.webp" },
              { name: "AK Gravação", img: "/placeholder.webp" },
              { name: "Escola Sideral", img: "/placeholder.webp" },
            ].map((brand, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-20 h-20 object-contain grayscale"
                  />
                </div>
                <span className="mt-2 text-gray-500 text-sm font-semibold">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Notícias/Novidades */}
      <div className="w-full flex flex-col items-center mb-20">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
          Receba Atualizações e Novidades
        </h2>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {[
            {
              title:
                "Nullam ullamcorper nisl quis ornare molestie saepe eveniet",
              img: "/placeholder.webp",
              author: "Estudioangelo",
              date: "06 junho, 2023",
            },
            {
              title: "Morbi condimentum molestie Nam enim odio sodales",
              img: "/placeholder.webp",
              author: "Estudioangelo",
              date: "02 junho, 2023",
            },
            {
              title:
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut",
              img: "/placeholder.webp",
              author: "Estudioangelo",
              date: "02 junho, 2023",
            },
          ].map((news, i) => (
            <div key={i} className="flex flex-col">
              <img
                src={news.img}
                alt={news.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                {news.title}
              </h3>
              <span className="text-gray-500 text-sm">
                By {news.author} | {news.date}
              </span>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="text-blue-700 font-medium underline text-base mt-2"
        >
          Confira nossas últimas notícias e eventos
        </a>
      </div>
    </div>
  );
}
