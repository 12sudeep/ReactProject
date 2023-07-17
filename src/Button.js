
const Button =(props) => {

const  {onClick,children} = props
    return (
        <div className="click"><button onClick={onClick}>{children}</button></div>
    )
};

export default Button;
