import NewToDo from "./Components/InputArea/NewToDo";
import ToDoArea from "./Components/ToDoArea/ToDoArea";
import React, { useState } from "react";
import Card from "./Components/UI/Card";
import Help from "./Components/Help/Help";
const dummy = [
  {
    Key: "e1",
    Time: "08:40",
    Text: "Finish the dishes",
    Image: "Nothing Lol",
    Video: "https://www.youtube.com/watch?v=UkgoSOSGrx4",
  },
  {
    Key: "e2",
    Time: "17:20",
    Text: "Finish React Component",
    Image:
      "https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg",
    Video: "https://www.youtube.com/watch?v=UkgoSOSGrx4",
  },
];

const App = () => {
  const [ToDoList, updateToDoList] = useState(dummy);
  const [HelpRequest, updateHelp] = useState(false);
  const addHandler = (addToDo) => {
    updateToDoList((prevToDoList) => {
      return [...prevToDoList, addToDo];
    });
  };

  const deleteHandler = (key) => {
    var elementPos = ToDoList.map(function (x) {
      return x.Key;
    }).indexOf(key);
    var objectFound = ToDoList[elementPos];
    ToDoList.splice(objectFound, 1);
    updateToDoList(ToDoList);
  };

  const helpRequestHandler = () => {updateHelp(true)};
  const exitHandler = () => {updateHelp(false)}
  const helpCard = (
    <Card>
      <Help onExit={exitHandler}/>
    </Card>
  );
  const theRest = (
    <div>
      <Card>
        <NewToDo onAdd={addHandler} onHelpRequest={helpRequestHandler} />
      </Card>
      <Card>
        <ToDoArea list={ToDoList} onDeleteByKey={deleteHandler} />
      </Card>
    </div>
    
  )
  return (
    <div>
      {HelpRequest && helpCard}
      {!HelpRequest && theRest}
    </div>
  );
};

export default App;
