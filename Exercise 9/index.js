var name = "HaMmad";
function toTitleCase(str){
    // Converting String first to lowercase and then splitting string
    var words = str.toLowerCase().split(" ");
    // Now looping string array and converting first letter to Uppercase and then join the remaining letters
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
alert(name.toLowerCase() + " " + name.toUpperCase() + " " + toTitleCase(name));