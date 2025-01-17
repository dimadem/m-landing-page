import { CountDownTimer } from "@shared/components";
import { Button } from "@shared/ui";
import { square } from "@shared/assets/lore";
import { countDown } from "@shared/content/countDown";
import { socials } from "@shared/content/socials";
import { lore } from "@shared/content";


const RoadMapSection = () => (
    <section className="relative py-4 md:py-12 min-w-full min-h-full">
        <div className="container mx-auto max-w-4xl space-y-12">
            {/* Countdown Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-start">
                <h2 className="mb-6">
                    <p>{lore.MEME_NAME} PARTY</p>
                    <p>COUNTDOWN</p>
                </h2>
                <div className="mb-8">
                    <CountDownTimer launchDate={countDown} />
                </div>
                <a href={socials.x.url} target="_blank">
                    <Button 
                        size="lg" 
                        className="transition-colors hover:bg-black/90 px-5 py-6 rounded-full font-bold text-white text-xl">
                        STREAM
                    </Button>
                </a>
            </div>
            
            {/* Roadmap Section */}
            <div className="relative z-10">
                <h2 className="mb-8">ROADMAP</h2>
                <ul className="space-y-4 font-bold text-xl md:text-3xl list-disc marker:text-pink-500">
                    <li>LAUNCH {lore.MEME_NAME} PARTIES</li>
                    <li>{lore.MEME_NAME} AI Agent</li>
                    <li>NFT</li>
                    <li className="space-y-2">
                        What are you looking at?
                        <p className="ml-4 md:ml-6">Go buy ${lore.MEME_NAME}!</p>
                    </li>
                </ul>
            </div>
        </div>

        <img 
            src={square} 
            alt="roadmap-image"  
            className="hidden md:block absolute right-0 bottom-0 w-1/2 h-auto object-contain"
        />
    </section>
)

export { RoadMapSection };