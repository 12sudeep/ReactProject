const clickFunction = () => {
    alert("you are")
}

const Image = () => {
    return(
        <div><img src="/images/123.jpg"  onClick={clickFunction} alt="you"></img></div>
    )
}

export default Image;