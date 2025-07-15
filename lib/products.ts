export type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  description: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Máquina Laser S5K",
    slug: "maquina-laser-s5k",
    image: "/placeholder.webp",
    price: 16900,
    description:
      "Máquina laser para corte e gravação, área útil 60x40cm, potência 50/60w.",
    category: "Máquinas a Laser",
  },
  {
    id: 2,
    name: "Bosch Mini Drill",
    slug: "bosch-mini-drill",
    image: "/placeholder.webp",
    price: 149,
    description:
      "Mini furadeira Bosch, ideal para pequenos trabalhos e artesanato.",
    category: "Ferramentas",
  },
  {
    id: 3,
    name: "Kit Hand Tools",
    slug: "kit-hand-tools",
    image: "/placeholder.webp",
    price: 99,
    description: "Kit de ferramentas manuais para uso geral.",
    category: "Ferramentas",
  },
  {
    id: 4,
    name: "Navac Pump",
    slug: "navac-pump",
    image: "/placeholder.webp",
    price: 540,
    description: "Bomba de vácuo Navac para aplicações industriais.",
    category: "Máquinas a Laser",
  },
  {
    id: 5,
    name: "Electric Saw",
    slug: "electric-saw",
    image: "/placeholder.webp",
    price: 540,
    description: "Serra elétrica para cortes precisos em madeira e MDF.",
    category: "Ferramentas",
  },
];
