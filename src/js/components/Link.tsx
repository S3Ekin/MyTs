import * as React from "react" ;

type props = {

	text :string;

}

const Link = ({text}:props)=>(

		<a>{text}</a>

)

	export default Link ;