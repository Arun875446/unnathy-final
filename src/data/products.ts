import redChiliPowder from "@/assets/products/red-chili-powder.jpg";
import turmericPowder from "@/assets/products/turmeric-powder.jpg";
import corianderPowder from "@/assets/products/coriander-powder.jpg";
import garamMasala from "@/assets/products/garam-masala.jpg";
import cuminPowder from "@/assets/products/cumin-powder.jpg";
import blackPepper from "@/assets/products/black-pepper.jpg";
import cardamom from "@/assets/products/cardamom.jpg";
import cinnamon from "@/assets/products/cinnamon.jpg";
import cloves from "@/assets/products/cloves.jpg";
import fennel from "@/assets/products/fennel.jpg";
import bayLeaves from "@/assets/products/bay-leaves.jpg";
import mustardSeeds from "@/assets/products/mustard-seeds.jpg";
import curryLeaves from "@/assets/products/curry-leaves.jpg";
import fenugreek from "@/assets/products/fenugreek.jpg";
import nutmeg from "@/assets/products/nutmeg.jpg";
import saffron from "@/assets/products/saffron.jpg";
import starAnise from "@/assets/products/star-anise.jpg";
import asafoetida from "@/assets/products/asafoetida.jpg";
import mangoPowder from "@/assets/products/mango-powder.jpg";
import chatMasala from "@/assets/products/chat-masala.jpg";
import mixOne from "@/assets/mix1.png";
import mixTwo from "@/assets/mix2.png";
import mixThree from "@/assets/mix3.png";
import mixFour from "@/assets/mix4.png";
import SuperStore from "@/assets/products/tupperware/redfirstset.jpg";
import blueBox from "@/assets/products/tupperware/bluesetgroup.jpg";
import freezerMater from "@/assets/products/tupperware/purplefreezer.png";
import blueFreezerMate from "@/assets/products/tupperware/bluefreezermate.jpg";
import redContainer from "@/assets/products/tupperware/redtupgroup.webp";
import mmRoundRed from "@/assets/products/tupperware/allroundset.webp";
import ssBowl from "@/assets/products/tupperware/ssbowl.png";
import buddySet from "@/assets/products/tupperware/buddyset.webp";
import KeepTop from "@/assets/products/tupperware/keeptopset.jpg";
import bottle from "@/assets/products/tupperware/tupperwarebtl.webp";
import fliptopbottle from "@/assets/products/tupperware/flip top.jpg";
import sipper from "@/assets/products/tupperware/sipper bottle.jpg";


export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  variants: string[];
  sizes: string[];
  featured?: boolean;
  hasOffer?: boolean;
  offerText?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Health mix - Roasted",
    category: "Nutrition",
    price: 140,
    originalPrice: 299,
    description: `A wholesome health mix powder suitable from age 1+, made with 34 organic, nutrient-rich ingredients including millets, pulse, nuts, and seeds. It can be enjoyed with milk or water and provides a natural, power-packed boost of nutrition for all ages. 
      Note: A minimum of two products must be ordered, with at least 200g each.
      `,
    images: [mixFour],
    variants: ["Roasted"],
    sizes: ["200g", "500g", "1kg"],
    hasOffer: true,
    offerText: "53% OFF",
    featured: true,
  },
  {
    id: "21",
    name: "Health mix - Sprouted",
    category: "Nutrition",
    price: 220,
    originalPrice: 350,
    description: `A wholesome health mix powder suitable from age 1+, made with 34 organic, nutrient-rich ingredients including millets, pulse, nuts, and seeds. It can be enjoyed with milk or water and provides a natural, power-packed boost of nutrition for all ages. 
      Note: A minimum of two products must be ordered, with at least 200g each.
      `,
    images: [mixThree],
    variants: ["Sprouted"],
    sizes: ["200g", "500g", "1kg"],
    hasOffer: true,
    offerText: "37% OFF",
    featured: true,
  },
  {
    id: "22",
    name: "Black Urid Dhall Flour - Sprouted",
    category: "Nutrition",
    price: 150,
    originalPrice: 270,
    description: `Black urad porridge/kazhi flour made with 7 specially selected, highly nutritious ingredients. Suitable from age 6 months. It can be enjoyed with milk or water and provides a natural, power-packed boost of nutrition for all ages. 
      Note: A minimum of two products must be ordered, with at least 200g each.
      `,
    images: [mixOne],
    variants: ["Sprouted"],
    sizes: ["200g", "500g", "1kg"],
    hasOffer: true,
    offerText: "44% OFF",
    featured: true,
  },
  {
    id: "23",
    name: "Raagi Flour - Sprouted",
    category: "Nutrition",
    price: 75,
    originalPrice: 120,
    description: `Ragi flour made with 7 specially selected, highly nutritious ingredients. Suitable from age 6 months. It can be enjoyed with milk or water and provides a natural, power-packed boost of nutrition for all ages. 
      Note: A minimum of two products must be ordered, with at least 200g each.
      `,
    images: [mixTwo],
    variants: ["Sprouted"],
    sizes: ["200g", "500g", "1kg"],
    hasOffer: true,
    offerText: "37% OFF",
    featured: true,
  },
  {
    id: "24",
    name: "Tupperware Super Storer Set",
    category: "Tupperware",
    price: 700,
    originalPrice: 1400,
    description:
      "The Super Storer from Tupperware is a versatile storage designed to keep your kitchen essentials organized and fresh. Ideal for dosa batter, pancake mix, and various doughs, it features a virtually airtight lid that locks in freshness.",
    images: [SuperStore],
    variants: ["Transparent"],
    sizes: ["Set", "Small - 300 INR", "Medium - 450 INR", "Large - 550 INR"],
    hasOffer: true,
    offerText: "50% OFF",
    featured: true,
  },
  {
    id: "25",
    name: "Whole Fruits And Vegetable Storer Fridgesmart - Set",
    category: "Tupperware",
    price: 2400,
    originalPrice: 2800,
    description: `Ridges at the bottom prevent the moisture collected at the bottom of the box from touching the stored fruits or vegetables, thus increasing their shelf life. Ridges at the bottom allow for air circulation at the bottom too, thus cooling all the food items uniformally.`,
    images: [blueBox],
    variants: ["Transparent"],
    sizes: ["Set", "350ml - 400 INR", "500ml - 800 INR", "1L - 1200 INR"],
    hasOffer: true,
    offerText: "14% OFF",
    featured: true,
  },
  {
    id: "26",
    name: "Freezer Mate",
    category: "Tupperware",
    price: 2400,
    originalPrice: 2800,
    description: `The Tupperware Plastic Freezer Mate is BPA-free, airtight containers designed specifically for optimal freezer storage.
Their modular, stackable design maximizes space efficiency while the signature seal prevents freezer burn and locks in freshness.`,
    images: [freezerMater],
    variants: ["Purple"],
    sizes: ["Set", "300ml - 700 INR", "1.5L - 800 INR", "2.5L - 1200 INR"],
    hasOffer: true,
    offerText: "14% OFF",
    featured: true,
  },
  {
    id: "27",
    name: "Freezer Mate",
    category: "Tupperware",
    price: 2400,
    originalPrice: 2800,
    description: `The Freezer Mates design enables optimal cold air circulation to pass around the container for quicker and more efficient freezing!
Our unique Colour Control technology helps prevent staining on the inside of the container from high-staining ingredients like tomato sauce or turmeric, so your Freezer Mates will always look just as good as the day you bought them.
The tight-fitting seal helps protect your food from the dry air, prevents spillage and odors.`,
    images: [blueFreezerMate],
    variants: ["Blue"],
    sizes: ["Set", "300ml - 700 INR", "1.5L - 800 INR", "2.5L - 1200 INR"],
    hasOffer: true,
    offerText: "14% OFF",
    featured: true,
  },
  {
    id: "28",
    name: "Smart Saver Plastic Container Set",
    category: "Tupperware",
    price: 2400,
    originalPrice: 2800,
    description: `Smart Saver Plastic Container Set converts cluttered cabinets in your kitchen to highly organised modular spaces. The transparent design and the coloured lids makes it easy and convenient to identify the contents in the box with ease. These containers could be used to store fried snacks, dry fruits, millets, cereals, flour, various batters and other food that are a part of your daily routine.
`,
    images: [redContainer],
    variants: ["Blue"],
    sizes: ["Set", "300ml - 700 INR", "1.5L - 800 INR", "2.5L - 1200 INR"],
    hasOffer: true,
    offerText: "14% OFF",
    featured: true,
  },
  {
    id: "29",
    name: "MM Round Set",
    category: "Tupperware",
    price: 1340,
    originalPrice: 2800,
    description: `Tupperware's MM Round Spice Storer Set of containers is all you need to organize the spice storage in your kitchen. Do you like to have whole spices handy for throwing into that biryani? Do you like to grind a batch of garam masala at home and store it for future use? These containers will cater to all your spice-whims. With their airtight seals, they keep whole and ground spices fresh for longer. This set of 8 containers can easily accommodate all the spices you need for everyday cooking..
`,
    images: [mmRoundRed],
    variants: ["red"],
    sizes: ["Set", "300ml - 700 INR", "1.5L - 800 INR", "2.5L - 1200 INR"],
    hasOffer: true,
    offerText: "14% OFF",
    featured: true,
  },
  {
    id: "30",
    name: "SS Bowl Set",
    category: "Tupperware",
    price: 1340,
    originalPrice: 2800,
    description: `These bowls are perfect for saving space in your kitchen or refrigerator. Whether you’re storing leftovers or carrying curries and dals on-the-go, these liquid-tight bowls keep your food fresh and spill-free. 
`,
    images: [ssBowl],
    variants: ["red"],
    sizes: ["Set", "300ml - 700 INR", "1.5L - 800 INR", "2.5L - 1200 INR"],
    hasOffer: true,
    offerText: "14% OFF",
    featured: true,
  },
  {
    id: "31",
    name: "Buddy Bowl Set",
    category: "Tupperware",
    price: 1340,
    originalPrice: 2800,
    description: `This bowl is designed to maximize storage efficiency while keeping your food fresh and organized. With durable bowls in different sizes, this set is perfect for everyday use, from storing leftovers to serving meals. . 
`,
    images: [buddySet],
    variants: ["red"],
    sizes: ["Set", "300ml - 700 INR", "1.5L - 800 INR", "2.5L - 1200 INR"],
    hasOffer: true,
    offerText: "14% OFF",
    featured: true,
  },

  {
    id: "32",
    name: "Keep Tap Set",
    category: "Tupperware",
    price: 1340,
    originalPrice: 2800,
    description: `Versatile, medium sized containers for storage in the fridge. Airtight lids make them perfect for storing snacks and other dry food items. Can be easily carried to work or when you’re on the go. Stackable design saves space. Can be used to organize your accessories or other household small items.

. 
`,
    images: [KeepTop],
    variants: ["red"],
    sizes: ["Set", "300ml - 700 INR", "1.5L - 800 INR", "2.5L - 1200 INR"],
    hasOffer: true,
    offerText: "14% OFF",
    featured: true,
  },

  {
    id: "33",
    name: "Aquasafe bottle",
    category: "Tupperware",
    price: 1340,
    originalPrice: 2800,
    description: `Stay hydrated in style with this compact and colorful set of AQUASAFE bottles. Perfect for school, office, gym, or travel — this special value pack gives you 4 bottles! Lightweight, durable, and easy to carry, it’s the ideal hydration solution for the whole family.
`,
    images: [bottle],
    variants: ["red"],
    sizes: ["Set", "300ml - 700 INR", "1.5L - 800 INR", "2.5L - 1200 INR"],
    hasOffer: true,
    offerText: "14% OFF",
    featured: true,
  },

  {
    id: "34",
    name: "Aquasafe flip top bottle",
    category: "Tupperware",
    price: 1340,
    originalPrice: 2800,
    description: `Stay hydrated in style with this compact and colorful set of AQUASAFE bottles. Perfect for school, office, gym, or travel — this special value pack gives you 4 bottles! Lightweight, durable, and easy to carry, it’s the ideal hydration solution for the whole family.
`,
    images: [fliptopbottle],
    variants: ["red"],
    sizes: ["Set", "300ml - 700 INR", "1.5L - 800 INR", "2.5L - 1200 INR"],
    hasOffer: true,
    offerText: "14% OFF",
    featured: true,
  },
 {
    id: "35",
    name: "Sipper bottle",
    category: "Tupperware",
    price: 1340,
    originalPrice: 2800,
    description: `Tupperware offers several small sipper bottles with straws, primarily focusing on durability, leak-proof design, and ease of use. Popular options like the steel 550ml model are praised for their robust build and detachable straw for cleaning. Plastic variants, such as the motivational 1.2L bottle, provide additional features like time markers and innovative flexi-straws`,
    images: [sipper, fliptopbottle],
    variants: ["red"],
    sizes: ["Set", "300ml - 700 INR", "1.5L - 800 INR", "2.5L - 1200 INR"],
    hasOffer: true,
    offerText: "14% OFF",
    featured: true,
  },
];
