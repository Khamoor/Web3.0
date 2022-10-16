function make_album(artist_name, album_title) {
    return {artist_name, album_title}
}
console.log(make_album("Michael Jackson", "Bad"));
console.log(make_album("Falak Shabir", "Judah"));
console.log(make_album("Bilal Saeed", "Twelve"));

function make_albums(artist_name, album_title, tracks) {
    return {artist_name, album_title, tracks}
}
console.log(make_albums("Michael Jackson", "Bad", 11));
console.log(make_albums("Falak Shabir", "Judah"));
console.log(make_albums("Bilal Saeed", "Twelve", 12));