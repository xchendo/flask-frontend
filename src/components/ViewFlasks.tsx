import React from 'react';

// TODO: When we are actually making API Requests, refactor this class to a function
// and replace the componentDidMount method with a useEffect hook
class ViewFlasks extends React.Component <ViewFlaskProps, ViewFlaskState> {
    constructor(props: ViewFlaskProps) {
        super(props);

        this.state = {
            flasks: []
        };
    }

    componentDidMount() {
        this.setState({
            flasks: [
                {
                    id: 1,
                    title: 'Wash Car',
                    time: 3600,
                },
                {
                    id: 2,
                    title: 'Work on Flask App',
                    time: (3600*4),
                }
            ]
        });
    }

   

    render() {
        const flasks = this.state.flasks;

        return <div>
            {
                flasks.length > 0 ? 
                    <table className='w-full'>
                       <thead>
                            <tr className='flex justify-between'>
                                <th>Task</th>
                                <th>Total Time (HH:ss)</th>
                            </tr>
                       </thead>
                       <tbody>
                        {
                            flasks.map((flask) => {
                                return (
                                    <tr key={flask.id} className='flex justify-between border-b border-black mb-2'>
                                        <td>{flask.title}</td>
                                        <td>{flask.time}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    : <span>Nothing to see here folks</span> 
            }
        </div>
    }
}

interface ViewFlaskProps {};

interface Flask {
    id: number,
    title: string,
    time: number,
}

interface ViewFlaskState {
    flasks: ReadonlyArray<Flask>,
}

export default ViewFlasks;