const rootDiv = document.getElementById("root");

// let home = '';
// let work = '';

const home = /*html*/ `
<div class="wrapper">
    <div class="text-content">
        <h1>Nihal <span>Anand</span></h1>
        <p>
            <span>&lt;p&gt;</span>I am a Toronto-based web developer, specializing in creating responsive and
            visually cohesive web applications.<span>&lt;/p&gt;</span>
        </p>
        <h2>Front-End Web Developer</h2>
    </div>
    <div class="dev-icons">
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-react-original-wordmark"></i>
        <i class="devicon-jquery-plain-wordmark"></i>
        <i class="devicon-html5-plain-wordmark"></i>
        <i class="devicon-css3-plain-wordmark"></i>
        <i class="devicon-sass-original"></i>
        <i class="devicon-firebase-plain-wordmark"></i>
        <!-- <i class="devicon-git-plain-wordmark"></i>
    <i class="devicon-github-original-wordmark"></i> -->
        <i class="devicon-python-plain-wordmark"></i>
        <i class="devicon-c-line"></i>
        <!-- <i class="devicon-photoshop-line"></i>
    <i class="devicon-premierepro-plain"></i> -->
    </div>
</div>`;

const work = /*html*/ `
<div class="work">
  <h2>Work</h2>

  <div class="main-carousel">
    <div class="project-card carousel-cell">
      <h3>Project Name</h3>
      <span><a href="#">GitHub</a> | <a href="#">Live</a></span>
      <ul>
        <li>
          <p>What does the project do?</p>
        </li>
        <li>
          <p>How does it do this?</p>
        </li>
      </ul>
    </div>
    <div class="project-card carousel-cell">
      <h3>Project Name</h3>
      <span><a href="#">GitHub</a> | <a href="#">Live</a></span>
      <ul>
        <li>
          <p>What does the project do?</p>
        </li>
        <li>
          <p>How does it do this?</p>
        </li>
      </ul>
    </div>
  </div>
</div>

<script>
  const flickityConfig = new Flickity(".main-carousel", {
    contain: true,
    wrapAround: true,
  });
</script>
`;

// const loadPage = async page => {
//     const res = await fetch(page);
//     const resHtml = await res.text();
//     return resHtml;
// }

// const loadAllPages = async () => {
//     work = await loadPage('./pages/work.html');
//     home = await loadPage('./pages/home.html');
// }

// const main = async () => {
// await loadAllPages();

const routes = {
    "/": home,
    "/work": work,
};

// rootDiv.innerHTML = routes[window.location.pathname];

// main();

// console.log(window.location.pathname);

const onNavClick = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
