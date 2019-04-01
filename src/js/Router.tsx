import {Route,Switch} from "react-router";
import {Link,BrowserRouter} from "react-router-dom";
import * as React from "react";
import Menu from "./common/Menu" ;
import App from "./index"

const ThemeContext = React.createContext("dark");

const Theme = ()=>(

		<ThemeContext.Consumer >
			{theme=> <button>{theme}</button>}
		</ThemeContext.Consumer>

	);

const data = [
	{
		text:"1",
		id:"1",
			url:"aaa",
		children:[
			{
					text:"1-1",
					id:"1-1",
					children:[],
					url:"aaa",
			}
		],
	},
	{
		text:"2",
		id:"2",
		url:"aaa",
		children:[
			{
					text:"2-1",
					id:"2-1",
					children:[
						{
							text:"2-2-1",
							id:"2-2",
								url:"aaa",
							children:[
								{
										text:"1-1",
										id:"1-1",
										children:[],
										url:"aaa",
								}
							],
						},
					],
					url:"aaa",
			}
		],
	}
];

const About = ()=>(
			<ThemeContext.Provider value="d">
			<div>
					<p>
						我是About
					</p>
					<div>
						<Menu data={data} config={{}} />
						<Theme />
					</div>
			</div>
			</ThemeContext.Provider >
	);

const Nav = ()=>(
			 <div>
					<Link to="/todo" > tdos </Link>
					<Link to="/about" >Aaddddsout</Link>
				</div> 
	);


const Page = ()=>(
						<BrowserRouter basename="asdf">
							<Nav/>
							<Switch>
											<Route path="/about" component={About}  />
											<Route path="/todo" component={App}  />
											
							</Switch>
						</BrowserRouter>

	);

export default Page ;