import { posts as data } from "../data/posts";
import { generateId } from "../utils";



//private
let posts = [...data];

export function getPosts() {
  //get all posts

  return [...posts];
}

export function getPostsByUser(userId) {
  //get all posts by userId
  return posts.filter((p) => p.userId === userId);
}

export function getPostById(id) {
  //get a single post by id
  return posts.find((p) => p.id === id);


}

export function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
  const newPost =  { id: generateId(posts), ...post };

  posts.unshift(newPost);  
}

export function updatePostTitle(id, title) {
  //by title

  const postResult = posts.find(p => p.id === id);
  if (postResult) {
    postResult.title = title;  
    return postResult; 
  }
  return null;

}

export function updatePostBody(id, body) {
  //update post body

  const postResult = posts.find(p => p.id === id);
  if (postResult) {
    postResult.body = body;  
    return postResult; 
  }
  return null;

}


export function updatePost(id, post) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)

  const postResult = posts.find(p => p.id === id);

  if(postResult){

    postResult.title = post.title? post.title : postResult.title;
    postResult.body = post.body? post.body : postResult.body;


    return postResult
  }

}

export function deletePostBy(id) {
  const postLenght = posts.length;
  posts = posts.filter(p => p.id !== id);
  if(posts < postLenght); { 

    return "Post deleted successfully by ID."; 
  } 
}

export function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId

  const postLenght = posts.length;
  posts = posts.filter(p => p.userId !== userId);
  if(posts < postLenght); { 

    return "Post deleted successfully by UserId."; 
  } 
}


