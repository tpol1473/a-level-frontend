JavaScript

https://developer.mozilla.org/ru/ MDN - Web docs
https://ru.stackoverflow.com/ StackOverflow - pull of solved dev problems
https://learn.javascript.ru/ - nice docs and tutorials



Lecture 1
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




Lecture 2

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



Lecture 3

Data Types: Basics
JavaScript - a loosely typed and dynamic typed language.
There are 8 different data types.

Variables:
- not directly associated with any particular type
- type can be re-assigned

let foo = 7;
foo = "now I'm a string";
foo = true;

String type
const str1 = "double quotes";
const str2 = 'single quotes';
const str3 = `With backtick we can paste a variable or value: ${str1}`;
Quotes types:
double quotes (“ ”)
single quotes (‘ ‘)
backtick (` `) - helps us to build a “complex” string

String Type: Backtick

const person = "John";

// Insert a variable
alert('Hello, ' + person + '!'); // Hello, John!

// Insert a variable with backtick
alert(`Hello, ${person}!`); // Hello, John!

// Insert and calculate an expression
alert(`result: ${1 + 2}`); // result: 3


Number Type

const num1 = 123;
const num2 = 25.435;
Numbers should be between (253 − 1) and 253 − 1)
9007199254740991 and -9007199254740991

Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.

Number type: corner cases
Infinity, -Infinity
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "some string" / 2 ); // result will be NaN

What if we need a number bigger than
9007199254740991

BigInt Type
// character "n" in the end stands for BigInt
const bigInt = 123456780123456789012345678901234567890n;
const sameBigint = BigInt("123456780123456789012345678901234567890");


Boolean type
const isEverythingClear = true;
const isBooleanHard = false;

const isGreater = 3 > 1;

alert(isGreater); // true (because 3 is bigger then 1)


‘null’ type
const age = null;

‘undefined’ type
let salary;

alert(salary); // undefined

let age = 18;
age = undefined;
alert(age); // undefined


Object type

const person = {
    name: 'Joe',
    age: 20,
    isStudent: true,
    greeting: () => alert('Hello!')
}



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
