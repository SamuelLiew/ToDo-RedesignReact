import "./ToDoText.css";

const ToDoText = (props) => {
  return (
    <div className="text" >
      {props.text}
    </div>
  );
};

export default ToDoText;
