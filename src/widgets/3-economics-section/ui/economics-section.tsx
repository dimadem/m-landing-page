import { square as item, square as economics_bg } from "@shared/assets/lore";


const listItems = [
    { title: "10% OF THE SUPPLY WILL BE BOUGHT BACK AND BURNED" },
    { title: "EVERY TRANSACTION IS AS SMOOTH AS ONE-LINERS" },
    { title: "THE SUPPLY WILL BE BURNED"},
];

const EconomicsSecion = () => (
        <section className="relative -z-20 bg-black w-full h-fit overflow-hidden">
            <div className="flex flex-col space-y-12 md:space-y-32 mx-auto px-4 pt-12 md:pt-64 pb-12 md:pb-0 max-w-7xl h-fit">
                <h2 className="text-center text-white">
                    ECONOMICS
                </h2>
                <ul className="z-0 gap-8 md:gap-12 grid mx-auto max-w-3xl">
                    {listItems.map((item, index) => (
                        <li key={index} className="relative bg-gray-800 px-6 md:px-8 py-4 md:py-6 font-bold text-center text-white">
                            <p className="text-lg md:text-4xl">
                                {item.title}
                            </p>
                        </li>
                    ))}
                </ul>
                <div className="md:block relative -z-10 hidden w-full h-[80svh]">
                        <img 
                            src={economics_bg}
                            alt="economics-background"  
                            style={{
                                objectFit: 'contain',
                                width: '100%',
                                height: 'auto'
                            }}
                            className="bottom-0 left-1/2 -z-20 absolute w-screen -translate-x-1/2" />
                        <img 
                            src={item}
                            alt="economics-image"  
                            style={{
                                objectFit: 'contain',
                                width: '70%',
                                height: '70%'
                            }}
                            className="bottom-0 left-1/2 -z-10 absolute invert -translate-x-1/2"/>
                </div>
            </div>
        </section>
    );

export { EconomicsSecion };