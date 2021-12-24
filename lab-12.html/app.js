//Лаборатори 10
//////1.
var area, r, p;
p = 3.14;  
r = parseFloat(prompt("radius"));
area = p*r*r;
alert("toirgiin talbai:" + area);

//2
var zogsoold_zogsson_tsag =  prompt(parseInt("Zogsson tsag:"));
b){b=b||a;for(var c=0,d=0,e={};d<a.length;){var f=a[d++],g=s_za(f)?"o"+s_Aa(f):(d;e++)if(!c(a[e],b[e]))return!1;return!0},s_Ca=function(a,b){return a>b?1:a<b?-1:0},s_saa=function(a,b){return a===b},s_taa=function(a,b){var c={};s_Fa(a,function(d,e){c[b.call(void 0,d,e,a)]=d});return c},s_Ga=function(a,b,c){var d=[],e=0,f=a;c=c||1;void 0!==b&&(e=a,f=b);if(0>c*(f-e))return[];if(0<c)for(a=e;a<f;a+=c)d.push(a);else for(a=e;a>f;a+=c)d.push(a);return d},s_uaa=function(a,b){for(var c=
[],d=0;d<b;d++)c[d]=a;return c},s_vaa=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192)for(var f=s_vaa.apply(null,s_oaa(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b},s_waa=function(a,b){a.length&&(b%=a.length,0<b?Array.prototype.unshift.apply(a,a.splice(-b,b)):0>b&&Array.prototype.push.apply(a,a.splice(0,-b)));return a},s_Ha=function(a){throw a;throw Error("D");},s_xaa=function(a,b){if(a)throw Error("M");


//3
const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1); 

var x1 = 1
var y1 = 5

var x2 = 4
var y2 = 5

var d = distance(x1, y1, x2, y2)

console.log(`Хоорондын зай (${x1}, ${y1}) ба (${x2}, ${y2})  байна ${d}`);

//4. Дараах утгын мужаас n санасмаргүй тоо сонгох илэрхийллийг бич.
a) 1 ≤n ≤2
b) 1 ≤n ≤100
c) 0 ≤n ≤9
d) 1000 ≤n ≤1112
e) –1 ≤n ≤1
f) –3 ≤n ≤11
a)
function randomNumber(min, max) { 
      return Math.random() * (max - min) + min;
  } 
    
  document.write("1 nees n ") 
    
  
  document.write( randomNumber(1, 2) ); 
b)
function randomNumber(min, max) { 
      return Math.random() * (max - min) + min;
  } 
    
  document.write("1 nees n ") 
    
  // Function call
  document.write( randomNumber(1, 100) );
c)
function randomNumber(min, max) { 
      return Math.random() * (max - min) + min;
  } 
    
  document.write("1 nees n ") 
    
  // Function call
  document.write( randomNumber(0, 9) );

d)
function randomNumber(min, max) { 
      return Math.random() * (max - min) + min;
  } 
    
  document.write("1 nees n ") 
    
  // Function call
  document.write( randomNumber(1000, 1112s) );
//5
console.log(3 ** 4);

console.log(10 ** -2);

console.log(2 ** 3 ** 2);

console.log((2 ** 3) ** 2);

//6
var a = prompt(parseInt("ehnii utga")); 
var b = prompt(parseInt("hoyrdoh utga"));

if ((a % b) == 0) {
    console.log("true");
}
else {
    console.log("false");
}

///7
const number = prompt("Too ");

if(number % 2 == 0) {
    console.log("Tegsh");
}

else {
    console.log("sondgoi");
}

//8
//a
var a =  15;
var b = 3;
noogdvor = a / b;
console.log(noogdvor);

//b
var a = 20;
var b = 3;
uldegdel = a % b;
console.log(uldegdel);

//c
function bfs(x, num)
{
      
    
    let q = [];
    q.push(num);
  
    
    while (q.length != 0) 
    {
        num = q.shift();
          
        if (num <= x) 
        {
            document.write(num + " ");
            let last_digit = num % 10;
  
            
            if (last_digit == 0) 
            {
                q.push((num * 10) + (last_digit + 1));
            }
  
            
            else if (last_digit == 9)
            {
                q.push((num * 10) + (last_digit - 1));
            }
  
           
            else 
            {
                q.push((num * 10) + (last_digit - 1));
                q.push((num * 10) + (last_digit + 1));
            }
        }
    }
}
  

function printJumping(x)
{
    document.write("0 ");
    
    for(let i = 1; i <= 9 && i <= x; i++)
    {
        bfs(x, i);
    }
}
  

let x = 40;
printJumping(x);
  

//9
//a
cToF(60);
fToC(45);
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

//b
function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

//c
var fToC = prompt(parseInt("utga:"));
function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

//10
var x = prompt(parseInt("ehniih:"));
var y = prompt(parseInt("hoyrdoh:"));
var z = prompt(parseInt("guravdah:"));
var m = Math.min(x, y,z);

// 11
a = prompt(parseInt("dun:"));
medeelel(a);

function medeelel(avgDun) {
      switch(true) {
            case avgDun >= 90 :
                  console.log("A");
                  break;
            case avgDun < 90 && avgDun >= 80 :
                  console.log("B");
                  break;
            case avgDun < 80 && avgDun >= 70 :
                  console.log("C");
                  break;
            case avgDun < 70 && avgDun >= 60 :
                  console.log("D");
                  break;
            default:
                  console.log("F");
      }
}

//12
let coin = document.querySelector(".coin");
let flipBtn =  document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");


let heads = 0;
let tails = 0;


flipBtn.addEventListener("click",()=>{




      let i = Math.floor(Math.random() * 2);
      coin.style.animation = "none";

      if(i) {
            setTimeout(function(){
                  coin.style.animation = "spin-heads 3s forwords"}, 100);
                  heads++;
            } 
      else {
            setTimeout(function(){
                  coin.style.animation = "spin-heads 3s forwords"}, 100);
                  tails++;
      }
      setTimeout(updateStats,3000);
      disableButton();
})

function updateStats() {
      document.querySelector("#heads-count").textContent ='heads: $(heads) ';
      document.querySelector("#tails-count").textContent ='tails: $(tails) ';}


function disableButton () {
      flipBtn.disabled = true;
      setTimeout(function(){
            flipBtn.disabled = false;
      }, 3000);
}

resetBtn.addEventListener("click", () =>{
      coin.style.animation = "none";
      heads = 0;
      tails = 0;
      updateStats();
});