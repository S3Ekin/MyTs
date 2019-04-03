import {Route,Switch} from "react-router";
import {Link,BrowserRouter} from "react-router-dom";
import * as React from "react";
import lazyComponent from "@js/common/Boudle";

//import  App from "./index";
//import About from "./containers/about/About";


const Nav = ()=>(
			 <div>
					<Link to="/todo" > tdos </Link>
					<Link to="/about" >Aaddddsout</Link>
				</div> 
	);

const Page = ()=>(
						<BrowserRouter basename="/asdf">
							<Nav/>
							<Switch>
											<Route path="/about" component={lazyComponent(()=>import(/* webpackChunkName: "about" */"./containers/about/About"))}  />
									
											<Route path="/todo" 
												component={lazyComponent(()=>import(/* webpackChunkName: "todo" */"@js/index"))}
											/>
							</Switch>
						</BrowserRouter>

	);

export default Page ;