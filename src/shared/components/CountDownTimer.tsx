import { useEffect, useState } from "react";
import { Badge } from "@shared/ui";

interface TimeBoxProps {
    value: string;
    label: string;
}
  
const TimeBox = ({ value, label }: TimeBoxProps) => {
    return (
        <div className="relative flex flex-col items-center">
        <div className={`flex justify-center items-center bg-black opacity-20 p-4 
            ${label === 'DAYS' ? 'rounded-l-full' : 'rounded-none'}
            ${label === 'SECONDS' ? 'rounded-r-full' : 'rounded-none'}
            w-24`}>
            <span className="font-extrabold font-galano text-6xl text-white">{value}</span>
        </div>
        <Badge 
            variant="outline" 
            className="bottom-[-8px] absolute bg-white rounded-xl text-[0.5rem]"
        >
            {label}
        </Badge>
    </div>
    );
};
  

interface TimeLeft {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}
  
interface TimerProps {
    launchDate: string;
}
  
const CountDownTimer = ({ launchDate }: TimerProps) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
        });

    useEffect(() => {
        const getTimeLeft = (endDate: string) => {
            const difference = new Date(endDate).getTime() - new Date().getTime();

            if (difference <= 0) {
                return {
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00"
                };
            }
    
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
    
            return {
                days: days < 10 ? `0${days}` : days.toString(),
                hours: hours < 10 ? `0${hours}` : hours.toString(),
                minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
                seconds: seconds < 10 ? `0${seconds}` : seconds.toString()
                };
        }
  
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(launchDate));
        }, 1000);
  
        return () => clearInterval(timer);
    }, [launchDate]);
  
    return (
        <div className="flex gap-1 mx-auto p-2 w-fit md:scale-110 scale-90">
            <TimeBox value={timeLeft.days} label="DAYS" />
            <TimeBox value={timeLeft.hours} label="HOURS" />
            <TimeBox value={timeLeft.minutes} label="MINUTES" />
            <TimeBox value={timeLeft.seconds} label="SECONDS" />
      </div>
    );
  };

  export { CountDownTimer };
  