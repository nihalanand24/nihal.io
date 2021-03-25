const Router = {
  content: {}
};

Router.root = document.getElementById("root");

Router.content.home = /*html*/ `
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
</div>
`;

Router.content.work = /*html*/ `
<div class="wrapper">
<div class="work">
  <div class="project">
    <h2>Keanu and Who?</h2>
    <p>Uses React and data from tmdb API to check if any two actors have acted together</p>
  </div>
  <div class="project">
    <h2>Friendly Weather App</h2>
  </div>
  <div class="project">
    <h2>Let's Get Cooking!</h2>
  </div>
  <div class="project">
    <h2>The Film Factory</h2>
  </div>
  <div class="project">
    <h2>Credit Card Checker</h2>
  </div>
  <div class="project">
    <h2>The Portfolio Project</h2>
  </div>
</div>
</div>
</div>
`;

Router.routes = {
  "/": Router.content.home,
  "/work": Router.content.work,
};

export default Router;