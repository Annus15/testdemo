import React from 'react'
import CustomizedTables from './Table'

const MachineListItems = (props) => {
    var { machines } = props
    // console.log(machines)
    return (
        <div>
            {
                <div>
                    <CustomizedTables machines={machines} />
                </div>
            }
        </div>
    )
}

export default MachineListItems
