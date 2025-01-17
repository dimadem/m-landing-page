import { x, telegram } from "@shared/assets/socials";
import { frame as logo } from "@shared/assets/lore";
import { socials } from "@shared/content/socials";
import { lore } from "@shared/content";

const Footer = () => (
    <footer className="bg-black px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          {/* Social Links */}
          <div className="flex items-center gap-8 md:gap-12">
            {/* Общий класс для соц. иконок */}
            <a 
              href={socials.x.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="social-link">
              <img 
                src={x} 
                alt="Follow us on X" 
                width={32} 
                height={32}
                className="w-8 md:w-10 h-8 md:h-10" />
            </a>
            <span>⚪️</span>
            <img 
              src={logo}
              alt="Logo" 
              width={80} 
              height={80}
              className="w-16 md:w-20 h-16 md:h-20 invert" />
            <span>⚪️</span>
            <a 
              href={socials.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link">
                <img 
                  src={telegram}
                  alt="Join our Telegram" 
                  width={32} 
                  height={32}
                  className="w-8 md:w-10 h-8 md:h-10" />
            </a>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="text-center space-y-4">
            <p className="text-sm md:text-base">
              © 2024 BY {lore.MEME_NAME}. ALL RIGHTS RESERVED
            </p>
            <p className="mx-auto max-w-2xl text-xs md:text-sm text-gray-400 leading-relaxed">
              ${lore.MEME_NAME} IS A MEME WITH NO INTRINSIC VALUE OR EXPECTATION OF FINANCIAL RETURN. 
              THE COIN IS COMPLETELY USELESS AND FOR ENTERTAINMENT PURPOSES ONLY
            </p>
          </div>
        </div>
      </div>
    </footer>
);

export { Footer };