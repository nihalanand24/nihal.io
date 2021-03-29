import addBackground from './modules/addBackground.js';
import Router from './modules/Router.js';
import './packages/tranglify.bundle.js';

addBackground();

Router.init();

console.log(Router);

const root = document.getElementById("root");

const allNavLinks = document.querySelectorAll('nav a');

allNavLinks.forEach(navLink => {
    const pathname = navLink.pathname;
    navLink.onclick = (event) => {
        event.preventDefault();
        window.history.pushState({}, pathname, window.location.origin + pathname);
        root.innerHTML = Router.routes[pathname];
    };
})

window.onpopstate = () => {
    root.innerHTML = Router.routes[window.location.pathname];
};