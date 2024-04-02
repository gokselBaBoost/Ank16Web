var date = new Date();
console.log(date);

date = new Date("2030-03-19 19:07:05");
console.log(date);
console.log(date.getDate());
console.log(date.getDay()); // Haftanın gün sayısı 0 Pazar - 6 Cumartesi

console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log(date.getMonth()); // yılın hangi ayında olduğunu index olarak 0 Ocak - 11 Aralık

console.log(date.getTime()/1000/60/60/24/365);

console.log(date.getUTCHours());

console.log(new Date(2010,5,10,12,34,56,1230).toISOString());
console.log(new Date(2010,5,10,12,34,56,1230).toDateString());
console.log(new Date(2010,5,10,12,34,56,1230).toTimeString());

console.log(new Date(2010,5,10,12,34,56,1230).toLocaleDateString());

var d = new Date(2010,5,10,12,34,56,1230).setMonth(8);

console.log(new Date(d));