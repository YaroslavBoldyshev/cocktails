import refs from './refs';

function changeTheme() {
    refs.switcher.addEventListener('change', (event) => {
        refs.body.classList.toggle("dark-theme");

            // if (document.body.classList.toggle("dark-theme")) {
            //     return;
            // } else {
            //     localStorage.setItem("theme", "dark-theme");
            // }
        })
    }


changeTheme();