const Router = {};
const content = {};

Router.loadPage = async function (page) {
    const res = await fetch(page);
    const htmlRes = await res.text();
    return htmlRes;
}

Router.loadAllPages = async function () {
    content.home = await this.loadPage('/pages/home.html');
    content.work = await this.loadPage('/pages/work.html');
    content.about = await this.loadPage('/pages/about.html');
    content.contact = await this.loadPage('/pages/contact.html');
}

Router.init = async function () {
    await this.loadAllPages();
    this.routes = {
        "/": content.home,
        "/work": content.work,
        "/about": content.about,
        "/contact": content.contact
    };
}
export default Router;