let accordions = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        // Toggle icon
        let icon = this.querySelector(".icon");
        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-times");

        // Toggle accordion content
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
