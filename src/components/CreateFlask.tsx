import { useState } from "react";

function CreateFlask() {

    // the hooks me boy
    const [active, setActive] = useState<boolean>(false);
    const [task, setTask] = useState<string>('');
    const [notes, setNotes] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        // stop the form from submitting
        e. preventDefault();

        // update the state of the button
        setActive(!active);

        // make some sort of api request here at some point
    }

    // red for stop, green for start
    const buttonColor = active ? 'bg-red-300' : 'bg-green-300';
    
    return (
        <>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="text-xl">Task</label>    
                    <input className="border py-2 px-3 mb-5" type="text"
                        onChange={(e) => setTask(e.target.value)}
                    />
                <label className="text-xl">Notes</label>
                    <input className="border py-2 px-3 mb-5" type="text"
                        onChange={(e) => setNotes(e.target.value)}
                    />
                <button type="submit" className={`${buttonColor} py-2`}>
                    {active ? "Stop" : "Start"}
                </button>
            </form>
        </>
    );
}

export default CreateFlask;