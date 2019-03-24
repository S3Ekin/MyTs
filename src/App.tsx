import "@css/main.scss";
import App from "./js/index";
import {Provider} from "react-redux"
import {createStore} from "redux";
import  todoApp from "./js/reducers/index" ;
import * as React from "react";
import * as ReactDom from "react-dom" ;


const store  = createStore(todoApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({
	text:"sdf",
	type:"ADD_TODO"
});

const domApp = document.getElementById("app");

ReactDom.render((

	<Provider store={store}>
			<App />
	</Provider>

	),domApp);


if(module.hot){


		module.hot.accept("./js/index",()=>{

					import("./js/index").then((module:any)=>{

						const AppCom = module.default;
						
							ReactDom.render((
									<Provider store={store}>
										<AppCom />
								</Provider>
								),domApp);
											

					});
					


		})


}