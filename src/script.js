

window.addEventListener("mousemove", (event) => {
    width = document.documentElement.clientWidth,
    height = document.documentElement.clientHeight,

      percentX = Math.round((event.pageX / width) * 100);
    percentY = Math.round((event.pageY / height) * 100);

    const rg = document.querySelector(".radial-gradient");

    rg.style.background = `radial-gradient(circle at 
    ${percentX}% ${percentY}%, 
    rgb(0, 99, 99),
        black,
        black,
        black,
        black)`;

  });

  const addTrianglifyBG = () => {

    const removeIfExists = (element) => {
      const elementToRemove = document.querySelector(element);

      if(document.querySelector(element)) {
        document.body.removeChild(elementToRemove);
      }
    }

    removeIfExists('.trianglify-bg');
    removeIfExists('.trianglify-overlay');

    const pattern = trianglify({
      width: document.documentElement.clientWidth,
      // width: window.innerWidth,
      // height: document.documentElement.clientHeight,
      height: window.innerHeight,
      xColors: ["222a", "1118", "0008", '1118', '222a'],
      yColors: 'match',
      cellSize: 80,
      strokeWidth: 1.51,
      variance: 1,
      seed: "My name is Nihal Anand, and I am a web developer.",
      // colorFunction: trianglify.colorFunctions.sparkle()
    });

    const bgPattern = pattern.toCanvas();
    bgPattern.classList.add("trianglify-bg");

    const bgOverlay = document.createElement('div');
    bgOverlay.classList.add('trianglify-overlay');

    const addBG = (bg, overlay) => {
      document.body.appendChild(bg);
      document.body.appendChild(overlay);
    };

    addBG(bgPattern, bgOverlay);
  }

  addTrianglifyBG();


  window.addEventListener("resize", () => {
    addTrianglifyBG();
  });