enum Weekday {
  Monday,
  Tuseday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

window.helloWorld = () => console.log('hello world');
window.g="45";

const mon = Weekday.Monday;
const sun = Weekday.Sunday;


interface Foo {
  name:number;
}
interface  Bar{
  age:number;
}


function isFoo(arg:Foo | Bar):arg is Foo {

    return (<Foo>arg).name !== undefined ;

}


function doStuff(arg:Foo | Bar){


    if(isFoo(arg)){

      arg.name
    }else{
      arg.age
    }


}
 


doStuff({name:34})jjj


type hj = "a" | "b" |"c";


const gh:hj = "f";


gh;



export { mon,sun} 


