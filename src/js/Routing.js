const rootDiv = document.getElementById('root');

let home = '';
let work = '';

const loadPage = async page => {
    const res = await fetch(page);
    const resHtml = await res.text();
    return resHtml;
}

const loadAllPages = async () => {
    work = await loadPage('./pages/work.html');
    home = await loadPage('./pages/home.html');
}

const main = async () => {
    await loadAllPages();
    rootDiv.innerHTML = home;

    routes = {
        '/': home,
        '/work': work
    }
}

main();

const onNavClick = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = routes[pathname];
}


window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
}