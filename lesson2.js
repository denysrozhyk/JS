/*
Создайте пустой массив letters
Создайте строку из нескольких слов, например "Backend As A Service"
Напилите код, который разбивает эту строку на массив слов и пушит в массив letters первый символ каждого слова
Выведите результат в консоль
Объедините все элементы массива letters в одну строку и выведите ее в консоль
*/

//Первый способ
;function firstTask(){
    var letters = [];
        var row = 'Crazy Amazing Native Awesome Daily Adorible';
        var newRow = row.split(' ');
        newRow.forEach(newRow => {
      letters.push(newRow[0]);
});
var letters = letters.join('');
console.log(letters);
}
firstTask();

// Второй способ
var letters = [];
var baseString ='Crazy Amazing Native Awesome Daily Adorible'
var splitBaseString = baseString.split('');
var oneStringLetters = '';
for (var i = 0; i < splitBaseString.length; i++ ){
    letters.push(splitBaseString[i][0]);
    console.log(letters[i]);
    oneStringLetters += letters[i]
}
console.log(oneStringLetters)
/*
Объявите функцию с одним формальным параметром, которая проверяет тип данных переданного аргумента и:
если это число, возвращает текущую дату в формате "20.02.2019, 13:21:51"
в противном случае возвращает строку "Неверный тип данных"
Вызовите функцию
*/
;function secondTask(period){
    var myDate = new Date ();
  if (!(period == 'number')){
    console.log (myDate.toLocaleString());
  }
}
secondTask(prompt('Enter a number', ''));
/*Самостоятельная Работа*/
/*Создать массив group, элементы которого будут объектами, содержащими данные каждого студента группы
Какие данные - на ваше усмотрение ( например, имя, фамилия, возраст, наличие ноутбука и т.д. )
Создать функцию, которая итерирует массив group, выводя в консоль данные каждого студента одной строкой

( предварительно преобразовав объект в строку, не забудьте сивол-разделитель )
Работа с предыдущим массивом group

Объявить функцию, которая добавляет нового студента в массив group

Формальные параметры - данные студента
Вызвать функцию addNewStudent, передав ей фактические данные нового студента

После этого вызвать предыдущую функцию ( getStudentsList ), чтобы убедиться, что студент добавлен в группу
*/
var group = [
    {
        name: 'Denys',
        lastname: 'Rozhyk',
        age: 18,
        laptop: true,
        work: false,
   },
   {
    name: 'Roman',
    lastname: 'Sloboda',
    age: 25,
    laptop: true,
    work: true,
   }
]


function getStudentsList(arrayOfStudents){
    var str;
    for (var student of arrayOfStudents){
        str = ' ' + student.name + ' ' + student.lastname + ' Age: '+ student.age + ' Laptop: '+ student.laptop + ' Work: ' + student.work ; 
        console.log(str);
    }
}
getStudentsList (group)

function addNewStudent ( name, lastname, age, laptop, work) {
    group.push({name: name, lastname: lastname, age: age, laptop: laptop, work: work})

}

addNewStudent('Andrey', 'Hyrskiy', 21, true, true)
getStudentsList(group)
