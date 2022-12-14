import refs from './refs';

// function changeTheme() {
//     refs.switcher.addEventListener('change', (event) => {
//         refs.body.classList.toggle("dark-theme");

//             // if (document.body.classList.toggle("dark-theme")) {
//             //     return;
//             // } else {
//             //     localStorage.setItem("theme", "dark-theme");
//             // }
//         })
//     }


// changeTheme();

function changeTheme() {
    refs.switcher.addEventListener('change', (event) => {
        refs.body.classList.toggle("dark-theme");
        localStorage.setItem('theme', event.target.checked ? 'dark' : 'ligth')
        })
    }


changeTheme();


if (localStorage.getItem('theme') === 'dark') {
    refs.body.classList.add("dark-theme");
    refs.switcher.checked = true;
}