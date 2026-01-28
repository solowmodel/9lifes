'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import { FaInstagram, FaFacebook, FaTwitter, FaTimes } from 'react-icons/fa';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Home() {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('form-name', 'subscribe');
    formData.append('email', email);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      setEmail('');
      setShowPopup(true);
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative">
      
      {/* --- BACKGROUND GIF LAYER --- */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <Image
          src="/snow.gif"
          alt="Background Animation"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-30"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      </div>

      {/* Moved Hours to Top */}
      <div className="fixed top-0 left-0 right-0 text-center p-2 z-10">
        <p className="text-xs text-gray-300 font-mono">
          COMING SOON 
        </p>
      </div>

      <div className="mb-8 mt-12">
        <Image
          src="/9star_white.png"
          alt="Spin Records logo"
          width={200}
          height={100}
        />
      </div>
      <div className="text-center mb-2">
        <p className={bebasNeue.className} style={{ fontSize: '20px', color: 'white' }}>
        N9NE.LIVES CLOTHING. Premium Streetwear.
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
        
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          {/* Netlify Hidden Input */}
          <input type="hidden" name="form-name" value="subscribe" />

          <input 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER EMAIL" 
            required
            className="w-full bg-transparent border border-gray-500 text-white placeholder-gray-500 px-4 py-2 rounded focus:outline-none focus:border-white text-center sm:text-left font-mono text-sm"
          />
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`
              bg-transparent border border-white text-white
              hover:bg-white hover:text-black transition-colors
              px-6 py-2 rounded
              ${bebasNeue.className} tracking-wide
              disabled:opacity-50
            `}
          >
            {isSubmitting ? '...' : 'SUBSCRIBE'}
          </button>
        </form>
      </div>

      {/* --- THANK YOU POPUP --- */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white text-black p-8 rounded-lg max-w-sm w-full text-center relative border border-gray-200 shadow-xl">
            
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black transition-colors"
            >
              <FaTimes size={18} />
            </button>

            {/* Popup Logo */}
            <div className="flex justify-center mb-4">
                <Image
                  src="/9star_blk.png"
                  alt="9Star Logo"
                  width={60}
                  height={30}
                  className="object-contain"
                />
            </div>

            <h3 className={`${bebasNeue.className} text-3xl mb-2`}>WELCOME TO THE FAMILY</h3>
            
            {/* --- FIX IS HERE: Used &apos; instead of ' --- */}
            <p className="font-mono text-sm text-gray-600 mb-6">
              You&apos;re on the list. We&apos;ll hit you up when the next drop is live.
            </p>
            
            <button 
              onClick={() => setShowPopup(false)}
              className={`
                bg-black text-white px-6 py-2 w-full
                hover:opacity-80 transition-opacity
                ${bebasNeue.className} tracking-wide text-lg
              `}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      {/* Brand logos (No Link, Opacity Added) */}
      <div className="flex space-x-4 mt-8">
        <div style={{ width: '40px' }}>
          <Image
            src="/9lb_white.png"
            alt="rawp logo"
            width={40}
            height={80}
            className="opacity-50"
          />
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-8">
        <a href="https://www.instagram.com/n9nelifes.clo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FaInstagram size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FaFacebook size={30} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FaTwitter size={30} />
        </a>
      </div>

      {/* --- LOCATION FOOTER --- */}
      <div className="mt-8 mb-8 text-center">
        <p className={`${bebasNeue.className} text-sm text-gray-500 tracking-widest`}>
          LOS ANGELES, CALIFORNIA
        </p>
      </div>

    </main>
  );
}