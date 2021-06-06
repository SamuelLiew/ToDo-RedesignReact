import Text from "./ToDoText";
import Time from "./DueTime";
import Indicator from "./ImgOrVidIndicator";
import "./ToDoItem.css";
import React, { useState } from "react";

const ToDoItem = (props) => {
  const videoLinksHandler = (videoLink) => {
    let vidLink =
      videoLink.split("watch?v=").length === 1
        ? videoLink
        : videoLink.split("watch?v=")[0] +
          "embed/" +
          videoLink.split("watch?v=")[1];
    vidLink =
      videoLink.split(".")[0] === "https://youtu"
        ? videoLink.split(".")[0].split("://")[0] +
          "://www." +
          videoLink.split(".")[0].split("://")[1] +
          videoLink.split(".")[1].split("/")[0] +
          ".com/embed/" +
          videoLink.split(".")[1].split("/")[1]
        : vidLink;
    vidLink =
      vidLink.split("/embed/")[0] !== "https://www.youtube.com" ? "" : vidLink;

    return vidLink;
  };

  const [showing, toggleShowing] = useState(true);
  const [currentLink, updateLink] = useState(props.image);
  const [currentClassName, updateClassName] = useState("item-box");

  const videoMedia = (
    <iframe
      title="video"
      className="media-elements"
      src={videoLinksHandler(props.video)}
      frameborder="0"
      allowFullScreen
    ></iframe>
  );

  const errorHandler = () => {
    updateLink("");
  };

  const media = (
    <div className="media-container">
      {videoLinksHandler(props.video) !== "" && videoMedia}
      <img
        src={props.image}
        alt=""
        onError={errorHandler}
        className="media-elements"
      ></img>
    </div>
  );

  const toggleHandler = () => {
    showing === true ? toggleShowing(false) : toggleShowing(true);
  };

  const deleteHandler = (event) => {
    let target =
      event.target.parentElement.parentElement.parentElement.parentElement;
    updateClassName("item-box disappear");
    props.onKeyDelete(target.id);
  };

  return (
    <div
      className={currentClassName}
      id={props.identification}
      onClick={toggleHandler}
    >
      <div className="data-box">
        <Time time={props.time} />
        <Text text={props.title} />
        <div onClick={deleteHandler}>
          <Indicator
            onClick={deleteHandler}
            image={currentLink}
            video={videoLinksHandler(props.video)}
          />
        </div>
      </div>
      {showing &&
        (videoLinksHandler(props.video) !== "" || currentLink !== "") &&
        media}
    </div>
  );
};

export default ToDoItem;
