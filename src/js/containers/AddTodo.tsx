import * as React from "react";
import {connect} from "react-redux";

import {fetchPosts} from "../actions/index";


type addProp = {
	subscreddit:string;
	fetch(subscreddit:string):any;
}

const AddTodo = ({subscreddit,fetch}:addProp)=>{

	let inp:React.RefObject<HTMLInputElement> = React.createRef() ;

	console.log(subscreddit)
	const onChange = function(e:React.ChangeEvent<HTMLInputElement>){
			fetch(e.target.value);
	}

	return (
				<div>
					<input ref={inp} />
					<label htmlFor="reactjs">reactJs </label><input type="radio"  name="subsreddit" id="reactjs" value="reactjs" onChange={onChange} />
					<label htmlFor="fontEnd">fontEnd</label> <input type="radio" name="subsreddit" id="fontEnd" value="fontEnd" onChange={onChange} />
					<button 

					onClick={()=>{

							const inpEl = inp.current!
							const text = inpEl.value;

							if(!text.trim()){
										return ;	
							}

							inpEl.value = "";

					}}>添加</button>
				</div>
		)

};

const mapStateToProp = function(state:State){

		return {
			subscreddit:state.selectSubreddit
		}


};

const mapDispatchToProp = function(dispatch:any){

	return {
		fetch:(subsreddit:string)=>{

					dispatch(fetchPosts(subsreddit));
		}
	}

};





export default connect(mapStateToProp,mapDispatchToProp)(AddTodo);




