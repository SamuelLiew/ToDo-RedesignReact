import './DueTime.css'

const DueTime = (props) => {
    return (
        <div className="time-cover">
            <div className="time">{props.time[0]}</div>
            <div className="time">{props.time[1]}</div>

        </div>
    )
}

export default DueTime;