console.log(document.body.style.backgroundColor);

document.body.style.backgroundColor = "red";

document.title = "Yeni başlık";

console.log(document.head);

console.log(document.getElementsByTagName("a"));

console.log(document.getElementsByName("a"));

console.log(document.getElementsByClassName("deneme")["a"]);


var inputs = document.getElementsByTagName("input");

console.log(inputs["adi"]);

inputs["adi"].value = "Göksel";
inputs["soyadi"].value = "Kalyoncu";
inputs["dtarih"].value = "01/01/2020";
inputs["mail"].value = "mail@mail.com";
//console.log();

var person = { 
    name: inputs["adi"].value, 
    surname: inputs["soyadi"].value, 
    birthDate: inputs["dtarih"].value, 
    mail: inputs["mail"].value, 
}

console.log(person);