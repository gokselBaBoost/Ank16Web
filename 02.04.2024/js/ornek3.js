// JS Array

var dersler = ["Matematik", "Fizik", "Kimya"];
var haftaici = ["Pazartesi","Salı","Çarşamba","Perşembe", "Cuma"];

var person = { name: "Göksel", surname:"Kalyoncu", age: 5.5};

console.table(dersler);
console.table(person);

console.log(dersler[1]);
console.log(dersler[2]);

console.log(dersler[5]);

console.log(person.name);

dersler[1] = "Türkçe";

console.log(dersler[1]);

console.log(dersler.length);

console.log(dersler);

console.log(dersler.sort());

console.log(dersler);

dersler[4] = "Müzik";

console.log(dersler);
console.log(dersler.length);

haftaici.forEach((item)=>{
    console.log(item);
});

console.log("------");

haftaici.forEach(yaz);

function yaz(item)
{
    console.log(item);
}

haftaici.push("Cumartesi");

console.log("------");

haftaici.forEach(yaz);

function yaz(item)
{
    console.log(item);
}

haftaici.push("Pazar","DiğerBir gün","Ek bir gün");

console.log("------");

haftaici.forEach(yaz);

function yaz(item)
{
    console.log(item);
}

var kitaplar = new Array(10,"10",true,person);
var yazarlar = [];

console.log(typeof(kitaplar));
console.log(typeof(yazarlar));
console.log(typeof(person));

console.log("---------");

console.log(kitaplar);

console.log(Array.isArray(kitaplar));
console.log(Array.isArray(person));

console.log("---------");

console.log(kitaplar.toString());

console.log(kitaplar.at(1));

console.log(haftaici.join(" * "));

// console.log(haftaici.shift());
// console.log(haftaici.shift());
// console.log(haftaici.shift());
// console.log(haftaici.shift());
// console.log(haftaici.shift());
// console.log(haftaici.shift());
// console.log(haftaici.shift());
// console.log(haftaici.shift());
// console.log(haftaici.shift());
// console.log(haftaici.shift());

// console.log(haftaici.pop());
// console.log(haftaici.pop());
// console.log(haftaici.pop());
// console.log(haftaici.pop());
// console.log(haftaici.pop());
// console.log(haftaici.pop());
// console.log(haftaici.pop());
// console.log(haftaici.pop());
// console.log(haftaici.pop());
// console.log(haftaici.pop());

haftaici.unshift("1.gün")
haftaici.unshift("2.gün")

console.log(haftaici.join(" * "));


var teksayilar = [1,5,7,3];
var ciftsayilar = [2,4,6,8];

console.log(teksayilar);
console.log(ciftsayilar);

console.log(teksayilar.concat(ciftsayilar).sort());

console.log(teksayilar);
console.log(teksayilar.sort());
console.log(teksayilar);

var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var arr4 = arr1.concat(arr2,arr3);

console.log(arr4);

console.log(arr4.splice(2,5));

console.log(arr4);

var arr5 = arr1.concat(arr2,arr3);

console.log(arr5);

// koşulu sağlayan ilk değr first
var first = arr5.find((value,index,arr)=>{
    // if(value%2 == 0){
    //     return value
    // }
    return value > 4
});

console.log(first);

console.log(teksayilar.reverse());

var numbers = [
    Math.floor(Math.random()*100) + 1,
    Math.floor(Math.random()*100) + 1,
    Math.floor(Math.random()*100) + 1,
    Math.floor(Math.random()*100) + 1,
    Math.floor(Math.random()*100) + 1,
    Math.floor(Math.random()*100) + 1
]


console.log(numbers);
//console.log(numbers.sort((a,b) => {return a - b;}));
var sortedNumbers = numbers.toSorted((a,b) => {return a - b;});
console.log(sortedNumbers);
console.log(numbers);



var newArray = numbers.map(
    (value,index,array) =>  
    {
        if(index%2 == 0){
            array[index] = 1;
            return value/2;
        }
            
        else{
            array[index] = -1;
            return value;
        }
            
    });

console.log(newArray);

var counter = 0;
console.log(numbers);

numbers.forEach((value) =>{
    if(value == 1){
        counter++;
    }
})

console.log(counter);


var matrix = [];

var row1 = [1,3,5];
var row2 = [2,4,6];
var row3 = [7,8,9];

matrix[0] = row1;
matrix[1] = row2;
matrix[2] = row3;

console.table(matrix);

console.log(matrix[0][2]);