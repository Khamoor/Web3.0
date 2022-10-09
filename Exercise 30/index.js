// var user_names = ["Habib", "Hassan", "Admin", "Zain", "Umer", "Abdullah"];
var user_names = [];
if (user_names.length === 0) {
    console.log("We need to find Some Users!");
}
else {
    for (var i = 0; i < user_names.length; i++) {
        if (user_names[i] === "Admin") {
            console.log("Hello! " + user_names[i] + ", would you like to see a status Report?");
        }
        else {
            console.log("Hello! " + user_names[i] + ", thank you for logging in Again");
        }
    }
}