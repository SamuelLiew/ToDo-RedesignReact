import "./Help.css";
import React, { useState } from "react";
import { ImExit } from "react-icons/im";
import { GrPersonalComputer } from "react-icons/gr";
import { GoDeviceMobile } from "react-icons/go";

const Help = (props) => {
  const [PcOrMobile, updateState] = useState("");

  const PcHandler = () => {
    updateState(true);
  };
  const MobileHandler = () => {
    updateState(false);
  };
  const exitHandler = () => {
    props.onExit();
  };
  const prompt = (
    <div className="option-buttons">
      <button onClick={PcHandler}>
        <GrPersonalComputer />
      </button>
      <button onClick={MobileHandler}>
        <GoDeviceMobile />
      </button>
    </div>
  );

  const MobileContent = (
    <div className="container">
      <div className="exit-button">
        <button onClick={exitHandler}>
          <ImExit />
        </button>
      </div>
      <h2>Under Production</h2>
    </div>
  );

  const PcContent = (
    <div className="container">
      <div className="exit-button">
        <button onClick={exitHandler}>
          <ImExit />
        </button>
      </div>
      <h2>Double Click on the Darker area to access Advanced Controls</h2>
      <img
        src="https://i.ibb.co/QnWb79M/Input-Field.png"
        alt="Input Field"
      ></img>
      <h2>Click Once on the Darker Area below to expand and collapse</h2>
      <img
        src="https://i.ibb.co/GvPBcz4/Content-Field.png"
        alt="Content Field"
      ></img>
      <h2>
        These are the indicators, click on their general area to delete a task
      </h2>
      <img
        src="https://i.ibb.co/71CL8qz/Indicators.png"
        alt="Indicator Field"
      ></img>
      <h2>In the Advanced Controls, the only one required is the To Do</h2>
      <img
        src="https://i.ibb.co/p0tDGvZ/Advanced-Field.png"
        alt="Advanced Field"
      ></img>
      <h2>
        For Images, search up the image you like, right click on it and copy
        link
      </h2>
      <img
        src="https://i.ibb.co/qM6QK0W/Image-Demonstration.png"
        alt="Img Demo"
      ></img>
      <h2>
        For Video, search up on YouTube the video you desire and copy link
      </h2>
      <img
        src="https://i.ibb.co/km8wvt5/Video-Demonstration.png"
        alt="Vid Demo"
      ></img>
      <h2>
        After getting all the links that you desire, the input field looks like
        this
      </h2>
      <img
        src="https://i.ibb.co/LSCSb5C/Input-Example.jpg"
        alt="Input Demo"
      ></img>
      <h2>Clicking the Add Button will add a to do task as such</h2>
      <img
        src="https://i.ibb.co/nDLn31m/Results-Demonstration.png"
        alt="result Demo"
      ></img>
    </div>
  );
  return (
    <div>
      {PcOrMobile === "" ? prompt : ""}
      {PcOrMobile === true ? PcContent : ""}
      {PcOrMobile === false ? MobileContent : ""}

      
    </div>
  );
};

export default Help;
