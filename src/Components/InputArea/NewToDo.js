import './NewToDo.css'
import InputArea from './InputArea'
const NewToDo = (props) => {
    const addToDoHandler = toDoData =>{
        props.onAdd(toDoData);
    }
    const helpRequestHandler = helpRequest => {
        props.onHelpRequest(helpRequest)
    }
    return (
        <InputArea onAddToDo = {addToDoHandler} onHelpRequest={helpRequestHandler}/>
    )
}

export default NewToDo;