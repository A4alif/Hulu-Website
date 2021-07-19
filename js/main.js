const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.btn-login');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClicked);

function openModal () {
    modal.style.display = "block";
}
function closeModal () {
    modal.style.display = "none";
}
function outsideClicked(e){
    if(e.target == modal){
        closeModal();
    }
}