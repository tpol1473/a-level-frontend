JavaScript

Useful links
https://developer.mozilla.org/ru/ MDN - Web docs
https://ru.stackoverflow.com/ StackOverflow - pull of solved dev problems
https://learn.javascript.ru/ - nice docs and tutorials
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators
https://doka.guide/js/typecasting/#neyavnoe-preobrazovanie-tipov
https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
https://github.com/denysdovhan/wtfjs#what-the-fck-javascript
https://www.destroyallsoftware.com/talks/wat


Content:
  - [#Lecture_1](#Lecture_1)
  - [#Lecture_2](#Lecture_2)
  - [#Lecture_3](#Lecture_3)
  - [#Lecture_4](#Lecture_4)
  - [#Lecture_5](#Lecture_5)
  - [#Lecture_6](#Lecture_6)
  - [#Lecture_7](#Lecture_7)
  - [#Lecture_8](#Lecture_8)
  - [#Lecture_9](#Lecture_9)
  - [#Lecture_10](#Lecture_10)
  - [#Lecture_11](#Lecture_11)




# Lecture_1

Created: 1995 (Netscape)
Author:  Brendan Eich
LiveScript => JavaScript
JS != Java
JS was created to make interactive Web pages

Several JS-engines in different browsers:
V8 - Chrome, Opera
SpiderMonkey - Firefox
Trident and Chakra for IE
SquirrelFish - Safari

ECMAScript - standardization organization

JavaScript is using for:
- Web-pages (for interactions with the page)
- Web-applications and PWA (React, AngularJS, Vue.js)
- Servers (Node.js(Express.js ))
- Native applications (Electron, NW.js )
- Mobile apps (React Native, Cordova)

We can do with JS:
- Add new HTML-code to the page, change existing markup and styles.
- Handle users events: clicks, inputs, keys press.
- Interact with user: show popups, alerts, etc.
- Send server requests (AJAX).
- Store data on client side (Local Storage, Session Storage)

Useful VSCode extension
- Auto Close Tag
- Auto Rename Tag
- Better Comments
- Prettier - Code formatter
- Bracket Pair Colorizer
- indent-rainbow
- Live server
- Code Spell Checker
- Live Share

How to include JS: option 1 (inline code)
<p>Before script executin</p>
<script>alert('Script execution');</script>
<p>After script executin</p>

How to include JS: option 2 (extra script files)
<script src="scripts/main.js"></script>




Markdown — язык разметки текстов. Такие тексты легко писать и читать. Их можно без труда сконвертировать в HTML. Большинство программистов предпочитают Markdown для написания документации, описаний своих проектов, написания блогов и так далее.
Что это значит?

«Язык разметки» — это просто набор соглашений, правил.

Допустим, что вы общаетесь с другом по СМС. В них нельзя сделать текст жирным или наклонным. Вы договариваетесь с другом: если я пишу *что-то* вот так между звездочками, то считай, что это наклонный текст. А если я пишу **что-то** между двумя звездочками, то считай, что это жирный текст. Вы придумали правила.

Markdown — это набор подобных правил.
Интенсив: «Верстка веб-приложений». Вся база за 2 месяца

Правила понятны разным программам и сайтам. Например, «Вопросы и ответы» в уроках на Хекслете поддерживают Markdown. Это значит, что вы можете писать туда тексты по правилам Markdown, а после нажатия «Отправить» разметка станет реальной: текст в одинарных звездочках станет наклонным, текст в двойных звездочках станет жирным и так далее. Это конвертация из Markdown в HTML.
Зачем это нужно?

    Для добавления разметки туда, где невозможна реальная разметка. Например, в простом текстовом файле или в тех же СМС, где невозможно выделение жирным, создание заголовков, выделение цитат и пр.
    Для более удобного написания текстов для последующей конвертации в HTML или другие форматы.

Синтаксис Markdown

Это краткий справочник основных элементов синтаксиса Markdown. Единого стандарта не существует и разные версии Markdown могут отличаться в деталях. Но базовые элементы из списка ниже поддерживаются во всех стандартах.
Выделение текста

*Этот текст будет наклонным (курсив)*
_Этот текст будет наклонным (курсив)_

**Этот текст будет жирным**
__Этот текст будет жирным__

_Можно **вставлять** один тип в другой_

Заголовки

# Это самый крупный заголовок, он превращается в тег <h1>
## <h2>
### <h3>
#### <h4>
##### <h5>
###### <h6>

Ссылки

https://hexlet.io — текст простой ссылки станет кликабельной ссылкой автоматически

Ссылкой можно сделать любой текст:

[Это ссылка на Хекслет](https://hexlet.io)

Цитата

> Это мудрая цитата
> Мудрого человека.

Картинки

![Это опциональный alt-текст](/assets/images/markdown/markdown.png)

Код

Для выделения кода (или любого неотформатированного текста) используются специальные символы — обратные тики: `

Иногда нужно добавить кусок кода `function(12);` в обычную строчку текста.

А иногда нужно вставить целый блок кода:

```javascript
const func = (num) => {
  if (num > 0) {
    return num - 1;
  }
  return num + 1;
};
```

Списки

Непронумерованный список:

* Пункт
* Еще один пункт
  * Подпункт
  * Еще один подпункт

Пронумерованный список:

1. Пункт
1. Еще один пункт
  1. Подпункт
  1. Еще один подпункт

В пронумерованном списке можно использовать любые числа — это не важно. При конвертации в HTML или другой формат числа станут правильными и последовательными (1, 2, 3 и т.д.).




# Lecture_2

How does computer understand my code?
Computers understand only machine code (0 and 1).
Compiler is a computer program that translates computer code written in one programming language (the source language) into another language (the target language).

The name "compiler" is primarily used for programs that translate source code from a high-level programming language to a lower level language.

Keywords to declare a variable:
var, let, const

Variables syntax
let lectureNumber = 2;
1. let - keyword
2.  - space
3. lectureNumber - variable name
4. = - equal symbol
5. 2 - value
6. ; - semicolon

Naming style
Camel Case - veryLongName
Snake Case - very_long_name
Kebab Case - very-long-name

// inline comment

/*
  multi lines
  comment
*/



# Lecture_3

Data Types: Basics
JavaScript - a loosely typed and dynamic typed language.
There are 8 different data types.

Variables:
- not directly associated with any particular type
- type can be re-assigned
```
let foo = 7;
foo = "now I'm a string";
foo = true;
```
	
String type
```	
const str1 = "double quotes";
const str2 = 'single quotes';
const str3 = `With backtick we can paste a variable or value: ${str1}`;
```	
Quotes types:
	
```
const str1 = "Hello";	
const str2 = 'Single quotes are awesome too';
const complexStr = `Whith backtick we can paste a variable or value: ${str1}`;	
```	
	
```	
double quotes (“ ”)
single quotes (‘ ‘)
backtick (` `) - helps us to build a “complex” string
```	

String Type: Backtick
```
const person = "John";

// Insert a variable
alert('Hello, ' + person + '!'); // Hello, John!

// Insert a variable with backtick
alert(`Hello, ${person}!`); // Hello, John!

// Insert and calculate an expression
alert(`result: ${1 + 2}`); // result: 3
```

Number Type
```
const num1 = 123;
const num2 = 25.435;

Numbers should be between (2**53 − 1) and 2**53 − 1)
9007199254740991 and -9007199254740991
```
Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.

Number type: corner cases
	
Infinity, -Infinity
	
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "some string" / 2 ); // result will be NaN

What if we need a number bigger than
9007199254740991

BigInt Type
```
// character "n" in the end stands for BigInt
const bigInt = 123456780123456789012345678901234567890n;
const sameBigint = BigInt("123456780123456789012345678901234567890");
```

Boolean type
```
const isEverythingClear = true;
const isBooleanHard = false;

const isGreater = 3 > 1;

alert(isGreater); // true (because 3 is bigger then 1)
```

‘null’ type
```
const age = null;
```

‘undefined’ type
```
let salary;

alert(salary); // undefined

let age = 18;
age = undefined;
alert(age); // undefined
```

Object type

```
const person = {
    name: 'Joe',
    age: 20,
    isStudent: true,
    greeting: () => alert('Hello!')
}
```


Symbol type

//Here are two symbols with the same description:
const Sym1 = Symbol("Sym")
const Sym2 = Symbol("Sym")

console.log(Sym1 === Sym2)  // return false
// Symbols are guaranteed to be unique
// Even if we create many symbols with the same description,
// they are different values.

How to check type of a variable ?
‘typeof’ operator

Syntax:
typeof x
typeof(x)

typeof 'foo'; // "string"
typeof 25; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof 10n; // "bigint"
typeof Symbol('id'); // "Symbol"
typeof null; // "object" (1)
typeof alert; // "function" (2)

Data types:
- primitives:
    - string - we can store 0 and more characters.
    - number -  integers and float numbers between ±(253-1).
    - bigint - for big integers.
    - boolean - true/false.
    - null -  when we need an empty value.
    - undefined - for unassigned or undefined values.
    - symbol - unique and immutable primitive values.
- object - more complex data structure

With operator 'typeof' we can check a type.

  
  
# Lecture_4

  Operators & Type Corection

  Operators:
    arithmetic operators
    assignment operators
    comparison operators
    logical operators

  Type coercion:
    to  string
    to number
    to boolean

Assignment operators
Список операторов присваивания Имя 	Сокращённый оператор 	Смысл
Присваивание (en-US) 	x = y 	x = y
Присваивание со сложением (en-US) 	x += y 	x = x + y
Присваивание с вычитанием (en-US) 	x -= y 	x = x - y
Присваивание с умножением (en-US) 	x *= y 	x = x * y
Присваивание с делением (en-US) 	x /= y 	x = x / y
Присваивание по модулю (en-US) 	x %= y 	x = x % y
Присваивание с левым сдвигом (en-US) 	x <<= y 	x = x << y
Присваивание с правым сдвигом (en-US) 	x >>= y 	x = x >> y
Присваивание с беззнаковым сдвигом вправо (en-US) 	x >>>= y 	x = x >>> y
Присваивание с побитовым AND (en-US) 	x &= y 	x = x & y
Присваивание с побитовым XOR (en-US) 	x ^= y 	x = x ^ y
Присваивание с побитовым OR (en-US) 	x |= y 	x = x | y

Деструктуризация

Для более сложного присваивания в JavaScript есть синтаксис деструктуризации - это выражение, которое позволяет извлекать данные из массивов или объектов, используя синтаксис, который зеркалирует конструкторы массивов и литералы объектов.
```
var foo = ["one", "two", "three"];

// без деструктуризации
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// с деструктуризацией
var [one, two, three] = foo;
```

Операторы сравнения Оператор 	Описание 	Примеры, возвращающие true
Равно (==) 	Возвращает true, если операнды равны. 	3 == var1 "3" == var1 3 == '3'
Не равно (!=) 	Возвращает true, если операнды не равны. 	var1 != 4 var2 != "3"
Строго равно (===) 	Возвращает true, если операнды равны и имеют одинаковый тип. Смотрите также Object.is и sameness in JS. 	3 === var1
Строго не равно(!==) 	Возвращает true, если операнды не равны и/или имеют разный тип. 	var1 !== "3"  3 !== '3'
Больше (>) 	Возвращает true, если операнд слева больше операнда справа. 	var2 > var1  "12" > 2
Больше или равно (>=) 	Возвращает true, если операнд слева больше или равен операнду справа. 	var2 >= var1  var1 >= 3
Меньше (<) 	Возвращает true, если операнд слева меньше операнда справа. 	var1 < var2  "2" < 12
Меньше или равно (<=) 	Возвращает true, если операнд слева меньше или равен операнду справа. 	var1 <= var2  var2 <= 5

Binary operators
3 + 5
x - y
(x) - operand 1
(-) - operator
(y) - operand 2

Unary operators
3++  // (3) - operand  (++) operator
x--
++5
--y

Arithmetic operators
+, -, *, /
```
const a = 3 + 5;
const b = 6 - 3;
const c = a * b;
const d = a / c;
```

Арифметические операторы

Арифметические операторы (en-US) используют в качестве своих операндов числа (также литералы или переменные) и в качестве результата возвращают одно числовое значение. Стандартными арифметическими операторами являются сложение (+), вычитание (-), умножение (*), и деление (/). При работе с числами с плавающей точкой эти операторы работают аналогично их работе в большинстве других языках программирования (обратите внимание, что деление на ноль возвращает бесконечность Infinity). Например:
```
console.log(1 / 2); /* возвращает 0.5 */
console.log(1 / 2 == 1.0 / 2.0); /* возвращает true */
```

Arithmetic operators
Оператор 	Имя 	Функция 	Пример
+ 	Сложение 	Объединение чисел в одно целое. 	6 + 9
- 	Вычитание 	Вычитает правое число от левого. 	20 - 15
* 	Умножение 	Умножает два числа вместе. 	3 * 7
/ 	Деление 	Делит левое число на правое. 	10 / 5
% 	Модуль числа 	

Возвращает значение остатка при делении первого числа на второе. Результат будет иметь тот же знак, что и первое число.
	
11 % 3 = 2 (поскольку число 3 вмещается три раза, остатком будет число 2)
** 	показатель степени 	Возводит базовое число в указанную степень, то есть количество базовых чисел, указанных экспонентой, умножается вместе. Впервые он был представлен в EcmaScript 2016. 	5 ** 5 (возвращает 3125, или как: 5*5*5*5*5)


Арифметические операторы Оператор 	Описание 	Пример
Остаток от деления (en-US) (%) 	Бинарный оператор. Возвращает целочисленный остаток от деления двух операндов. 	12 % 5 вернёт 2.
Инкремент (en-US) (++) 	Унарный оператор. Добавляет единицу к своему операнду. Если используется в качестве префикса (++x), то возвращает значение операнда с добавленной к нему единицей; а в случае применения в качестве окончания (x++) возвращает значение операнда перед добавлением к нему единицы. 	Если x равно 3, тогда ++x установит значение x равным 4 и вернёт 4, напротив x++ вернёт 3 и потом установит значение x равным 4.
Декремент (en-US) (--) 	Унарный оператор. Вычитает единицу из значения своего операнда. Логика данного оператора аналогична оператору инкремента. 	Если x равно 3, тогда --x установит значение x равным 2 и вернёт 2, напротив x-- вернёт 3 и потом установит значение x равным 2.
Унарный минус (en-US)- 	Унарный оператор. Возвращает отрицательное значение своего операнда. 	Если x равно 3, тогда -x вернёт -3.
Унарный плюс (en-US) (+) 	Унарный оператор. Пытается конвертировать операнд в число, если он ещё не оно. 	+"3" вернёт 3.  +true вернёт 1.
Возведение в степень (en-US) (**) 	Возводит основание в показатель степени, как, основаниестепень 	2 ** 3 вернёт 8.  10 ** -1 вернёт 0.1.

Приоритет операторов
```
var num1 = 10;
var num2 = 50;
9 * num1;
num2 / num1;

5 + 10 * 3;
num2 % 9 * num1;
num2 + num1 / 8 + 2;

num2 + num1 / 8 + 2;   //  10 делить на 8 равно 1.25", затем "50 плюс 1.25 плюс 2 равно 53.25".
(num2 + num1) / (8 + 2);  //  50 плюс 10 равно 60", затем "8 плюс 2 равно 10", и, наконец, "60 делить на 10 равно 6
```

Операторы инкремента и декремента

Иногда вам захочется повторно добавить или вычесть единцу к/из значению числовой переменной. Это можно сделать с помощью оператора инкремента (++) и декремента (--).
```
guessCount++;
let num1 = 4;
num1++;

let num2 = 6;
num2--;
num2;
```

Операторы присваивания

Операторы присваивания - операторы, которые присваивают значение переменным. Мы уже много раз использовали самый простой из них, =, он просто приравнивает значение переменной слева к значению справа:

```
var x = 3; // x содержит значение 3
var y = 4; // y содержит значение 4
x = y; // x теперь содержит значение y (x == 4)
```

Operator 	Name 	Purpose 	Example 	Shortcut for
+= 	Присваивание сложения 	Прибавляет значение справа к переменной слева и возвращает новое значение переменной 	x = 3; x += 4; 	x = 3; x = x + 4;
-= 	Присваивание вычитания 	Вычитает значение справа из переменной слева и возвращает новое значение переменной 	x = 6; x -= 3; 	x = 6; x = x - 3;
*= 	

Присваивание умножения
	Умножает переменную слева на значение справа и возвращает новое значение переменной 	x = 2; x *= 3; 	x = 2; x = x * 3;
/= 	Присваивание деления 	Делит переменную слева на значение справа и возвращает новое значение переменной 	x = 10; x /= 5; 	x = 10; x = x / 5;

значение справа может быть как числом (константой), так и переменной, например:

```
var x = 3; // x содержит значение 3
var y = 4; // y содержит значение 4
x *= y; // x содержит значение 12

let x = 50; let y = 50;

// Edit the two lines below here ONLY
x = 50;
y = 50;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);
```

Операторы сравнения

Иногда нам может понадобиться проверить какое-либо условие, а затем поступить в зависимости от результата - для этого мы используем операторы сравнения.
Оператор 	Имя 	Назначение 	Пример
=== 	Строгое равенство 	Проверяет левое и правое значения на идентичность 	5 === 2 + 4
!== 	Строгое неравенство 	Проверяет левое и правое значения на неидентичность 	5 !== 2 + 3
< 	Меньше 	Проверяет, меньше ли левое значение правого 	10 < 6
> 	Больше 	Проверяет, больше ли левое значение правого 	10 > 20
<= 	Меньше или равно 	Проверят, меньше ли левое значение правому (или равно ему) 	3 <= 2
>= 	Больше или равно 	Проверят, больше ли левое значение левого (или равно ему) 	5 >= 4

используют == и != в программах для сравнения на равенство и неравенство — это валидные JavaScript-операторы, но они отличаются от ===/!== — первая пара проверяет на равенство/неравенство значений, не рассматривая их типы. Вторая пара - строгая версия первой, которая проверяет типы операндов. При использовании строгой версии выявляется больше ошибок, поэтому мы рекомендуем использовать именно её.

```
<button>Запустить машину</button>
<p>Машина остановлена</p>
```
```
var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine id stopped.';
  }
}
```


Логические операторы
Оператор 	Использование 	Описание
Логическое И (en-US) (&&) 	expr1 && expr2 	(Логическое И) Возвращает операнд expr1, если он может быть преобразован в false; в противном случае возвращает операнд expr2. Таким образом, при использовании булевых величин в качестве операндов, оператор && возвращает true, если оба операнда true; в противном случае возвращает false.
Логическое ИЛИ (en-US)(||) 	expr1 || expr2 	(Логическое ИЛИ) Возвращает операнд expr1, если он может быть преобразован в true; в противном случае возвращает операнд expr2. Таким образом, при использовании булевых величин в качестве операндов, оператор || возвращает true, если один из операндов true; если же оба false, то возвращает false.
Логическое НЕ (en-US)(!) 	!expr 	(Логическое НЕ) Возвращает false, если операнд может быть преобразован в true; в противном случае возвращает true.

Примерами выражений, которые могут быть преобразованы в false являются: null, 0, NaN, пустая строка ("") или undefined.

Следующий код демонстрирует примеры использования оператора && (логическое И).
```
var a1 =  true && true;     // t && t возвращает true
var a2 =  true && false;    // t && f возвращает false
var a3 = false && true;     // f && t возвращает false
var a4 = false && (3 == 4); // f && f возвращает false
var a5 = "Cat" && "Dog";    // t && t возвращает Dog
var a6 = false && "Cat";    // f && t возвращает false
var a7 = "Cat" && false;    // t && f возвращает false
```

```
2==3 || 3==3;  // true
5!=5 || 1!=1;  // false
5!=5 || 1!=7;  // true
```

```
!false; // true
!true; // false
!'Some string'; // false
```

Следующий код демонстрирует примеры использования оператора || (логическое ИЛИ).
```
var o1 =  true || true;     // t || t возвращает true
var o2 = false || true;     // f || t возвращает true
var o3 =  true || false;    // t || f возвращает true
var o4 = false || (3 == 4); // f || f возвращает false
var o5 = "Cat" || "Dog";    // t || t возвращает Cat
var o6 = false || "Cat";    // f || t возвращает Cat
var o7 = "Cat" || false;    // t || f возвращает Cat
```

Следующий код демонстрирует примеры использования оператора ! (логическое НЕ).
```
var n1 = !true;  // !t возвращает false
var n2 = !false; // !f возвращает true
var n3 = !"Cat"; // !t возвращает false
```

Type corection: Explict
```
String(42); // convert to string
Number("42"); // convert to number
Boolean(42); // convert to boolean value
```

Type corection: to string
```
String(123); // "123"
String(-12.3); // "-12.3"
String(null); // "null"
String(undefined); // "undefined"
String(true); // "true"
String(false); // "false"
String(fanction() {}); // "fanction() {}"
String({}); // "[object Object]"
String({ key: 42 }); // "[object Object]"
String([]); // ""
String([1, 2]); // "1,2"
```
Type corection: to number
```
Number("123"); // 123
Number("-12.3"); // -12.3
Number("-12,3"); // NaN
Number(""); // 0
Number("null"); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0
Number(fanction() {}); // NaN
Number({}); // NaN
Number({ key: 42 }); // NaN
Number([]); // 0
Number([1]); // 1
Number([1, 2]); // NaN
```

Type corection: to boolean
```
Boolean(123); // true
Boolean(0); // false
Boolean(-12,3); // true
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
Boolean(fanction() {}); // true
Boolean({}); // true
Boolean({ key: 42 }); // true
Boolean([]); // true
Boolean([1]); // true
Boolean([1, 2]); // true
```

Type corection: (The Dark Side) Implict
Implicit conversion occurs when we force JavaScript to work with values of different types.
For example, if we want to "add" a number and a string:
```
5 + "3" === "53"
5 - "3" === 2
5 + "-3" === "5-3"
5 - +3 === 2
5 + -3 === 2
```

Implict type corection rules
  The interpreter will convert primitive values ​​to boolean if we use && or ||.
    objects are always true;  {} && 5; // true
  To string if we use + when one of the operands is a string.
  By the number if:
    we use arithmetic operations -, /, *.
    we use comparison operators <, <=, >, >=;
    We use unary plus +;    +'2' === 2; // true
    we use a loose comparison operator ==.

Implict type corection tricks
С числом и строкой всё немного интереснее. Чтобы определить, к строке приводить значение или к числу, JavaScript смотрит, какой из двух методов (valueOf и toString) в текущем объекте объявлен.
  Если перед нами не объект Date, то метод valueOf вызывается, обычно, первым (если не сильно углубляться в детали спецификации).
  Если возвращённое после этого значение — это примитив, то возвращается оно.
  Если нет, то вызывается другой метод (если valueOf не вернул примитив, то вызывается toString и наоборот).
  Если после этого вернулся примитив, возвращается он.
  Если даже после этого не вернулся примитив, то будет ошибка Uncaught TypeError: Cannot convert object to primitive value.

Implict type corection tricks example 1
```
// 1 Простой объект
const obj1 = {};
obj1.valueOf() // {}
obj1.toString() // "[Object Object]"

// Чтобы "сложить" число с объектом.
// вначале будет вызван obj.valueOf()
// Он вернет объект (непримитив),
// После чего будет вызван  obj.toString()

1 + obj1
// 1 + "[Object Object]"
// "1" + "[Object Object]"
// "1[Object Object]"

```

Implict type corection tricks example 2
```
// 2 Oбъект с указанным valueOf()
const obj2 = {};
obj2.valueOf = () => "obj2"
obj2.valueOf() // "obj2"
obj2.toString() // "[Object Object]"

// Теперь когда мы объявили .valueOf(),
// При вызове он будет возвращать строку,
// Т.к. строка - примитив,
// Она и будет использована при сложении

1 + obj2
// 1 + "obj2"
// "1" + "obj2"
// "1obj2"
```
```
// 2.1 Если же мы будем возвращать число
const obj3 = {};
obj3.valueOf = () => 42
obj3.valueOf() // 42
obj3.toString() // "[Object Object]"

1 + obj3
// 1 + 42
// 43
```

Сокращённая оценка

Так как логические выражения вычисляются слева направо, они проверяются на возможность выполнения сокращённой оценки с использованием следующих правил:
```
    false && anything - сокращение с результатом false.
    true || anything - сокращение с результатом true.
```
Правила логики гарантируют, что данные вычисления всегда корректны. Обратите внимание, что часть "anything" представленных выше выражений не вычисляется, таким образом удаётся избежать любых побочных эффектов вычисления данной части.


Строковые операторы

В дополнение к операторам сравнения, которые могут использоваться со строковыми значениями, оператор (+) позволяет объединить две строки, возвращая при этом третью строку, которая представляет собой объединение двух строк-операндов:
```
console.log("my " + "string");  // в консоли выведется строка  "my string".
```

Сокращённый оператор присваивания += также может быть использован для объединения (конкатенации) строк:
```
var  mystring = "alpha";  mystring += "bet"; // получается значение "alphabet" и присваивается mystring.
```
Условный (тернарный) оператор

Условный оператор является единственным оператором JavaScript, который использует три операнда.
Оператор принимает одно из двух значений в зависимости от заданного условия. Синтаксис оператора:

condition ? val1 : val2

   val1 и val2 обязательно должны что-то возвращать, поэтому в этой конструкции нельзя использовать continue или break

Если condition (условие) - истина, то оператор принимает значение val1. В противном случае оператор принимает значение val2. Вы можете использовать условный оператор во всех случаях, где может быть использован стандартный оператор.

var status = (age >= 18) ? "adult" : "minor";

Данное выражение присваивает значение "adult" переменной status, если age имеет значение 18 или более. В противном случае переменной status присваивается значение "minor".

Оператор запятая

Оператор запятая (,) просто вычисляет оба операнда и возвращает значение последнего операнда. Данный оператор в основном используется внутри цикла for, что позволяет при каждом прохождении цикла одновременно обновлять значения нескольких переменных.

Например, если a является двумерным массивом, каждая строка которого содержит 10 элементов, то следующий код с использованием оператора запятая позволяет выполнять одновременное приращение двух переменных. Данный код выводит на экран значения диагональных элементов массива:
```
for (var i = 0, j = 9; i <= 9; i++, j--)
  document.writeln("a[" + i + "][" + j + "]= " + a[i][j]);
```

Унарные операторы

Унарная операция - операция только с одним операндом.
delete

Оператор delete выполняет удаление объекта, свойства объекта, или элемента массива с заданным индексом. Синтаксис оператора:

delete objectName;
delete objectName.property;
delete objectName[index];
delete property; // допустимо только внутри with

где objectName представляет собой имя объекта, property - свойство объекта, а index - целое число, указывающее на положение (номер позиции)  элемента в массиве.

Четвёртый вариант использования позволяет удалить свойство объекта, но допускается только внутри with.

Вы можете использовать оператор delete для удаления переменных, объявленных неявно, но вы не можете с его помощью удалять переменные, объявленные с помощью var.

После применения оператора delete свойство элемента меняется на undefined. Оператор delete возвращает true если выполнение операции возможно; оператор возвращает false, если выполнение операции невозможно.
```
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // создаём свойство h
delete x;       // возвращает true (можно удалить переменную объявленную неявно)
delete y;       // возвращает false (нельзя удалить переменную объявленную с помощью var)
delete Math.PI; // возвращает false (нельзя удалить встроенные свойства)
delete myobj.h; // возвращает true (можно удалить пользовательские свойства)
delete myobj;   // возвращает true (можно удалить объект объявленный неявно)
```

Удаление элементов массива

Удаление элемента массива не влияет на длину массива. Например, если вы удалите a[3], элемент a[4] останется a[4], a[3] станет undefined.

Когда элемент массива удаляется с помощью оператора delete, то из массива удаляется значение данного элемента. В следующем примере элемент trees[3] удалён с помощью оператора delete. Однако, элемент trees[3] остаётся адресуемым и возвращает значение undefined.
```
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
if (3 in trees) {
  // условие не выполняется
}
```

Если вы хотите, чтобы элемент оставался в массиве, но имел значение undefined, то используйте ключевое слово undefined вместо оператора delete. В следующем примере элементу trees[3] присвоено значение undefined, но элемент при этом остаётся в массиве:
```
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
if (3 in trees) {
  // данный блок кода выполняется
}
```
Оператор typeof

Оператор typeof используется одним из следующих способов:

typeof operand
typeof (operand)

Оператор typeof возвращает строку обозначающую тип невычисленного операнда. Значение operand может быть строкой, переменной, дескриптором, или объектом, тип которого следует определить. Скобки вокруг операнда необязательны.

Предположим, вы определяете следующие переменные:
```
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();
```

Оператор typeof возвращает следующие результаты для этих переменных:
```
typeof myFun;     // возвращает "function"
typeof shape;     // возвращает "string"
typeof size;      // возвращает "number"
typeof today;     // возвращает "object"
typeof dontExist; // возвращает "undefined"
```

Для дескрипторов true и null оператор typeof возвращает следующие результаты:
```
typeof true; // возвращает "boolean"
typeof null; // возвращает "object"
```
Для чисел и строк оператор typeof возвращает следующие результаты:
```
typeof 62;            // возвращает "number"
typeof 'Hello world'; // возвращает "string"
```
Для свойств оператор typeof возвращает тип значения данного свойства:
```
typeof document.lastModified; // возвращает "string"
typeof window.length;         // возвращает "number"
typeof Math.LN2;              // возвращает "number"
```
Для методов и функций оператор typeof возвращает следующие результаты:
```
typeof blur;        // возвращает "function"
typeof eval;        // возвращает "function"
typeof parseInt;    // возвращает "function"
typeof shape.split; // возвращает "function"
```
Для встроенных объектов оператор typeof возвращает следующие результаты:
```
typeof Date;     // возвращает "function"
typeof Function; // возвращает "function"
typeof Math;     // возвращает "object"
typeof Option;   // возвращает "function"
typeof String;   // возвращает "function"
```

Оператор void

Оператор void используется любым из следующих способов:

void (expression)
void expression

Оператор void определяет выражение, которое должно быть вычислено без возвращения результата. expression - это выражение JavaScript, требующее вычисления. Скобки вокруг выражения необязательны, но их использование является правилом хорошего тона.

Вы можете использовать оператор void для указания на то, что операнд-выражение является гипертекстовой ссылкой. При этом выражение обрабатывается, но не загружается в текущий документ.

Следующий код служит примером создания гипертекстовой ссылки, которая бездействует при нажатии на неё пользователем. Когда пользователь нажимает на ссылку, void(0) вычисляется равным undefined, что не приводит ни к каким действиям в JavaScript.
```
<A HREF="javascript:void(0)">Нажмите здесь, чтобы ничего не произошло</A>
```
Приведённый ниже код создаёт гипертекстовую ссылку, которая подтверждает отправку формы при клике на ней пользователем:
```
<A HREF="javascript:void(document.form.submit())">Нажмите здесь, чтобы подтвердить отправку формы</A>
```

Приоритет операторов

Приоритет операторов определяет порядок их выполнения при вычислении выражения. Вы можете влиять на приоритет операторов с помощью скобок.

Приведённая ниже таблица описывает приоритет операторов от наивысшего до низшего.
Таблица 
Приоритет операторов Тип оператора 	Операторы
свойство объекта 	. []
вызов, создание экземпляра объекта 	() new
отрицание, инкремент 	! ~ - + ++ -- typeof void delete
умножение, деление 	* / %
сложение, вычитание 	+ -
побитовый сдвиг 	<< >> >>>
сравнение, вхождение 	< <= > >= in instanceof
равенство 	== != === !==
битовое-и 	&
битовое-исключающее-или 	^
битовое-или 	|
логическое-и 	&&
логическое-или 	||
условный (тернарный) оператор 	?:
присваивание 	= += -= *= /= %= <<= >>= >>>= &= ^= |=
запятая 	,
  
  
  
  
# Lecture_5
  
  Strings & Numbers
  
  String wrapper
  Strings methods
  Number wrapper
  Numbers methods
  Math
  
  String
  Simple string is a primitive:
```
  const str = ‘Javascript string’;
  console.log(typeof str); // string
  console.log(str.length); // 17
  
```

  String wrapper

  ```
  ‘Test string’.length 
  ===
  String(‘Test string’).length
  ```
  
```
const str = ‘Javascript string’;
const str2 = new String(‘Javascript string’);

console.log(str === str2); //false

console.log(typeof str); // string
console.log(typeof str2); // object
```
  
  ```
  ‘Test string’
  !==
  String(‘Test string’)
  ```
  
  Strings in JS are arrays of symbols

  ```
  let str = 'JavaScript';
  /*  str[0] = 'J';
  str[1] = 'a';
  str[2] = 'v';
  str[3] = 'a';
  str[4] = 'S';
  str[5] = 'c';
  str[6] = 'r';
  str[7] = 'i';
  str[8] = 'p';
  str[9] = 't';
  */
  
  // can get any character of the string
  alert(str[4]); //S
  
  // can change any character of the string
  str[9] = 'p'; // 'JavaScripp'
  
  ```
  
  ```
                       name
  97   a               104 h
  98   b               101 e
  99   c               108 l
  ...                  108 l
  101  e               111 o
  ...
  104  h
  ...
  111  o
  
  ```
  
  
  UTF-16 (UTF-8)
  
  charCodeAt, charAt
  
  ```
  const sentence = 'The quick brown fox jumps over the lazy dog.';
  const index = 4;
  
  console.log('The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}');
  // expected output: "Thr character code 113 is equal to q"
  ```
  
  Strings methods
  
  Case changing
  toLowerCase, toUpperCase
  ```
  const firstName = 'Johnny';
  const lastName = 'Depp';
  
  console.log(firstName.toLowerCase()); // johnny
  console.log(lastName.toUpperCase()); // DEPP
  
  ```
  
  Searching substrings
  
  includes
  
  ```
  const phrase = 'Hello! How are you?';
  
  console.log(phrase.includes('Hello')); // true
  console.log(phrase.includes('are')); // true
  
  console.log(phrase.includes('hello')); // false
  console.log(phrase.includes('cat')); // false
  
  ```
  
  indexOf, lastIndexOf
  
  ```
  const phrase = 'Hello! How are you?';
  
  console.log(phrase.indexOf('o')); // 4
  console.log(phrase.indexOf('are')); // 11
  console.log(phrase.indexOf('?')); // 18
  
  console.log(phrase.indexOf('hello')); // -1
  console.log(phrase.indexOf('cat')); // -1
    
  ```
  
  includes
  
  ```
  const phrase = 'Strings are awesome!';
  
  console.log(phrase.includes('a')); // true
  console.log(phrase.includes('awesome')); // true
  console.log(phrase.includes('are aw')); // true
  
  console.log(phrase.indexOf('numbers')); // false
  
  ```
  
  startsWith
  
  ```
  const phrase = 'Strings are awesome!';
  
  console.log(phrase.startsWith('S')); // true
  console.log(phrase.startsWith('Str')); // true
  console.log(phrase.startsWith('Strings are')); // true
  
  console.log(phrase.startsWith('numbers')); // false
  
  ```
  
  endsWith
  
  ```
  const phrase = 'Strings are awesome!';
  
  console.log(phrase.endsWith('awesome!')); // true
  console.log(phrase.endsWith('are awesome!')); // true
    
  console.log(phrase.endsWith('awesome')); // false
  
  ```
  
  substring, ( not a substr)
  
  ```
  const phrase = 'javascript'; // 0123456789
  const substring = phrase.substring(4, 10);
  
  console.log(substring); // script
  console.log(phrase.substring(4, 9)); // scrip
  console.log(phrase.substring(1)); // avascript
  console.log(phrase.substring(4)); // script
  
  ```
  
  slice
  
  ```
  const text = 'I know how to work with strings';
  const spoiler = text.slice(0, 7) + ... + text.slice(-8);
  
  console.log(spoiler); // 'I know ... strings'
    
  ```
  
  Strings splitting
  
  split
  
  ```
  const phrase = 'London is the capital of the Great Britain'; 
  const arr = phrase.split(' ');
  
  console.log(arr); // ['London', 'is', 'the', 'capital', 'of', 'the', 'Great', 'Britain']
      
  ```
  
  Strings replacing
  
  replace, replaceAll
  
  ```
  const str = 'I like apples and apple juice'; 
  const once = str.replace('apple', 'orange');
  const once = str.replaceAll('apple', 'orange');
  
  console.log(once); // 'I like oranges and apple juice'
  console.log(all); // 'I like oranges and orange juice'
  
  ```
  
  Clearing
  
  trim, trimStart, trimEnd
  
  ```
  const emaile = '   another@test.com   ');
  
  console.log(email.trim()); // 'another@test.com'
  console.log(email.trimStart()); // 'another@test.com   '
  console.log(email.trimEnd()); // '   another@test.com'
  
  ```
  
  
  Number
  
  Number wrapper
  
  Integers, number with floating comma, decimal, binary, octa, hexadecimal, NaN, Infinity, -Infinity:

  ```
    const a = 5;
    const pi = 3.14;
    const hex = fff; // 255
  ```
  
  ```
  const num = 10;
  const num2 = new Number(‘10’);

  console.log(num === num2); //false

  console.log(typeof num); // string
  console.log(typeof num2); // object
  
  ```
  
  Number keywords
  
  ```
  const biggestSveNum = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
  const smallestSveNum = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => 9007199254740991
  const infiniteNum = Number.POSITIVE_INFINITY;
  const negInfiniteNum = Number.NEGATIVE_INFINITY;
  const notANum = Number.NaN;
  
  ```
  
  Number corner cases
  
  isNan
  
  ```
  const nanResult = 5 * undefined;
  
  console.log(nanResult == NaN); // false
  console.log(nanResult === NaN); // false
  console.log(number.isNaN(nanResult)); // true
  
  ```
  
  isFinite
  
  ```
  const number = 4;
  const nan = NaN;
  const inf = Infinity;
  const string = 'Hello';
  
  console.log(number.isFinite(number)); // true
  console.log(number.isFinite(nan)); // false
  console.log(number.isFinite(inf)); // false
  console.log(number.isFinite(string)); // false
  
  ```
  
  Number formatting
  
  toString
  
  ```
  const num = 7;
  
  console.log(num.toString()); // '7'
  console.log(num.toString(2)); // '111' in binary system
  
  ```
  
  toFixed, parseFloat
  
  ```
  const num = 10.468;
  
  console.log(num.toFixed(4)); // '10.4680'
  console.log(num.toFixed(3)); // '10.468'
  console.log(num.toFixed(2)); // '10.47'
  console.log(num.toFixed(1)); // '10.5'
  console.log(num.toFixed(0)); // '10'
  
  console.log(num.toFixed(2)); // 10.47
  console.log(num.toFixed(0)); // 10
  
  ```
  
  toLocaleString
  
  ```
  const bigNumber = 100000000;
  
  console.log(bigNumber.toLocaleString('ru')); // 100 000 000
  console.log(bigNumber.toLocaleString('en-US')); // 100,000,000
  console.log(bigNumber.toLocaleString('ar-SA')); // .............
  
  console.log(bigNumber.toLocaleString('es' {style: 'currency', currency: 'USA'})); // 100.000.000,00 USA
  
  console.log(bigNumber.toLocaleString('uk' {style: 'currency', currency: 'UAH', minimumFractionDigits: 0})); // 100 000 000 ₴
  
    
  ```
  
  Math
  
  Math constants
  
  Math.PI, Math.E
  
  ```
  console.log(Math.PI); // 3.14159........
  console.log(Math.E); // 2.718281..........
  
  ```
  
  
  Math methods
  
  Math.round(), Math.floor()
  
  ```
  const number = 4.5;
  const number2 = 9.99;
  
  console.log(Math.round(number)); // 5
  console.log(Math.round(number2)); // 10
  
  console.log(Math.floor(number)); // 4
  console.log(Math.floor(number2)); // 9
  
  ```
  
  Math.pow(), Math.sqrt()
  
  ```
  console.log(Math.pow(3, 2)); // 9
  console.log(3 ** 2); // 9
  
  console.log(Math.sqrt(256)); // 16
  
  ```
  
  Math.min(), Math.max()
  
  ```
  console.log(Math.max(1, 9, 3, 2, 7)); // 9
  console.log(Math.min(1, 9, 3, 2, 7)); // 1
  
  ```

  Math.random()
  
  ```
  Math.random(); // 0,21645798236545625
  Math.random(); // 0.987523553654789126
  
  ```
  
  Useful links
    https://doka.guide/js/string-wrapper/
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions?retiredLocale=uk
    https://doka.guide/js/number-wrapper/
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math?retiredLocale=uk
    https://itsfoss.com/basic-terminal-tips-ubuntu/
  
  

# Lecture_6
	
### Objects
	
#### Object creation
	
```
	{
	key1: value1,
	key2: value2,
	key3: () => {},
	...
	}
```
	
```
const car {
	name: Audi,
	model: S8,
	year: 2020,
	isNew: true,
	color: black,
	getShotInformation: function () {
	return `${this.mark} ${this.model} ${this.year}`;
	}
	
	// or
	
	getShotInformation () {
	return `${this.mark} ${this.model} ${this.year}`;
	}
	};
	
```

	
	### Object using
	
	objectVariable.propertyName

	objectVariable.methodName()

```
	console.log(car.mark); // Audi
	console.log(car.getShotInformation()); // Audi, S8, 2020

```
	
	
	objectVariable[‘propertyName’]

```
	let objectPropertyName = 'model';
	console.log(car[objectPropertyName]); // S8

```
	
		
```
	const obj = {
	'property whith space': 'test'};
	console.log(obj[property whith space]); // test
```
	
```
	console.log(car.model); // S8
	car.model = 'A8';
	console.log(car.model); // A8
```
	
### Delete properties
	
```
	delete car.color;
	delete car.getShotInformation;
	
	
	// Теперь в переменной car хранится такой объект
	
	{
	mark: 'Audi',
	model: 'S8',
	isNew: true,
	year: 2020
	}
```

```
	const user = {
	name: 'Joe',
	age: 20,
	  greeting() {
	    console.log('Hello! My name is ' + this.name);
	  }
	};
	
	console.log(user);  //  {name: 'Joe', age: 20, greeting: f}
	
	delete user.age;
	delete user.greeting;
	
	console.log(user); //  {name: 'Joe'}
	
	user.name = 'Alex';
	
	console.log(user); // { name: 'Alex'}
	
	console.log(user.title);  //  undefine
	
	user.title = 'lord';   // or  user['title'] = 'lord'; 
		
	console.log(user); // { name: 'Alex', title: 'lord'}
	
	user['very cool'] = true; 
	
	onsole.log(user); // { name: 'Alex', title: 'lord', very cool: true}
```
	
	
### Copy objects
	
```
	let obj1 = {
	value1: 1,
	value2: 2
	};
	
	let obj2 = obj1;
	
	obj2.value3 = 3;
	
	console.log(obj1 === obj2); // true
	console.log(obj1); // {value1: 1, value2: 3}
	console.log(obj2); // {value1: 1, value2: 3}
```

```
	const user = {
	name: 'Joe',
	age: 20,
	  greeting() {
	    console.log('Hello! My name is ' + this.name);
	  }
	};
	
	const user2 = user;
	
	console.log(user2);  // {name: 'Joe', age: 20, greeting: f}
	
	user2.name = 'Anna';
	user2.sex = 'female';
	
	console.log(user);   // {name: 'Anna', age: 20, greeting: f, sex: female}
	console.log(user2);  // {name: 'Anna', age: 20, greeting: f, sex: female}
```
	
```
	const a = 5;
	let b = a;
	
	b++;
	
	console.log(a); //  5
	console.log(b); //  6
	
```

```
	let obj2 = object.Assign({}, obj1);
	// or
	let obj2 = {... obj1};
```
	
	
### Object property descriptors
	
With property descriptors we can:
	- protect property from updating/deleting
	- change property value
	- hide in loops cycles
	- modify setter and getter of the value


#### Descriptor structure
	
Объект дескриптора JS может содержать следующие свойства:
	- configurable - логическое значение, указывает может ли быть изменено значение дескриптора и может ли свойство быть удалено из объекта (по умолчанию false);
	- enumerable - логическое значение, если равно false, то свойство будет пропущено при перечислении всех свойства объекта (по умолчанию false);
	- value - задает значение свойства (по умолчанию undefined);
	- writable - логическое значение, указывает, может ли значение свойства быть изменено операцией присваивания (по умолчанию false);
	- get - функция, возвращаемое значение которой будет возвращено в качестве значения свойства при его чтении;
	- set - функция, которая вызывается в момент присваивания свойству нового значения и единственным параметром принимает присваиваемое значение.
	
	
#### Descriptors methods
	
#### Object.getOwnPropertyDescriptor()
	
```
	const user = {};
	user.name = 'Alex';
	console.log(Object.getOwnPropertyDescriptor(user, 'name'));
	
	/*
	'value': 'Alex',
	'writable': true,
	'anumerable': true,
	'configurable': true,
	*/
	
```
	
```
	const user = {
	name: 'Joe',
	age: 20,
	  greeting() {
	    console.log('Hello! My name is ' + this.name);
	  }
	};
	
	user.name = 'Anna';
	console.log(Object.getOwnPropertyDescriptor(user, 'name'));   //  {value: 'Anna', writable: true, enumerable: true, configurable: true}
	
```
	
	
#### Object.defineProperty()

```
	const creditCard = {cvv: 1234};	
	console.log(Object.getOwnPropertyDescriptor(creditCard, 'cvv'));   //  {value: '1234', writable: true, enumerable: true, configurable: true}
	
```
	
	
```
	const creditCard = {};
	
	Object.defineProperty(creditCard, 'cvv' {
	value: 1234, 
	configurable: false
	});   
	
	creditCard.cvv = 5;
	console.log(creditCard.cvv}; // 1234
	
	delete creditCard.cvv;
	console.log(creditCard.cvv}; // 1234
	
	console.log(Object.getOwnPropertyDescriptor(creditCard, 'cvv'));   //  {value: '1234', writable: true, enumerable: true, configurable: false}
	
```

#### Descriptor: configurable
	
	Configurable - logical value (true или false) and stands for possibility of changing or deleting property.
	
```
	let obj = {};
	Object.defineProperty(obj, 'city' {
	  configurable: false,
	  value: 'Kyiv'
	});
	
	obj.city = 'Odessa';  //  ignore
	
	delete obj.city;  // ignore
	
	// uncaught TypeError: Cannot redefine property: city
	Object.defineProperty(obj, 'city' {
	  configurable: true
	});
		
```
	
	
#### Descriptor: enumerable
	
	Enumerable - hide property for counting methods, for example, in for...in loop
	
```
	let obj = {
	country: 'Ukraine'
	};
	
	Object.defineProperty(obj, 'capital' {
	  enumerable: false,
	  value: 'Kyiv'
	});
	
	for(let property in obj) {
	  console.log(property);
	}
	
	// result: 'country';
	// 'capital' is ignored
		
```
	
```
	const creditCard = {
	name: 'Mastercard',
	number: '12354669874565466'
	};
	
	Object.defineProperty(creditCard, 'cvv' {
	  value: 1234, 
	  configurable: false,
	  enumerable: false
	});   
	
	for(let property in creditCard) {
	  console.log(property);
	}
	
	console.log(creditCard);  // name, number
	console.log(creditCard.cvv);  // 1234
	
```	
	
	
#### Descriptor: value
	
```
	let obj = {};
	
	Object.defineProperty(obj, 'capital' {
	  value: 'Kyiv'
	});
	
	console.log(obj.capital);  //  'Kyiv'
		
```
	
#### Descriptor: get
	
	get - function which returns a value of the property. It’s possible to use this in the function.

	
```
	let obj = {
	country: 'France',
	capital: 'Paris'
	};
	
	Object.defineProperty(obj, 'description' {
	  get: funktion () {
	    return `${this.capital} is a capital of ${this.country}`;
	  }
	});
	
	console.log(obj.description);  //  Paris is a capital of France
		
```
	
```
	const user = {
	name: 'Joe'
	};
	
	Object.defineProperty(user, 'title' {
	  get () {
	    return `Lord ${this.name}`;
	  }
	});
	
	console.log(obj.title);  //  Lord Joe
	
	user.name = 'Anna';
	console.log(obj.title);  //  Lord Anna
```	
	
	
	
#### Descriptor: set
	
	set - function, which is running when property value changes

```
	let capital = {
	Austria: 'Vienna',
	France: 'Paris',
	Spain: 'Madrid'
	};
	
	let obj = {countryDescription: null};
	
	Object.defineProperty(obj, 'country' {
	  set: funktion (country) {
	    this.countryDescription = `The capital of ${country} is ${capital[country] || 'Unknown'}`;
	  }
	});
	
	obj.country = 'Austria';
	
	console.log(obj.countryDescription);  //  'The capital of Austria is Vienna'
```
	
	
		
```
	const user = {
	name: 'Joe'
	};
	
	Object.defineProperty(user, 'hobby' {
	  set(value) {
	  this.description = `My hobby is ${value}`;
	  }
	});
	
	user.hobby = 'cycling';
	
	console.log(user.description);  //  My hobby is cycling
	
```	
	
```
	const user = {
	name: 'Joe',
	description: `My hobby is ${this.hobby || 'running'}`
	};
	
	user.hobby = 'cycling';
	
	console.log(user.description);  //  My hobby is running
	
```	
	
	
#### Descriptors types
	
	Descriptors types:
		- accessors (access descriptors)
		- data descriptors

	configurable and enumerable are common for data descriptors and accessors, value and writable belong to data descriptors, get and set - accessors. We can’t use mixed descriptor at thhe same time.
	
	
	
### Object wrapper
	
```
	// creating with literal
	
	let obj1 = {name: 'Tim'};	
	
	// creating with Object constructor  (wrapper)
	
	let obj2 = new Object({name: 'Tim'});
	
	console.log(obj1); //  {name: 'Tim'}
	console.log(obj2); //  {name: 'Tim'}
	
	obj1 === obj2  // false  because diferent types
	
```
	
### Object methods
	
#### Object.defineProperty()
	
```
	let obj = {mark: 'BMW'};
	
	Object.defineProperty(obj, 'model' {
	  configurable: true,
	  enumerable: true,
	  writable: true,
	  value: 'X8'
	});
	
	console.log(obj);  //  {mark: 'BMW', model: 'X8'}
```	
	
```
	let obj = {mark: 'BMW'};
	
	Object.defineProperties(obj, {
	  mark: {
	    configurable: true,
	    enumerable: true,
	    writable: true,
	    value: 'BMW'
	  },
	  model' {
	    configurable: true,
	    enumerable: true,
	    writable: true,
	    value: 'X8'
	  }
	});
	
	console.log(obj);  //  {mark: 'BMW', model: 'X8'}
```		
	
	
#### Object.getOwnPropertyDescriptor()
```
	let obj = Object.defineProperty({}, 'mark', {
	    configurable: true,
	    enumerable: true,
	    writable: true,
	    value: 'BMW'
	 });
	
	let objDescriptor = Object.getOwnPropertyDescriptor(obj, 'mark');
	
	console.log(objDescriptor);  //  {value: 'BMW', configurable: true, enumerable: true, writable: true}
```		
	
```
	console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));  //  {value: 3.14159......, configurable: false, enumerable: false, writable: false}
	
	Math.PI = 500;
	console.log(Math.PI);  //  3.14159......
	```		
	
	
#### Object.keys()
	
```
	let obj = {mark: 'Mercedes', model: 'C180', year: 2021};
	
	Object.defineProperty(obj, 'mark', {enumerable: false});
	
	let objKeys = Object.keys(obj);
	
	console.log(objKeys);  // ['model', 'year']
```	
	
	
#### Object.values()
	
```
	let obj = {mark: 'Mercedes', model: 'C180', year: 2021};
	
	Object.defineProperty(obj, 'mark', {enumerable: false});
	
	let objValue = Object.values(obj);
	
	console.log(objValue);  // ['C180l', '2021']
```
	
	```
	const user = {
	name: 'Joe',
	age: 20
	};
	
	console.log(Object.Keys(user));  //  [name, age]
	console.log(Object.Value(user));  //  [Joe, 20]
	```
	
	
	
	
#### Object.assign()

	
```
	let objTarget = {mark: 'Mercedes'};
	let objSource1 = {model: 'C180'}
	let objSource2 = {year: 2020};
	let objSource3 = {year: 2021};
	
	let obj = Object.assign(objTarget, objSource1, objSource2, objSource3);
	
	console.log(obj);  // {mark: 'Mercedes', model: 'C180', year: 2021}
```
	
	
```
	const userInfo = {
	name: 'Joe',
	age: 20
	};
	
	const userDescription = {
	name: 'Anna',
	description: 'I am a student',
	hobby: 'gaming'
	};
	
	const userData = {
	sex: 'male'
	};
	
	const user = Object.assign(userInfo, userDescription, userData);
	
	console.log(user);  // [name: 'Anna', age: 20, description: 'I am a student', hobby: 'gaming', sex: 'male']
	```
	
	
	```
	const userInfo = {
	name: 'Joe',
	age: 20
	};
	
	const userInfo2 = Object.assign({}, userInfo);
	
	userInfo2.name = 'Anna';
	
	console.log(userInfo2);  //  [name: 'Anna', age: 20]
	console.log(userInfo);   //  [name: 'Joe', age: 20]
	```
	
```
	const userInfo = {
	name: 'Joe',
	age: 20
	};
	
	const userDescription = {
	name: 'Anna',
	description: 'I am a student',
	hobby: 'gaming'
	};
	
	const userData = {
	sex: 'male'
	};
	
	const user = {...userInfo, ...userDescription, ...userData});
	
	console.log(user);  // [name: 'Anna', age: 20, description: 'I am a student', hobby: 'gaming', sex: 'male']
	
	const user2 = {isStudent: true, ...userInfo, ...userDescription, ...userData});
	
	console.log(user2);  // [isStudent: true, name: 'Anna', age: 20, description: 'I am a student', hobby: 'gaming', sex: 'male']
	```
	
	
```
	const userInfo = {
	name: 'Joe',
	age: 20,
	info: {
	  data: 21,
	  title: 'test'}
	};
	
	const userDescription = {
	name: 'Anna',
	description: 'I am a student',
	hobby: 'gaming'
	};
	
	const userData = {
	sex: 'male'
	};
	
	const user = {...userInfo, ...userDescription, ...userData});
	
	console.log(user);  // [name: 'Anna', age: 20, info: , description: 'I am a student', hobby: 'gaming', sex: 'male']
	
	const user2 = {isStudent: true, ...userInfo, ...userDescription, ...userData});
	
	console.log(user2);  // [isStudent: true, name: 'Anna', age: 20, description: 'I am a student', hobby: 'gaming', sex: 'male']
	```
	
	
```
	let car = {mark: 'Mercedes', model: 'C180', year: 2021};
	let car1 = Object.assign({}, car);
	
	console.log(car1);  // {mark: 'Mercedes', model: 'C180', year: 2021}
```	
```	

	
#### Object.freeze()
	
```
	let obj = Object.freeze({mark: 'Mercedes'});
	
	obj.mark = 'BMW';  //  ignored
	
	console.log(obj);  // {mark: 'Mercedes'}
```	
	
#### Object.isFrozen()
	
```
	let obj = Object.freeze({mark: 'Mercedes'});
	
	console.log(Object.isFrozen(obj));  // true
```		
	
#### Object.preventExtensions()
	
```
	let obj = Object.preventExtensions({mark: 'Mercedes'});
	
	obj.mark = 'BMW';
	obj.model = 'X8';  // ignored
	console.log(obj);  // {mark: 'BMW'}
```		
	
#### Object.isExtensible()
	
```
	let obj = Object.preventExtensions({mark: 'Mercedes'});
	
	console.log(Object.isExtensible(obj));  // false
```		

	
	
## Object prototype
	
```
        let person = {
	firstName: '',
	lastName: '',
	  getFullName: function() {
	    return `${this.firstName} ${this.lastName}`;
	  }
	};
	
	let driver = {
	__proto__: person,
	driveExperiance: 5
	};
	
	driver.firstName = 'John';
	driver.lastName = 'Malkovich';
	
	console.log(driver); // {driveExperiance: 5, firstName: 'John', lastName: 'Malkovich'}
	console.log(driver.getFullName()); //  John Malkovich
	
```
	
	
#### Object.setPrototypeOf()
	
#### Object.getPrototypeOf()
	
```
        let person = {
	firstName: '',
	lastName: '',
	  getFullName: function() {
	    return `${this.firstName} ${this.lastName}`;
	  }
	};
	
	let driver = {
	driveExperiance: 5
	};
	
	Object.setPrototypeOf(driver, person)
	
	driver.firstName = 'John';
	driver.lastName = 'Malkovich';
	
	console.log(driver.getFullName()); //  John Malkovich
	
	console.log(Object.getPrototypeOf(driver)); // {firstName: '', lastName: '', getFullName: f}
	
```	
	
```
        const user = {
	  greeting() {
	    console.log('hello');
	  }
	};
	
	const alex = {
	name: 'Alex'
	};
	
	Object.setPrototypeOf(alexr, user)
	
	alex.greeting();  //  hello
		
```	
	
	
	- objects are structures to gather related data
	- to get property/method use .propertyName or [‘propertyName’]
	- with descriptors we can describe properties behavior
	- to copy objects use Object.assign() or spread operator (...)
	- all objects inherit properties and methods from prototypes

	Useful links
	
	https://doka.guide/js/objects-objects-everywhere/
	
	https://javascript.info/property-descriptors
	
	https://doka.guide/js/ref-type-vs-value-type/
	
	https://regex101.com/
	
	
```	
	
	
	
	
	
# Lecture_7
	
### Array
	
	
```
	const numbers = [1, 2, 5, 10];	
	
	console.log(numbers[1]); // 2
	console.log(numbers[1]); // 2
```
	
#### Changing arrays
	
```
	let cities = ['Minsk', 'Prague', 'London'];
	
	cities[0] = 'Kyiv';
	cities[3] = 'Tallin';
	
	console.log(cities); //  ['Kyiv', 'Minsk', 'Prague', 'Tallin', 'London']
	
	
```
	
```

	const numbers = [1, 2, 5, 10];	
	
	numbers[10] = 'end';
	
	console.log(numbers[]); // 
```
	
	
```
	function name(params) {
	// ...
	
	return // ....
	}
	
	
	// or
	
	const name2 = () => {
	// ...
	
	return // ....
	}
	
	// or
	
	const name2 = (a, b) => a + b
	
```

	
#### Arrays methods
	
	Convert ....
	
	toString(), join()
	
```
	let arr = [1, 'John', true];
	
	console.log(arr.toString()); //  '1,John,true'
	console.log(arr.join()); //  '1,John,true'
	console.log(arr.join
	console.log(arr.join
```
	
```
	let arr = [1, 2, 3, 4];
	
	console.log(arr.toString()); //  '1,2,3,4'
	console.log(arr.join()); //  '1,2,3,4'
	console.log(arr.join(' + ')); //  '1 + 2 + 3 + 4'
	console.log(arr.join('.')); //  '1.2.3.4'
	
```
	
	unshift(), push()
	
```
	let arr = [2, 3, 4];
	
	arr.unshift(1);
	console.log(arr); //  '1,2,3,4'
	
	arr.push(5);
	console.log(arr); //  '1,2,3,4,5'
```
	
	shift(), pop()
	
```
	let arr = [1, 2, 3];
	console.log(arr); //  '1,2,3'
	
	let firstElement = arr.shift(); // 1
	console.log(arr); //  '2,3'
	
	let endElement = arr.pop(); // 3
	console.log(arr); //  '2'
```
	 concat()

```
	let arr1 = [1, 2];
	let arr2 = [3, 4, 5];
	
	let arr = arr1.concat(arr2);
	
	console.log(arr1); //  '1,2'
	console.log(arr2); //  '3,4,5'
	console.log(arr3); //  '1,2,3,4,5'
	
```
	
```
	let arr1 = [1, 2];
	let arr2 = [3, 4, 5];
	
	let arr = arr1.concat(arr2);
	
	console.log(arr1); //  '1,2'
	console.log(arr2); //  '3,4,5'
	console.log(arr3); //  '1,2,3,4,5'
	
```

	
```
	let arr1 = [1, 2, 3, 4];
	let arr2 = [3, 4, 5];
	
	console.log([...arr1, ...arr2); //  '1,2,3,4,3,4,5'
		
```

	
```
	let arr1 = [1, 2, 3, 4];
	let arr2 = [3, 4, 5];
	
	console.log([...arr1, ...arr2); //  '1,2,3,4,3,4,5'
		
```
	
```
	const obj = {a: 1, b: 2};
	const obj2 = [b: 3, c: 4];
	
	console.log([...obj, ...obj2); //  {a: 1, b: 3, c: 4}
		
```	
	
	
	slice()
	
	
```
	let arr1 = [1, 2, 3, 4, 5];
	
	let part1_of_arr1 = arr1.slice(3); // [4,5]
	let part2_of_arr1 = arr1.slice(2, 4); // [3,4]
	
	let part3_of_arr1 = arr1.slice(-3); // [3,4,5]
	
	console.log(arr1); //  [1,2,3,4,5]
	
	let copy_of_arr1 = arr1.slice();  // [1,2,3,4,5]
	
	console.log(arr1); //  [1,2,3,4,5]
```
	
	
	splice()
```
	array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```
	
```
	Удаляет 0 элементов по индексу 2 и вставляет "drum"

	var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
	var removed = myFish.splice(2, 0, 'drum');

	// myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
	// removed равен [], ничего не удалено
```

```
	Удаляет 1 элемент по индексу 3

	var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
	var removed = myFish.splice(3, 1);

	// removed равен ["mandarin"]
	// myFish равен ["angel", "clown", "drum", "sturgeon"]
```

```
Удаляет 1 элемент по индексу 2 и вставляет "trumpet"

var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, 'trumpet');

// myFish равен ["angel", "clown", "trumpet", "sturgeon"]
// removed равен ["drum"]

Удаляет 2 элемента начиная с индекса 0 и вставляет "parrot", "anemone" и "blue"

var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// myFish равен ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed равен ["angel", "clown"]

Удаляет 2 элемента начиная с индекса 2

var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);

// myFish равен ["parrot", "anemone", "sturgeon"]
// removed равен ["blue", "trumpet"]

Удаляет 1 элемент по индексу -2

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// myFish равен ["angel", "clown", "sturgeon"]
// removed равен s ["mandarin"]

Удаляет все элементы после индекса 2 (включительно)

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// myFish равен ["angel", "clown"]
// removed равен ["mandarin", "sturgeon"]
```
	
	includes()
	
```
	let arr = [];
	
	console.log(arr.indexOf(7)); //  []
	
	const array1 = [1, 2, 3];

	console.log(array1.includes(2));  // expected output: true

	const pets = ['cat', 'dog', 'bat'];

	console.log(pets.includes('cat'));  // expected output: true

	console.log(pets.includes('at'));  // expected output: false
```
	
	find()

```
	
	arr.find(callback[, thisArg]);
	
	function isPrime(element, index, array) {
  	var start = 2;
  	  while (start <= Math.sqrt(element)) {
    	    if (element % start++ < 1) {
      	    return false;
    	    }
  	  }
  	return element > 1;
	}

	console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
	console.log([4, 5, 8, 12].find(isPrime)); // 5	
```
	
	
```
	const arr1 = ['a', 'b', 'c'];	
	const resultIndex0 = arr1.indexOf('b');  //  a
	const resultIndex = arr1.find(fuction (element, index) {
	  return element.charCodeAt() <= 97;  //return element === 'a';  
	})   //  callback
					   
	const resultIndex1 = arr1.find((element, index) => index >= 2);    //  font  FiraCode
					   
	console.log(resultIndex0);  // 1
	console.log(resultIndex);  // a
	console.log(resultIndex1);  // c
```

#### Array.some()

```
	arr.some(callback(element[, index[, array]])[, thisArg]);
	
const array = [1, 2, 3, 4, 5];  // checks whether an element is even

const even = (element) => element % 2 === 0;

console.log(array.some(even));  // expected output: true
```	
	
```
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```
	
#### Array.prototype.every()
	
```
	arr.every(callback(currentValue[, index[, array]])[, thisArg])
```
	
```
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```
	
```
[12, 5, 8, 130, 44].every(elem => elem >= 10);   // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true
```
	
```
if (!Array.prototype.every) {
  Array.prototype.every = function(callbackfn, thisArg) {
    'use strict';
    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Положим O равным результату вызова ToObject над значением
    //    this, переданным в качестве аргумента.
    var O = Object(this);

    // 2. Положим lenValue равным результату вызова внутреннего метода Get
    //    объекта O с аргументом "length".
    // 3. Положим len равным ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. Если IsCallable(callbackfn) равен false, выкинем исключение TypeError.
    if (typeof callbackfn !== 'function') {
      throw new TypeError();
    }

    // 5. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Положим k равным 0.
    k = 0;

    // 7. Пока k < len, будем повторять
    while (k < len) {

      var kValue;

      // a. Положим Pk равным ToString(k).
      //   Это неявное преобразование для левостороннего операнда в операторе in
      // b. Положим kPresent равным результату вызова внутреннего метода
      //    HasProperty объекта O с аргументом Pk.
      //   Этот шаг может быть объединён с шагом c
      // c. Если kPresent равен true, то
      if (k in O) {

        // i. Положим kValue равным результату вызова внутреннего метода Get
        //    объекта O с аргументом Pk.
        kValue = O[k];

        // ii. Положим testResult равным результату вызова внутреннего метода Call
        //     функции callbackfn со значением T в качестве this и списком аргументов,
        //     содержащим kValue, k и O.
        var testResult = callbackfn.call(T, kValue, k, O);

        // iii. Если ToBoolean(testResult) равен false, вернём false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}
```
	
	
	sort()
	
	
``` 
	arr.sort([compareFunction]);
	
	let arr = [];
	arr.sort();
	
	console.log(arr); // 
```
	
	
```
	let arr = [3, 5, 19, 1, 7, 23, 14, 9];
	
	arr.sort((element1, element2) => {
	if (element1 == element2) return 0;
	else if (element1 > element2) return 1;
	else if (element1 < element2) return -1;
	});
	
	console.log(arr); //  [1, 3, 5, 7, 9, 14, 19, 23]
```
				     
```
	let arr = [3, 5, 19, 1, 7, 23, 14, 9];
	
	arr.sort((element1, element2) => element1 - element2);
	console.log(arr); //  [1, 3, 5, 7, 9, 14, 19, 23]
```

```
var fruit = ['арбузы', 'бананы', 'Вишня'];
fruit.sort(); // ['Вишня', 'арбузы', 'бананы']

var scores = [1, 2, 10, 21];
scores.sort(); // [1, 10, 2, 21]

var things = ['слово', 'Слово', '1 Слово', '2 Слова'];
things.sort(); // ['1 Слово', '2 Слова', 'Слово', 'слово']
// В Unicode, числа находятся перед буквами в верхнем регистре,
// а те, в свою очередь, перед буквами в нижнем регистре.
```
	
	forEach()
	
```
	const arr = ['Joe', 'Anna', 'Bond'];
	
	function printf(element, index) {
	console.log(`a: ${element}, b: ${index}`)
	}
	
	arr.forEach(printf);
```	
	
	
```
	const arr = ['Joe', 'Anna', 'Bond'];
	
	function printf(element, index) {
	console.log(`a: ${element}, b: ${index}`)
	}
	
	arr.forEach((element, index) => console.log(`element: ${element}, index: ${index}`);
```	
	
	
	map()
	
```
	let arr = [3, 5, 19, 1, 7, 23];
	
	let result = arr.map((element, index) => element + 10;
	console.log(result); //  [13, 15, 29, 11, 17, 33]
```
	
```
	const arr = ['Joe', 'Anna', 'Brad'];
	
	const result = arr.map((element, index) => ({name: element, id: Math.random()}));
	
	console.log(result); // 
```		

```
	const arr = ['Joe', 'Anna', 'Brad'];
	
	const result = arr.map((element, index) => ({name: element, id: index}));
	
	console.log(result); // 
```	
	
	filter()
	
```
	let arr = [3, 5, 19, 1, 7, 23];
	
	let result = arr.filter((element, index) => element > 10;
	console.log(result); //  [19, 23]
```	
	
	
	
```
	const arr = [
	{
	name: 'Joe',
	id: 45622,
	isStudent: true
	}
	{
	name: 'Anna',
	id: 4598452,
	isStudent: true
	}
	{
	name: 'Brad',
	id: 423142,
	isStudent: false,
	age: 99
	}
	];
	
	const students = arr.filter(element => element.isStudent);
	console.log(students); //  [19, 23]
```	
	
	
	reduce()
	
```
	let arr = [3, 5, 19, 1, 7, 23];
	
	let sum = arr[0] + arr[1] + arr[2];
	
	const sum = 0;
	
	arr.forEach ((el) => (sum += el));
	
	console.log(sum); //  
```		

	
```
	let arr = [3, 5, 19, 1, 7, 23];
	let sum = 0;
	
	arr.forEach ((el) => (sum += el));
	
	const sumWithReduce = arr.reduce((accum, element, index) => {
	console.log('acc: ', acc);
	console.log('element: ', element);
	
	return acc += element;
	}, 0);
	console.log(sumWithReduce); //  
```	
	
```
	let arr = [3, 5, 19, 1, 7, 23];
	let sum = 0;
	
	arr.forEach ((el) => (sum += el));
	
	const sumWithReduce = arr.reduce((accum, element, index) => acc += element, 0);
	console.log(sumWithReduce); //  
```	

- arrays store ordered data
- each element in the array has its own index
- arrays methods:
	- add elements with unshift(), push()
	- delete elements shift(), pop()
	- unite arrays contact(), spread operator (...), slice()
	- check arrays some(), every()
	- sort arrays with sort()
	- arrays have superpower: forEach(), map(), filter(), reduce()

	
	
	
	
	
# Lecture_8
	
# Functions
	
## Functions creating
	
```
function function_name(argument_1, argument_2, ..., argument_N){

function’s body

}
```
	
	
	
```javascript	
	const numbers = [1, 2, 3, 4, 5];
/*
  const newArr = numbers.map(function(element){
    console.log('element:', element);
    const result = element * 2;
    return result;
  });
*/

 /* const newArr = []; */ 
/* let result; */

/* const newArr = numbers.forEach(function(element){
  
  const result = element * 2;
  newArr.push(result);
});

console.log('newArr:', newArr);
*/
```
	
```
function multiplay(a, b){
  return a * b;
}

multiplay(3, 15);
console.log(multiplay(3, 15));
```
	
```
function funWith(a, b) {
  console.log('a:', a);
  console.log('b:', b);
  
  console.log('a * b =', a * b);
}

funWith(4, 8);
```
	
```
function multiplay1(a, b = 5){
  return a * b;
}
console.log(multiplay1(8));
multiplay1(3, 15);
console.log(multiplay1(3, 15));
```
	
```
function sayMyName(name){
  if (!name) return console.log('There is not name. Try agane.');
  console.log('Hello, ' + name);
}
console.log(sayMyName('Tatiana'));
sayMyName(3, 15);
console.log(sayMyName(3, 15));
```
	
```
             // ... rest operator
function sum(...numbers) {
  return numbers;
}

sum(1, 2, 3, 4);
```
	
	
```
             // ... rest operator
function getMinNumber(...numbers) {
return Math.min(...numbers);
}

console.log(getMinNumber(1, 2, 3, 4));  //  1
console.log(getMinNumber(1, 2, -3, 4, 5));  //  -3
```
	
	
```
function makeString( ...words) {
  //const string = words.toString();
  const string1 = words.join('');
  
  //return string;
  return string1;
}

console.log(makeString(3, 15));
console.log(makeString('Hello', ' ', 'my', ' ', 'dear', ' ', 'friend'));
```

```
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
  
  return numbers;
}

sum(1, 2, 3, 4);
```

```
function makeString2() {
  console.log(arguments);
  const string1 = Array.from(arguments).join('');
  
  return string1;
}

console.log(makeString2('Hello', ' ', 'my', ' ', 'dear', ' ', 'friend'));
```

```
function someFunc() {
  return;
}

function someFunc2() {
  const a = 'Hello';
}

console.log(someFunc);
console.log(someFunc2);
```

```
const test = () => {
  console.log('test');
}

test();
```

```
const test2 = function() {
  console.log('test2');
}

test2();
```


```
const numbers3 = [1, 2, 3, 4, 5];
/*
  const newArr = numbers.map(function(element){
    console.log('element:', element);
    const result = element * 2;
    return result;
  });
*/
```

Функциональное программирование - это стиль программирования, в котором решения представляют собой простые изолированные функции
без каких-либо побочных эффектов за пределами области действия функции: INPUT -> PROCESS -> OUTPUT

Функциональное программирование - это:

	- Изолированные функции - нет зависимости от состояния программы, в которую входят глобальные переменные, которые могут изменяться

	- Чистые функции - один и тот же ввод всегда дает один и тот же вывод

	- Функции с ограниченными побочными эффектами - любые изменения или мутации состояния программы вне функции тщательно контролируются.

Участники freeCodeCamp любят чай. В редакторе кода, то prepareTeaи getTea функции уже определены для вас. Вызовите getTea функцию, 
чтобы получить 40 чашек чая для команды, и сохраните их в tea4TeamFCC переменной.
	
	
```
	// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line
```
				     

				     
#### терминологи функционального программирования
У команды FCC изменилось настроение, и теперь они хотят двух видов чая: зеленого и черного чая. Общий факт: перепады настроения клиентов - довольно распространенное явление.

Имея эту информацию, нам нужно будет вернуться к getTeaфункции из последнего испытания, чтобы обрабатывать различные запросы на чай.
Мы можем изменить, getTeaчтобы принять функцию в качестве параметра, чтобы иметь возможность изменять тип чая, который она готовит.
Это делает его getTeaболее гибким и дает программисту больше контроля при изменении клиентских запросов.

Но сначала давайте рассмотрим функциональную терминологию:

Обратные вызовы - это функции, которые передаются или передаются другой функции для принятия решения о вызове этой функции.
Возможно, вы видели, как они передаются в другие методы, например filter, в функции обратного вызова, сообщающей JavaScript критерии фильтрации массива.

Функции, которые могут быть присвоены переменной, переданы в другую функцию или возвращены из другой функции,
как и любое другое нормальное значение, называются функциями первого класса . В JavaScript все функции являются функциями первого класса.

Функции, которые принимают функцию в качестве аргумента или возвращают функцию в качестве возвращаемого значения, называются функциями более высокого порядка .

Когда функции передаются или возвращаются из другой функции, то те функции, которые были переданы или возвращены, могут называться лямбда .

Приготовьте 27 чашек зеленого чая и 13 чашек черного чая и хранить их в tea4GreenTeamFCCи tea4BlackTeamFCCпеременных, соответственно.
Обратите внимание, что getTeaфункция была изменена, поэтому теперь она принимает функцию в качестве первого аргумента.

Примечание. Данные (количество чашек чая) указываются в качестве последнего аргумента. Мы обсудим это подробнее в последующих уроках.

```
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```
				     

*********
```
// Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

// Change the color of myHonda.
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)
```

				     
				     
				     
#### опасности использования императивного кода
Функциональное программирование - хорошая привычка. Это упрощает управление вашим кодом и избавляет вас от скрытых ошибок.
Но прежде чем мы дойдем до этого, давайте рассмотрим императивный подход к программированию, чтобы выделить, где у вас могут быть проблемы.

В английском (и во многих других языках) повелительное наклонение используется для команд.
Точно так же императивный стиль программирования - это стиль, который дает компьютеру набор инструкций для выполнения задачи.

Часто операторы изменяют состояние программы, например, обновляют глобальные переменные.
Классический пример - написание for цикла, который дает точные указания для перебора индексов массива.

Напротив, функциональное программирование - это форма декларативного программирования.
Вы сообщаете компьютеру, что хотите сделать, вызывая метод или функцию.

JavaScript предлагает множество предопределенных методов, которые обрабатывают общие задачи,
поэтому вам не нужно писать, как компьютер должен их выполнять.
Например, вместо использования for цикла, упомянутого выше, вы можете вызвать map метод, который обрабатывает детали итерации по массиву.
Это помогает избежать семантических ошибок, таких как «Off By One Errors», описанные в разделе «Отладка».

Рассмотрим сценарий: вы просматриваете веб-страницы в своем браузере и хотите отслеживать открытые вкладки.
Попробуем смоделировать это с помощью простого объектно-ориентированного кода.

Объект Window состоит из вкладок, и обычно у вас открыто несколько окон.
Заголовки каждого открытого сайта в каждом объекте Window хранятся в массиве. 
После работы в браузере (открытия новых вкладок, объединения окон и закрытия вкладок) вы хотите распечатать вкладки, которые все еще открыты.
Закрытые вкладки удаляются из массива, а новые вкладки (для простоты) добавляются в его конец.

Редактор кода показывает реализацию этой функции с функциями для tabOpen(), tabClose()и join().
Массив tabs является частью объекта Window, в котором хранятся имена открытых страниц.

Изучите код в редакторе. Он использует метод, который имеет побочные эффекты в программе, вызывая некорректное поведение.
Окончательный список открытых вкладок, хранящийся в finalTabs.tabs, должен быть,
['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']
но список, созданный кодом, немного отличается.

Измените Window.prototype.tabClose так, чтобы удалялась правильная вкладка.

```
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```



#### Избегайте мутаций и побочных эффектов с помощью функционального программирования
Если вы еще не поняли, проблема в предыдущем испытании была связана с splice вызовом tabClose() функции.
К сожалению, он splice изменяет исходный массив, для которого он вызван, поэтому второй вызов к нему использовал измененный массив и дал неожиданные результаты.

Это небольшой пример гораздо большего шаблона - вы вызываете функцию для переменной, массива или объекта, и функция изменяет переменную или что-то в этом объекте.

Один из основных принципов функционального программирования - ничего не менять.
Изменения приводят к ошибкам.
Легче предотвратить ошибки, зная, что ваши функции ничего не меняют, включая аргументы функции или любую глобальную переменную.

В предыдущем примере не было сложных операций, но splice метод изменил исходный массив и привел к ошибке.

Напомним, что в функциональном программировании изменение или изменение вещей называется мутацией,
а результат - побочным эффектом.
В идеале функция должна быть чистой функцией , то есть не вызывать никаких побочных эффектов.

Давайте попробуем освоить эту дисциплину и не изменять никакие переменные или объекты в нашем коде.

Введите код функции, incrementer чтобы она возвращала значение глобальной переменной, fixedValue увеличенное на единицу.

```
// The global variable
let fixedValue = 4;

function incrementer() {
  
return fixedValue + 1;
let newValue = incrementer(); //  5
console.log(fixedValue); //  4
  
}
```
				     

#### Передача аргументов, чтобы избежать внешней зависимости в функции
Последний вызов был на шаг ближе к принципам функционального программирования, но чего-то еще не хватает.

Мы не меняли значение глобальной переменной, но функция incrementerне будет работать без глобальной переменной fixedValue.

Другой принцип функционального программирования - всегда явно объявлять свои зависимости.
Это означает, что если функция зависит от присутствующей переменной или объекта,
то передайте эту переменную или объект непосредственно в функцию в качестве аргумента.

Из этого принципа можно сделать несколько хороших выводов.
Функцию легче протестировать, вы точно знаете, какие данные она принимает, и она не будет зависеть от чего-либо еще в вашей программе.

Это может придать вам больше уверенности при изменении, удалении или добавлении нового кода.
Вы бы знали, что можно, а что нельзя изменить, и видели бы потенциальные ловушки.

Наконец, функция всегда будет выдавать один и тот же результат для одного и того же набора входных данных, независимо от того, какая часть кода ее выполняет.

Давайте обновим incrementer функцию, чтобы четко объявить ее зависимости.
Напишите incrementer функцию так, чтобы она принимала аргумент, а затем возвращала результат после увеличения значения на единицу.

```
// The global variable
let fixedValue = 4;

function incrementer(value) {
return value + 1;
let newValue = incrementer(fixedValue); //  5
console.log(fixedValue); //  4
  
}
```




#### Рефакторинг глобальных переменных вне функций
До сих пор мы видели два различных принципа функционального программирования:

Не изменяйте переменную или объект - создавайте новые переменные и объекты и возвращайте их, если необходимо, из функции.
Подсказка: использование чего-то вроде const newArr = arrVar, где arrVar массив, просто создаст ссылку на существующую переменную, а не копию.
Таким образом, изменение значения в newArrизменит значение в arrVar.

Объявление параметров функции - любое вычисление внутри функции зависит только от аргументов,
переданных функции, а не от какого-либо глобального объекта или переменной.

Добавление единицы к числу не очень увлекательно, но мы можем применить эти принципы при работе с массивами или более сложными объектами.

Перепишите код, чтобы глобальный массив bookListне изменялся ни в одной из функций.
add Функция должна добавить данное bookName в конце массива, переданного ему и возвращает новый массив (list).
remove Функция должна удалить заданный bookName из массива, переданного ему.

Примечание. Обе функции должны возвращать массив, и любые новые параметры должны быть добавлены перед bookName параметром.

```
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

function add(list, bookName) {
  return [...list, bookName];
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
```


#### Использование метода карты для извлечения данных из массива
До сих пор мы научились использовать чистые функции, чтобы избежать побочных эффектов в программе.
Кроме того, мы видели, что значение функции зависит только от ее входных аргументов.

Это только начало. Как следует из названия, функциональное программирование сосредоточено вокруг теории функций.

Было бы разумно передавать их в качестве аргументов другим функциям и возвращать функцию из другой функции.
В JavaScript функции считаются объектами первого класса, что означает, что их можно использовать как любой другой объект.
Они могут быть сохранены в переменных, сохранены в объекте или переданы как аргументы функции.

Начнем с некоторых простых функций массива, которые являются методами прототипа объекта массива.
В этом упражнении мы смотрим Array.prototype.map(), или, проще говоря map.

map Метод перебирает каждый элемент массива и возвращает новый массив, содержащий результаты вызова функции обратного вызова для каждого элемента.
Это делается без изменения исходного массива.

Когда используется обратный вызов, ему передаются три аргумента. Первый аргумент - это текущий обрабатываемый элемент.
Второй - это индекс этого элемента, а третий - это массив, для которого map был вызван метод.

Ниже приведен пример использования mapметода users массива для возврата нового массива, содержащего только имена пользователей в качестве элементов.
Для простоты в примере используется только первый аргумент обратного вызова.

```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names);
Консоль отобразит значение [ 'John', 'Amy', 'camperCat' ].
```
В watchList массиве хранятся объекты с информацией о нескольких фильмах.
Используйте map на watchList назначить новый массив объектов с ratings переменной.
Каждый фильм в новом массиве должен иметь только title ключ с названием фильма и rating ключ с рейтингом IMDB.
Код в редакторе в настоящее время использует для этого for цикл, поэтому вам следует заменить функциональность цикла своим mapвыражением.

```
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

/*
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
*/
	
console.log(JSON.stringify(ratings));	
	
```

#### Реализовать карту на прототипе
Как вы видели при применении Array.prototype.map() или просто map() ранее, map метод возвращает массив той же длины, что и тот, для которого он был вызван.
Он также не изменяет исходный массив, если этого не делает его функция обратного вызова.

Другими словами, map это чистая функция, и ее выход зависит исключительно от ее входов.
Кроме того, он принимает в качестве аргумента другую функцию.

Вы можете многое узнать об этом map методе, если реализуете его собственную версию.
Рекомендуется использовать for петлю или Array.prototype.forEach().

Напишите свой Array.prototype.myMap(), который должен вести себя точно так же Array.prototype.map().
Не стоит использовать встроенный map метод. Array Экземпляр можно получить в myMap методе с использованием this.

```
// с использованием this

const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
console.log(new_s);   //  [46, 130, 196, 10]
```
				  
```
// с использованием forEach()

var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  
  this.forEach(a => newArray.push(callback(a)));
  
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
console.log(new_s); //  [46, 130, 196, 10]
```


#### Используйте метод фильтрации для извлечения данных из массива
Еще одна полезная функция массива - Array.prototype.filter() или просто filter().

filter вызывает функцию для каждого элемента массива и возвращает новый массив, содержащий только элементы,
для которых эта функция возвращает true.
Другими словами, он фильтрует массив на основе переданной ему функции. Мол map, он делает это без необходимости изменять исходный массив.

Функция обратного вызова принимает три аргумента. Первый аргумент - это текущий обрабатываемый элемент.
Второй - это индекс этого элемента, а третий - это массив, для которого был вызван метод filter.

См. Ниже пример использования filter метода в users массиве для возврата нового массива,
содержащего только пользователей младше 30 лет.
Для простоты в примере используется только первый аргумент обратного вызова.

```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30);
```
Консоль отобразит значение [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].

Переменная watchListсодержит массив объектов с информацией о нескольких фильмах.
Используйте комбинацию filter и map на watchList назначить новый массив объектов с только title и rating ключами.
Новый массив должен включать только те объекты, которые imdbRating больше или равны 8,0.
Обратите внимание, что rating значения сохраняются в объекте как строки,
и вам может потребоваться преобразовать их в числа для выполнения с ними математических операций.


```
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

const filteredList = watchList.map(item => {
    return {
      title: item.Title,
      rating: item.imdbRating
    };
})
  .filter(item => {
    // return true it will keep the item
    // return false it will reject the item
    return parseFloat(item.rating) >= 8.0;
  });

/*
var filteredList = watchList
  .map(function(e) {
    return { title: e["Title"], rating: e["imdbRating"] };
  })
  .filter(e => e.rating >= 8);

console.log(filteredList);
*/
	
/*
var filteredList = watchList
  .map(({ Title: title, imdbRating: rating }) => ({ title, rating }))
  .filter(({ rating }) => rating > 8);
*/

console.log(filteredList);
```

#### Реализуйте метод фильтрации на прототипе
Вы можете многое узнать об этом filter методе, если реализуете его собственную версию.
Рекомендуется использовать for петлю или Array.prototype.forEach().

Напишите свой Array.prototype.myFilter(), который должен вести себя точно так же Array.prototype.filter().
Не стоит использовать встроенный filter метод. Array Экземпляр можно получить в myFilter методе с использованием this.

```
// The global variable  With  Array.prototype.filter()
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  
  let newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);  //  [23, 65, 5]
```

	

# Lecture_9
	
### Conditions
#### 1.1  if-else

```
if (true){
console.log('test');
}
	
```

```
if (true) console.log('test');
	
```
	
```
const number = 3;
if (number >= 4) {
console.log('good');
} else {
console.log('bad');
}
```

	
```
const test1 = 3;
const test2 = 5;
if (test1 < test2) {
console.log('test1 < test2');
} else {
console.log('test1 >= test2');
}
```

```
const test1 = 3;
const test2 = 5;
		  
const isLogToConsole = false;

if (test1 < test2 && isLogToConsole ## 10) {
console.log('test1 < test2');
} else {
console.log('test1 >= test2');
}
```

```
const test1 = 3;
const test2 = 5;
if (test1 < test2) {
  console.log('test1 < test2');
} else if (test1 > test2){
console.log('test1 > test2');
} else {
console.log('test1 == test2');
}
```

```
const test1 = 3;
const test2 = 5;
if (test1 < test2) {
console.log('test1 < test2');
} else { if (test1 > test2){
console.log('test1 > test2');
} else {
console.log('test1 == test2'); }
}
```	

	
#### 1.2  switch
	
##### switch
	
```
switch (condition){

case value1:
...
break;

case value2:
...
break;

default:
...
}

```

	
```
const number = 4;
	
switch (number) {
  case 5:
     console.log('Exellent');
     break;

  case 4:
     console.log('Good');
     break;

  case 3:
     console.log('Normal');
     break;

  case 2:
     console.log('bad');
     break;

  case 1:
     console.log('Very bad');
     break;
  
  default:
     alert('Data not found');
}
```
	
	
##### 1.3  ternary operator
	
###### ternary operator
	
```
condition ? value1 : value2;
```
	
```
let a = -3;
let b;
if (a > 0) {
  b = 10;
} else { 
  b = 1;
} 
alert (b);
```

```
let a = -3;
let b = (a > 0) ? 10 : 1;

alert (b);
```

```
const isOnLine = true;
isOnLine ?  console.log('Hello') : console.log('User is offline');

```

```
const isOnLine = true;
const userStatus = isOnLine ?  'Hello' : 'User is offline';
console.log(userStatus);
```

	
	
	
##### 2. Loops
```
while - runs when condition is trusly
do...while - the same as while, but runs at the first time, then checks the condition
for - the most common way to loop
for...of - interact throw elements of the array
for...in - interact throw properties of the objects
```
	
##### 2.1  while
	
```
while (condition){

// repeat some code

}
```
	
```
let count = 5;
while (count) {
   console.log('count: ', count);   //  5 4 3 2 1
   count--;
} 
```
	
	
##### 2.2  do…while
	
```
let count = 5;

do {
   console.log(count--);
} while (count > 10);
```
	
	
##### 2.3  for

```
for (initial data, condition, action after cycle) {

// repeat some code

}
```

```
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
   if ((i + 1) % 2 == 0) {
	console.log(arr[i]);
   }
}
			       
//  2 4 6
```
	
```
let arr = [1, 2, 3, 4, 5, 6];

for (let i = arr.length; i >= 0; i--) {
   if ((i + 1) % 2 == 0) {
	console.log(arr[i - 1]);
   }
}
			       
//  6 4 2
```
			       
```
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
			       
arr.forEach((el) => console.log(el));
```
	
```
let arr = [1, 2, 3, 4, 5, 6];
let b = 0;
	
for (let i = 0, len = arr.length, c = 100; i < len && true; i++, b++) {   // b += i
   console.log(arr[i]);
}

```

##### 2.4  for…of

```
for (element of array) {

// repeat some code

}
```
						  
```
let arr = [1, 2, 3, 4, 5, 6];
	
for (let item of arr) {  
   console.log(item);
}

```

```
let arr = [1, 2, 3, 4, 5, 6];
let b = 0;
	
for (let el of arr) {  
   console.log(el);
}

```
	
	

##### 2.5  for…in
	
```
for (property in object) {

// repeat some code

}
```
						  
```
const months = {
  1: 'January',
  2: 'Fab',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
};
for (let month in months) {
  console.log('Month name: ' + months[month]);
}
					  
```						  

```
const obj = {
  name: 'Slav',
  isStudent: true
};						  

const property = 'name';
obj['name'] === obj.name
```


#### 3. keyword `continue`
						  

```
let arr = [1, 2, 3, 4, 5, 6];
	
for (let item of arr) {  
   if (item === 0) continue;
   console.log(item / 2);
}
```

	
###### continue
with help of continue we can skip some actions in the current iteration.

#### 3. keyword `break`
	
##### break
	
break stops (breaks) the loop.
						  
```
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
   if (i == 3) break;
   console.log(arr[i]);
}
			       
//  1, 2, 3
```
	
	- conditions: if-else, switch, ternary operator (?)
	- loops: while, do…while, for (for…of, for…in)
	- keyword continue - skips the iteration
	- keyword break - stops the loop

	
#### Useful links
	
	- https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/conditionals
	- https://doka.guide/js/if-else/
	- https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration
	- https://doka.guide/js/loop/
	- https://doka.guide/js/for/
	
	
```
const citiesAndCountries = {
 Kyiv: 'Ukraine',
 Washington: 'USA',
 Odessa: 'Ukraine',
 Munich: 'Germany',
 Kharkiv: 'Ukraine',
 'New-York': 'USA',
 Amsterdam: 'Netherlands',
 Berlin: 'Germany',
 Chicago: 'USA',
 Lisbon: 'Portugal',
 Lviv: 'Ukraine',
 Hamburg: 'Germany'
};
```
	
	
	
# Lecture_10
	
## Dom. Part 1
	
	
### Add new element
	
```
	let h1 = document.createElement
	//console.log(document.getElementById('test-id'));
// const button = document.getElementById('test-id');
//debugger;
//const button = document.querySelector('#test-id');
//const button = document.getElementsByTagName('button');
const buttons = document.getElementsByClassName('buttons');

/*
 1. forEach
 2. get element by index (collection[1])
 3. converts to an array.from(collection)
*/
// console.log(button);
// console.log(buttons[2]);
/*
const buttonsArr = Array.from(buttons);

buttonsArr.forEach((element, index) => {
    // console.log(buttons[index]);
    console.log(element);
})

for (let i = 0; i < buttons.length; i++){
    console.log(buttons[i]);
}

const myButton = document.getElementById('test-id');
console.log(myButton.classList);

myButton.classList.add('button--big');

myButton.classList.remove('buttons--red');

myButton.classList.toggle('buttons--red');

//document.getElementById('toggle').addEventListener('click', () => {}

console.log(myButton.classList.contains('buttons'));

const myList = document.querySelector('ul#list');

// myList.innerHTML = 'hello';

myList.innerHTML = `
            <li class="list-item">item</li>
            <li class="list-item">item</li>
            <li class="list-item">item</li>
            <li class="list-item">item</li>
            <li class="list-item">item</li>
`;

console.log(myList.innerHTML);


myList.textContent = ` test string
`;

console.log(myList.textContent);

*/
/*
const myList = document.getElementsByTagName('ul')[0];

const listItem1 = document.createElement('li');
listItem1.textContent = 'Item 1';
listItem1.classList.add('item');
*/

const root = document.getElementById('root');

const wrapper = document.createElement('div');
// wrapper.id = 'test-id';

wrapper.textContent = 'Hello world!';
wrapper.setAttribute('id', 'test-id');
wrapper.setAttribute('style', 'height: 200px;');
wrapper.setAttribute('href', 'google.com');

wrapper.classList.add('wrapper');
wrapper.textContent = 'Some div el';
wrapper.style.backgroundColor = '#ccc';

const firstDiv = document.querySelector('nav div:first-child');

firstDiv.style.fontSize = '30px';

firstDiv.remove();
// myList.appendChild(listItem1);
// myList.after(wrapper);
```
	
	
### Style

```
	
```
	
### Change attributes
	
#### Working with attributes
	
	
	
	
# Lecture_11
	
# Dom Part 2
	
## 1. Events types
	
Mouse
	
Keyboard
	
Control elements events
	
Browser
	
User events
	

	
## 2. Events handing
	
### addEventListener
```	
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <main>
        <button id="btn">Click me!</button>
        <script>
            const myButton = document.getElementById('btn');
            //myButton.addEventListener('click', arg2);
          myButton.addEventListener('click', (event) => {
            //console.log('test');
	    console.log(event.target.textContent);
          });
        </script>
        <script src="./script_.js">
        </script>

    </main>
</body>
</html>	
```	
###### removeEventListener
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <main>
      <button id="btn">Click me!</button>
      <button id="btn-cancel">Cancel</button>
        <script>
          const myButton = document.getElementById('btn');
            //myButton.addEventListener('click', arg2);
          const cancelBtn = document.querySelector('#btn-cancel');
          
          const callback = (e) => {
            alert('Test');
          };
          
          myButton.addEventListener('click', callback);
          cancelBtn.addEventListener('click', () => {
            myButton.removeEventListener('click', callback);
          });
          
        </script>
        <script src="./script_.js">
        </script>

    </main>
</body>
</html>
```
## 3. 
	
## 4. Control events flow

код DOM, необходимый для выбора первого элемента с классом:card

```
const nanodegreeCard = document.querySelector('.card');
```
	
Для облегчения доступа сохраним первый элемент в переменной:

```
const nanodegreeCard = document.querySelector('.card');
```
Теперь, когда мы сохранили первый элемент карты в nanodegreeCardпеременной, 
мы можем использовать его nanodegreeCardдля ссылки на этот элемент вместо того,
чтобы использовать document.querySelector('.card') для выбора элемента каждый раз, когда нам нужен доступ к нему.

	
Установить текстовое содержимое элемента легко, просто установите его так же, как и любое другое свойство:

```
nanodegreeCard.textContent = "I will be the updated text for the nanodegreeCard element!";
```
	
```
Как вы уже обнаружили, .createElement()метод - это метод documentобъекта:

// creates and returns a <span> element
document.createElement('span');

// creates and returns an <h3> element
document.createElement('h3');
```
	
Теперь, чтобы использовать .appendChild() метод, его нужно вызвать на другом элементе , а не на document объекте!

```
// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);
```
	
Создание текстовых узлов
Так же, как вы создавали новые элементы с помощью .createElement() метода,
вы также можете создавать новые текстовые узлы с помощью .createTextNode() метода.
Взгляните на следующий код, который:

создает элемент абзаца
создает текстовый узел
добавляет текстовый узел к абзацу
добавляет абзац к тегу
```
const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);
```
	
Однако, поскольку вы уже знаете об этом .textContent свойстве, приведенный ниже код даст точно такой же результат:

```
const myPara = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);	
```
	
	
```	
<h3 class="text-center italic mb-half">"I hope the Udacity experience can be as transformative and revealing for others as it has been for me."</h3>
	
const mainHeading = document.querySelector('.blue light mb-half');
const otherHeading = document.querySelector('.text-center italic mb-half');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);
	
<h3 class="blue light mb-half">Imagine your future!</h3>
```

По определению, .appendChild() метод добавит элемент как последний дочерний элемент родительского элемента.
Невозможно поставить его первым ребенком или где-то еще ... это должен быть последний ребенок.
Было бы неплохо, если бы мы могли добавить дочерний элемент с некоторой гибкостью?

Введите .insertAdjacentHTML() метод! .insertAdjacentHTML() Метод должен быть вызван с двумя аргументами:

расположение HTML
текст HTML, который будет вставлен
Первый аргумент этого метода позволит нам вставить новый HTML в одно из четырех разных мест.

beforebegin - вставляет HTML-текст как предыдущий брат
afterbegin - вставляет HTML-текст как первый дочерний элемент
beforeend - вставляет HTML-текст как последний дочерний элемент
afterend - вставляет HTML-текст как следующего брата
Лучше всего работает наглядный пример, и в документации MDN есть фантастический пример, который я немного изменю:
```
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Existing text/HTML content
    <!-- beforeend -->
</p>
<!-- afterend -->
```
	
Вот как бы мы позвонили .insertAdjacentHTML():

```
const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);
```

это должен быть текст, а не HTML. Если вы передадите HTML, тогда этот HTML будет отображаться. Есть исправление:
Второй аргумент текст из insertAdjacentHTML() метода анализирует заданный текст в виде HTML - и вставляют результирующие узлы в дерево DOM в заданном положении.
	
#### В этом разделе мы узнали, как создавать новые элементы DOM и добавлять их на страницу. Мы рассмотрели следующие методы:

	.createElement() создавать новые элементы
	.appendChild() чтобы добавить дочерний элемент к родительскому элементу в качестве его последнего дочернего элемента
	.createTextNode() создать текстовый узел
	.insertAdjacentHTML() разместить HTML-текст в любом месте вокруг элемента
Обратите внимание на следующие важные моменты:

	если элемент уже существует в DOM и этот элемент передан .appendChild(), .appendChild() метод переместит его, а не дублирует
	.textContentсвойство элемента используется чаще, чем создание текстового узла с помощью .createTextNode() метода
	в .insertAdjacentHTML() второй аргумент метода должен быть текст, вы не можете передать элемент	
	

### Remove
	
В этом быстром разделе вы узнаете, как удалить контент со страницы. В частности, мы рассмотрим эти новые методы:

	.removeChild()
	.remove()
В процессе вы также узнаете об этих двух свойствах:

	.firstElementChild
	.parentElement

Удаление дочернего элемента
Мы можем использовать этот .removeChild() метод, чтобы ... подождать ... удалить дочерний элемент.
По сути, это полная противоположность .appendChild() метода.
Так же, как и для .appendChild() метода, для .removeChild() метода требуются:

	родительский элемент
	дочерний элемент, который будет удален
```
<parent-element>.removeChild(<child-to-remove>);
```
	
##### Недостаток (и обходной путь!) .removeChild() Метода
	
Как и у .appendChild() метода, у него есть (несколько незначительный) недостаток .removeChild().

Оба метода:
	требуется доступ к родительскому элементу для работы
Однако на самом деле нам не нужно иметь родительский элемент, потому что есть обходной путь!
Подобно тому, как .firstElementChild свойство может быть вызвано в родительском элементе для доступа к его первому элементу,
каждый элемент также имеет parentElement свойство, которое ссылается на его родительский элемент!
Итак, если у нас есть доступ к дочернему элементу, который мы собираемся добавить или удалить,
вы можете использовать parentElement свойство, чтобы «переместить фокус» на родительский элемент.
Затем мы можем вызвать .removeChild() (или .appendChild()) этот родительский элемент, на который есть ссылка.

Давайте посмотрим на пример:
	
```
const mainHeading = document.querySelector('h1');

mainHeading.parentElement.removeChild(mainHeading);
```
	
Давайте пройдемся по этому коду.

```
const mainHeading = document.querySelector('h1');
```
	
Предыдущий код выберет первый \<h1>на странице и сохранит его в mainHeading переменной.
Теперь к следующей строке:

```
mainHeading.parentElement.removeChild(mainHeading);
```

Это начинается с mainHeading переменной. Он вызывает .parentElement, поэтому фокус следующего кода направлен на родительский элемент.
Затем .removeChild() вызывается родительский элемент. Наконец, mainHeading сам передается как элемент, который нужно удалить из своего родителя.

Таким образом, элемент использует себя, чтобы удалить себя из своего родителя. Довольно круто, да?

###### Удаление дочернего элемента (часть 2!)
Мы прошли все эти шаги, выбрав элемент, используя методы обхода DOM, такие как .parentElementи .firstElementChild,
чтобы мы могли удалить дочерний элемент. Я показал вам этот способ, чтобы вы могли получить некоторое представление и попрактиковаться в перемещении в DOM.

Теперь вы можете быть рады (или разочарованы! Ха-ха), узнав, что есть более простой способ сделать все это!
Мы можем удалить дочерний элемент напрямую с помощью .remove() метода:

```
const mainHeading = document.querySelector('h1');

mainHeading.remove();
```
	
В этом коротком разделе мы узнали два способа удалить элемент со страницы. Вы узнали о:

	.removeChild()
	.remove()

Разница в том, что with .removeChild() должен быть вызван для родительского элемента удаляемого элемента и
должен быть передан дочернему .remove() элементу для удаления, в то время как может быть вызван непосредственно для удаляемого элемента.

Мы также узнали о следующих полезных свойствах:

	.firstChild
	.firstElementChild
	.parentElement

Разница между .firstChild и .firstElementChild заключается в том, .firstElementChild что всегда будет возвращаться первый элемент,
а .firstChild могут быть возвращены пробелы (если они есть) для сохранения форматирования исходного исходного кода HTML.

	
	
### Style
	
В этом разделе мы рассмотрим управление стилем страницы и элемента с помощью следующих свойств и методов:

	.style.<prop>
	.cssText
	.setAttribute()
	.className
	.classList
	
#### Специфика CSS

Чтобы добиться успеха в этом разделе, вам нужно будет понять, как работает CSS Specificity. Согласно MDN, «специфичность»:

средства, с помощью которых браузеры решают, какие значения свойств CSS наиболее актуальны для элемента и, следовательно, будут применяться.

По сути, чем ближе правило стиля к элементу, тем оно конкретнее.
Например, правило в атрибуте стиля элемента переопределит правило стиля для этого элемента в таблице стилей CSS.
Также существует специфика используемого типа селектора. _ID_ более конкретен, чем класс.

Если вы хотите узнать больше о специфике CSS, воспользуйтесь следующими ссылками:

	Специфика MDN
	Изменение атрибута стиля элемента

Вернемся к вашим знаниям о CSS.
При попытке стилизовать элемент самые конкретные правила, которые вы можете написать для элемента,
записываются в style атрибуте этого элемента .
К счастью для нас, мы можем получить доступ к style атрибуту элемента с помощью .style свойства!
```
const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'red';
```
Теперь я хочу указать, что при использовании .style свойства вы можете изменять только один стиль CSS за раз.
Вот почему в предыдущем коде есть .style.color = 'red'и не только .style = 'red'.

	
	
	
#### Добавление нескольких стилей одновременно
Мы видели, как .style.<property> синтаксис позволяет нам изменить только одну часть стиля для элемента.
Поэтому, если бы мы хотели установить цвет элемента, цвет фона и размер шрифта, нам пришлось бы использовать три отдельные строки кода:
```
const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'blue';
mainHeading.style.backgroundColor = 'orange';
mainHeading.style.fontSize = '3.5em';
```
... и это только для установки трех стилей. Представьте, если бы нам понадобилось 15 или 20 разных стилей!
Таким образом, .style.property синтаксис идеально подходит для установки одного стиля за раз, но не подходит для управления несколькими стилями.

К счастью, мы можем использовать это .style.cssText свойство для одновременной установки нескольких стилей CSS!
```
const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';
```
	
Обратите внимание, что при использовании .style.cssText свойства вы пишете стили CSS так же, как в таблице стилей; так ты пишешь, font-sizeа не fontSize.
Это отличается от использования индивидуального .style.<property> способа.

```
<p id="quizzing-quizzes" style="color: orange;">Howdy</p>
```
Какие из следующих стилей будут применены для указанного выше элемента после выполнения этого кода?

```
document.querySelector('#quizzing-quizzes').style.cssText = 'width: 30px; textDecoration: underline;';
```
	
	
#### Установка атрибутов элемента
Другой способ набора стилей для элемента , чтобы обойти .style.<property> и .style.cssText свойства вообще и использовать .setAttribute() метод:
```
const mainHeading = document.querySelector('h1');

mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');
```
	

	.setAttribute() Не только для укладки
Этот setAttribute() метод предназначен не только для стилизации элементов страницы.
Вы можете использовать этот метод для установки любого атрибута для элемента.
Если вы хотите присвоить элементу идентификатор, вы можете это сделать!:
```
const mainHeading = document.querySelector('h1');

// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';
```
	
Последние две строки можно было бы объединить в одну, чтобы обойти установку идентификатора и просто стилизовать элемент напрямую:
```
mainHeading.nextElementSibling.style.backgroundColor = 'red';
```
... но это было просто, чтобы продемонстрировать, что с помощью JavaScript можно установить атрибут,
который влияет на DOM, который затем можно использовать немедленно

	
	
### Доступ к классам элемента
Первое свойство элемента, которое мы рассмотрим, - это .className свойство.
Это свойство возвращает строку всех классов элемента. Если элемент имеет следующий HTML-код:
```
<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>
```
Мы могли бы использовать .className для доступа к списку классов:
	
```
const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.className;

// logs out the string "ank-student jpk-modal"
console.log(listOfClasses);
```
.className Свойство возвращает разделенный пробелами строку классов. 
К сожалению, это не самый идеальный формат.
Однако мы можем преобразовать эту разделенную пробелами строку в массив с помощью строкового метода JavaScript .split():
```
const arrayOfClasses = listOfClasses.split(' ');

// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);
```
	
Теперь, когда у нас есть массив классов, мы можем выполнять любые вычисления с большим объемом данных:

	используйте for цикл для просмотра списка имен классов
	используйте, .push() чтобы добавить элемент в список
	используйте, .pop() чтобы удалить элемент из списка
	.className является свойством, поэтому мы можем установить его значение, просто присвоив свойству строку:
```
mainHeading.className = "im-the-new-class";
```
Приведенный выше код удаляет все классы, которые изначально были в class атрибуте элемента, и заменяет его единственным классом im-the-new-class.

Поскольку .className возвращает строку, это затрудняет добавление или удаление отдельных классов.
Как я упоминал ранее, мы можем преобразовать строку в массив, а затем использовать различные методы массива для поиска класса,
удалить его из списка, а затем обновить .className его, добавив оставшиеся классы.
Однако мы не хотим делать всю эту работу! Воспользуемся новым .classList свойством.

###### .classList свойство
.classList Свойство новее , чем .className свойство, но гораздо лучше, проверить это:
	
```
<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>
const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.classList;

// logs out ["ank-student", "jpk-modal"]
console.log(listOfClasses);
```	
	
	
	
.classList Свойство имеет ряд свойств своей собственной.
Вот некоторые из наиболее часто используемых:

	.add() - добавить класс в список
	.remove() - удалить класс из списка
	.toggle() - добавить класс, если он не существует, или удалить его из списка, если он уже существует
	.contains() - возвращает логическое значение в зависимости от того, существует ли класс в списке или нет
	
Краткое содержание страницы стиля
В этом разделе мы узнали много нового! Мы посмотрели:

	изменение отдельных стилей с помощью .style.<prop>
	одновременное обновление нескольких стилей с помощью .style.cssText
	получение / установка списка классов с помощью .className
	получение / установка / переключение классов CSS с помощью .classList
Я рекомендую вам из списка техник, которые вы изучили в этом разделе, использовать это .classList свойство чаще, чем какие-либо другие.
	.classList на сегодняшний день является наиболее полезным свойством из всех, и помогает уберечь стили CSS от кода JavaScript.	
	
## 5. 
	
## 6.
	
###### Увидеть событие
Прямо сейчас на этой странице происходит скрытый мир событий!
Это очень трудно на самом деле видеть в этот скрытый мир, хотя.
Так как мы можем знать , что события действительно будут быть объявлены? Если они анонсируются, почему нам нелегко их увидеть?

К счастью, в браузере Chrome есть специальная monitorEvents() функция, которая позволяет нам видеть разные события по мере их возникновения.	

	
В этом видео вы видели следующие события:

	click
	dblclick
	scroll
	resize
Однако есть еще сотни !

Функция monitorEvents будет продолжать выдавать все события, происходящие в целевом элементе, до конца времени ... 
или до тех пор, пока вы не обновите страницу. Кроме того , браузер Chrome делает предлагает unmonitorEvents() функцию,
отключающее оповещение о событиях для целевого элемента:
```
// start displaying all events on the document object
monitorEvents(document);

// turn off the displaying of all events on the document object.
unmonitorEvents(document);
```
Последняя небольшая информация monitorEvents- это то, что это только для целей разработки / тестирования. Его не следует использовать для производственного кода.	
	
	
	
###### Цель события
Вы помните интерфейс узла и интерфейс элемента из первого урока?
Вы помните, как интерфейс элемента является потомком интерфейса узла и, следовательно, наследует все свойства и методы узла?

Ну, была одна часть, которую я тогда полностью пропустил, но обращаюсь к ней сейчас. Интерфейс узла наследуется от EventTargetинтерфейса.

Диаграмма, показывающая EventTarget, унаследованный всеми узлами и элементами
Интерфейс EventTarget наследуется всеми узлами и элементами.

На странице EventTarget указано, что EventTarget:

- это интерфейс, реализованный объектами, которые могут получать события и могут иметь для них прослушиватели.

и

Элемент, документ и окно являются наиболее распространенными целями событий, но другие объекты также могут быть целями событий ...

EventTarget находится в верхней части цепочки. Это означает, что он не наследует никаких свойств или методов от других интерфейсов.
Однако любой другой интерфейс наследуется от него и, следовательно, содержит его свойства и методы. Это означает, что каждое из следующих событий является «целью события»;

	document объект
	элемент абзаца
	видеоэлемент
	и Т. Д.
Помните, что как объект документа, так и любой элемент DOM могут быть целью события. И снова, почему это? ...
потому что и интерфейс элемента, и интерфейс документа наследуются от интерфейса EventTarget.
Таким образом, любой отдельный элемент наследуется от интерфейса элемента, который, в свою очередь, наследуется от интерфейса EventTarget.
Точно так же объект документа поступает из интерфейса документа, который, в свою очередь, наследуется от интерфейса EventTarget.

Если вы посмотрите на интерфейс EventTarget, вы заметите, что у него нет никаких свойств и всего три метода! Вот эти методы:

	.addEventListener()
	.removeEventListener()
	.dispatchEvent()
Метод, который мы рассмотрим до конца этого курса, будет .addEventListener() методом.

Добавление прослушивателя событий
Мы бегло рассмотрели этот скрытый мир событий. Использование .addEventListener() метода позволит нам отслеживать события и реагировать на них!
Я просто сказал « прислушивайтесь к событиям». Есть несколько способов "сформулировать" это, поэтому я хочу привести несколько примеров:

	прислушиваться к событию
	слушать событие
	подключиться к событию
	ответить на событие
... все они означают одно и то же и взаимозаменяемы.

Давайте воспользуемся псевдокодом, чтобы объяснить, как установить прослушиватель событий:
```
<event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);
```
	
Итак, слушателю событий нужны три вещи:

	цель события - это называется целью
	тип события для прослушивания - это называется типом
	функция, запускаемая при возникновении события - это называется слушателем
	
<event-target>( То есть цель ) возвращается к тому, на что мы только что смотрели: все в сети является целью события (например, documentобъект, <p>элемент и т. Д.).

<event-to-listen-for>(Т.е. тип ) это событие мы хотим реагировать. Это может быть щелчок, двойной щелчок, нажатие клавиши на клавиатуре, прокрутка колеса мыши, отправка формы ... список можно продолжать!

Функция <function-to-run-when-an-event-happens>(то есть слушатель ) запускается, когда событие действительно происходит.

Преобразуем псевдокод в реальный пример слушателя событий:
```
const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function () {
  console.log('The heading was clicked!');
});
```
Давайте разберем приведенный выше фрагмент:

	цель - это первый <h1>элемент на странице
	тип события для прослушивания - это "click"событие
	слушатель - это функция, которая ведет журнал "The heading was clicked!"в консоли	
	
```
const lotsOfElements = document.querySelectorAll('.quizzing-quizzby');
const element = lotsOfElements[2];

element.addEventListener('animationend', function () {
    const mainHeading = document.querySelector('h1');

    mainHeading.style.backgroundColor = 'purple'; 
});	
```	

	
###### Добавить прослушиватель событий в проект
Запуск кода в инструментах разработчика браузера - это фантастика для тестирования. Но этот прослушиватель событий будет работать только до обновления страницы. 
Как и весь реальный код JavaScript, который мы хотим отправить нашим пользователям, наш код прослушивателя событий должен находиться в файле JavaScript.

Попробуем добавить прослушиватель событий в файлы нашего проекта!
	

	
```
document.addEventListener('click', function () {
  const mainHeading = document.querySelector('h1');
	
  mainHeading.style.backgroundColor = 'red';
  console.log('The heading was clicked!');
});
```
	
Отражать
Подумайте об этих интерфейсах:

	EventTarget
	Узел
	Элемент
Есть ли разница между этими двумя:

	document.addEventListener()
	myHeading.addEventListener()(предположим, что myHeading переменная является элементом)
	
	
	
Резюме
В этом разделе вы узнали все о событиях, интерфейсе EventTarget и о том, как добавлять прослушиватели событий.
Мы использовали этот .addEventListener()метод для прикрепления слушателей к:

	в document
	узел
	элемент
... в основном все, что наследуется от интерфейса EventTarget. Мы также увидели, что прослушиватель событий состоит из трех основных частей:

	цель события - цель
	тип события для прослушивания - тип
	функция, запускаемая при возникновении события - слушатель
	
	
	
###### Удаление прослушивателя событий
Мы говорим, что можем использовать .addEventListener() метод цели события, чтобы начать прослушивать определенные события и реагировать на них.
Допустим, вы хотите прослушивать только первое событие щелчка, реагировать на него и игнорировать все остальные события щелчка. 
.addEventListener() Событие будет слушать и реагировать на все события щелчка.

(Новейшая версия .addEventListener() спецификации действительно позволяет объект быть принят в качестве третьего параметра.
Этот объект может быть использована для настройки способом .addEventListener() метода ведет себя.
Следует отметить, что есть возможность слушать только одного события. Однако это объект конфигурации пока не поддерживается широко).

Чтобы удалить прослушиватель событий, мы используем .removeEventListener() метод.
Звучит достаточно просто, правда? Однако, прежде чем мы посмотрим .removeEventListener(), нам нужно сделать краткий обзор равенства объектов.
Это кажется странным прыжком, но через мгновение в нем появится смысл.

###### Равны ли объекты в JavaScript
Равенство - обычная задача в большинстве языков программирования, но в JavaScript это может быть немного сложно, потому что JavaScript выполняет такую ​​вещь, 
которая называется приведением типов, когда он пытается преобразовать сравниваемые элементы в один и тот же тип. (например, строка, число).
В JavaScript есть ==оператор двойного равенства ( ), который разрешает приведение типов .
Он также имеет тройной ===символ равенства ( ), который предотвращает приведение типов при сравнении.

Надеюсь, это все обзор. Но давайте поговорим только о равенстве объектов, включая объекты, массивы и функции.
Попробуйте пройти этот тест:

ВОПРОС 
Приведет ли следующий тест на равенство к trueили false?
```
{ name: 'Richard' } === { name: 'Richard' }   //  false
```
	
	
ВОПРОС 2
Учитывая этот код:
```
var a = {
    myFunction: function quiz() { console.log('hi'); }
};
var b = {
    myFunction: function quiz() { console.log('hi'); }
};
```
Следующий код оценивает trueили false?
```
a.myFunction === b.myFunction  //  false
```
	
	
ВОПРОС 3
Учитывая этот код:
```
function quiz() { ... }

var a = {
    myFunction: quiz
};
var b = {
    myFunction: quiz
};
```
Следующий код оценивает true или false?
```
a.myFunction === b.myFunction  //  true
```
	
	
Итак, почему мы заботимся об этом равенстве объекта / функции?
Причина в том, что .removeEventListener() метод требует, чтобы вы передали ему ту же самую функцию слушателя, которой вы передали .addEventListener().

Давайте посмотрим на псевдокод для .removeEventListener():

	<event-target>.removeEventListener(<event-to-listen-for>, <function-to-remove>);
Итак, слушателю событий нужны три вещи:

	цель события - это называется целью
	тип события для прослушивания - это называется типом
	функция для удаления - это называется слушателем
Помните, что слушатель функция должна быть точная та же функция, которая используется в .addEventListener() вызове ... не только идентичной функции смотрит.
Давайте посмотрим на пару примеров.

Этот код успешно добавит, а затем удалит прослушиватель событий:
```
function myEventListeningFunction() {
    console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);
```
Итак, почему это работает? Это работает, потому что .addEventListener()и .removeEventListener:

	иметь ту же цель
	иметь один и тот же тип
	и передать того же слушателя
Теперь давайте посмотрим на пример, который не работает (он не удаляет прослушиватель событий):
```
// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});
```
Этот код делает не успешно удалить прослушиватель событий. Опять же, почему это не работает?

	оба .addEventListener()и .removeEventListenerимеют одну и ту же цель
	оба .addEventListener()и .removeEventListenerимеют один и тот же тип
	.addEventListener()и .removeEventListenerимеют свои собственные отдельные функции прослушивателя ...
	они не относятся к одной и той же функции ( это причина, по которой удаление прослушивателя событий не удается! )

Две функции могут выглядеть одинаково, но располагаться в двух разных местах памяти. Внешность может быть обманчива!

Когда мы писали
```
function myEventListeningFunction() {
    console.log('howdy');
}
```
во второй раз мы фактически создали совершенно новую функцию, которая была сохранена в совершенно новом месте в памяти!
Они могут выглядеть одинаково и делать то же самое, но это не делает их одинаковыми.
Представьте себе сценарий, в котором вы видите два совершенно одинаковых дома. 
Хотя дома могут выглядеть одинаково, их адреса разные! Именно это и произошло в нашем предыдущем примере.

Почему бы тебе не попробовать свои силы в этом!
	
	
##### Отражать
Подумав об узлах и структуре DOM, после выполнения приведенного ниже кода, какой прослушиватель событий сработает первым при нажатии на страницу? Запишите свой ответ и объяснение, почему он будет в таком порядке:
```ocument.addEventListener('click', function () {
   console.log('The document was clicked');
});

document.body.addEventListener('click', function () {
    console.log('The document body was clicked');
});
```
отражение
```
1) document.body.addEventListener ('click', function () {console.log ('Было выполнено нажатие на тело документа');}); 
2) document.addEventListener ('щелчок', функция () {console.log ('На документ щелкнули');});	
```
		
		
#### Фазы события
Жизненный цикл события состоит из трех этапов. Они есть:

	захвата фазы
	в целевой фазе
	и фаза пузырьков
И они действительно следуют указанному выше порядку; сначала захват , затем цель , а затем фаза всплытия .

Большинство обработчиков событий запускаются во время целевой фазы, например, когда вы прикрепляете обработчик события щелчка к кнопке.
Событие прибывает на кнопку (его цель ), и прямо здесь есть только обработчик для него, поэтому обработчик события запускается.
		
Итак, какую из трех фаз в событии .addEventListener()фактически использует метод? И как мы можем это изменить?

До этого момента мы видели только .addEventListener()метод, вызываемый с двумя аргументами:

	тип события
	и слушатель
```
document.addEventListener('click', function () {
   console.log('The document was clicked');
});
```
На самом деле у метода есть третий аргумент .addEventListener(); useCapture аргумент. 
Судя по его названию, можно подумать, что, если бы этот аргумент был опущен, по .addEventListener()умолчанию использовалась бы фаза захвата .
Это неверное предположение! По умолчанию, когда .addEventListener()вызывается только с двумя аргументами, метод по умолчанию использует фазу восходящей цепочки.

В приведенном ниже коде используется .addEventListener()только два аргумента, поэтому он будет вызывать слушателя во время фазы восходящей цепочки:
```
document.addEventListener('click', function () {
   console.log('The document was clicked');
});
```
Однако в этом коде .addEventListener()вызывается с тремя аргументами, причем третий аргумент является true(это означает,
что он должен вызывать слушателя раньше, во время фазы захвата !).
```
document.addEventListener('click', function () {
   console.log('The document was clicked');
}, true);		
```
		
Для какой из фаз настроен следующий код?
```
const items = document.querySelectorAll('.quizzing-quizzes');
const el = items[1];

el.addEventListener('click', function () {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
}, false);
```		
		
		

Но иногда у вас есть набор элементов - например, список - и вы хотите, чтобы один обработчик охватывал каждый элемент 
(и при этом у вас есть возможность использовать отдельные обработчики для некоторых элементов).
По умолчанию, если вы щелкаете дочерний элемент и обработчик не перехватывает щелчок, 
событие будет «пузыриться» вверх к родительскому элементу и будет продолжать всплывать, пока что-то не обработает его или не попадет в документ.

С другой стороны, захват позволяет родительскому элементу перехватить событие до того, как оно достигнет дочернего элемента.

Давайте углубимся в эти фазы, чтобы увидеть, как они влияют на запуск событий и порядок, в котором они запускаются!
		
#### Объект события
Теперь, когда вы знаете, что прослушиватели событий запускаются в определенном порядке и как интерпретировать и контролировать этот порядок,
пора переключить внимание на детали самого события.

Когда происходит событие, браузер включает объект события . 
Это обычный объект JavaScript, который включает в себя массу информации о самом событии.
По MDN, в .addEventListener()«S слушатель функция получает:

уведомление (объект, реализующий интерфейс Event), когда происходит событие указанного типа

До этого момента я писал все функции слушателя без каких-либо параметров для хранения этого объекта события.
Давайте добавим параметр, чтобы мы могли хранить эту важную информацию:
```
document.addEventListener('click', function (event) {  // ← the `event` parameter is new!
   console.log('The document was clicked');
});
```
Обратите внимание на новый event параметр, добавленный к функции прослушивателя.
Теперь, когда вызывается функция прослушивателя, она может сохранять переданные ей данные о событии!

💡 «Событие» - это «евт», это «е» 💡
Помните, что параметр функции похож на обычную переменную.
В следующем примере я использую параметр с именем event.
```
const items = document.querySelectorAll('.quizzing-quizzes');
const el = items[1];

el.addEventListener('keypress', function (event) {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
});
```
Вместо этого event имя параметра может быть таким же простым:

	evt
	e
	theEvent
	horse
Имя eventили evt не дает никакого внутреннего значения или специальных возможностей; 
в названии нет ничего особенного ... это просто название параметра.
Не стесняйтесь давать ему любое информативное / описательное имя!
		
		
#### Действие по умолчанию
Как мы только что рассмотрели, объект события хранит много информации, и мы можем использовать эти данные для выполнения самых разных задач.
Однако одна невероятно распространенная причина, по которой профессионалы используют объект события, - это предотвратить выполнение действия по умолчанию.
Звучит странно, но давайте рассмотрим это.

Подумайте о якорной ссылке на веб-странице. Наверное, на этой странице есть пара десятков ссылок!
Что, если вы хотите запустить какой-то код и отобразить какой-то вывод, когда вы щелкнете по одной из этих ссылок.
Если вы нажмете на ссылку, она автоматически переместит вас в место, указанное в его hrefатрибуте: это то, что он делает по умолчанию.

А как насчет элемента формы? Когда вы отправляете форму, по умолчанию она отправляет данные в то место, которое указано в ее actionатрибуте.
Что, если бы мы хотели проверить данные перед их отправкой?

Без объекта события мы придерживаемся действий по умолчанию. 
Однако у объекта события есть .preventDefault() метод, который может вызвать обработчик, чтобы предотвратить выполнение действия по умолчанию!
		
```
const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});
```
		
Резюме
В этом разделе мы рассмотрели ряд важных аспектов событий и слушателей событий!
Мы посмотрели:

фазы события:
	capturingфаза
	at targetфаза
	bubblingфаза
	объект события
	предотвратить действие по умолчанию с помощью .preventDefault()

		
		
		
Сколько слушателей событий создается с помощью этого кода?
```
const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick(evt) {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
			
```
Введите количество слушателей событий ниже. (введите только цифры) - 200
		

#### Рефакторинг количества слушателей событий
Посмотрим на код в другой раз:


			
Мы создаем <div>элемент, присоединяем двести элементов абзаца и присоединяем прослушиватель событий с respondToTheClick функцией к каждому абзацу по мере его создания. 
Есть несколько способов рефакторинга этого кода. Например, прямо сейчас мы создаем две сотни различных respondToTheClickфункций (которые на самом деле делают одно и то же!).
Мы могли бы извлечь эту функцию и просто сослаться на нее, вместо того, чтобы создавать две сотни различных функций:
```
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick);

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
```
			
Это отличный шаг в правильном направлении!

Однако у нас все еще есть двести слушателей событий. Все они указывают на одну и ту же функцию прослушивателя, но есть еще двести разных прослушивателей событий.

Что, если бы мы вместо этого переместили всех слушателей в <div>?

Код для этого будет выглядеть так:
```
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener('click', respondToTheClick);

document.body.appendChild(myCustomDiv);
```		
		
Сейчас есть только:

	один прослушиватель событий
	единственная функция слушателя
Теперь браузеру не нужно хранить в памяти двести разных прослушивателей событий и двести разных функций прослушивателей. Отлично для производительности!

Однако, если вы протестируете приведенный выше код, вы заметите, что мы потеряли доступ к отдельным абзацам.
У нас нет возможности настроить таргетинг на конкретный элемент абзаца.
Итак, как нам объединить этот эффективный код с доступом к отдельным элементам абзаца, который мы делали раньше?

Мы используем процесс, называемый делегированием событий .

##### Делегирование событий
Помните объект события, который мы рассматривали в предыдущем разделе? Это наш билет к возвращению исходной функциональности!

У объекта события есть .targetсвойство. Это свойство ссылается на цель события. Помните фазы захвата, попадания в цель и всплывания? ... они тоже возвращаются в игру!

Допустим, вы щелкаете элемент абзаца. Вот примерно как происходит процесс:

	элемент абзаца нажат
	событие проходит фазу захвата
	он достигает цели
	он переходит в фазу пузырька и начинает подниматься по дереву DOM
	когда он попадает в <div>элемент, он запускает функцию слушателя
	внутри функции слушателя event.target- это элемент, по которому щелкнули
Таким образом, event.targetмы получаем прямой доступ к элементу абзаца, по которому был выполнен щелчок.
Поскольку у нас есть доступ к элементу напрямую, мы можем обращаться к нему .textContent, изменять его стили,
обновлять классы, которые он имеет - мы можем делать с ним все, что захотим!
```
const myCustomDiv = document.createElement('div');

function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);
```

##### Проверка типа узла в делегировании событий
В фрагменте кода, который мы использовали выше, мы добавили прослушиватель событий непосредственно к <div>элементу. 
Функция прослушивателя регистрирует сообщение о том, что был нажат элемент абзаца (а затем текст целевого элемента). 
Это прекрасно работает! Однако нет ничего, что могло бы гарантировать, что на самом деле это был <p>тег, по которому щелкнули перед запуском этого сообщения.
В этом фрагменте <p>теги были прямыми дочерними <div>элементами элемента, но что произойдет, если у нас будет следующий HTML:
```
<article id="content">
  <p>Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping sugar plum jelly jujubes chocolate.</p>

  <p>Tart bonbon soufflé gummi bears. Donut marshmallow <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy caramels tootsie roll powder sweet roll brownie <span>apple pie</span> gummies. Fruitcake danish chocolate tootsie roll macaroon.</p>
</article>
```
Обратите внимание, что в этом тексте-заполнителе есть несколько <span>тегов. Если мы хотим прослушать <article>щелчок по a <span>, вы можете подумать, что это сработает:

```
document.querySelector('#content').addEventListener('click', function (evt) {
    console.log('A span was clicked with text ' + evt.target.textContent);
});
```
		
Это сработает, но есть серьезный недостаток. Функция прослушивателя по-прежнему будет срабатывать при щелчке по одному из элементов абзаца! 
Другими словами, эта функция прослушивателя не проверяет, действительно ли<span> целью события является элемент .
Добавим в эту проверку:
```
document.querySelector('#content').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('A span was clicked with text ' + evt.target.textContent);
    }
});
```
Помните, что каждый элемент наследует свойства от интерфейса узла . 
Одно из наследуемых свойств интерфейса узла - .nodeName.
Мы можем использовать это свойство, чтобы убедиться, что целевой элемент действительно является тем элементом, который мы ищем.
При <span>щелчке по элементу у него будет .nodeNameсвойство "SPAN", поэтому проверка пройдет, и сообщение будет зарегистрировано.
Однако, если <p>щелкнуть элемент, он будет иметь .nodeNameсвойство "P", поэтому проверка не будет выполнена, и сообщение не будет зарегистрировано.

### ⚠️ nodeName Заглавные буквы
.nodeNameСвойство возвращает капитал строку, а не в нижнем регистре один. Поэтому при выполнении проверки убедитесь, что:

	проверьте на заглавные буквы
	преобразовать .nodeNameв нижний регистр
```
// check using capital letters
if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

> // convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}
```
		
##### Резюме
В этом разделе мы рассмотрели делегирование событий.
Делегирование событий - это процесс делегирования родительскому элементу возможности управлять событиями для дочерних элементов. 
Мы смогли сделать это, используя:

	объект события и его .targetсвойство
	различные фазы события		
		
		
### Использование цикла для добавления содержимого
В прошлом уроке мы использовали forцикл для создания двухсот абзацев, добавления к ним прослушивателей событий и добавления их на страницу. Давайте еще раз взглянем на forцикл, но на этот раз без всего, что связано с прослушивателем событий:
```
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    document.body.appendChild(newElement);
}
```
##### Отражать
forЭффективно ли написан этот код цикла? Напишите, как, по вашему мнению, этот код можно улучшить. (подсказка - на самом деле есть несколько способов!)

Введите свой ответ здесь, нет правильного или неправильного ответа
Давайте быстро повторим код, чтобы увидеть, где мы можем внести улучшения.
```
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    document.body.appendChild(newElement);
}
```
Этот код:

	создает элемент абзаца
	добавляет текст в абзац
	добавляет абзац на страницу
...и так двести раз.

Так как мы хотим сделать двести вещей, лучший способ сделать это — использовать forцикл, так что этот код неизбежен.
Однако код внутри forцикла не так уж эффективен, и мы могли бы сделать несколько вещей, чтобы улучшить этот код. Мы могли бы:
	создать некоторый элемент родительского контейнера вне цикла
	мы могли бы добавить все новые элементы абзаца в этот родительский контейнер
	мы добавляем этот родительский контейнер к <body>элементу вместо добавления каждый раз через цикл

Давайте посмотрим на все эти изменения:
```
const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement('p');
  newElement.innerText = 'This is paragraph number ' + i;

  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
```
Это выглядит намного лучше, верно? Верно!... но откуда мы знаем, что это так? Как мы можем доказать, что это лучше?

Мы можем проверить время, необходимое для фактического запуска этого кода!

##### Тестирование производительности кода
Стандартный способ измерить, сколько времени требуется для запуска кода, — использовать performance.now().
performance.now()возвращает отметку времени, которая измеряется в миллисекундах, поэтому она чрезвычайно точна. 
Насколько точно? Вот что написано на его странице документации:

с точностью до пятитысячных миллисекунды (5 микросекунд)

Это невероятно точно!

Если вы когда-либо использовали процедуру синхронизации в другом языке программирования, 
то, возможно, вы слышали о времени эпохи (также называемом временем Unix или временем POSIX). 
Эти инструменты сообщают вам время, прошедшее с 01.01.1970 (первого января). 
Метод браузера performance.now()немного отличается тем, что он начинает измерение с момента загрузки страницы.
Подробную информацию можно найти на странице документации: performance.now() на MDN.

Вот шаги, которые можно использовать performance.now()для измерения скорости вашего кода:

	используйте, performance.now()чтобы получить начальное время запуска кода
	запустите код, который вы хотите протестировать
	выполнить, performance.now()чтобы получить другое измерение времени
	вычесть начальное время из конечного времени
Добавление двухсот абзацев на страницу на самом деле будет относительно быстрым, поэтому давайте замедлим процесс,
используя набор вложенных forциклов, которые просто считают от одного до ста... сто раз!
```
for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}
```

Далее мы добавим performance.now()код, чтобы измерить, сколько времени занимают эти циклы:
```
const startingTime = performance.now();

for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
```

Используется performance.now()для расчета общего времени, необходимого для запуска кода.

Давайте вернемся к нашему исходному коду добавления двухсот абзацев на страницу, чтобы посмотреть, сколько времени займет выполнение этого кода.

С левой стороны это код, к которому мы привыкли.
##### Использование фрагмента документа
На данный момент мы внесли ряд улучшений в код. Однако есть еще одна вещь, которая кажется не такой уж замечательной; 
нам нужно создать посторонний <div>элемент только для хранения всех <p>тегов, чтобы мы могли добавить их все сразу,
а затем добавить его <div>к <body>элементу. Итак, в конце концов, у нас есть дополнительный, 
<div>который на самом деле не нужен. Это было просто потому, что мы хотели добавлять каждое новое <p>в него, а не в файл <body>.

Зачем мы это делаем? Браузер постоянно работает над тем, чтобы экран соответствовал DOM. 
Когда мы добавляем новый элемент, браузер должен выполнить reflowрасчет (чтобы определить новую компоновку экрана), а затем repaintэкран. 
Это требует времени.

Если бы мы добавляли каждый новый абзац в элемент body, тогда код работал бы намного медленнее,
потому что это заставляло бы браузер выполнять процесс перекомпоновки и перерисовки для каждого абзаца .
Мы действительно хотим, чтобы браузер делал это только один раз, поэтому нам нужно прикреплять каждый новый абзац к чему-то,
но мы не хотим, чтобы лишний, ненужный элемент добавлялся в DOM.

Именно поэтому у нас есть DocumentFragment ! Согласно документации, DocumentFragment:

представляет минимальный объект документа, который не имеет родителя. 
Он используется как облегченная версия Document, в которой хранится сегмент структуры документа, состоящий из узлов, как и в стандартном документе.

Так что это похоже на создание еще одного облегченного дерева DOM. Но полезная часть этого заключается в следующем:

Ключевое отличие заключается в том, что поскольку фрагмент документа не является частью древовидной структуры активного документа,
изменения, внесенные во фрагмент, не влияют на документ, не вызывают перекомпоновку и не влияют на производительность,
которые могут возникнуть при внесении изменений.

Другими словами, изменения, внесенные в DocumentFragment, происходят вне экрана; 
нет никаких затрат на переплавку и перекраску, пока вы строите это. Значит, это именно то, что нам нужно!

Мы можем использовать этот .createDocumentFragment()метод для создания пустого объекта DocumentFragment. 
Этот код должен быть вам очень знаком, потому что он очень похож на document.createElement().
```
const myDocFrag = document.createDocumentFragment();
```
	
Давайте перепишем наш код, чтобы использовать DocumentFragment вместо <div>.
```
const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!
```
##### Резюме
В этом разделе мы кратко рассмотрели влияние написанного нами кода на производительность. 
Мы рассмотрели определенный фрагмент кода и придумали, как можно улучшить его производительность,
просто изменив порядок выполнения кода (удалив код инициализации из forцикла).

Мы также рассмотрели, как измерить, сколько времени требуется для запуска кода с использованием performance.now().

Наконец, мы рассмотрели использование DocumentFragment для предотвращения проблем с производительностью и предотвращения добавления ненужных элементов в DOM.		

			
			
##### Перекомпоновать и перекрасить
Мы упоминали Reflow и Repaint в предыдущем разделе, теперь пришло время рассмотреть их поближе.

Reflow — это процесс верстки страницы браузером. 
Это происходит, когда вы впервые отображаете DOM (обычно после загрузки DOM и CSS), и повторяется каждый раз, когда что-то может изменить макет.
Это довольно дорогой (медленный) процесс.

Перерисовка происходит после перекомпоновки , когда браузер рисует новый макет на экране. 
Это довольно быстро, но вы все равно хотите ограничить, как часто это происходит.

Например, если вы добавляете класс CSS к элементу, браузер часто пересчитывает макет всей страницы — это одно перекомпоновка и одно перерисовывание!

###### Отражать
Добавление одного класса CSS может вызвать перекомпоновку . 
		
Почему добавление небольшого изменения CSS вызвало перекомпоновку? 
Что, если добавление класса изменит положение элемента или заставит его плавать?
Браузер не будет знать наверняка (и полный расчет влияния изменения может занять больше времени, чем перекомпоновка!)

Возьмем реалистичный пример. Допустим, вы пишете новую платформу для ведения блога и хотите, чтобы у администратора была кнопка «удалить спам». Ваш HTML выглядит так:
```
<div id="comments">
  <div class="comment"> <!-- some content --> </div>
  <div class="comment"> <!-- some content --> </div>
  <div class="comment"> <!-- some content --> </div>
</div>
```
Когда мы запускаем спам-фильтр, мы обнаруживаем, что комментарии один и два должны быть удалены.

Если мы просто вызовем .removeChild()каждый из двух комментариев, которые необходимо удалить, 
это будет одна перекомпоновка и одна перерисовка для каждого изменения (всего 2 перекомпоновки и 2 перерисовки).
Мы могли бы перестроить все это за один раз DocumentFragmentи заменить #comments— это время для перестроения (возможно, включая чтение файлов или данных),
плюс по крайней мере одно перекомпонование и одно перерисовывание.

Или мы могли бы скрыть #comments , удалить спам и показать его снова — это удивительно быстро, за счет одного перекомпоновки и двух перерисовок (и почти ничего).
Это быстро, потому что скрытие не меняет макет, а просто стирает эту часть экрана (1 перерисовка).
Когда вы снова делаете измененный раздел видимым, это перекомпоновка и перерисовка.
```
// hide #comments
document.getElementById("comments").style.display = "none";

// delete spam comments

// show #comments
document.getElementById("comments").style.display = "block";
```
В общем, если вам нужно внести группу изменений, скрыть/изменить все/показать — отличный шаблон для использования, если изменения относительно ограничены.

###### Виртуальный дом
Кстати, именно поэтому React и другие библиотеки «виртуального DOM» так популярны. 
Вы не вносите изменения в DOM, а вносите изменения в другую структуру («виртуальную DOM»), и библиотека вычисляет лучший способ обновления экрана для соответствия.
Загвоздка в том, что вам придется переработать свой код, чтобы использовать любую библиотеку, которую вы принимаете,
и иногда вы можете лучше справиться с обновлением экрана самостоятельно (потому что вы понимаете свою собственную уникальную ситуацию).

###### Резюме
В этом разделе мы кратко рассмотрели, что такое перекомпоновка и перерисовка, и увидели, как они могут повлиять на производительность веб-сайта.

Reflow — это процесс расчета размеров и положения элементов страницы. 
Это вычислительно интенсивные (медленные) задачи. Repaint — это процесс рисования пикселей на экране. 
Это быстрее, чем оплавление, но все же не быстрый процесс. Вы хотите убедиться, что ваш код вызывает наименьшее количество перекомпоновок.
	
	
	
### Однопоточный
Возможно, вы слышали, что JavaScript является однопоточным, но что это значит? Согласно Википедии, однопоточность это:

обработка одной команды за раз 

Итак, JavaScript может «обрабатывать» одну команду за раз. Противоположностью однопоточности является многопоточность.
У обоих есть множество плюсов и минусов, в которые мы не будем вдаваться
(не стесняйтесь ознакомиться со статьей Википедии о многопоточности для получения дополнительной информации о плюсах и минусах).
Мы рассмотрим однопоточную модель JavaScript и то, как/почему мы должны писать наш код, чтобы использовать ее преимущества.

Давайте посмотрим на некоторый код:
```
function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');
    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();
appendNewMessage();
```
Помня об однопоточной природе JavaScript (это означает, что он может выполнять только одну задачу за раз), давайте разберем этот код в порядке, в котором он будет выполняться:

	addParagraph()функция объявлена в строке-1
	appendNewMessage()функция объявлена в строке 6
	addParagraph() вызывается в строке 13
	выполнение перемещается в функцию и выполняет все три строки по порядку
	теперь, когда функция завершена, выполнение возвращается туда, где оно было вызвано
	appendNewMessage()функция вызывается в строке 14
	выполнение перемещается в функцию и выполняет все три строки по порядку
	теперь, когда функция завершена, выполнение возвращается туда, где оно было вызвано
	программа завершается, потому что все строки кода были выполнены
Есть несколько вещей, на которые я особенно хочу, чтобы вы обратили внимание. Во-первых, это характер кода от выполнения до завершения.
Когда addParagraph()вызывается в строке 13, выполняется весь код функции : он не просто выполняет некоторые строки и оставляет другие строки для выполнения позже.
Выполняется весь блок кода.
Второе, на что я хочу обратить внимание, это то, что addParagraph()вызывается, запускается и завершается до appendNewMessage() вызова 
(включая возможную перекомпоновку и перерисовку); 
JavaScript не выполняет несколько строк/функций одновременно (это однопоточность... обработка одной команды за раз!).

У меня есть к вам вопрос: после addParagraph()того addParagraph(), как функция была запущена и она запускает строки кода внутри функции,
как она узнает, что нужно вернуться кappendNewMessage() ? Как он это отслеживает?

Что, если мы немного изменим этот код, чтобы создать вложенные функции:
```
function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';

    appendNewMessage();
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');

    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();
```
Обратите внимание, что вызов appendNewMessage()расположен внутри addParagraph() функции .
Во-первых, addParagraph()вызывается. Затем appendNewMessage()вызывается в строке 5. 
После appendNewMessage()завершения выполнения выполнение возвращается и завершает выполнение последней строки кода в addParagraph()функции... 
но откуда он знает, как это сделать? Как движок JavaScript узнает, где он остановился и как к нему вернуться?

#####Стек вызовов
Механизм JavaScript хранит стек вызовов (по сути, список) выполняемых функций. Когда функция вызывается, она добавляется в список.
Когда весь код внутри функции выполнен, функция удаляется из стека вызовов. 
Самое интересное в стеке вызовов заключается в том, что функция не должна завершаться до того, как в стек вызовов будет добавлена ​​другая функция.

Давайте посмотрим, как это работает!

ВОПРОС 1 
Сколько элементов (кадров) будет в стеке, когда код достигнет "stop here"комментария?
```
function quiz () {
  var y = 'yes';
  questions();
  fun();
}
function questions () {
  var y = 'no';
  return 7;
}
function are () {
  return 3;
}
function fun () {
  are();
  // stop here
}

quiz()
```
Предположим, что нет кадра "<main>"/по умолчанию. // 2


Используйте этот код для ответа на следующий вопрос.
```
function dolphins () {
  // stop here
  return 'llamas';
}
function rhinos () {
  var y = 'no';
  return penguins();
}
function penguins () {
  return camels();
}
function camels () {
  return dolphins();
}

rhinos()
```
ВОПРОС 2
Расположите имена функций в правильном порядке, в котором они будут появляться при достижении // stop hereкомментария. 
Не забудьте поместить самый старый/начальный в нижнюю часть стека. Предположим, что нет кадра "<main>"/по умолчанию.	
	up
	1- dolphins
	2- camels
	3- penguins
	4- rhinos
	down

###### Резюме стека вызовов
В этом разделе мы рассмотрели, что JavaScript является однопоточным языком программирования, 
что означает, что он может выполнять только одну вещь за раз.
Мы рассмотрели, как JavaScript отслеживает, какие функции выполняются, используя стек вызовов.
	
	
### Синхронность кода
В предыдущем разделе о стеке вызовов мы использовали термины:

	работа до завершения
	однопоточный
Другой термин для этого — синхронный . По определению, «синхронный» означает:  существующие или происходящие одновременно

Весь код, который мы рассматривали, запускается по порядку, в одно и то же время.
Функции добавляются в стек вызовов, а затем удаляются из стека вызовов после их завершения.
Однако есть некоторый код, который не является синхронным — это означает, что код написан так же, как и любой другой код,
но выполняется в какой-то более поздний момент времени.
Это вообще звучит знакомо? Вы только что работали с ним:
```
const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});
```
... слушатели событий! Большая часть этого кода является синхронной, как вы привыкли.
Но функция прослушивателя событий в handleKeyPressesэто не вызывается сразу, он вызывается в некоторый более поздний момент времени.

Вы когда-нибудь задумывались об этом? Куда идет код? А как насчет «стека вызовов», о котором мы узнали? Он где-то спрятан в стеке вызовов?

Давайте посмотрим на этот фрагмент кода:
```
console.log('howdy');
document.addEventListener('click', function numbers() {
    console.log('123');
});
console.log('ice cream is tasty');
```
Код будет работать в таком порядке:

	'howdy' будет зарегистрирован в консоли
	'ice cream is tasty' будет зарегистрирован в консоли
	Строка '123'будет зарегистрирована только в том случае, если будет щелчок. 
	Если на страницу никогда не нажимают, этот код может никогда не запуститься! 
	Но где это? Куда делась numbersфункция, содержащая console.log('123');код?

Запуск кода позже
Но для этого кода существуют те же вопросы, что и для .addEventListener()кода:

	куда функция идет ждать?
	как функция запускается, когда это необходимо?
Это происходит из-за цикла событий JavaScript!

##### Цикл событий JavaScript
В самом простом объяснении модели параллелизма JavaScript используются два правила: 
если какой-то JavaScript запущен, пусть он работает до тех пор, пока не завершится («запуск до завершения»).
Если JavaScript не запущен, запустите все ожидающие обработчики событий.

Поскольку большая часть JavaScript запускается в ответ на событие, это известно как цикл событий : выберите следующее событие, запустите его обработчик и повторите.

Есть три части, о которых вы должны подумать в цикле событий:

	стек вызовов
	Веб-API/браузер
	очередь событий

Не весь код, который мы пишем, на 100% состоит из JavaScript . 
Часть кода взаимодействует с веб-API (также известными как «браузерные API»). 
Есть много других примеров, но оба .addEventListener()и setTimeout()являются веб - интерфейсами.

Давайте вернемся к этому коду:
```
console.log('howdy'); // 1
document.addEventListener('click', // 2
  function numbers() {
    console.log('123');
});
console.log('ice cream is tasty'); // 3
```
Сначала браузер выполняет этот блок кода до завершения, то есть шаги 1, 2 и 3.
Шаг 2 передает обработчик события ( numbers) в браузер для будущего использования: браузер будет удерживать эту функцию до тех пор, пока не произойдет событие щелчка. .

Что произойдет, если кто-то щелкнет до того, как этот блок кода будет выполнен?
Когда есть событие щелчка и уже запущенный код, numbersфункция не может быть просто добавлена ​​непосредственно в стек вызовов из-за природы JavaScript от выполнения до завершения;
мы не можем прервать какой-либо код, который может происходить в данный момент. Таким образом, функция помещается в очередь. 
Когда все функции в стеке вызовов завершены (также известное как время простоя ), затем проверяется очередь, чтобы увидеть, не ожидает ли что-нибудь. 
Если что-то находится в очереди, то оно запускается, создавая запись в стеке вызовов.

ВАЖНО: Здесь важно помнить следующее: 
	1) текущий синхронный код выполняется до завершения и 
	2) события обрабатываются, когда браузер не занят. 
	Асинхронный код (например, загрузка изображения) выполняется за пределами этого цикла и по завершении отправляет событие.


ВОПРОС ВИКТОРИНЫ
В каком порядке выполняется iceCreamфункция при <footer>нажатии?
```
const pageFooter = document.querySelector('#page-footer');

pageFooter.addEventListener('click', function iceCream () {
    const footerDetails = document.querySelector('#details');

    footerDetails.textContent = 'Everyone should eat ice cream!';
});


РАСПОЛОЖЕНИЕ ЦИКЛА СОБЫТИЙ

Первый  браузер


Второй  очередь


Третий  стек вызовов


###### Резюме
В этом разделе показано, как работает JavaScript внутри; Мы посмотрели, как JavaScript, DOM и веб-API сочетаются друг с другом.

В частности, мы рассмотрели, что JavaScript является однопоточным языком программирования, что означает, что он может выполнять только одну вещь за раз. 
Мы рассмотрели, как JavaScript отслеживает, какие функции выполняются, используя стек вызовов.
Мы также рассмотрели, как обрабатывается асинхронный код.

Асинхронный код использует цикл событий JavaScript. Любой асинхронный код (например, setTimeoutили функция, переданная в .addEventListener()) обрабатывается браузером.
Когда этот асинхронный код готов к выполнению, он перемещается в очередь, где ожидает, пока стек вызовов не станет пустым.
Всякий раз, когда стек вызовов пуст, код перемещается из очереди в стек вызовов и выполняется.

Знание того, как работают JavaScript и цикл обработки событий, может помочь нам писать более эффективный код.	
	
	
### Запуск кода позже
Подобно .addEventListener()коду, запускаемому в какой-то более поздний момент, существует setTimeout()функция,
которая запустит код в более поздний момент времени. setTimeout()Функция принимает:

функция для запуска в более позднее время
количество миллисекунд, которое код должен ждать перед запуском функции
Давайте проверим пример:
```
setTimeout(function sayHi() {
    console.log('Howdy');
}, 1000);
```
Если бы мы запустили этот код, строка 'Howdy'появилась бы в консоли примерно через 1000 миллисекунд или примерно через 1 секунду.

Поскольку setTimeout()это API, предоставляемый браузером, вызов setTimeout()передает sayHi()функцию браузеру, который запускает таймер.
После окончания таймера sayHi()функция переходит в очередь. Если стек вызовов пуст, sayHi()функция перемещается в стек вызовов и выполняется.

##### setTimeout() с задержкой 0
Интересным аспектом setTimeout()является то, что мы можем передать ему задержку в 0 миллисекунды.
```
setTimeout(function sayHi() {
    console.log('Howdy');
}, 0);  // ← 0 milliseconds!
```
Вы можете подумать, что, поскольку задержка равна 0 миллисекунд, sayHiфункция запустится немедленно.
Однако он по-прежнему проходит через цикл событий JavaScript. Таким образом, функция передается браузеру, где браузер запускает таймер на 0 миллисекунд.
Поскольку таймер завершается немедленно, sayHiфункция переместится в очередь, а затем в стек вызовов, как только стек вызовов завершит выполнение любых текущих задач.

Так почему это полезно? Ну, этот метод может помочь нам преобразовать потенциально долго работающий код в код, который разбит,
чтобы позволить браузеру обрабатывать взаимодействие с пользователем!

Разбейте долгоиграющий код
Вы помните предыдущий раздел, когда мы писали код JavaScript для добавления на страницу двухсот абзацев? 
Теперь вместо того, чтобы добавлять на страницу двести абзацев, что, если мы добавим двадцать тысяч ?
Это множество элементов для создания, добавления и вставки на страницу!

Теперь помните, как перекомпоновка и перерисовка влияют на производительность приложения.
Мы хотим написать наш код JavaScript, чтобы он учитывал перекомпоновку и перерисовку и вызывал наименьшее их количество.

Однако мы также хотим убедиться, что наше приложение реагирует на взаимодействие с пользователем.
Во время работы JavaScript страница «занята», и пользователь не сможет взаимодействовать со страницей (например, нажать кнопку, заполнить форму).
Помните, что это потому, что JavaScript работает синхронно . 
Таким образом, он будет работать до завершения (создание, добавление и вставка всех двадцати тысяч элементов), 
и он сделает это до того, как сможет ответить на какие-либо действия, предпринятые пользователем.
Функция, создающая все эти элементы и добавляющая их на страницу, будет находиться в стеке вызовов до полного завершения.

Один из способов дать пользователю возможность взаимодействовать со страницей — разбить добавление контента на куски. Давайте сделаем это с помощью setTimeout():
```
let count = 1;

function generateParagraphs() {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 500; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph number ' + count;
        count = count + 1;

        fragment.appendChild(newElement);
    }

    document.body.appendChild(fragment);

    if (count < 20000) {
        setTimeout(generateParagraphs, 0);
    }
}

generateParagraphs();
```
Этот код начинается с установки countпеременной в 1. 
	Это позволит отслеживать количество добавленных абзацев. 
	generateParagraphs()Функция добавит 500 пунктов на страницу каждый раз , когда она вызывается. 
Интересно, что setTimeout()в конце generateParagraphs()функции есть вызов .
Если элементов меньше двадцати тысяч, то setTimeout()для вызова generateParagraphs()функции будет использоваться .

Если вы попытаетесь запустить этот код на странице, вы все равно сможете взаимодействовать со страницей во время выполнения кода.
Не блокирует и не зависает страница. И не блокируется и не зависает из-за setTimeout()звонков.

setTimeout() Резюме
Предоставляемая браузером setTimeout()функция принимает другую функцию и задержку и вызывает функцию после того, как задержка прошла.

Зная, как работает цикл обработки событий JavaScript, мы можем использовать этот setTimeout()метод для написания кода, 
позволяющего браузеру обрабатывать взаимодействие с пользователем.	
	
