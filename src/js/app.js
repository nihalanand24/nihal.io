import addBackground from './modules/addBackground.js';
import Router from './Router2.js';

addBackground();

Router.init();

window.onNavClick = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    Router.root.innerHTML = Router.routes[pathname];
};

window.onpopstate = () => {
    Router.root.innerHTML = Router.routes[window.location.pathname];
};



