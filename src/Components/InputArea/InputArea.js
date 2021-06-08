import "./InputArea.css";
import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { BsQuestion } from "react-icons/bs";
const InputArea = (props) => {
  const [ToDo, updateToDo] = useState("");
  const [ImgLink, updateImgLink] = useState("");
  const [Time, updateTime] = useState("");
  const [VidLink, updateVidLink] = useState("");
  const [Advanced, updateAdvanced] = useState(false);
  const [isValid, updateIsValid] = useState(true)

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
    updateTime("");
    updateToDo("");
    updateVidLink("");
    updateImgLink("");

    if (ToDo.trim().length === 0) {
      updateIsValid(false)
      return;
    }
    updateIsValid(true)
    const toDoData = {
      Key: Math.random(),
      Text: ToDo,
      Image: ImgLink,
      Time: Time,
      Video: VidLink,
    };

    props.onAddToDo(toDoData);
  };

  const advancedHandler = () => {
    Advanced === true ? updateAdvanced(false) : updateAdvanced(true);
  };

  const helpHandler = () => {
    props.onHelpRequest("HELP");
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
            className={`toDoInput ${!isValid ? "invalid" : ""}`}
            type="text"
            value={ToDo}
            onChange={toDoHandler}
            maxLength={30}
            required
          ></input>
        </div>
        {Advanced && AdvancedInput}
        <div className="submitContainer">
          <div className="supporter"></div>
          <div className="submitButtonContainer">
            <button className="submitButton" type="submit">
              <IoAddOutline />
            </button>
          </div>
          <div className="supporter">
            <button className="questionButton" onClick={helpHandler}>
              <BsQuestion />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputArea;
