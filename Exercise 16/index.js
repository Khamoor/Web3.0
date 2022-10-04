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
alert('""""Table is Full only two People Seats are Available""""');
rem = guests.pop();
alert("My Friend " + rem + " Sorry you are not invited to Dinner.");
rem = guests.pop();
alert("My Friend " + rem + " Sorry you are not invited to Dinner.");
rem = guests.pop();
alert("My Friend " + rem + " Sorry you are not invited to Dinner.");
rem = guests.pop();
alert("My Friend " + rem + " Sorry you are not invited to Dinner.");
alert("My Friend " + guests[0] + " you are invited to Dinner.");
alert("My Friend " + guests[1] + " you are invited to Dinner.");
guests.pop()
guests.pop()
alert(guests)


