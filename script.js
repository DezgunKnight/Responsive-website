let navigationItem = document.getElementById('navBar');
let toggleButton = document.getElementById('burgerBar');

toggleButton.addEventListener('click', function() {
    navigationItem.classList.toggle('activeNavigation');
    toggleButton.classList.toggle('active');
})


