/* 
Алгоритм работы:
1. Найти все названия секций в легенде.
2. Найти все секции диаграммы.
3. Добавить каждому названию секции отслеживание событий наведения и снятия курсора.
4. Внутри обработчиков этих событий добавлять или удалять класс hovered у секций диаграммы в зависимости от положения курсора.
*/

let captionsList = document.querySelectorAll('.caption-item');
let unitsList = document.querySelectorAll('.unit');

captionsList.forEach(function (item, index) {
  item.addEventListener('mouseover', function () {
     unitsList[index].classList.add('hovered');
  });
  
  item.addEventListener('mouseout', function () {
     unitsList[index].classList.remove('hovered');
  });
});