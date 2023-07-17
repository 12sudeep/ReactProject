
const Todo = (props) =>{
    return (
        <div className="to_do">
            {props.todo.title} {props.todo.completed ? "✅": "❌"}
        </div>
    );
};

const Todods = () => {

    
  const todo_list = [
    { title: "Go to hell", completed: false },
    { title: "complete the work", completed: true },
    { title: "complete the homework", completed: false },
    { title: "do the marriage", completed: false },
    { title: "bade a salute", completed: true },
  ];

  return <div className="todo">

    {
        todo_list.map((todo) => (
            <Todo todo={todo}/>
        ))
    }
  </div>;
};

export default Todods;
