var current_users = ["Habib", "Hassan", "Admin", "ZAIN", "Umer", "Abdullah"];
var lowerCase_current_users = current_users.map(user => user.toLowerCase());
var new_users = ["Ali", "zain", "Ayesha", "HaBib", "Bilal", "Ahad"];

for (var i = 0; i < new_users.length; i++) {
    if (lowerCase_current_users.includes(new_users[i].toLowerCase())) {
        console.log("You need to Enter a New Username");
    }
    else {
        console.log("Username is Available");
    }
}