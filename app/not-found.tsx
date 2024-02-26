import { BackgroundBeams } from "@/components/ui/background-beams";

import sadLogo from '@/assets/svg/sad.png';
import Image from 'next/image'

export default function NotFound() {
    return(
        <>
    <div className="h-screen bg-neutral-100 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 text-center font-sans font-bold">
            In progress
        </h1>
        <p></p>
        <p className="text-neutral-900 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to the Site. 
          This section is still in progress but we are working on it
        </p>
        <Image
        src={sadLogo}
        width={100}
        height={100}
        alt="Picture of the author"
        className="m-auto"
        />

      </div>
      <BackgroundBeams />
    </div>
            
        </>
    );
}