import Image from 'next/image'

export default function Component() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <Image
        src="/bg.png"
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
            src="/Union.png"
            alt="Cyro Studios Logo"
            width={32}
            height={32}
          />
        </div>
        
        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-[10rem] font-bold mb-4 leading-none">Cyro Studios</h1>
        <p className="text-lg max-w-2xl mx-auto text-center">
  A CreativeStudio company. - We creating visual fun contents<br />
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