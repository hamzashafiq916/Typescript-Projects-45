"use strict";
// Album: Write a function called make_album() that builds an Object describing a music album.
// The function should take in an artist name and an album title, and it should return an Object 
// containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, tracks) {
    const albumObj = {
        artist: album_title,
        album: album_title
    };
    if (tracks !== undefined) {
        albumObj.tracks = tracks;
    }
    return albumObj;
}
console.log(make_album('hamza', 'lonely'));
console.log(make_album('umer', 'fearless', 12));
console.log(make_album('Ali', 'love', 10));
