import refs from './refs';

function changeTheme() {
    refs.switcher.addEventListener('change', (event) => {
        refs.body.classList.toggle("dark-theme");
})
}

changeTheme();