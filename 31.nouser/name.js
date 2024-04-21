"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let user_name = [`admin`, `hamza`, `umer`, `shafiq`, `ali`];
user_name.length = 0;
if (user_name.length === 0) {
    console.log(`we need to add some user!`);
}
