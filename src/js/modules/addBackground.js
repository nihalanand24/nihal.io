const addBackground = () => {

    window.addEventListener("mousemove", (event) => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const percentX = Math.round((event.pageX / width) * 100);
        const percentY = Math.round((event.pageY / height) * 100);

        const rg = document.querySelector(".radial-gradient");

        rg.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgb(0, 99, 99), black, black, black, black)`;
    });

    const addTrianglifyBG = () => {
        const removeIfExists = (element) => {
            const elementToRemove = document.querySelector(element);
            if (document.querySelector(element)) {
                document.body.removeChild(elementToRemove);
            }
        }
        removeIfExists('.trianglify-bg');
        removeIfExists('.trianglify-overlay');

        const pattern = trianglify({
            width: document.documentElement.clientWidth,
            height: window.innerHeight,
            xColors: ["2228", "111a", "080808dd"],
            yColors: 'match',
            cellSize: 60,
            strokeWidth: 1,
            variance: 1,
            seed: "My name is Nihal Anand, and I am a web developer.",
            // colorFunction: trianglify.colorFunctions.sparkle()
        });

        const bgPattern = pattern.toCanvas();
        bgPattern.classList.add("trianglify-bg");

        const bgOverlay = document.createElement('div');
        bgOverlay.classList.add('trianglify-overlay');

        const addBG = (bg, overlay) => {
            // document.body.appendChild(bg);
            // document.body.appendChild(overlay);
            document.body.prepend(overlay);
            document.body.prepend(bg);
        };
        addBG(bgPattern, bgOverlay);
    }
    addTrianglifyBG();
    window.addEventListener("resize", addTrianglifyBG);
}

export default addBackground;