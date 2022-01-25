

/**
 * Измененеие цвета фильтрации у элементов 
 */
let filterElements = document.querySelectorAll('.second__header_wrapper button');
let contenHeader = document.querySelector('.content__title');

for (const filterElement of filterElements) {
      filterElement.onclick = function () {
         if (!filterElement.classList.contains('active')) {
            let activeElement = document.querySelector('.second__header_wrapper button.active');
            activeElement.classList.remove('active');
            filterElement.classList.add('active')
            contenHeader.textContent = `${filterElement.textContent} пиццы`            
         }
      }
}




/**
 * Переключение между типами теста
 */
let pizzaTypeElements = document.querySelectorAll('.pizza_type li');

for (let i = 0; i < pizzaTypeElements.length; i++){
   pizzaTypeElements[i].onclick = function () {
      if (pizzaTypeElements[i].textContent == 'традиционное') {
         pizzaTypeElements[i-1].classList.remove('active');
         pizzaTypeElements[i].classList.add('active');
      } else {
         pizzaTypeElements[i+1].classList.remove('active');
         pizzaTypeElements[i].classList.add('active');
      }
   }
}

/**
 * Переключение между размером
 */
let pizzaSizeElements = document.querySelectorAll('.pizza_size li');
for (let i = 0; i < pizzaSizeElements.length; i++){
   pizzaSizeElements[i].onclick = function () {
    if (pizzaSizeElements[i].textContent == '26 см'){
      pizzaSizeElements[i].classList.add('active');
      pizzaSizeElements[i+1].classList.remove('active');
      pizzaSizeElements[i+2].classList.remove('active');
     } else if (pizzaSizeElements[i].textContent == '30 см'){
      pizzaSizeElements[i].classList.add('active');
      pizzaSizeElements[i-1].classList.remove('active');
      pizzaSizeElements[i+1].classList.remove('active');
      
     } else {
      pizzaSizeElements[i].classList.add('active');
      pizzaSizeElements[i-1].classList.remove('active');
      pizzaSizeElements[i-2].classList.remove('active');
     }
   }
}
/**
 * Цена
 */



