const featuredWorks = document.querySelectorAll(".featured-works-item");
const modal = document.querySelector("[data-modal]");
const btnModalClose = document.querySelector("[data-modal='close']");

function handleClick(event) {
    event.preventDefault();
    modal.classList.toggle("active");
}

featuredWorks.forEach(element => {
    element.addEventListener('click', handleClick);
})

btnModalClose.addEventListener("click", () => modal.classList.remove("active"));