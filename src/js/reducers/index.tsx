import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/index';

const { SHOW_ALL } = VisibilityFilters;

type action = {
	type:string;
	[key:string]:any;
}


let ItemId = 0;

function visibilityFilter(state:string = SHOW_ALL, action:action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state:any[] = [], action:action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id:ItemId++,
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index:number) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp


