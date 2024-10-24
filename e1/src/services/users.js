import { users as data } from "../data/users";
import { generateId } from "../utils";

//private
let users = [...data];

export function getAllUsers() {
  // get all users
  return [...users];
}


export function getUserById(id) {
  //get single user by id
  return users.find((user) => user.id === id);
}   //transforming to export function getuserbyid - jassim

export function updateUser(id, userInfo) {
  //update user (userInfo is an object which can optionally contain properties of a user)
  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...userInfo,
      };
    }

    return user;
  });
}





export function addUser(userInfo) {
  // add user (userInfo is an object which can optionally contain properties of a user)
  // use generateId function and pass users array as the argument to generate a unique id.

  const newPerson =  { id: generateId(users), ...userInfo };

  users.push(newPerson);
}
