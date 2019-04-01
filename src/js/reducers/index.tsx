import { combineReducers } from 'redux'
import {
  RECEIVE_POSTS,
  REQUEST_POSTS,
  INVALIDATE_SUBREDDIT,
  SELECT_SUBREDDIT,
} from '../actions/index';

type actionType = {
  type:string;
  subreddit:string;
  json?:any[];
  isFectching?:boolean;
  didInvalidate?:boolean;
  lastUpdated?:number;
};

const selectSubreddit = function(state:State["selectSubreddit"]="reactjs",action:actionType){

    if(action.type === SELECT_SUBREDDIT){
      return action.subreddit
    }else{
      return state;
    }
};
// 再拆分state
const posts = function(state: State["postBySubreddit"][keyof State["postBySubreddit"]] = {
     isFectching:false,
     didInvalidate:false,
     items:[],
     lastUpdated:0
  },action:actionType){


  switch (action.type) {
    case RECEIVE_POSTS:
        return {
          ...state,
           isFectching:false,
           didInvalidate:false,
           items:action.json,
           lastUpdated:action.lastUpdated,
        }
      break;
    case REQUEST_POSTS:
      return {
        ...state,
        isFectching:true,
        didInvalidate:false,
      }
      break;
    case INVALIDATE_SUBREDDIT:
     return {
        ...state,
        didInvalidate:true,
      }
      break;
    
    default:
      return state ;
      break;
  }
}

const postBySubreddit = function(state:State["postBySubreddit"]={},action:actionType){

  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
    case INVALIDATE_SUBREDDIT:
     
     return {
        ...state,
        [action.subreddit]:posts(state[action.subreddit],action),
      }
      break;
    
    default:
      return state ;
      break;
  }




};


const rootReducers = combineReducers({
  selectSubreddit,
  postBySubreddit
})

export default rootReducers


