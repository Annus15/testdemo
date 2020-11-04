import React, { Component } from 'react'
import { connect } from 'react-redux'
import MachineDetails from './Components/MachineDetails'
import { withRouter } from 'react-router-dom';
import EditForm from './Components/EditForm';

class MachinesDetail extends Component {

    render() {
        var { match: { params: { machineId } } } = this.props;
        // console.log(machineId)
        var { machines } = this.props;
        var found = machines.find(element => element.id === machineId);
        // console.log(found)
        return (
            <div>
                <MachineDetails found={found} />
                <EditForm initialValues={found} />
            </div>
        )
    }

}
var mapStateToProps = (state) => ({
    machines: state.machines
})
export default connect(mapStateToProps, null)(withRouter(MachinesDetail))
