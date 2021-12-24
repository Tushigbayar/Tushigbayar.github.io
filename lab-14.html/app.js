//Даалгавар-1:

//өнөөдрийн огноог харуулах 
function printNow()
			{
				var curr = new Date();
                        window.alert("Одоогийн он сар өдөр " + curr.toString());
                  }

//24цагийн өмнөх огноог харуулах
function printYesterday() 
			{
				var yesterday = new Date();
				yesterday.setTime(yesterday.valueOf() - 24 * 60 * 60 * 1000);
				window.alert("Одоогоос 24 цагийн өмнөх он сар өдөр " + yesterday.toString());
			}
//10жилийн өмнөх он сар өдөр
function printTenYears()
			{	
				var tenYears = new Date();
				tenYears.setTime(tenYears.valueOf() - 10 * 365 * 24 * 60 * 60 * 1000);
				window.alert("10жилийн өмнөх он сар өдөр: " + tenYears.toString());
			}

//7хоногийн өмнөх он сар өдөр
                  function printOneWeek()
			{	
				var oneWeek = new Date();
				oneWeek.setTime(oneWeek.valueOf() -7 * 24 * 60 * 60 * 1000);
				window.alert("7 хоногийн өмнөх сар өдөр: " + oneWeek.toString());
			}

//Даалгавар-2:

//cell(x)
document.write(Math.ceil(9.2));
document.write (Math.ceil(-9.8));

//exp(x)
document.write( Math.exp(-1));
document.write( Math.exp(1));

//floor(x)
document.write(Math.floor(4.7));
document.write(Math.floor(-4.2));

//max(x,y)
document.write(Math.max( 2.3, 12.7 ));
document.write(Math.max( -2.3, -12.7 ));

//min(x,y)
document.write(Math.min(2.3,12.7));
document.write(Math.min(-2.3,-12.7));

//pow(x,y)
document.write(Math.pow(2, 7));
document.write(Math.pow(9, 5));

//round(x)
document.write(Math.round(9.75));
document.write(Math.round(9.25));

//sin(x)
document.write(Math.sin(0));

//sqrt(x)
document.write(Math.sqrt(900));
document.write(Math.sqrt(9));


//Даалгавар-3:
//a
var x = parseInt(prompt("Buhel too:"));
console.log(Math.floor(x));

//b
var z = parseInt(prompt("Buhel too:"));
console.log(Math.floor( z * 10 + .5 ) / 10);

//c
var a = parseInt(prompt("Buhel too:"));
console.log(Math.floor( a * 100 + .5 ) / 100);

//d
var b = parseInt(prompt("Buhel too:"));
console.log(Math.floor(b * 1000 + .5)/1000);

//Даалгавар-4:
const str = prompt("ehnii utga");
const rts = prompt("hoyrdoh text");
console.log(`${str} ${str.length}`);
console.log(`${rts} ${rts.length}`);

//Даалгавар-5:
const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });

//Даалгавар-6:
const myString = 'Mongold uvul bolj bna'
const splits = myString.split(' ', )
const str = 'adsaddsaasd'
const strReverse = str.split('').reverse().join('')
console.log(splits)

//Даалгавар-7:
// UpperCase
var text = parseInt(prompt("Text"));
console.log(text.toUpperCase());

//LowerCase
var sourceText = parseInt(prompt("Text"));
sourceText = sourceText.toLowerCase();
console.log(sourceText);

//Даалгавар-8:
const paragraph = prompt("Text");

const searchTerm = 'хайх';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`Нийт текст нь"${searchTerm}" ийм байна ${indexOfFirst}`);

console.log(`хоёрдох нь хайх гэдэг үг нь "${searchTerm}" бол ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);

//Даалгавар-9:
function Count(str)
      {
        var upper = 0,
          lower = 0,
          number = 0,
          special = 0;
        for (var i = 0; i < str.length; i++)
        {
          if (str[i] >= "A" && str[i] <= "Z") upper++;
          else if (str[i] >= "a" && str[i] <= "z") lower++;
          else if (str[i] >= "0" && str[i] <= "9") number++;
          else special++;
        }
        document.write("Том үсэг: " + upper + "<br>");
        document.write("Жижиг үсэг: " + lower + "<br>");
        document.write("Тоо : " + number + "<br>");
        document.write("Тэмдэгт: " + special + "<br>");
      }
 
      
      var str = prompt("Text");



//Даалгавар-10:
var str = prompt("Text");
var matches = str.match((/\б/)); 
var acronym = matches.join(''); 

console.log(acronym)

// Даалгавар-12:
var day =  parseInt(prompt("1-7 hoorond too:"));
var dayName;
switch (day) {
    case 1:
        dayName = 'Даваа гариг';
        break;
    case 2:
        dayName = 'Мягмар гариг';
        break;
    case 3:
        dayName = 'Лхагва гариг';
        break;
    case 4:
        dayName = 'Пүрэв гариг';
        break;
    case 5:
        dayName = 'Баасан гариг';
        break;
    case 6:
        dayName = 'Бямба гариг';
        break;
    case 7:
        dayName = 'Ням гариг';
        break;
    default:
        dayName = 'Утга буруу';
}
document.writeln(dayName); 

// Даалгавар-14: