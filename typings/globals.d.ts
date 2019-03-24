interface Window{
	__REDUX_DEVTOOLS_EXTENSION__:any;
}

interface Todo{
	completed:boolean;
	text:string;
	id:number;
}
interface State {
		todos:Todo[];
		visibilityFilter:string;
}

interface NodeModule {
        hot : {
            accept(path?: string, callback?: () => void): void
        }
    }