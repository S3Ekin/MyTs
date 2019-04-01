const REQUEST_POSTS = "REQUEST_POSTS";
const RECEIVE_POSTS = "RECEIVE_POSTS";
const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";


type actionFn = {

		(subreddit:string):{type:string,subreddit:string}
}

const slecteSubreddit:actionFn = function(subreddit:string){
	return{
		 type:SELECT_SUBREDDIT,
		 subreddit,
	}
};

const requestPosts:actionFn = function(subreddit:string){

	return {
			 type:REQUEST_POSTS,
			 subreddit,
	}
};

const receivePosts = function(subreddit:string,json:{[key:string]:any}){


		return {
			 type:RECEIVE_POSTS,
			 subreddit,
			 json,
			 lastUpdated:Date.now(), 
		}
};

const invalidateSubreddit = function(subreddit:string){

			return {
				type:INVALIDATE_SUBREDDIT,
				subreddit,
			}


}


// 异步的action
const fetchPosts = function(subreddit:string){

			return  function(dispatch:Function){

					dispatch(requestPosts(subreddit));
				 	fetch(`http://yapi.demo.qunar.com/mock/65784/sekin/${subreddit}`)
				 	.then(res=>{
								return res.json()
				 	})
				 	.then(json=>{
				 			dispatch(receivePosts(subreddit,json))
				 	})
			}
}

//是否需要刷新
const shouldFetchPost = function(state:State,subscreddit:string){

			const posts = state.postBySubreddit[subscreddit];

			if(!posts){
					return true;
			}else if(posts.isFectching){
				  return false
			}else{
				  return posts.didInvalidate;
			}
};
// 这是一个action 
const fetchPostsIfNeeded = function(subscreddit:string){

			return function(dispatch:Function,getState:Function){

						if(shouldFetchPost(getState(),subscreddit)){

								return dispatch(fetchPosts(subscreddit));
						}
			}
}



export {
	REQUEST_POSTS,
	RECEIVE_POSTS,
	SELECT_SUBREDDIT,
	INVALIDATE_SUBREDDIT,
	slecteSubreddit,
	requestPosts,
	receivePosts,
	fetchPosts,
	shouldFetchPost,
	fetchPostsIfNeeded,
	invalidateSubreddit
};
