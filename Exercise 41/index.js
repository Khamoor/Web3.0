var magicians = ["David Copperfield", "Ricky Jay", "Mark Wilson", "Harry Anderson"];
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
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);