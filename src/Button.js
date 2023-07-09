const clickFunction = () => {
    alert("you clicked me!");
  };


const Button = () =>{
    return (
        <div><button onClick={clickFunction}>Click me</button></div>
    )
}

export default Button;