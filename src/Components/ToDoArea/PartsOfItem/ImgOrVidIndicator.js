import './ImgOrVidIndicator.css'

const ImgOrVidIndicator = (props) => {
    
    let classnamevid, classnameimg;
    if (props.image === ""){
        classnameimg = "Img-No";
    } else {
        classnameimg = "Img-indicator";
    }
    
    if (props.video === ""){
        classnamevid = "Vid-No";
    } else {
        classnamevid = "Vid-indicator";
    }

    return (
        <div className="indicator-box">
            <div className={classnameimg}></div>
            <div className={classnamevid}></div>
        </div>
    )
}

export default ImgOrVidIndicator;