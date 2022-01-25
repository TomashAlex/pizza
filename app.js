const pizzaPrices = {
   "26 см": {
      "Чизбургер-пицца": "395",
      "Сырная": "250",
      "Креветки по-азиатски": "375",
      "Сырный цыпленок": "490",
      "Диабло": "395",
      "Цыпленок ранч": "250",
      "Фристайло": "375",
      "Овощи и грибы": "399",
      "Мексиканская": "345",
      "Маргарита": "249",
      "Двойная пепперони": "345",
      "Четыри сыра": "340"
   },
   "30 см": {
      "Чизбургер-пицца": "420",
      "Сырная": "350",
      "Креветки по-азиатски": "445",
      "Сырный цыпленок": "425",
      "Диабло": "500",
      "Цыпленок ранч": "414",
      "Фристайло": "432",
      "Овощи и грибы": "445",
      "Мексиканская": "485",
      "Маргарита": "415",
      "Двойная пепперони": "385",
      "Четыри сыра": "445"
   },
   "40 см": {
      "Чизбургер-пицца": "520",
      "Сырная": "499",
      "Креветки по-азиатски": "545",
      "Сырный цыпленок": "525",
      "Диабло": "615",
      "Цыпленок ранч": "514",
      "Фристайло": "532",
      "Овощи и грибы": "545",
      "Мексиканская": "685",
      "Маргарита": "515",
      "Двойная пепперони": "485",
      "Четыри сыра": "545"
   }
}

/**
 * Получает цену пиццы в зависимости от размера
 */
function changePizzaPrice(size, element) {
   let nodeElement = element.parentNode
   let mainParent = nodeElement.parentElement.parentElement.parentElement
   let pizzaName = mainParent.querySelector('.item__title span')
   let pizzaPrice = mainParent.querySelector('.pizza-block_price span')
   pizzaPrice.textContent = pizzaPrices[size][pizzaName.textContent];
}

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

for (let i = 0; i < pizzaTypeElements.length; i++) {
   pizzaTypeElements[i].onclick = function () {

      if (pizzaTypeElements[i].textContent == 'традиционное') {
         pizzaTypeElements[i - 1].classList.remove('active');
         pizzaTypeElements[i].classList.add('active');
      } else {
         pizzaTypeElements[i + 1].classList.remove('active');
         pizzaTypeElements[i].classList.add('active');
      }
   }
}

/**
 * Переключение между размером
 */
let pizzaSizeElements = document.querySelectorAll('.pizza_size li');

for (let i = 0; i < pizzaSizeElements.length; i++) {
   pizzaSizeElements[i].onclick = function () {
      changePizzaPrice(pizzaSizeElements[i].textContent, pizzaSizeElements[i]);

      if (pizzaSizeElements[i].textContent == '26 см') {
         pizzaSizeElements[i].classList.add('active');
         pizzaSizeElements[i + 1].classList.remove('active');
         pizzaSizeElements[i + 2].classList.remove('active');
      } else if (pizzaSizeElements[i].textContent == '30 см') {
         pizzaSizeElements[i].classList.add('active');
         pizzaSizeElements[i - 1].classList.remove('active');
         pizzaSizeElements[i + 1].classList.remove('active');
      } else {
         pizzaSizeElements[i].classList.add('active');
         pizzaSizeElements[i - 1].classList.remove('active');
         pizzaSizeElements[i - 2].classList.remove('active');

      }
   }
}
/**
 * Добавление в корзину (элемент cart)
 */
