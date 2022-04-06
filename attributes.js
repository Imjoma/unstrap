
const navLinksContainer = document.querySelector('.navbar-nav')
const arrOfNavLinks = ['about', 'pricing', 'FAQ','reviews', 'contact','get started']

const navLinksTemplate = arrOfNavLinks
    .map((navlinks) => {
        return `
        <li class="nav-item">
            <a class="nav-link" href="#${navlinks}">${navlinks}</a>
        </li>
        `
    })
    .join('')
    navLinksContainer.innerHTML = navLinksTemplate

const navLinks = document.querySelectorAll('.navbar-nav a')
navLinks.forEach(link => {
    // dyanmically change when click to a link
    if(link.textContent == 'about'){
        link.setAttribute("aria-current", "page");
        link.setAttribute("data-bs-toggle", "offcanvas");
        link.setAttribute("data-bs-target", "#offcanvasRight");
        link.setAttribute("aria-controls", "offcanvasRight");
    }
    link.style.textTransform = 'capitalize'
    link.style.fontWeight = '600'
    link.classList.add('text-primary')
    // changes to last value of array
    if(link.textContent == 'get started'){
        link.classList.add('btn')
        link.classList.add('text-white')
        link.classList.add('btn-primary')
    }
});

