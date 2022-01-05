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
	
	###Delete properties
	
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

	
	
```	
	
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
	
	
	
	## 5. 
	
	## 6.
	
	
