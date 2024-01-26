let mag1 = 12;
let mag2 = '20';
let mag3 = true;

mag1 = '10'; //теперь mag1 это тип данных string
mag2 = true; //теперь mag2 это тип данных boolean
mag3 = 20; //теперь mag3 это тип данных namber

/*
alert(mag1);
alert(mag2);
alert(mag3);
*/

let ageOfPerson1 = 18;
let ageOfPerson2 = '20';

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';

let initialValue1;
let initialValue2 = 0;

let iaJavaScriptProgrammer1 = true;//var устарел
let iaJavaScriptProgrammer2 = false;//var устарел

let helloText1 ="Hello!";
let helloText2 ="Привет!";

ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2, typeof ageOfPerson2);

nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2, typeof nameOfAnimal2);

//переменную с const нельзя переопределеить
console.log(bestProgrammingLanguage2,bestProgrammingLanguage1, typeof bestProgrammingLanguage2,bestProgrammingLanguage1);

initialValue2 = initialValue1;
console.log(initialValue2, typeof initialValue2);

iaJavaScriptProgrammer2 = iaJavaScriptProgrammer1;
console.log(iaJavaScriptProgrammer2, typeof iaJavaScriptProgrammer2);

helloText2 = helloText1
console.log(helloText2, typeof helloText2)