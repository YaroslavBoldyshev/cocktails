
const refs = {
    burgerMenuEl: document.querySelector('.burger-menu'),
    burgerMenuOpenBtnEl: document.querySelector('.burger-menu__open-btn'),
    burgerMenuCloseBtnEl: document.querySelector('.burger-menu__close-btn'),
}

refs.burgerMenuOpenBtnEl.addEventListener('click', burgerMenuOpen);
function burgerMenuOpen(){
    refs.burgerMenuEl.classList.add('is-open');
}
 
refs.burgerMenuCloseBtnEl.addEventListener('click', burgerMenuClose);
function burgerMenuClose(){
    refs.burgerMenuEl.classList.remove('is-open')
}
