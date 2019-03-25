import {Route,Switch} from "react-router";
import {Link,BrowserRouter} from "react-router-dom";
import * as React from "react";
import App from "./index";


const About = ()=>(

			<div>
					<p>
						我是About
					</p>
					<div>
						学习路由
					</div>
			</div>

	);

const Nav = ()=>(
			 <div>
					<Link to="/todo" > tdos </Link>
					<Link to="/about" >Aasdbout</Link>
				</div> 
	);


const Page = ()=>(
						<BrowserRouter basename="/asdf">
							<Nav/>
							<Switch>
										  <Route path="/todo" component={App} />
											<Route path="/about" component={About}  />
											
							</Switch>
						</BrowserRouter>

	);

export default Page ;