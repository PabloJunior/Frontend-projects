const tasksListElement = document.querySelector(`.tasks__list`);
const taskElements = tasksListElement.querySelectorAll(`.tasks__item`);

for (const task of taskElements) {
  task.draggable = true;
}

tasksListElement.addEventListener(`dragstart`, (evt) => {
  evt.target.classList.add(`selected`);
});

tasksListElement.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`);
});

const getNextElement = (cursorPosition, currentElement) => {
  const currentElementCoord = currentElement.getBoundingClientRect();
  const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
  const nextElement = (cursorPosition < currentElementCenter) ?
    currentElement :
    currentElement.nextElementSibling;
  
  return nextElement;
};

tasksListElement.addEventListener(`dragover`, (evt) => {
  
  /* Разрешить сброс элементов в эту область */
  evt.preventDefault();
  
  /* Перемещаемый элемент */
  const activeElement = tasksListElement.querySelector(`.selected`);
  /* Элемент, над которым в данный момент находится курсор */
  const currentElement = evt.target;

  /* Проверка срабатывания события:
  1. не на том элементе, который перемещается,
  2. именно на элементе списка */
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`tasks__item`);
  
  /* Если нет, прерывание выполнения функции */
  if (!isMoveable) {
    return;
  }
  
  /* Элемент, перед которым будем вставка */ 
  const nextElement = getNextElement(evt.clientY, currentElement);
  
  if (
    nextElement && 
    activeElement === nextElement.previousElementSibling ||
    activeElement === nextElement
  ) {
    return;
  }
  
	/* Вставка activeElement перед nextElement */
	tasksListElement.insertBefore(activeElement, nextElement);
});
