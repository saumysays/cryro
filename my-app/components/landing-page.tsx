'use client'

import Image from 'next/image'

export function LandingPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-20%20at%203.36.52%E2%80%AFPM-lchmFl19SEsDCZqoQuphcaipfwGtBP.png"
        alt="Bustling street scene at sunset"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-between py-12 text-white px-4">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Union-cDvU8qfP5n3NCnQcaZJZC3UwAy14pe.png"
            alt="Cyro Studios Logo"
            width={32}
            height={32}
          />
        </div>
        
        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-8xl font-bold mb-4 leading-none">Cyro Studios</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A CreativeStudio company. - We creating visual fun contents
            for web3 reader providing the connection with future.
          </p>
        </div>
        
        {/* Coming Soon */}
        <div className="text-xl">
          Coming Soon
        </div>
      </div>
    </div>
  )
}