const RaceTrack = ({text}: {text: string}) => {
    return (
        <div className="relative bg-black whitespace-nowrap overflow-hidden">
            <div className="flex my-1 text-white animate-race-track-back">
                {
                    Array.from({ length: 21 }, (_, index) => (
                        <div key={index} className='flex justify-center'>
                            <span>⚪️</span>
                            <span className='mx-2'>{text}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { RaceTrack };