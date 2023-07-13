import "./Button.css"


const clickFunction = () => {
    alert("you are a person now!");
  };


const Button = () =>{
    return (
        <div className="clicked"><button onClick={clickFunction}>Click me</button></div>
    )
}

export default Button;
