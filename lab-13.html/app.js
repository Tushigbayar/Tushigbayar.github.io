// 1 Дараах хоосон зайг нөхнө үү.
//a) Жаваскрипт утгуудын жагсаалтыг  санах ойд хадгалдаг.
//b) 4 элементтэй p массивын нэрс бол p[0], p[1], p[2], p[3] юм.
//c) 2 хэмжээст хүснэгтэд эхний индексээр хүснэгтийн мөр, хоёр дахь индексээр хүснэгтийн багана-г тодорхойлдог.
//d) mxn хүснэгт нь ___m+1__ мөр, ___n+1__ баганатай байх ба нийт ____(m+1)*(n+1)_ элементүүдийг агуулна. 
//e) d хүснэгтийн 3-р мөр, 5-р баганийн элементийн нэр бол d[2,4]юм



//2. Дараах тодорхойлолтуудын үнэн худлыг тодорхойл. Хэрэв худал бол шалтгааныг тайлбарла?
//a) Массив доторх тодорхой байршил эсвэл элементэд хандахын тулд бид массивын нэр, элементийн утгыг зааж өгдөг.
//true
//b) Нэг хувьсагч зарлахад массивт зайг нөөцөлж өгдөг.
//хувьсагч зарлахаас өмнө массивийн зайг бэлддэг.
//c) p[100] элементэд хандахын тулд өмнө нь заавал 100 хүртэлх элементүүдийг нөөцөлсөн байх хэрэгтэй.
//массивд уг өгөгдөөгүй хүснэгтийн элемэнт дэхь утгийг автоматаар , гэж өгдөг.
//d) 15-н ширхэг элементтэй массивт 0 анхны утгуудыг олгохын тулд дор хаяж нэг for илэрхийлэл бичих хэрэгтэй.
//нэг for давталтаар 1 мөр бүхий массивийн бүх утгыг ижил элемэнтээр орлуулж болох юм.
//e) 2 хэмжээст массивын бүх элементүүдээр гүйхдээ үүрэлсэн давталт ашиглаж хэрэгтэй.
//true


//3. Дараах даалгаварт тохирсон жаваскрипт илэрхийллүүдийг бичнэ үү.
//a) f массивын 7-р элементийн утгыг дэлгэцлэ.
var f = ["Banana", "Orange", "Lemon", "Apple", "Mango","Acavode", "Pineapple","Citrus"];
console.log(f[7]);
//b) Нэг хэмжээст 5 урттай g массивын элемент бүрт 8 гэсэн анхны утга олго.
const cars = ["Saab", "Volvo", "BMW","vogvo","excel","land", "toyota","nissan"];
console.log(cars.fill(8));
//c) 100 ширхэг тоон утга бүхий элементүүдтэй массивын нийт элементүүдийн нийлбэрийг ол.
var a = new Array (100);
for (var i = 0; i < a.length; ++i)
{
      a[i] = 2 * i
}
//d) 34 урттай b массивын эхэнд а массивын 11 элементийг хуулна уу.
//e) Бутархай төрлийн 99 элементтэй w массивын хамгийн их, хамгийн бага утгыг олж хэвлэ.


//4. Бүхэл тоон утгууд хадгалах 2х3 хэмжээтэй t массивын хувьд
//a) T массивийг зарлах болон үүсгэх кодыг бич.
var t  = [[0,1], [2,3], [4,5]];
// /b) T массив хэдэн мөртэй вэ?
3
// /c) T массив хэдэн баганатай вэ?
3
// /d) T массив хэдэн элементтэй вэ?
6
//e) 1-р мөрийн бүх элементийг нэрлэ.
0
//f) 3-р баганын бүх элементийг нэрлэ.
5
//g) 1-р мөрийн 2-р баганын нэг элементийг 0 болгох кодыг бич.
//h) T массивын бүх элементийг 0 болгох кодыг бичнэ үү. Давталт ашиглахгүй.
//i) T массивын хамгийн бага утгыг олж паттернлэх кодыг бич.
//j) T массивын эхнийн мөрийн элементүүдийг дэлгэцлэх үйлдлийг давталт ашиглахгүйгээр бич.
//k) T массивын элементийг хүснэгт хэлбэртэй хэвлэх кодыг бич.
//l) Баганын индексийг дээрээс доош, мөрийн индексийг зүүнээс баруун руу хэвлэх


//5. Нэгэн компани борлуулагч нартаа 7 хоногт 400.000 төгрөг мөн дээр нь зарсан барааны үнийн дүнгийн 9% тай тэнцэх урамшуулал өгдөг. Жишээ нь: борлуулагч 1 долоо хоногт 5 саяын
//борлуулалт хийсэн бол 400000 + 5000000*0.09 =650000 төгрөг авна.
//HTML формоор ажилтан бүрийн борлуулалтын дүнг хэрэглэгчээс авч массивт хадгал. Дараа нь доорх цалин бүрийг хэдэн ажилтан авсныг тооцож гарга. Цалинг тооцохдоо бүхэл тоо рүү хөрвүүлж тоймлоно уу.
//1. $200–299 2. $300–399
//3. $400–499 4. $500–599
// /5. $600–699 6.$700–799
//7. $800–899 8. $900–999
//9.1000- дээш


//6. Нэг хэмжээст массивын хувьд доорх үйлдлүүдийг гүйцэтгэх скриптийг бичнэ үү.
//a) Массивын 10 элементэд 0-г өг.
// /b) 15 элементтэй массивийн элемент бүрийг 1-ээр нэмэгдүүл
//c) bestScore массиваас 5 элементийг зайгаар тусгаарлан хэвлэ.


// /7. Нэг хэмжээст массив ашиглаж доорх асуудлыг шийдэх кодыг бичнэ үү. Хэрэглэгчээс 10-аас 100 хүртэлх 10 ширхэг тоог ав. Тоог авах болгонд хэрвээ уг тоо нь өмнө нь хэвлэгдээгүй бол дэлгэцэнд хэвлэ.


//8. Хоёр шоог хаялтыг боловсруулах скрипт бич. Скрипт эхний шоо болон хоёр дох шоог орхихдоо Math.random хэрэглэнэ. Дараа нь хоёр шооны нийлбэрийг тооцол. Шоо бүр 1-ээс 6 гэсэн бүхэл утга авах учраас 2 шооны нийлбэр 2-оос 12 байна. Таны програм шоог 36 удаа орхино. Нэг хэмжээст массив ашиглан шоо орхилт бүрийн нүднүүдийн нийлбэрийг тоол. Үр дүнг буюу массивыг HTML5 хүснэгт ашиглан харуулна.


//9. (Анхны тоо) Анхны тоо нь нэгээс их бүхэл тоо бөгөөд зөвхөн өөртөө болон 1-т хуваагддаг. Анхны тоог олох алгоритм нь дараах байдлаар ажиллана :
//a) Бүх элементүүдэд 1 (үнэн) анхны утга оноосон массив үүсгэнэ. Анхны тоотой массивын элементүүд утга 1 хэвээр үлдэж бусад анхны тоо биш массивын элементүүдэд 0-г олгоно.


//b) Эхний хоёр элементийг 0 болгоно. Учир нь 0 ба 1 нь анхны тоо биш юм. Массивын индекс 2-с эхэлж, 1 утгатай элемент олдох бүрт массивын үлдсэн элементүүдээр гүйж үржвэрт нь 1 утгатай элементийн индекс орсон байвал 0 утга онооно. Жишээ нь 2-р массивын индексийн хувьд массив доторх 2-н бүх үржвэр индексүүдтэй (индекс 4, 6, 8, 10 гэх мэт) элементийн утгууд 0 болно. Үүнтэй ижлээр массив индекс 3-т, массив доторх 3-н бүх үржвэр индексүүдтэй (индекс 6, 9, 12, 15 гэх мэт) элементийн утгууд 0 болно гэх мэт. Энэ процесс дуусахад 1-д утгатай массив элементүүдийн индекс нь анхны тоонууд байх ба эдгээр
//индексүүдийг хэвлэнэ. Дээрх алгоритмаар 1000 элементтэй массив ашиглан 1-999 хүртэлх анхны тоонуудыг хэвлэж гарга.



