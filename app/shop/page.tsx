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

const products = [
  {
    id: 1,
    name: 'N9NE LIFES OG TEE',
    price: '$165.00 USD',
    image: '/blk_star_shirt.png', 
    soldOut: true,
  },
  {
    id: 2,
    name: 'WHITE TEE',
    price: '$250.00 USD',
    image: '/w_star_shirt.png', 
    soldOut: false,
  },
  {
    id: 3,
    name: 'RED TEE',
    price: '$180.00 USD',
    image: '/red_star_shirt.png', 
    soldOut: false,
  },
  {
    id: 4,
    name: 'GREEN TEE',
    price: '$45.00 USD',
    image: '/green_star_shirt.png', 
    soldOut: false,
  },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-white text-black p-6 md:p-12">
      
      {/* HEADER */}
      <nav className="flex justify-between items-start mb-12 md:mb-20">
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
             />
           </Link>
        </div>
      </nav>

      {/* --- THE FIX: INLINE STYLES --- */}
      {/* We are NOT using Tailwind classes here. We are using raw CSS. */}
      {/* 'gridTemplateColumns: 1fr' forces 1 column, period. */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr', // This guarantees 1 item per row
        rowGap: '3rem',             // Spacing between rows
        width: '100%'
      }}>
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            
            {/* PRODUCT IMAGE */}
            <div className="relative w-full aspect-square bg-transparent mb-4 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
              />
              
              {product.soldOut && (
                <span className="absolute bottom-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase">
                  Sold out
                </span>
              )}
            </div>

            {/* PRODUCT INFO */}
            <div className="flex justify-between items-start">
              <div className="max-w-[85%]">
                <h2 className={`${bebasNeue.className} text-xl leading-none mb-1`}>
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm font-mono">
                  {product.price}
                </p>
              </div>
              
              <div className="flex gap-2 text-xs text-gray-400">
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