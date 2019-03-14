import  {ty} from "./test5";



const gh:ty={
	age:4,
	h:"5"

}
gh;
const t = 45 ;

 

interface Sq{
	kind:"Sq";
	size:number;
}
interface Rq{
	kind:"Rq";
	w:number;
	h:number
}
interface Cq{
	kind:"Cq";
	c:number;
}
type All = Sq | Rq | Cq ;

type gE = {x:number;y:string}

function rt(g:{x:number;y:string}){



	return g;
};




var f = {x:2,y:"34",j:45}
rt(f)



export {t}