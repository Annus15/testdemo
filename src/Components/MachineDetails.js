import React from 'react'
import ProgressBar from './progress-bar';

const MachineDetails = (props) => {
    var { found } = props;
    // console.log(found)
    return (
        <div>
            <h1>{found.name}</h1>
            <h3>{found.ip_address}</h3>

            <ProgressBar
            
                bgcolor={found.health < 75 ? 
                    found.health <50 ? "#D9534F" : 
                    found.health >= 0 ? "#f0ad4e" : null : "#5cb85c"}
                completed={found.health}
                id={found.id} />

        </div>
    )
}

export default MachineDetails
