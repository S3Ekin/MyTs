import {connect} from "react-redux";

import TodoList from "../components/TodoList";

const mapStateToProp = (state:State)=>{

	console.log(state,"aerre")

	const {items=[],isFectching=false} = state.postBySubreddit[state.selectSubreddit] || {};

	return {
		todos:items,
		isFectching
		}
};

export default connect(mapStateToProp)(TodoList);




