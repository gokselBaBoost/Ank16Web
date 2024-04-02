function PopUpMessage(message){
    alert(message);
}

function Log(message, isPopupMessage = false){
    console.log(message);
    if(isPopupMessage)
        PopUpMessage(message);
}

var metin = "Merhaba dünya bugün hava çok güzel";

Log(metin.indexOf("e"));
Log(metin.lastIndexOf("h",10));

Log(metin.search(/e[rl]/g));
Log(metin.match(/e[rl]/g));
//Log();
Log(Array.from(metin.matchAll(/e[rl]/g)));

var a = 5;
var b = 12;

var word = `
Değer : ${a} + ${b} =  ${a+b}
            ad
ad

`;

Log(word);

var html = "<b>Merhaba</b><p>Selam</p>"

var html2 = `
<ul>
    <li>Kural 1</li>
    <li>Kural 1</li>
    <li>Kural 2</li>
</ul>`;

document.write(html2);

//document.body.innerHTML = html;

console.log(html2);

var text = "Bugün günlerden \"Salı\" \' test http:\\\\localhost\\Home\\Index?id=5 \n \t\t\t test \v \v\v ";
console.log(text);
document.write(text);