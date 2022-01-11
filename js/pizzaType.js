/**
 * Переключение между типами теста
 */
let elements1 = document.querySelectorAll('.pizza_type li');

for (let i = 0; i < elements1.length; i++){
   elements1[i].onclick = function () {
      if (elements1[i].textContent == 'традиционное') {
         elements1[i-1].classList.remove('active');
         elements1[i].classList.add('active');
      } else {
         elements1[i+1].classList.remove('active');
         elements1[i].classList.add('active');
      }
   }
}

/**
 * Переключение между размером
 */
let elements2 = document.querySelectorAll('.pizza_size li');
for (let i = 0; i < elements2.length; i++){
   elements2[i].onclick = function () {
    if (elements2[i].textContent == '26 см'){
      elements2[i].classList.add('active');
      elements2[i+1].classList.remove('active');
      elements2[i+2].classList.remove('active');
     } else if (elements2[i].textContent == '30 см'){
      elements2[i].classList.add('active');
      elements2[i-1].classList.remove('active');
      elements2[i+1].classList.remove('active');
      
     } else {
      elements2[i].classList.add('active');
      elements2[i-1].classList.remove('active');
      elements2[i-2].classList.remove('active');
     }
   }
}
/**
 * Цена
 */



