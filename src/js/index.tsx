import * as React from "react" ;
//import {connect} from "react-redux"
import VisiblityTodoList from "./containers/VisiblityTodoList";
import AddTodo from "./containers/AddTodo";



class App extends React.Component{

	componentDidMount(){

		console.log(this.props);


	}

	render(){

			return (<div>
							<AddTodo/>
							<VisiblityTodoList />
						</div>)


	}


}
export	default App;