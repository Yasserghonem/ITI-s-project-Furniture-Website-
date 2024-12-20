// scrolling up
// scrolling up
let scrolling = document.querySelector(".arrow");
window.onscroll = function () {
if (this.scrollY >= 1000) {
    scrolling.classList.add("show");
} else {
    scrolling.classList.remove("show");
}
};
scrolling.onclick = function () {
window.scrollTo({
    top: 0,
    behavior: "smooth",
});
};