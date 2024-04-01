// let numbers = [22, 27, 35, 69, 1463, 15, 48];
// //verilmish arrayda tek ededlerin ustune 2 gelib yazdirin

// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] % 2 == 0) {
//     console.log(numbers[index] + 2);
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i]%2==1) {
//     console.log(numbers[i]);
//   }
// }

//27,32,40
//2.verilmish arrayda her bir ededin 5vahid artirib yazin
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]+5);

// }

//3. verilmish arrayda tek ededlerin ustune 2 gelib yazdirin
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]%2!=1){
//         console.log(numbers[i]+2)
//     }
// }

// let myName='Fidan'
// myName.length=5

// let students = [
//   "Sebine",
//   "Nurlana",
//   "Narmin",
//   "Leyla",
//   "Kamil",
//   "Diana",
//   "Ismayil",
//   "Inji",
//   "Alirza",
// ];
// //herflerinin sayi 6 olan adlari konsolda yazdir

// for (let i = 0; i < students.length; i++) {
//   if (students[i].length==7) {
//     console.log(students[i]);
//   }
// }

// let a = 4;
// let b = 7;
// let c = 16;
// if(a>b){
//     alert("a b den kicikdir")
// }

// eger a+b cden kicikdirse konsolda yazsin ki kicikdirse
// boyukdurse yazsin boyukdurse
// beraberdirse yazsin beraberdir

// let menimEdedim=prompt("eded daxil edin: ")
// let myName=prompt("adinizi daxil edin")

// User yaşını daxil etməlidir. prompt
// Əgər userin yaşı 18-dən balacadırsa  if sherti
// xəbərdarlıq mesajı çıxarsın  alert
// let age = prompt("yasinizi daxil edin:");
// if (age < 18) {
//   alert("yasiniz catmir");
// }

// a, b və c ədədlərimiz var. ax^2+bx+c=0
//  kvadrat tənliyinin həllini tapıb
//  konsolda çap edin.

// let a = prompt("a ededini daxil edin: ");
// let b = prompt("b ededini daxil edin: ");
// let c = prompt("c ededini daxil edin: ");

// let discriminant = b * b - 4 * a * c;

// if (discriminant > 0) {
//   let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//   let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//   alert(root1 + " ve " + root2);
// } else if (discriminant == 0) {
//   let root = -b / (2 * a);
//   alert(root);
// } else {
//   alert("helli yoxdur");
// }

// let a = prompt("a ededini daxil edin:");
// let b = prompt("b ededini daxil edin:");
// let c = prompt("c ededini daxil edin:");

// let discriminant = b * b - 4 * a * c;

// if (discriminant > 0) {
//   let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//   let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//   alert(root1 + "ve" + root2);
// } else if (discriminant == 0) {
//   let root = -b / (2 * a);
//   alert("bir kok var" + root);
// } else {
//   alert("kok yoxdur");
// }

// if(disc<0)  koku yoxdur
//  else if (disc>0)
//  let root1=(-b + Math.sqrt(discriminant)) / (2 * a);
// let root2=(-b - Math.sqrt(discriminant)) / (2 * a);
// else let root=(-b)/ (2 * a);

// istifadeci 2 eded daxil edir
// a ve b  prompt
// a dan bye qeder 7e bolunen ededleri alertde yazdirin

// let a = prompt("a ni daxil edin");
// let b = prompt("b ni daxil edin");
// if (a < b) {
//   for (let number = a; number <= b; number++) {
//     if (number % 7 == 0) {
//       console.log(number);
//     }
//   }
// }
// else {
//   alert("a ededi b-den kicik olmalidir");
// }

var students = [
  { id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95 },
  { id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77 },
  { id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98 },
  { id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54 },
  { id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100 },
  { id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35 },
  { id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95 },
  { id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95 },
  { id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100 },
];
let say = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i].name.length <= 5) {
    say++;
  }

}
console.log(say);




