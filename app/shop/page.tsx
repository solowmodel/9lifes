import Image from 'next/image';
import Link from 'next/link';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// --- UPDATED PRODUCTS TO MATCH YOUR SCREENSHOT ---
const products = [
  {
    id: 1,
    name: 'N9NE LIFES OG TEE BLK',
    price: 'COMING SOON',
    image: '/9t_b.png', 
    soldOut: true,
  },
  {
    id: 2,
    name: 'N9NE LIFES OG TEE WHT',
    price: 'COMING SOON',
    image: '/9t_w.png', 
    soldOut: true,
  },
  {
    id: 3,
    name: 'N9NE LIFES OG RHINESTONE BLK', // Matches Item 1
    price: 'COMING SOON',
    image: '/blk_star_shirt.png', 
    soldOut: true,
  },
  {
    id: 4,
    name: 'N9NE LIFES OG RHINESTONE WHT', // Matches Item 2
    price: 'COMING SOON',
    image: '/9stone_w.png', 
    soldOut: true, // Assuming this is sold out based on your screenshot
  },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-white text-black p-4 md:p-12 overflow-x-hidden">
      
      {/* HEADER */}
      <nav className="flex justify-between items-start mb-12 w-full">
        <div className="flex gap-6 font-bold text-sm tracking-wide">
           <Link href="/" className="hover:opacity-60">MENU</Link>
           <Link href="/cart" className="hover:opacity-60">CART</Link>
        </div>
        <div className="w-24">
           <Link href="/">
             <Image 
               src="/9star_blk.png" 
               alt="Logo" 
               width={100} 
               height={50} 
               className="w-full h-auto"
             />
           </Link>
        </div>
      </nav>

      {/* FLEX COLUMN LAYOUT (Mobile Fix) */}
      <div className="flex flex-col w-full gap-16 items-center">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer w-full max-w-[500px]">
            
            {/* PRODUCT IMAGE */}
            <div className="relative w-full aspect-square bg-transparent mb-4 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-auto object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
              
              {product.soldOut && (
                <span className="absolute bottom-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 uppercase z-10">
                  Coming Soon
                </span>
              )}
            </div>

            {/* PRODUCT INFO */}
            <div className="flex justify-between items-start w-full px-2">
              <div className="max-w-[85%]">
                <h2 className={`${bebasNeue.className} text-2xl leading-none mb-1`}>
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm font-mono">
                  {product.price}
                </p>
              </div>
              
              <div className="flex gap-2 text-xs text-gray-400 mt-1">
                <span>&lt;</span>
                <span>&gt;</span>
              </div>
            </div>

          </div>
        ))}
      </div>
      
    </main>
  );
}