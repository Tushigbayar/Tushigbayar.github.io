
//2.a
window.alert("Хоёр тоо оруулна уу?");

// 2.b
b = 10;
c = 5;
a = b * c;
console.log('b * c ni:' +  a)

// 2.c
undsen_tsalin = 800000;
niigmiin_daatgal = 10;
huvi_tootsoh = undsen_tsalin / 100 *10;
garDeer_avah = undsen_tsalin - huvi_tootsoh;
console.log('Gar deer avj bui tsalin:' +  garDeer_avah);

// 3
// a) Бүх жаваскрипт операторууд зүүнээс баруун тийш биелэгдэнэ
// Hudal: erembe, daraallaaraa ehelj ajillana

// b) Дараах нь бүгд зөв хувьсагчийн нэрнүүд: _under_bar_, m928134, t5, j7, her_sales$,
// his_$account_total, a, b$, c, z, z2.
// unen: huvisagchhid too useg _ holij bolno 

// c) Дараах нь бүгд буруу хувьсагчийн нэрнүүд: 3g, 87, 67h2, h22, 2h.
// Unen: huvisagch toogoor eheldeggui

// d) () хаалтгүй зөв бичигдсэн жаваскрипт илэрхийлэл зүүнээс баруун тийш биелэгдэнэ
// hudal: Erembeeree ehelj ajillana

// 4
// % ,  /,  **, *
// Dotor taliin () turuulj ajillana
// shhuurhai sanah oi 



// 9 Dugeer daalgavar
a = prompt('Duriin too:');
b = parseInt(a);
c =prompt('Hoyrdoh too:');
d =parseInt(c);
e = b + d;
f = b - d;
g = b * d;
h = b / d;
console.log('Niilber:' + e, 'Ylgavar:' + f, 'Urjver:' + g, 'Noogdvor:'  + h);

// 5.
// d)window.alert( (x + y)+ "=" +(y +x));

// 6.
// d)stringVal = window.prompt("Enter string:");

// 7.correctly answer
// y=a*x*x*x+7

// 8
// a.
x = 7+3*6/2-1;
console.log("x hariu:" +  x)
// ehleed 3*6=18, 18/2=9, 9-1=8, 7+8=15,  hariu:15

// b.
b = 2%2+2*2-2/2
console.log("b hariu:" +  b)
// ehleed 2%2=0, 2*2=4, 2/2=1, 0+4=4, 4-1=3, hariu:3

// c.
c = (3*9*(3+(9*3/(3))));
console.log("c hariu:" +  c)
// ehleed 3/3=1, 9*1=9, 9+3=12, 12*9=108, 108*3=324, hariu:324

// 10.
var First = parseInt(prompt("Ehnii too:"));
var Second = parseInt(prompt("Hoyrdoh too:"));
if (First > Second){
       console.log("First utga ih bna ");
} else if (Second > First){
       console.log("Second utga ih too bna");
} else if  (Second === First) {
      console.log(" First Second equal");
}else {
      console.log("utgagui");
}

// 11
var First = parseInt(prompt("Ehnii too"));
var Second = parseInt(prompt("Hoyrdoh too"));
var Third = parseInt(prompt("Guravdah too"));
total = First + Second + Third;
 window.alert("<p>Niilber:"+total+"</p>");
b = First * Second * Third;
window.alert("<p> Urjver:"+b+"</p>");

// 12
var area, r;
r = parseFloat(prompt("radius bolon toirgiin diametr oruulna uu:"));
area = 3.141*r*r;
alert("toirgiin urt:" + area);

// 13
var a = parseInt(prompt("Ehnii too:"));
var b = parseInt(prompt("Hoyrdoh too:"));
var c = parseInt(prompt("Guravdah too:"));
var d = parseInt(prompt("Duruvduh too:"));
var e = parseInt(prompt("Tavdah too:"));
var arr = [a, b, c, d, e];

var max = arr[0];

for(var i = 0; i < arr.length; i++) {
      if (arr[i] >= max ){
            max = arr[i];
      }
}

console.log("Hamgiin ih utga:" +  max);

// 14
var x = parseInt(prompt("Buhel too:"));
a = x%2;
if ( a < 1){
      alert("Eyreg too:");
}else  { 
      alert("Sondgoi too:");
} 

// 15
var a = parseInt(prompt("Ehnii too:"));
var b = parseInt(prompt("hoydoh too:"));
c = a / 2;
d = c % 1;
if (d > b || c == d ){
      console.log("Urjigdehuun mun");
}else {
      console.log("Urjidehuun bish");
}

// 16
const number_one = prompt("Ehnii too: ");
const number_two = prompt("Hoyrdoh too: ");
const number_three = prompt("Guravdah too: ");

if (number_one >= 0) {
    if (number_one == 0) {
        console.log("teg");
    } else {
        console.log("eyreg");
    }
} else {
    console.log("surug");
}
if (number_two >= 0) {
    if (number_two == 0) {
        console.log("teg");
    } else {
        console.log("eyreg");
    }
} else {
    console.log("surug");
}
if (number_three >= 0) {
    if (number_three == 0) {
        console.log("teg");
    } else {
        console.log("eyreg");
    }
} else {
    console.log("surug");
}