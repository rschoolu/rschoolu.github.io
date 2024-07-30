/*
Just shut up, I'm rusty with Javascript. I haven't coded in it fully for a year!
*/
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const gameDisplay = document.querySelector("#gameDisplay");
const binDisplay = document.querySelector("#binDisplay");
const goTo = document.querySelector("#goTo");
let build = 0;
function checkBuild() {
    if (build < 0) build = 0;
}
function prevFunction() {
    build--;
    checkBuild();
    update();
};
function nextFunction() {
    build++;
    checkBuild();
    update();
};
function update() {
    gameDisplay.src = `../bins/bin${build}/index.html`;
    binDisplay.innerHTML = build;
    goTo.href = gameDisplay.src;
};
update();
prev.addEventListener("click",prevFunction);
next.addEventListener("click",nextFunction);