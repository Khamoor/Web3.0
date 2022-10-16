var sandwich1 = ["Fries", "Salad", "Ketchup"];
var sandwich2 = ["Chicken", "Mayonese", "Ketchup", "Salad"];
var sandwich3 = ["Chicken", "Fries", "Cheese", "Salad", "Ketchup"];
function sandwiches(items) {
    var str = "";
    for (var i = 0; i < items.length; i++) {
        if ((items.length - 1) === i) {
            str += items[i] + "."
        }
        else {
            str += items[i] + ", "
        }
    }
    console.log("Sandwich contains " + str);
}
sandwiches(sandwich1);
sandwiches(sandwich2);
sandwiches(sandwich3);