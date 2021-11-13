// TODO: separate seconds into minutes and hours
// hh:mm:ss
function Timer({time}: TimerProps) {
    return (
        <div className='flex justify-center'>
            <span className='text-5xl'>{time}</span>
        </div>
    )
}

interface TimerProps {
    time: number
};

export default Timer;