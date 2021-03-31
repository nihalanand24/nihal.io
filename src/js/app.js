import addBackground from './modules/addBackground.js';
import Router from './modules/Router.js';
import './packages/tranglify.bundle.js';

addBackground();
Router.init();

const root = document.getElementById("root");

const allNavLinks = document.querySelectorAll('nav a');

allNavLinks.forEach(navLink => {
    const path = navLink.pathname;
    navLink.onclick = (event) => {
        event.preventDefault();
        window.history.pushState({}, path, window.location.origin + path);
        root.innerHTML = Router.routes[path];
    };
})

window.onpopstate = () => {
    root.innerHTML = Router.routes[window.location.pathname];
};