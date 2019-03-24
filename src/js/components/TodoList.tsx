
import  Todo from "./Todo";
import * as React from "react" ;

type props = {

	todos:Todo[];

	onTodoClick:(index:number)=>void;

}



const TodoList = ({todos,onTodoClick}:props)=>(

		<ul>
				{
					todos.map(({completed,id,text}:Todo)=>(

							<Todo completed={completed} text={text} key={id} onTodoClick={()=>onTodoClick(id)}/>

						))
				}

		</ul>

	);

export default TodoList;