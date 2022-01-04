/*
*  Task 1  Создать объект с названиями дней недели. Где ключами будут ru и en,
значением свойства ru будет массив с названиями дней недели на русском, а en - на английском.
После написать функцию которая будет выводить в консоль название дня недели пользуясь выше созданным объектом.
Все дни недели начинаются с 1 и заканчиваются цифрой 7 (1- понедельник, 7 - воскресенье).
Функция принимает 2 аргумента (параметра):
 day - число дня недели
 lang - название языка дня недели (необязательный аргумент, по-умолчанию равен ‘en’)
*/
/*


const namesOfDays = {
  ru: [Воскресенье, Понедельник, Вторник, Среда, Четверг, Пятница, Суббота],
  en: [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]
}

let lang = 'en';
*/
const getNameOfDay = (day, lang) => {
  if (lang = 'en') {
    switch (day) {
      case 1: 
        alert('Monday');
        break;
      case 2: 
        alert('Tuesday');
        break;
      case 3: 
        alert('Wednesday');
        break;
      case 4: 
        alert('Thursday');
        break;
      case 5: 
        alert('Friday');
        break;
      case 6: 
        alert('Saturday');
        break;
        case 7: 
        alert('Sunday');
        break;
      default:
        alert('Data not found');
        break;
    }
  } else {
    switch (day) {
      case 1: 
        alert('Понедельник');
        break;
      case 2: 
        alert('Вторник');
        break;
      case 3: 
        alert('Среда');
        break;
      case 4: 
        alert('Четверг');
        break;
      case 5: 
        alert('Пятница');
        break;
      case 6: 
        alert('Суббота');
        break;
      case 7: 
        alert('Воскресенье');
        break;
      default:
        alert('Data not found');
        break;
      }
  }
};


//console.log(getNameOfDay(7));
//console.log(getNameOfDay(7, 'en'));
console.log(getNameOfDay(7, 'ru'));
