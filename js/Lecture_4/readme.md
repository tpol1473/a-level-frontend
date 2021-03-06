# less0212
Lecture 4
Operators & Type Corection

Useful links
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators
https://doka.guide/js/typecasting/#neyavnoe-preobrazovanie-tipov
https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
https://github.com/denysdovhan/wtfjs#what-the-fck-javascript
https://www.destroyallsoftware.com/talks/wat

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

Условный оператор является единственным оператором JavaScript, который использует три операнда. Оператор принимает одно из двух значений в зависимости от заданного условия. Синтаксис оператора:

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