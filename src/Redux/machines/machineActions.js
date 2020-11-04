import { SET_MACHINE } from "./machineConstants";
import Axios from 'axios'

export const fetchMachines = () => async dispatch => {
    try {
        var machines = [];
         await Axios.get('http://localhost:8080/machines')
        .then(res => res.data.forEach(element => {
            machines.push(element)
        }));
        // console.log(machines)
        await dispatch ({
            type : SET_MACHINE,
            payload : 
                {machines : machines}
            
        })
    }
    catch(error){
        console.log(error)
    }
}

export const editMachine  = (machineObj)  => async dispatch => {
    // console.log(machineObj)
    try {
        await Axios.put(`http://localhost:8080/machines/${machineObj.id}`, machineObj)
    .then(res => res.data)
    } catch (error) {
        console.log(error)
    }
    
}