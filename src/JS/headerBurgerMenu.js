
const refs = {
    burgerMenuEl: document.querySelector('.burger-menu'),
    burgerMenuOpenBtnEl: document.querySelector('.burger-menu__open-btn'),
    burgerMenuCloseBtnEl: document.querySelector('.burger-menu__close-btn'),
}

refs.burgerMenuCloseBtnEl.addEventListener('click', () => burgerMenuEl.classList().remove('.is-open'));
refs.burgerMenuOpenBtnEL.addEventListener('click', () => burgerMenuEl.classList().add('.is-open'));