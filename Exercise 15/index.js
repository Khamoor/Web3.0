var guests = ["Huzaifa", "Abdul Bari", "Kamran"];
alert('""""Invitation Message""""');
for (var i = 0; i < guests.length; i++) {
    alert("My Friend " + guests[i] + " you are invited to Dinner.");
}
alert(guests[1] + " can't make it to Dinner.");
guests[1] = "Arslan";
alert('""""Updated Invitation Message""""');
for (var i = 0; i < guests.length; i++) {
    alert("My Friend " + guests[i] + " you are invited to Dinner.");
}
alert('""""Attention More Guests are Coming""""');
guests.unshift("Ali");
guests.splice(2, 0, "Hassan");
guests.push("Abdullah");
for (var i = 0; i < guests.length; i++) {
    alert("My Friend " + guests[i] + " you are invited to Dinner.");
}