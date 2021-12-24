// Лаборатори 8
// 1. Дараах кодоос алдаа ол. Нэгээс олон алдаа байж болзошгүй.
// a) 
//for (x= 100, x >= 1 ++x)
document.writeln( x );


// Aldaagui code:
for (var x = 1; x <= 100; ++x )
 document.writeln(x);


// b) Дараах код value хувьсагчийн тэгш сондгой эсэхийг хэвлэнэ.
 //switch ( value % 2 ) {
    // case 0:
//document.writeln( "Even integer" );
      //case 1:
//document.writeln( "Odd integer" );
// /}


// Aldaagui code:
value = 2;
switch (value %= 2){
      case 0:
document.writeln("Even integer");
     case 1:
document.writeln("Odd integer");
}


// c) Дараах код 19-оос 1 хүртэлх сондгой тоонуудыг хэвлэнэ:
for (x= 19; x >= 1; x+=2 )
document.writeln( x );

//Aldaagui code
for (x= 19; x >= 1; x-=2 )
document.writeln( x );


// d) Дараах код 2-оос 100 хүртэлх тэгш тоонуудыг хэвлэнэ:
counter = 2;
do {
document.writeln( counter );
counter += 2;
 } while ( counter < 100 );


 //Aldaagui code
 counter = 2;
 do {
      document.writeln( counter );
      counter += 2;
       } while ( counter < 100 );

      
/// 2. Дараах скрипт юу хийж байгааг тайлбарлан бич.
//10 мөр Html хуудсанд хэвлэж харуулаж байна.
// 12 мөр утга нь 1ээс эхлээд 7 хүртэл нэгээр нэгмэгдэнэ. Html хуудсанд хэвлэж харуулж байна.
// 1ээс 5 нэгээр нэмэгдүүлж байна. Html хуудсанд эхний утга болон сүүлийн утгыг харуулж байна.
//document.writeln-аар текстүүдийг хэвлэж харуулж байна.


//3. 1-ээс 15 хүртэлх бүхэл тооны нийлбэрийг олоод HTML5 документад харуул.
function numSum(n){
      var sum = 0;
        for(i = 0; i <= n; i++){
          sum += i; 
           }
      document.writeln(sum)
           }
  numSum(15);

//4. prompt цонх ашиглан хэрэглэгчээс n тоог аваад 1-ээс n хүртэлх тоонуудын квадратын нийлбэрийг ол.
n = parseInt(prompt("n toog oruul:"));
sum = 0;
for (i=1; i<=n; i++)
     sum +=i*i;
document.writeln(n+ "hurtelh toonuudiin kvadratuudiin niilber ni:"  + sum);


//5. prompt цонх ашиглан хэрэглэгчээс 1-7 хооронд тоо авч харгалзах гаригийг бичиж харуул.
//Өөр утга оруулсан тохиолдолд “Буруу утга” гэж хэвлэ.
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

//6. prompt цонх ашиглан хэрэглэгчээс 1-30 хооронд 5 тоо аваад HTML5 документад тухайн
// //тоотой тэнцүү одыг (*) нэг мөрөнд хэвлэ. Жишээ нь эхний тоо 7 байвал эхний мөрөнд
//******* гэж хэвлэ.

let n = prompt("here");
let l = prompt("here");
let k = prompt("here");
let j = prompt("here");
let m = prompt("here");
let string = "";
for (let i = 1; i <= m; i++) {
    string += "*";
  }
  for (let i = 1; i <= j; i++) {
      string += "*";
    }
    for (let i = 1; i <= k; i++) {
        string += "*";
      }
      for (let i = 1; i <= l; i++) {
        string += "*";
    }
    for (let i = 1; i <= n; i++) {
        string += "*";
    }
  console.log(string);





// //7. i=1, j=2, k=3, m=2 бол дараах зааврууд ямар утга хэвлэх вэ?
//a) 
document.writeln( i == 1 );
true
//b) 
document.writeln( j == 3 );
false
//c) 
document.writeln( i >= 1 && j < 4 );
false
//d) 
document.writeln( m <= 99 && k < m );
false
//e) 
document.writeln( j >= i || k == m );
true
//f) 
document.writeln( k + m < j || 3 - j >= k );
false
//g)
document.writeln( !( k > m ) );
false

//8. k-ийн утга 1, 2, 3, 4, 10 байх үед x-ийн утга тус бүрд хэд байх вэ?
switch(k)
{
      case 1:
           break;
      case 2:
      case 3:
           ++k;
      case 4:
           --k;
           break;
      default:
            k*=3;
}
x=k
//x utga 1 baigaa uyd 1
//x utga 2 baigaa uyd 2
//x utga 3 baigaa uyd 3
//x utga 4 baigaa uyd 3
//x utga 10 baigaa uyd 30


      