
import  Todo from "./Todo";
import * as React from "react" ;

type props = {
	todos:Todo[];
}

const TodoList = (props:props)=>{
		console.log(props);
	return (

		
		<ul>
				{
					props.todos.map(({id,title}:Todo)=>(

							<Todo  text={title} key={id} />

						))
				}

		</ul>

	)};

export default TodoList;