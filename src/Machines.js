import React, { Component } from 'react'

import { connect } from 'react-redux'
import {fetchMachines} from './Redux/machines/machineActions'
import MachineList from './Components/MachineList';

class Machines extends Component {
	componentDidMount() {
		var {fetchMachines} = this.props;
		fetchMachines();
		}
		
	render() {
		 var {machines} = this.props
		// console.log(machines.forEach(element => {
		// 	console.log(element)	
		// }));
		return (
			<div>
			<MachineList machines = {machines}/>
			</div>
		)
	}
}
var mapStateToProps = (state) => ({
	machines : state.machines,
})
var actions = {
	fetchMachines,
}
export default connect (mapStateToProps, actions) (Machines)
