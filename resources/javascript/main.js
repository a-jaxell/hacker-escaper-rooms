const mobileMenuButton = document.querySelector('.mobile__burger-menu');
const mobileMenuButtonClose = document.querySelector('.mobile__burger-menu--close');
const navBarMenu = document.querySelector('#navigation__menu');
const overlay = document.querySelector('.overlay');
const body = document.body;

mobileMenuButton.addEventListener('click', mobileMenu);
mobileMenuButtonClose.addEventListener('click', mobileMenu);

function mobileMenu(){
        if (overlay.style.display === "none" || overlay.style.display === '') {
            overlay.style.display = "block";
        }else {
            overlay.style.display = "none";
        }

        // overlay.style.display === "block" ? overlay.style.display = 'none' : overlay.style.display = 'block';
        
        const overflowProp = ['scroll', 'auto', 'visible', ''];
        
        // overflowProp.includes(body.style.overflowY) ? body.style.overflowY = 'hidden' : body.style.overflowY = 'scroll';
        
        if (overflowProp.includes(body.style.overflowY)) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'scroll';
        }
        
        // overflowProp.includes(body.style.overflowY) ? body.style.overflowY = 'hidden' : body.style.overflowY = 'scroll';

        navBarMenu.classList.toggle('displayMobileMenu');
}

