import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
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
        <p className={bebasNeue.className} style={{ fontSize: '40px', color: 'white' }}>

        </p>
        {/* Moved Item List Down Here */}
        <p className="text-s text-gray-300 font-mono">
          N9NE.LIVES CLOTHING. Premium Streetwear. Nine Lives. Zero Limits.
        </p>
      </div>

      <div className="flex mt-4">
  <a
    href="/shop" /* TODO: Update this URL to your collection page */
    className={`
      bg-white hover:bg-gray-50 text-black
      border border-black
      font-bold py-2 px-4 rounded
      ${bebasNeue.className} w-full flex items-center justify-center
    `}
  >
    Shop the Collection
  </a>
</div>

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className={`
          bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4
          ${bebasNeue.className}
        `}
      >
        More
      </a>

      {/* Brand logos */}
      <div className="flex space-x-4 mt-4">

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
        <a href="https://www.instagram.com/n9nelifes.clng/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaInstagram size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaFacebook size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FaTwitter size={30} />
        </a>
      </div>
    </main>
  );
}
