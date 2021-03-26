import addBackground from './modules/addBackground.js';
import Router from './Router.js';

addBackground();

Router.init();

const root = document.getElementById("root");

const allNavLinks = document.querySelectorAll('nav a');

allNavLinks.forEach(navLink => {
    const pathname = navLink.pathname;
    navLink.onclick = (event) => {
        event.preventDefault();
        window.history.pushState({}, pathname, window.location.origin + pathname);
        root.innerHTML = Router.routes[pathname];
        isWorkPage(pathname);
    };
})

window.onpopstate = () => {
    root.innerHTML = Router.routes[window.location.pathname];
    isWorkPage(window.location.pathname);
};

root.addEventListener('DOMContentLoaded', () => {
    isWorkPage(window.location.pathname);
})

const isWorkPage = (pathName) => {
    if (pathName.slice(0, 5) === '/work') {
        console.log('this is the work page!')
        addProjectLinks();
    } else {
        return false;
    }
}

window.addProjectLinks = () => {
    const allProjects = document.querySelectorAll('.project');



    const handleClick = (e) => {
        allProjects.forEach(project => {
            if (project !== e.currentTarget){
                project.classList.remove('selected')
            }
        });
        e.currentTarget.classList.toggle('selected');
    }

    allProjects.forEach(project => {
        project.addEventListener('click', handleClick);
    })
}