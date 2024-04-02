function PopUpMessage(message){
    alert(message);
}

function Log(message, isPopupMessage = false){
    console.log(message);
    if(isPopupMessage)
        PopUpMessage(message);
}

Log(Math.PI);
Log(Math.E);

Log(Math.ceil(4.3)); // her zaman yukarı
Log(Math.ceil(4.7));

Log(Math.floor(4.3)); // her zaman aşağı
Log(Math.floor(4.7));

Log(Math.round(4.4)); // .5 ve üstü yukaru .5in altında kalırsa aşağı yuvarlar
Log(Math.round(4.7));

Log(Math.pow(2,3)); // üstel işlem 2 in 3 cü kuvveti
Log(Math.sqrt(9));

Log("-------------");

Log(Math.min(5,3,8,12,6,9,-5));
Log(Math.max(5,3,8,12,6,9,-5));

Log(Math.E);
Log(Math.pow(Math.E,2));
Log(Math.exp(2));

Log(Math.floor((Math.random()*10)) + 1);
