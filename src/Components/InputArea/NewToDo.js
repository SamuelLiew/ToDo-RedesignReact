import './NewToDo.css'
import InputArea from './InputArea'
const NewToDo = (props) => {
    const addToDoHandler = toDoData =>{
        props.onAdd(toDoData);
    }
    return (
        <InputArea onAddToDo = {addToDoHandler}/>
    )
}

export default NewToDo;