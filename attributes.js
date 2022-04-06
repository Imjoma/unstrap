
const navLinksContainer = document.querySelector('.navbar-nav')
// navlinks is also the id in every section
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

const ttLogo = document.querySelectorAll('.input-group-text.tt')
const textMuted = 'text-muted'

ttLogo.forEach(logo => {
    logo.innerHTML = 
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle ${textMuted}" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
        </svg>
        `
});
