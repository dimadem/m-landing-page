import { useState, useCallback } from "react"
import { Button, TooltipProvider } from "@shared/ui"
import { Tooltip, TooltipContent, TooltipTrigger } from "@shared/ui"
import { Copy, Check } from "lucide-react"

interface CopyStringProps {
  content: string
}

const CopyString = ({ content }: CopyStringProps) => {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = useCallback(async () => {
        try {
            // Сначала пробуем использовать Clipboard API
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(content);
                setCopied(true);
            } else {
                // Fallback для случаев, когда Clipboard API недоступен
                const textArea = document.createElement("textarea");
                textArea.value = content;
                
                // Делаем элемент невидимым
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                document.body.appendChild(textArea);
                
                textArea.focus();
                textArea.select();

                try {
                    document.execCommand('copy');
                    setCopied(true);
                } catch (err) {
                    console.error('Fallback: Не удалось скопировать текст', err);
                }

                document.body.removeChild(textArea);
            }
        } catch (err) {
            console.error('Copy to clipboard', err);
        }

        setTimeout(() => setCopied(false), 2000);
    }, [content]);

    return (
        <TooltipProvider>
            <div className="flex items-center gap-2 bg-orange-500 rounded-3xl w-fit overflow-hidden">
                    <code className={!copied ? "blur-sm mx-4 font-mono text-sm" : "text-sm mx-4 font-mono"}>{content}</code>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button 
                                className="bg-black px-6 rounded-none w-4 text-white aspect-square"
                                onClick={copyToClipboard}
                                >
                                    {copied ? (
                                        <Check size={40}/>
                                    ) : (
                                        <Copy size={40} />
                                    )}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            {copied ? "Copy!" : "Copy to clipboard"}
                        </TooltipContent>
                    </Tooltip>
            </div>
        </TooltipProvider>
    )
}

export { CopyString }