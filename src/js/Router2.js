const Router = {
    content: {}
};

Router.root = document.getElementById("root");

Router.loadPage = async function (page) {
    const res = await fetch(page);
    const htmlRes = await res.text();
    return htmlRes;
}

Router.loadAllPages = async function () {
    this.content.home = await this.loadPage('/pages/home.html');
    this.content.work = await this.loadPage('/pages/work.html');

    this.routes = {
        "/": this.content.home,
        "/work": this.content.work,
    };
}

Router.init = async function () {
    await this.loadAllPages();
}

export default Router;