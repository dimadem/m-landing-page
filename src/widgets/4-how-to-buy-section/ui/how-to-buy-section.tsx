import { CopyString } from "@shared/components"
import { solana_bg } from "@shared/assets/solana"
import { web3Services } from "@shared/content/web3Services"
import { lore } from "@shared/content"

const copyStringContent = "0123456789"

const ColorfulLink = ({url, children}: {url: string, children: React.ReactNode}) => 
{
    return (
        <a href={url} target="_blank" className="text-red-500 hover:text-red-600 underline transition-colors">
            {children}
        </a>
    )
}

const HowToBuySection = () => {
    return(
        <section className="relative bg-white w-full min-h-screen overflow-hidden">
            <div className="container mx-auto px-4 py-12 md:py-24 max-w-7xl relative z-10">
                <h2 className="mb-12 md:mb-24">
                    <p className="font-bold">HOW TO BUY</p>
                    <p>
                        ${lore.MEME_NAME}
                        <span className="text-black">?</span>
                    </p>
                </h2>
                <ul className='space-y-4 font-bold text-xl md:text-3xl list-disc list-inside marker:text-red-500'>
                    <li className="leading-relaxed">
                        Register on {'\u2009'}
                        <ColorfulLink url={web3Services.binance.ref}>Binance</ColorfulLink>, {'\u2009'}
                        <ColorfulLink url={web3Services.bingx.ref}>BingX</ColorfulLink>, {'\u2009'}
                        <ColorfulLink url={web3Services.bybit.ref}>BYBIT</ColorfulLink> 
                        {'\u2009'}or another CEX
                    </li>
                    <li>Buy SOL</li>
                    <li className="leading-relaxed">
                        Send SOL to your {'\u2009'}
                        <ColorfulLink url={web3Services.phantom_wallet.url}>Phantom Wallet</ColorfulLink> 
                        {'\u2009'}or {'\u2009'}
                        <ColorfulLink url={web3Services.bullx.ref}>BULLX</ColorfulLink>, {'\u2009'}
                        <ColorfulLink url={web3Services.photon.ref}>PHOTON</ColorfulLink>
                    </li>
                    <li>Copy the CA, insert to PHOTON / BULLX</li>
                    <li>Buy ${lore.MEME_NAME}</li>
                    <li>Enjoy & Stay active in the community!</li>
                </ul>
                
                <div className="mt-12 space-y-2">
                    <p className="font-semibold text-sm">
                        ${lore.MEME_NAME} CA:
                    </p>
                    <CopyString content={copyStringContent} />
                </div>
            </div>
            <img 
                src={solana_bg}
                alt="Solana background"  
                className="absolute right-0 bottom-0 w-auto h-full object-contain"
            />
        </section>
    )
}

export { HowToBuySection };