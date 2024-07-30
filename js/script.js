// 1. 2 ədədin fərqini hesablayan function yazın,əgər 1-ci rəqəm ikincidən böyükdürsə.
let a, b;
function subsrt(a, b){
    return a - b;
}
console.log(subsrt(12, 6)); // output = 6

// 2. Əgər ədəd cüt ədəddirsə,onun kök altı dəyərini hesablayan function yazın
const a = prompt("Enter a number"); // input = 119
const answer = a => a % 2 == 0? console.log(Math.sqrt(a)) : console.log("NO");
answer(a); // output = NO

// 3. Ekrandan daxil edilən(promp) data-nın cüt olub olmadığını yoxlayan metod yazın.
const a = prompt("Enter a number"); // input = 19
function isEven(a){
    if(a % 2 == 0) return true;
    else return false;
}
console.log(isEven(a)); // output = false

// 4. Ekrandan daxil edən rəqəmin tipinin Nan olub olmadığını yoxlayan method yazın
const a = prompt("Enter a number"); // input = Hi
console.log(isNaN(a)); // output = false

// 5. Bir mətndə olan boşluqların sayını hesablayan function yazın.
let str = " Nigar Asadova Rasim ", count = 0;
function spaceCount(str){
    for(let i = 0;i < str.length;i++){
        if(str[i] == ' ') count++;
    }
    return count;
}
console.log(spaceCount(str)); // output = 4

// 6. Əgər mətn mövcuddursa onun icərisindəki , -lərin sayını hesablayan method yazın.
var str ='three-apple and two-melon', count = 0;
function calcDashes(str){
    for(let i = 0;i < str.length;i++){
        if(str[i] == '-') count++;
    }
    return count;
}
console.log(calcDashes(str)); // output = 2

// 7. Mətnin 2 və 6 -cı indxində olan hissəni kəsib ekrana çıxarın
var str ='three apple and two melon';
console.log(str.slice(2, 7)); // output = ree a

// 8. Mətndəki boşluqların sayına görə bölüb array-ə çevirin.
var str ='three apple and two melon';
console.log(str.split(" ")); // output = (5) ['three', 'apple', 'and', 'two', 'melon']

// 9. Mətnin bütün hərflərini böyük edən bir method yazın
var str ='three apple and two melon';
console.log(str.toLocaleUpperCase()); // output = THREE APPLE AND TWO MELON

// 10. Mətnin bütün hərflərini kiçik edən bir method yazın
var str ='three apple and two melon';
console.log(str.toLocaleLowerCase()); // output = three apple and two melon

// 11. Bir mətn daxil edin və 4-cü indexdə yerləşən char-ın   'n' hərfi olub olmadığını yoxlayın.
var str = 'admin panel';
if(str.charAt(4) == 'n') console.log(true); // output = true
else  console.log(false);

// 12. Bir array teyin et və sonuncu index-dəki dəyər ilə 1-ci indexdəki dəyərin cəmini başka bir stringdə ekrana çıxar.
var str = 'admin panel';
let str2 = str.charAt(0) + str.charAt(str.length - 1);
console.log(str2); // output = al

// 13. Bir array təyin et və sonuncu index-ə 'Salam' deyerini menimset
myArray = new Array;
myArray[myArray.length] = 'Salam';
console.log(myArray); // output = ['Salam']

// 14. Array təyin et və uzunluğunu hesablayan bir alqorihtm yaz.
let myArray = [12, 34, 'Hii'];
console.log(myArray.length); // output = 3

// 15. Bir mətndəki sözlərin sayını hesablayan alqorithm yaz.
var str = 'admin panel is not working';
let words = str.split(' ');
console.log(words.length); // output = 5

// 16. İki random eded teyin et ve onlarin cemini hesablayan alqorithm yaz
let number1 = Math.round(Math.random() * 10);
let number2 = Math.round(Math.random() * 10);
function sum(a, b){
    console.log(a + ' + ' + b + ' = ' +(a + b));
}
sum(number1, number2); // output 2 + 9 = 11

// 17. 5-dən 26-ya qədər ədədlərin ədədi ortasını tapıb çap edin
let count = 0, sum = 0;
for(let i = 5; i <= 26;i++){
    sum += i;
    count++;
}
console.log(sum / count); // output = 15.5

// // 18. 10 ilə 100 arasındakı ədədlərdən yalnız cüt olanları mətn formatında ekrana çıxarın
var str = '';
for(let i = 10;i <= 100;i++){
    if(i % 2 == 0) str += i +', ';
}
console.log(str); // output = 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 

// // 19. 0-dan 40-a qədər ədədlər içərisindən 10 a bölünən ədədləri ekrana çıxarın
for(i = 0;i <= 40;i++){
    if(i % 10 == 0) console.log(i);
} // output = 0 10 20 30 40
// // 20. Hər hansı bir ədəd daxil edin və onun 3-ə bölünən olub olmadığını yoxlayan bir alqorithm yazın
let number = 13;
if(number % 3 == 0) console.log('Yes');
else console.log("No"); // output = No

// // 21. 30 ilə 40 arasındakı ədədlərin cəmi ilə hasilinin ədədi ortasını tapın
let sum = 0, pro = 1;
for(let i = 30;i <= 40;i++){
    sum += i;
    pro *= i;
}
console.log((sum + pro) / 2); // output = 46139857860096190

// // 22. 0-dan 100-ə qədər ədədlərdən 10 və ya 70 istisna olmaqla digərlərini ekranda string formasında çap edin, hemcinin stringin uzunlugunu gosterin.
var str = '';
for(let i = 0;i <= 100;i++){
    if(i == 10 || i == 70) continue;  
    else str += i +' ';
}
 console.log(str); // output = 0 1 2 3 4 5 6 7 8 9 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 

// 23. 0-dan 100-ə qədər ədədlərdən 20dən kiçik və 50-dən böyük olanların ayrılıqda cəmini hesablayəın
let sum = 0;
    for(let i = 0;i <= 100;i++){
        if(i < 20 || i > 50) sum += i;
}
console.log(sum); //output =  3965

// // 24. İcerisinde 5 string tipli data olan array teyin edin, ve uzunlugu 5-den yuxari olan datalari baska bir arraya menimsedib ekrana cixarin
let myStringArray = ['gooogle', 'edge', 'instagram', 'facebook','mail'];
let secondArray = [];
for(let i = 0;i < myStringArray.length;i++){
    if(myStringArray[i].length > 5) secondArray.push(myStringArray[i]);
}
console.log(secondArray); // output = (3) ['gooogle', 'instagram', 'facebook']

// 25. Bir metn teyin edin ve icerisinde reqem olub olmadigin i yoxlayin, eger reqem varsa hemin reqemleri baska bir stringe menimsedin,diger metnden ise silin.
let str = '12Nigar is65 writing a2 letter1', numbers = '';
for(let i = 0;i < str.length;i++){
    if(!isNaN(str[i]) && str[i] != ' ') {
        numbers += str[i];
        str = str.replace(str[i], '');
        i--;
    }
}
console.log(numbers, ' ', str); //output =  126521   Nigar is writing a letter

// 26. Bir metn teyin edin ve içerisinde olan "i" hərflərinin hamısını silin
let str = 'Nigar is writing a letter';
for(let i = 0;i < str.length;i++){
    if(str[i] == 'i') str = str.replace('i', '');
    else continue;
}
console.log(str); //output = Ngar s wrtng a letter

// 27. Ekrandan bir eded daxil edin ve bu ededin palindrom olub olmadigini yoxlayan alqorithm yazin.
let randomNumber = prompt("Enter the number"); // input = 12321
let temp = randomNumber, reverseNumber = '';
while(temp != 0) {
    reverseNumber += temp % 10;
    temp = Math.floor(temp / 10);
}
if(reverseNumber == randomNumber) console.log(true); // output = true
else console.log(false);

// 29. Iki array teyin edin ve ikisini bir arraya menimsedib console-da cixarin
let myFirstArray = [12, 45, 67, 'Hi'];
let mySecondArray = [89, 23, 82, 'Hello'];
let myResultArray = myFirstArray.concat(mySecondArray);
console.log(myResultArray); // output =  (8) [12, 45, 67, 'Hi', 89, 23, 82, 'Hello']

// 30. Bir array teyin edin ve icerisinde olan cut ededlerin cemini tapin.
let myArray =[1, 3, 4, 5, 14, 53, 67, 23], sum = 0;
for(let i = 0;i < myArray.length;i++){
    if(myArray[i] % 2 == 0) sum += myArray[i];
}
console.log(sum); // output = 18