import { Header } from "@widgets/0-header";
import { Button } from '@shared/ui';
import { CopyString } from "@shared/components";
import { main_image } from "@shared/assets/lore";
import { RaceTrack } from "@widgets/race_track";
import { lore } from "@shared/content";

const copyStringContent = "0123456789"
const raceTrackContent = "message"

const TitleSection = () => (
    <section className="relative bg-gray-500 w-full overflow-hidden">
        <Header />
        <div className="grid md:grid-cols-2 gap-8 mx-auto max-w-7xl min-h-[calc(100vh-80px)] px-4">
            <div className="relative order-2 md:order-1 flex items-center">
                <img 
                    src={main_image} 
                    alt="main-image" 
                    className="w-full h-auto max-h-[80vh] md:pr-12 object-contain"
                />
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2 space-y-8">
                <h1 className="space-y-2">
                    <p className="text-black text-2xl md:text-4xl font-bold">${lore.MEME_NAME}</p>
                    <p className="text-white">{['this', 'is', 'text', 'here'].map((text, i) => (
                        <span key={i} className="block">{text}</span>
                    ))}</p>
                </h1>
                <div className="flex flex-col items-start space-y-6">
                    <a href="" 
                       target="_blank" 
                       className="w-full md:w-auto">
                        <Button 
                            className="w-full md:w-auto hover:bg-black/90 px-8 py-4 rounded-full font-bold text-white text-xl transition-colors">
                                BUY ${lore.MEME_NAME}
                        </Button>
                    </a>
                    <div className="w-full md:w-auto space-y-2">
                        <p className="font-semibold text-sm">
                            ${lore.MEME_NAME} CA:
                        </p>
                        <CopyString content={copyStringContent} />
                    </div>
                </div>
            </div>
        </div>
        <RaceTrack text={raceTrackContent} />
    </section>
)

export { TitleSection };