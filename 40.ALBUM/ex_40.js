// Challenge Coding Qno:40
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title, tracks: tracks };
    if (tracks) {
        // album:['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 10));
