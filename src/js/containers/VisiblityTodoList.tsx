import {connect} from "react-redux";

import TodoList from "../components/TodoList";
import {toggleTodo} from "../actions/index";

const getVisiblityTodoList = (TodoList:Todo[],visibilityFilter:string)=>{


			switch (visibilityFilter) {
				case "All":
					return TodoList ;
					break;
				case "Active":
					return TodoList.filter((val:Todo)=>!val.completed);
					break;
				case "Completed":
					return TodoList.filter((val:Todo)=>val.completed);
					break;
				default:
					return TodoList ;
					break;
			}

	};


const mapStateToProp = (state:State)=>({

		todos:getVisiblityTodoList(state.todos,state.visibilityFilter)
});

const mapDispatchToProp = (dispatch:any)=>({

		onTodoClick:(index:number)=>{
		
				dispatch(toggleTodo(index));
		}
});





export default connect(mapStateToProp,mapDispatchToProp)(TodoList);




