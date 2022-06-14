//Scriptin gec  yuklenmesi ucun.
function toggleButton(){
    navList.classList.toggle('show')
}
//Hamburger buttonu
const hamburgerBtn = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')



hamburgerBtn.addEventListener('click', toggleButton)

