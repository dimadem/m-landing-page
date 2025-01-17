import { x, telegram, dex } from "@shared/assets/socials"
import { frame as logo} from "@shared/assets/lore"
import { socials } from "@shared/content";

const Header = () => {
    const socialButtonClass = "flex justify-center items-center bg-black hover:opacity-80 rounded-full w-9 aspect-square hover:invert transition-opacity";
    const socialIconSize = 18;

    const socialLinks = [
        { href: socials.dex.url, icon: dex, alt: 'dex' },
        { href: socials.telegram.url, icon: telegram, alt: 'telegram' },
        { href: socials.x.url, icon: x, alt: 'x' }
    ];

    return (
        <header className="container mx-auto px-6 pt-12">
            <div className="flex justify-between items-center max-w-7xl">
                <a href="/" className="flex">
                    <img src={logo} alt="logo" width={36} height={36} className="rounded-full" />
                </a>
                <div className="flex items-center gap-4">
                    {socialLinks.map(({ href, icon, alt }) => (
                        <a key={alt} 
                           href={href}
                           target="_blank" 
                           rel="noopener noreferrer"
                           className={socialButtonClass}>
                            <img src={icon} 
                                 alt={alt}
                                 width={socialIconSize} 
                                 height={socialIconSize} />
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}

export { Header };