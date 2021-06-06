import "./InputArea.css";
import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

const InputArea = (props) => {
  const [ToDo, updateToDo] = useState("");
  const [ImgLink, updateImgLink] = useState("");
  const [Time, updateTime] = useState("");
  const [VidLink, updateVidLink] = useState("");
  const [Advanced, updateAdvanced] = useState(false);

  const vidLinkHandler = (e) => {
    updateVidLink(e.target.value);
  };

  const imgLinkHandler = (e) => {
    updateImgLink(e.target.value);
  };

  const toDoHandler = (e) => {
    updateToDo(e.target.value);
  };

  const timeHandler = (e) => {
    updateTime(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const toDoData = {
      Key: Math.random(),
      Text: ToDo,
      Image: ImgLink,
      Time: Time,
      Video: VidLink,
    };

    updateTime("");
    updateToDo("");
    updateVidLink("");
    updateImgLink("");

    props.onAddToDo(toDoData);
  };

  const advancedHandler = () => {
    Advanced === true ? updateAdvanced(false) : updateAdvanced(true);
  };

  const AdvancedInput = (
    <div>
      <div className="Container">
        <label className="Label">Time</label>
        <input
          type="time"
          value={Time}
          onChange={timeHandler}
          className="Input"
        ></input>
      </div>
      <div className="Container">
        <label className="Label">Image</label>
        <input
          type="text"
          value={ImgLink}
          onChange={imgLinkHandler}
          className="Input"
        ></input>
      </div>

      <div className="Container">
        <label className="Label">Video</label>
        <input
          type="text"
          value={VidLink}
          onChange={vidLinkHandler}
          className="Input"
        ></input>
      </div>
    </div>
  );

  return (
    <div className="formContainer" onDoubleClick={advancedHandler}>
      <form onSubmit={submitHandler}>
        <div className="toDoContainer">
          <label className="toDoLabel">To Do</label>
          <input
            className="toDoInput"
            type="text"
            value={ToDo}
            onChange={toDoHandler}
            maxlength={30}
            required
          ></input>
        </div>
        {Advanced && AdvancedInput}
        <div className="submitContainer">
          <button className="submitButton" type="submit">
            <IoAddOutline />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputArea;
