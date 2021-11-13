import { useEffect, useState } from "react";
import Timer from "./Timer";

function CreateFlask() {

    // the hooks me boyo

    // start or stop the stopwatch
    const [timerStarted, setTimer] = useState<boolean>(false);

    // store the amount of time that has passed in seconds
    const [timeElapsedInSeconds, setTimeElapsed] = useState<number>(0);

    // form values
    const [task, setTask] = useState<string>('');
    const [notes, setNotes] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        // stop the form from submitting
        e.preventDefault();

        // stop the timer
        setTimer(false);

        // record this session in the database
        saveFlask();
    }

    // start or stop the timer
    const handlePause = () => {
        setTimer(!timerStarted);
    }

    // useEffect also functions as a componentDidMount, so as long as the setInterval
    // is running we should keep adding a second to the timer
    useEffect(() => {
        // TODO: <Timer> | null isn't workng.. how to type for either the interval or null?
        // we're going to store a setInterval in here when the timer is started
        let timer: any = null;

        if (timerStarted) {
            timer = setInterval(() => {
                setTimeElapsed(timeElapsedInSeconds + 1);
            }, 1000);
        } else if (!timerStarted) {
            clearInterval(timer);
        } 
        return () => clearInterval(timer);
    }, [timerStarted, timeElapsedInSeconds]);

    // compile the form data and submit to the backend
    const saveFlask = () => {
        const payload = {
            task,
            notes,
            time: timeElapsedInSeconds
        };
        console.log('Todo: Hook up to backend');
        console.log(payload);
    }

    // red for stop, green for start
    const buttonColor = timerStarted ? 'bg-red-300' : 'bg-green-300';
    
    return (
        <>
            <Timer time={timeElapsedInSeconds}/>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="text-xl">Task</label>    
                    <input className="border py-2 px-3 mb-5" type="text"
                        onChange={(e) => setTask(e.target.value)}
                    />
                <label className="text-xl">Notes</label>
                    <input className="border py-2 px-3 mb-5" type="text"
                        onChange={(e) => setNotes(e.target.value)}
                    />
                <button type="button" className={`${buttonColor} py-2`} onClick={handlePause}>
                    {!timerStarted ? "Start" : "Pause"}
                </button>
                {/* Don't allow the saving of an empty session */}
                {timeElapsedInSeconds > 0 && <button type="submit" className="py-2">Finish Session</button> }
            </form>
        </>
    );
}

export default CreateFlask;