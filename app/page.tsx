import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {/* Moved Hours to Top */}
      <div className="fixed top-0 left-0 right-0 text-center p-2 z-10">
        <p className="text-xs text-gray-300 font-mono">
          SHOP | ABOUT | LOOKBOOK | CONTACT
        </p>
      </div>

      <div className="mb-2 mt-12">
        <Image
          src="/9lb_white.png"
          alt="Spin Records logo"
          width={300}
          height={100}
        />
      </div>
      <div className="text-center mb-2">
        <p className={bebasNeue.className} style={{ fontSize: '20px', color: 'white' }}>
        N9NE.LIVES CLOTHING. Premium Streetwear. Nine Lives. Zero Limits.
        </p>
  
      </div>

      {/* SHOP BUTTON */}
      <div className="flex mt-4 w-full max-w-xs justify-center">
        <a
          href="/shop" 
          className={`
            bg-white hover:bg-gray-50 text-black
            border border-black
            font-bold py-2 px-4 rounded
            ${bebasNeue.className} w-full flex items-center justify-center text-center
          `}
        >
          Shop the Collection
        </a>
      </div>

      {/* --- SUBSCRIBE SECTION --- */}
      <div className="mt-12 w-full max-w-md px-6">
        <div className="text-center mb-2">
          <p className={`${bebasNeue.className} text-xl text-white tracking-wider`}>
            JOIN THE LIST. NEVER MISS A DROP.
          </p>
        </div>
        <form className="flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="ENTER EMAIL" 
            required
            className="w-full bg-transparent border border-gray-500 text-white placeholder-gray-500 px-4 py-2 rounded focus:outline-none focus:border-white text-center sm:text-left font-mono text-sm"
          />
          {/* UPDATED SUBSCRIBE BUTTON */}
          <button 
            type="submit" 
            className={`
              bg-transparent border border-white text-white
              hover:bg-white hover:text-black transition-colors
              px-6 py-2 rounded
              ${bebasNeue.className} tracking-wide
            `}
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
      {/* ----------------------------- */}

      {/* Brand logos */}
      <div className="flex space-x-4 mt-8">
        <div style={{ width: '80px' }}>
          <Image
            src="/9_star.png"
            alt="rawp logo"
            width={80}
            height={80}
          />
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-8">
        <a href="https://www.instagram.com/n9nelifes/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FaInstagram size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FaFacebook size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FaTwitter size={30} />
        </a>
      </div>
    </main>
  );
}