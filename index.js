const nav= document.querySelector(".nav");
const dropdown_menu = document.querySelector(".dropdown-items");

function toggleDisplay (container, div) {
    container.addEventListener("click", (e) => {
        e.preventDefault()
        if (e.target.classList.contains ("dropdown-parent")) {
            div.classList.toggle("hidden");
        }
    })
}

toggleDisplay(nav, dropdown_menu);