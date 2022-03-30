const parallax = document.getElementById
("parallax");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.background.PositionY = offset * 0.7 + "px";
})