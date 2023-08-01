let modal = () =>{
    let modal = document.querySelector('.search-model');
    let modalBtn = document.querySelector('.icon_search');
    let modalClose = modal.querySelector('.search-close-switch');
    let searchInput = modal.querySelector('#search-input');
    modalBtn.addEventListener('click', () => {
        modal.classList.add('active');
        searchInput.focus();
    });
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        searchInput.value = '';
    });
    searchInput.addEventListener('input', (event) => {
        console.log(event.target.value);
    })
}
