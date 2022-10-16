var magicians = ["David Copperfield", "Ricky Jay", "Mark Wilson", "Harry Anderson"];
var duplicate_magicians = magicians.slice();
function show_magicians(names) {
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
function make_great(names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "The Great " + names[i];
    }
}
make_great(duplicate_magicians);
show_magicians(magicians);
show_magicians(duplicate_magicians);