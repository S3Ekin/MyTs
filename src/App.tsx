import "@css/main.scss";
import App from "./js/Router";
import {Provider} from "react-redux"
import {createStore,applyMiddleware,compose} from "redux";
import {logger} from "redux-logger" ;
import  thunk from "redux-thunk" ;
import  rootRecuders from "./js/reducers/index" ;
import * as React from "react";
import * as ReactDom from "react-dom" ;


const middleware = [thunk,logger,];
const store  = createStore(rootRecuders,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


const domApp = document.getElementById("app");

ReactDom.render((

	<Provider store={store}>
			<App />
	</Provider>

	),domApp);


if(module.hot){


		module.hot.accept("./js/Router",()=>{

					import("./js/Router").then((module:any)=>{

						const AppCom = module.default;
						
							ReactDom.render((
								<Provider store={store}>
										<AppCom />
								</Provider>
								),domApp);
											

					});
					


		})


}