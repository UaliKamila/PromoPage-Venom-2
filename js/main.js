const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuCloseButton = document.querySelector(".menu-close");

/*при нажатии на кнопку выведи текст */
menuButton.addEventListener("click", () => {
	menu.classList.add("is-active"); /*в меню добавляем класс is-active*/
	menuCloseButton.classList.add("is-active"); /*также в menuCloseButton добавляем класс*/
});

/*Прик нажатии на кнопку Закрыть чтобы закрылась страница */
menuCloseButton.addEventListener("click", () => {
	menu.classList.remove("is-active"); /*в меню удаляем класс is-active*/
	menuCloseButton.classList.remove("is-active"); /*также в menuCloseButton удаляем класс*/
});