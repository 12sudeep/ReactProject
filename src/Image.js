const clickFunction = () => {
    hover:red;
}

const Image = () => {
    return(
        <div><img src="/images/123.jpg"  onTouchMoveCapture={clickFunction}></img></div>
    )
}

export default Image;