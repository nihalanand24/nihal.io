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
    this.content.about = await this.loadPage('/pages/about.html');
    this.content.contact = await this.loadPage('/pages/contact.html');

}

Router.init = async function () {
    await this.loadAllPages();
    this.routes = {
        "/": this.content.home,
        "/work": this.content.work,
        "/about": this.content.about,
        "/contact": this.content.contact
    };
}

export default Router;