import React from 'react'
import MachineListItems from './MachineListItems';

const MachineList = (props) => {
    var { machines } = props;
    // console.log(machines);
    return (
        <div>
            {
                machines.map(machines =>
                    <MachineListItems
                        key={machines.id}
                        machines={machines}
                    />
                )
            }
        </div>
    )
}

export default MachineList
