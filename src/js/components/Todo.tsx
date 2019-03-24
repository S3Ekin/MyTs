
import  * as  React from "react";

type props = {
		text:string;
		onTodoClick:(e:React.MouseEvent)=>void;
		completed:boolean;
}

const Todo = ({text,onTodoClick,completed}:props)=>(


		<li
		  
		  onClick={onTodoClick}
		  className="todo"
			style={{color:completed ? 'red' : 'black'}}
		>{text}</li>



	);

export default Todo;
