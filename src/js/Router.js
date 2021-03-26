const Router = {
    content: {}
};

Router.loadPage = async function (page) {
    const res = await fetch(page);
    const htmlRes = await res.text();
    return htmlRes;
}

Router.loadAllPages = async function () {
    this.content.home = await this.loadPage('/pages/home.html');
    this.content.work = await this.loadPage('/pages/work.html');

}

Router.init = async function () {
    await this.loadAllPages();
    this.routes = {
        "/": this.content.home,
        "/work": this.content.work,
    };
}

export default Router;