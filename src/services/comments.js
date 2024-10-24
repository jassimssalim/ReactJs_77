import { comments as data } from "../data/comments";
import { generateId } from "../utils";


//private
let comments = [...data];


export function getFindCreated(name) {
  return comments.find(comment => comment.name === name);  //just creating this to search the one that i will add

}

export function getCommentById(id) {
  return comments.find(comment => comment.id === id);
}

export function getCommentsByPostId(postId) {
  return comments.filter(comment => comment.postId === postId);
}

export function updateCommentBody(id, body) {
  //update comment body
  const commentResult = comments.find(comment => comment.id === id);
  if (commentResult) {
    commentResult.body = body;  
    return commentResult; 
  }
  return null;

}

export function deleteCommentById(id) {
  const comLenght = comments.length;
  comments = comments.filter(comment => comment.id !== id);
  if(comments < comLenght); { 

    return "Comment deleted successfully."; 
  } 

}



export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.


  const newComment =  { id: generateId(comments), ...comment };

  comments.push(newComment);

}
