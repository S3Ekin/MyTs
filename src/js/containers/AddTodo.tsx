import * as React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions/index"





const AddTodo = ({dispatch}:any)=>{

		let inp:React.RefObject<HTMLInputElement> = React.createRef() ;

	return (
				<div>
					<input ref={inp} />
					<button 

					onClick={()=>{

							const inpEl = inp.current!
							const text = inpEl.value;

							if(!text.trim()){
										return ;	
							}

							dispatch(addTodo(text))		
								inpEl.value = "";


					}}>添加</button>
				</div>
		)

};




export default connect()(AddTodo);




