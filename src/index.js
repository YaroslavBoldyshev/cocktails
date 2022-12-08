const refs = {
  addToFavoritesBtn: document.querySelectorAll('[data-favorite-cocktail]'),
};

refs.addToFavoritesBtn.forEach(btn =>
  btn.addEventListener('click', toggleActive)
);

function toggleActive(e) {
  if (e.currentTarget.children[0].textContent == 'Add to') {
    e.currentTarget.children[0].textContent = 'Remove';
  } else {
    e.currentTarget.children[0].textContent = 'Add to';
  }

  e.currentTarget.children[1].classList.toggle('icon-heart-not-active');
}
