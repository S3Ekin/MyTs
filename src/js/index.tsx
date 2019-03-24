import * as React from "react" ;

import VisiblityTodoList from "./containers/VisiblityTodoList";
import AddTodo from "./containers/AddTodo";


const App = function(){

		return (<div>
							<AddTodo/>
							<VisiblityTodoList />
						</div>)


};
export	default App ;