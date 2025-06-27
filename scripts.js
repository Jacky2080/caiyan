document.addEventListener("DOMContentLoaded", function() {
    const grid1 = document.getElementById("grid1");
    const grid2 = document.getElementById("grid2");
    const grid3 = document.getElementById("grid3");
    const grid4 = document.getElementById("grid4");
    const layout = document.getElementById("layout");

    grid1.addEventListener("click", showLayout);
    grid2.addEventListener("click", showLayout);
    grid3.addEventListener("click", showLayout);
    grid4.addEventListener("click", showLayout);

    function showLayout() {
        layout.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
});

function closeLayout() {
    layout.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
}