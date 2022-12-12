
const refs = {
    burgerMenuEl: document.querySelector('.burger-menu'),
    burgerMenuOpenBtnEl: document.querySelector('.burger-menu__open-btn'),
    burgerMenuCloseBtnEl: document.querySelector('.burger-menu__close-btn'),
}

refs.burgerMenuOpenBtnEl.addEventListener('click', burgerMenuOpen);
function burgerMenuOpen(){
    console.log('open');
    refs.burgerMenuEl.classList.add('is-open');
}
 
refs.burgerMenuCloseBtnEl.addEventListener('click', burgerMenuClose);
function burgerMenuClose(){
    console.log('close');
    refs.burgerMenuEl.classList.remove('is-open')
}

export function burgerMenuOpenClose(){
    
    console.log(refs.burgerMenuEl.classList.contains('is-open')); 
    // ? burgerMenuClose() : burgerMenuOpen();

}
burgerMenuOpenClose();