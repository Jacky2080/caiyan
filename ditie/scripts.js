document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const content = document.getElementById("content");

    form.addEventListener("click",function() {
        content.style.display = "block";
    });

    const divs = content.querySelectorAll('.choice');
    divs.forEach(div => {
        div.addEventListener('click', function() {
            document.getElementById("name").textContent = this.textContent;
            content.style.display = "none";
        });
    });
});