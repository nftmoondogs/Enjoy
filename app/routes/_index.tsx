import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Command } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { ThemeToggle } from "./resources.theme-toggle";
import { Hero3DCard } from "~/components/hero-3d-card";
import { Card2 } from "~/components/card2";
import { Card3 } from "~/components/card3";
import { SparklesCore } from "~/components/ui/sparkles";
import { WavyBackground } from "~/components/ui/wavy-background"; 
import { TextGenerateEffect } from "~/components/ui/text-generate-effect";
import { LampDemo } from "~/components/ui/lamp";
import { CardStack } from "~/components/ui/card-stack"; 

import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "~/components/ui/text-reveal-card";
import { AnimatedTooltipPreview } from "~/components/animated-preview";
import { HeroParallax } from "~/components/ui/hero-parallax";  // Corrected import path
import { AnimatedPinDemo } from "~/components/animated-3d-pin";


const stackCards = [
  {
    id: 1,

    content: (
<div>
  <h3 className="text-lg font-bold pb-8">Sup! Dawg👋</h3>

  <ul className="list-disc list-inside text-left">

    <li>See for yourself Dev is a chad</li>
    <li>The Art is sick and memeable af</li>
    <li>Dexscreener, Coingecko requested</li>
    <li>Active Tweets and Spaces</li>
    <li>Foot is Pink🤯🩷</li>
  </ul>
</div>

    )
  }
];
// Sample product data for HeroParallax
const sampleProducts = [
  { title: "", link: "/product-1", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeib4weulvi4gycy66ej3v6a3dhzuey7cquufskqfosz6p5dmmtyb6m&w=1080&q=75" },
  { title: "", link: "/product-2", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeiga6njhe4jjrm5gpjamqtu2oniob3ey323hw64tgaxgyg3qaleua4&w=1080&q=75" },
  { title: "", link: "/product-3", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeid4o5agkp37qp6mvdcqm4c7wtxzwlyjzl4kgcozwnmngcfvtfqssq&w=1080&q=75" },
  { title: "", link: "/product-4", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifs463zuw4bm2fpccl4iekg3yjoi47rr4uvwonufejfr3t26m3rw4&w=1080&q=75" },
  { title: "", link: "/product-5", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeigzfal2jjxaq3dv3jrocaho3haxrga4nabojxbgvulqu47s2hyt3q&w=1080&q=75" },
  { title: "", link: "/product-6", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifx45up3wp7h436d5ea3rx2m5i3cvsg6c7tdbcri7amd42fhjivn4&w=1080&q=75" },
  { title: "", link: "/product-7", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeicycgbnzzw2rq3i7pxxi2ditm6atgnv25ur7fpgw2fua542gvpfae&w=1080&q=75" },
  { title: "", link: "/product-8", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeih3vn5paki5kld4qu2hswa5mfx77oyxig5o3h3qpnuakdytdimr2y&w=1080&q=75" },
  { title: "", link: "/product-9", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeiay7jzp3tzkbj3glbi3zb7ui3c5jzrc7dnvpgpmkosehc5s4xka6e&w=1080&q=75" },
  { title: "", link: "/product-10", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeiamaf5lhzu4i5m3xngoqylt3fb67cheur2ggmmouvbfknrsau35de&w=1080&q=75" },
  { title: "", link: "/product-11", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifx45up3wp7h436d5ea3rx2m5i3cvsg6c7tdbcri7amd42fhjivn4&w=1080&q=75" },
  { title: "", link: "/product-12", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeicycgbnzzw2rq3i7pxxi2ditm6atgnv25ur7fpgw2fua542gvpfae&w=1080&q=75" },
  { title: "", link: "/product-13", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeih3vn5paki5kld4qu2hswa5mfx77oyxig5o3h3qpnuakdytdimr2y&w=1080&q=75" },
  { title: "", link: "/product-14", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeiay7jzp3tzkbj3glbi3zb7ui3c5jzrc7dnvpgpmkosehc5s4xka6e&w=1080&q=75" },
  { title: "", link: "/product-15", thumbnail: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeiamaf5lhzu4i5m3xngoqylt3fb67cheur2ggmmouvbfknrsau35de&w=1080&q=75" },
];

export default function Index() {
  return (
    <section className="w-full min-h-screen flex flex-col">
<nav className="flex items-center justify-between p-4 w-full">
  <Link to="/" className="flex items-center space-x-2">
    <img src="https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeib4weulvi4gycy66ej3v6a3dhzuey7cquufskqfosz6p5dmmtyb6m&w=1920&q=75" alt="Logo" className="h-20 w-20 mr-2"/> {/* Logo Image */}
    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter font-extrabold bg-gradient-to-r from-blue-800 via-blue-300 to-blue-50 text-transparent bg-clip-text bg-300% animate-gradient">$Enjoy</h1>
  </Link>
  <ThemeToggle />
  
</nav>








{/* <div className="flex-1 min-w-0">
    <CardStack
      items={stackCards}
      offset={30}
      scaleFactor={0.95}
    />
  </div>

  <div className="flex items-center justify-center space-x-4"> 
  <div className="flex items-center justify-center  w-full">
    <TextRevealCard
      text="Hover to reveal"
      revealText="Radium is coming!"
      className="cursor-pointer md:w-full"
    />
  </div>
</div> */}
  <div className="relative w-full flex flex-col items-center justify-center">
    <div className="flex items-center justify-center w-full z-10">
    <Card className="relative group overflow-hidden rounded-lg">

<button className="p-[3px] relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-300 rounded-lg" />
    <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-blue-600 hover:bg-transparent">
    <Link to="https://twitter.com/enjoysoltoken">
    Twitter
    </Link>
    </div>
  </button>

</Card>
<Card className="relative group overflow-hidden rounded-lg">

<button className="p-[3px] relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-300 rounded-lg" />
    <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-blue-600 hover:bg-transparent">
    <Link to="https://pump.fun/7M2s5jUqk3UYiYvYsRdeb4A2qDLPnvLHRi3xHVN9LrqA">
      Pump.Fun
    </Link>
    </div>
  </button>

</Card>
<Card className="relative group overflow-hidden rounded-lg">

<button className="p-[3px] relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-300 rounded-lg" />
    <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-blue-600 hover:bg-transparent">
    <Link to="https://t.me/enjoytoken">
    Telegram
    </Link>
    </div>
  </button>

</Card>
<WavyBackground className="absolute top-0 left-0 w-full h-full z-[-1]">

      <Card2 />
      <Hero3DCard />
      <Hero3DCard />
      <Card3 />
      

</WavyBackground>
</div>
  </div>
<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>

<h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-blue-600">
            The{" "}
            <span className="font-extrabold bg-gradient-to-r from-blue-800 via-blue-300 to-blue-50 text-transparent bg-clip-text bg-300% animate-gradient">
            $Enjoy
            </span>{" "}
            Fair Launch on {" "}
            <Link
              to="https://www.pump.fun/board"
              className="font-extrabold bg-gradient-to-r from-blue-800 via-blue-300 to-blue-50 text-transparent bg-clip-text bg-300% animate-gradient hover:text-emerald-500"
            >
              Pump.fun
            </Link>
          </h1>



  
          {/* <SparklesCore
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        particleColor="#FFC0CB"  // White particles
        particleDensity={10}     // Moderate density
        speed={3}                // Medium speed
        minSize={1}              // Minimum size of particles
        maxSize={3}              // Maximum size of particles
      /> */}
          </div>


          <div className="flex items-center justify-center  w-full ">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
        <TextGenerateEffect words={"Oh degen you have been working day and night this meme season, For me Just take a moment and enjoy and cherish your life ;D"} />
     
        </div>

          </div>

          <div className="flex items-center justify-center  w-full ">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">


          

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>

</div>



          </div>
          {/* <LampDemo />  */}
        </div>
        
<div className="flex items-center justify-between p-4 w-full">          <HeroParallax products={sampleProducts} />  {/* Full-width HeroParallax component */}</div>
    </section>
  );
}
