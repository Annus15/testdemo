import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editMachine } from '../Redux/machines/machineActions'
export class EditForm extends Component {

    state = {
        id: "",
        name: this.props.initialValues ? this.props.initialValues.name : " ",
        ip_address: "",
        health: ""
    }
    handleFormInput = (e) => {

        var { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        var { name} = this.state;
        var { initialValues, editMachine } = this.props;
        // console.log(initialValues)
        // console.log(name)
        var machineObj = {
            id: initialValues.id,
            name,
        }

        if (initialValues) {
            editMachine(machineObj)
            // console.log(machineObj)

        }
        else {
            console.log("error")
        }
    }
    render() {
        var { name } = this.state;
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={this.handleFormInput}
                    >
                    </input>
                    <button type="submit">E D I T</button>
                </form>
            </div>
        )
    }
}
var actions = {
    editMachine,
}
export default connect(null, actions)(EditForm)
