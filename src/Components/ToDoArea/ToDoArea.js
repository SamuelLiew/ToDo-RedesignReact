import ToDoItem from "./PartsOfItem/ToDoItem";
const ToDoArea = (props) => {
  const timeHandler = (props) => {
    let hourHand, minuteHand, AmPm, timeSplitHour, timeSplitMinute, lis;

    timeSplitHour = parseInt(props.split(":"));
    timeSplitMinute = parseInt(props.split(":")[1]);
    if (timeSplitHour > 12) {
      hourHand = timeSplitHour - 12;
      minuteHand = timeSplitMinute;
      AmPm = "PM";
    } else if (timeSplitHour < 12) {
      hourHand = timeSplitHour;
      minuteHand = timeSplitMinute;
      AmPm = "AM";
    } else {
      hourHand = timeSplitHour;
      minuteHand = timeSplitMinute;
      AmPm = "PM";
    }

    minuteHand = minuteHand.length === 1 ? "0" + minuteHand : minuteHand;

    let time =
      hourHand.toLocaleString("en-US", { minimumIntegerDigits: 2 }) +
      ":" +
      minuteHand.toLocaleString("en-US", { minimumIntegerDigits: 2 });
    time = props === "" ? "" : time;
    AmPm = props === "" ? "" : AmPm;
    lis = [time, AmPm]
    
    return lis;
  };

  const deleteHandler = (key) => {
    props.onDeleteByKey(key)
  };

  return props.list.map((item) => (
    <ToDoItem
      onKeyDelete={deleteHandler}
      key={item.Key}
      identification={item.Key}
      title={item.Text}
      time={timeHandler(item.Time)}
      image={item.Image}
      video={item.Video}
    />
  ));
};

export default ToDoArea;
