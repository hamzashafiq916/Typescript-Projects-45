"use strict";
let guestArr = [`ali`, `hamza`, `umer`];
// for(let i=0;i <guestArr.length; i++){
//     console.log(`Dear Mr.` + guestArr[i] + `,\nYou are invited to a dinner. \nThankyou\n `)
// }
let cannotattend = `ali`;
let newmember = `wajid`;
guestArr[0] = newmember;
// for(let i=0;i <guestArr.length; i++){
//     console.log(`Dear Mr.` + guestArr[i] + `,\nYou are invited to a dinner. \nThankyou\n `)
// }
// console.log(`Mr ${cannotattend} is not coming to the party`);
// console.log(`Guys, we  just found a bigger dinner table so we are inviting 3 more guests`);
guestArr.unshift(`kohli`);
guestArr.splice(2, 0, `ahmed`);
guestArr.push(`ibrahim`);
for (let i = 0; i < guestArr.length; i++) {
    // console.log(`Dear Mr.` + guestArr[i] + `,\nYou are invited to a dinner. \nThankyou\n `)
}
////////////////////////task 17///////////////////////////////////
// console.log(`\nGuys bad news we cannot arrange big table so are only inviting 2 guests.`)
// Removing guests until only two names remain
while (guestArr.length > 2) {
    let removedGuest = guestArr.pop(); // Remove the last guest from the list
    // console.log(`Sorry, Mr. ${removedGuest}, we can't invite you to dinner.`);
}
// Printing invitation messages to the remaining two guests
for (let i = 0; i < guestArr.length; i++) {
    // console.log(`Mr. ${guestArr[i]},You are still invited`)
}
// Removing the last two names from the list to make it empty
guestArr.pop();
guestArr.pop();
// or
// guestArr.splice(0, 2);
// console.log(guestArr);
// Printing the empty list to confirm
console.log("\nFinal guest list after removing all guests:");
console.log(guestArr);
///////////////////////////exer 19////////////////////////////////
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
//  indicating the number of people you are inviting to dinner.
console.log(`Total number of guest are: ${guestArr.length}`);
