"use strict";
// Print original guest list
let guestArr = [`ali`, `hamza`, `umer`];
for (let i = 0; i < guestArr.length; i++) {
    console.log(`Dear Mr. ${guestArr[i]} ,You are invited to a dinner. `);
}
// Name of the guest who can't make it
let cannotattend = `ali`;
// print guest who can't make it to a dinner
console.log(`\nMr. ${cannotattend}, can't make it to a dinner\n`);
// Name of the new member who can't make it
let newmember = `wajid`;
guestArr[0] = newmember;
for (let i = 0; i < guestArr.length; i++) {
    console.log(`Dear Mr. ${guestArr[i]} ,You are invited to a dinner.`);
}
