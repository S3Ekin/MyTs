const REQUEST_POSTS = "REQUEST_POSTS";
const RECEIVE_POSTS = "RECEIVE_POSTS";
const SELECT_SUBREDDIT = "REQUEST_POSTS";
const INVALIDATE_SUBREDDIT = "REQUEST_POSTS";


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



// 异步的action
const fetchPosts = function(subreddit:string){

			return  function(dispatch:any){

					dispatch(requestPosts(subreddit));
				 	fetch(`http://yapi.demo.qunar.com/mock/65784/sekin/${subreddit}`)
				 	.then(res=>{

				 		console.log(res)
								return res.json()


				 	})
				 	.then(json=>{
				 			dispatch(receivePosts(subreddit,json))
				 	})
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
	fetchPosts
};
