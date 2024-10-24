//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, getUserById, addUser} from "./services/users";
import {getFindCreated, getCommentById,  getCommentsByPostId, updateCommentBody, deleteCommentById, addComment} from "./services/comments";
import {getPosts, getPostsByUser,getPostById, addPost,
    updatePostTitle, updatePostBody, updatePost, 
    deletePostBy, deletePostsByUserId} from "./services/posts";


//------------users start---------------

updateUser(1, { email: "roger@77.com" });

const userId = getUserById(2);
console.log(userId); //get the user Id

//add user render info
addUser({
    name: "Jazsim S. Salim",
    username: "jassims",
    email: "jassim.salim@example.com",
    address: {
        street: "Mabuhay Street",
        suite: "Apartment 301",
        city: "Quezon City",
        zipcode: "1100",
        geo: {
            lat: "14.5995",
            lng: "120.9842",
        },
    },
    phone: "+63 2 1234 5678",
    website: "jassimsalim.net",
    company: {
        name: "Salim Enterprises",
        catchPhrase: "Innovating the Future",
        bs: "leverage agile frameworks",
    }
});

// Adding a second user
addUser({
    name: "Test User",
    username: "testuser",
    email: "test.user@example.com",
    address: {
        street: "Mabuhay Street",
        suite: "Apartment 301",
        city: "Quezon City",
        zipcode: "1100",
        geo: {
            lat: "14.5995",
            lng: "120.9842",
        },
    },
    phone: "+63 2 8765 4321",
    website: "testuser.net",
    company: {
        name: "Test Enterprises",
        catchPhrase: "Testing the Future",
        bs: "leverage agile frameworks",
    }
});


console.log(getAllUsers()); // getting all users after pushing so that it will refresh the list of users

//---------------users end------------------

//-------------comments start------------------

console.log(`Comment with ID: ${JSON.stringify(getCommentById(2))}`); //get by id
console.log(getCommentsByPostId(98));  //get by postid


const deleteMessage = deleteCommentById(3);  //delete by id
console.log(deleteMessage); 

//add comment
addComment(
    {
        postId: 1,
        name: "Jassim",
        email: "jassim.salim@example.com",
        body: "test body"
    }
    )

addComment(
        {
            postId: 6,
            name: "juan dlcrz",
            email: "juan.salim@example.com",
            body: "test body"
        }
        )

console.log(getFindCreated("juan dlcrz")); //checking only if I already created the in comment

console.log(getFindCreated("Jassim"));


//comments end 

//---------post  start-----




console.log(getPostsByUser(5)) //by user id

console.log(`Get Post by ID: ${JSON.stringify(getPostById(2))}`);  // by id


addPost( 
    {
        userId: 2,
        title: "adding post here",
        body: "test adding post "  
    }
)   // adding poist that will up the structure to first in object



updatePostTitle(1, "Jassim updating the Title") // update the title base on id

updatePostBody(1, "jassim updating the body") // update the body base on id

updatePost(2, { title: "New Title" });   //updating the title in one function
updatePost(2, { body: "New Body" });    //updating the body in one function



const delById = deletePostBy(3);  //returing the response if successfully deleted by id
const delbyUserId = deletePostsByUserId(4); //returing the response if successfully deleted by user id


console.log(delById)  
console.log(delbyUserId)


console.log(getPosts()); // get all post
