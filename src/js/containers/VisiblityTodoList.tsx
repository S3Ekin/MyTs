import {connect} from "react-redux";

import TodoList from "../components/TodoList";

const mapStateToProp = (state:State)=>{

	const  post= state.postBySubreddit[state.selectSubreddit];

	return {
		todos: post ? post.items : [] ,
		}
};

export default connect(mapStateToProp)(TodoList);




