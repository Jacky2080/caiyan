document.addEventListener("DOMContentLoaded", function() {
    const layout = document.getElementById("layout");
    const grids = document.querySelectorAll('.grid');
    const content = document.getElementById('content');
    let currentGrid = null;
    
    grids.forEach(grid => {
        grid.addEventListener('click', function() {
        layout.style.display = "flex";
        document.body.style.overflow = "hidden";
        currentGrid = this;
        });
    });
    
    const divs = content.querySelectorAll('.choice');
    divs.forEach(div => {
        div.addEventListener('click', function() {
        currentGrid.textContent = this.textContent;
        currentGrid = null;
        closeLayout();
        });
    });
});

function closeLayout() {
    layout.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
}