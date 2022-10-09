let name = "Habib";
console.log("Tests for Equality")
console.log("Is name == 'Habib'? I predict 'True'");
console.log(name == "Habib");
console.log("Is name == 'Ali'? I predict 'False'");
console.log(name == "Ali");

console.log("Tests for Inequality")
console.log("Is name == 'Ali'? I predict 'True'");
console.log(name != "Ali");
console.log("Is name == 'Habib'? I predict 'False'");
console.log(name != "Habib");

console.log("Tests using Lowercase Function")
console.log("Is name.toLowerCase() == 'habib'? I predict 'True'");
console.log(name.toLowerCase() == "habib");
console.log("Is name.toLowerCase() == 'Habib'? I predict 'False'");
console.log(name.toLowerCase() == "Habib");

let num = 5;
console.log("Tests for Equality")
console.log("Is num == 5? I predict 'True'");
console.log(num == 5);
console.log("Is num == 6? I predict 'False'");
console.log(num == 5);

console.log("Tests for Inequality")
console.log("Is num != 6? I predict 'True'");
console.log(num != 6);
console.log("Is num != 5? I predict 'False'");
console.log(num != 5);

console.log("Tests for Greater Than")
console.log("Is num > 4? I predict 'True'");
console.log(num > 4);
console.log("Is num > 6? I predict 'False'");
console.log(num > 6);

console.log("Tests for Lesser Than")
console.log("Is num < 6? I predict 'True'");
console.log(num < 6);
console.log("Is num < 4? I predict 'False'");
console.log(num < 4);

console.log("Tests for Greater Than or Equal To")
console.log("Is num >= 4? I predict 'True'");
console.log(num >= 4);
console.log("Is num >= 6? I predict 'False'");
console.log(num >= 6);

console.log("Tests for Lesser Than or Equal To")
console.log("Is num <= 6? I predict 'True'");
console.log(num <= 6);
console.log("Is num <= 4? I predict 'False'");
console.log(num <= 4);

console.log("Tests using 'and' or '&&")
console.log("Is name == 'Habib' and num == 5? I predict 'True'");
console.log(name == "Habib"  && num == 5);
console.log("Is name == 'habib' and num == 5? I predict 'False'");
console.log(name == "habib"  && num == 5);

console.log("Tests using 'or' or '||'")
console.log("Is name == 'Habib' or num == 5? I predict 'True'");
console.log(name == "habib"  || num == 5);
console.log("Is name == 'habib' or num == 5? I predict 'False'");
console.log(name == "habib"  || num == 4);

let arr = ["Hunain", 15, "Bilal"];
console.log("Test whether an item is in an Array");
console.log("Is arr.includes('Bilal')? I predict 'True'");
console.log(arr.includes("Bilal"));
console.log("Test whether an item is not in an Array");
console.log("Is arr.includes('Ali')? I predict 'False'");
console.log(arr.includes("Ali"));