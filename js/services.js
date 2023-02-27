const featuredWorks = document.querySelectorAll(".featured-works-item");
const modal = document.querySelector("[data-modal]");
const btnModalClose = document.querySelector("[data-modal='close']");

const modalContent = {
    one: {
        title: "Designing Dashborads",
        subtitle: {
            date: "2020",
            category: "Dashboard"
        },
        image: "./assets/dashboard.svg"
    },
    two: {
        title: "Retrato Vibrante de 2020",
        subtitle: {
            date: "2018",
            category: "Illustration"
        },
        image: "./assets/retrato.svg"
    },
    three: {
        title: "Tipografia Gedai",
        subtitle: {
            date: "2018",
            category: "Typography"
        },
        image: "./assets/tipografia.svg"
    },
}

function handleClick(event) {
    event.preventDefault();

    const modalTitle = document.querySelector('[data-modal="title"]');
    const modalSubtitle = document.querySelector('[data-modal="subtitle"]');
    const modalImage = document.querySelector('[data-modal="image"]');

    featuredWorks.forEach(item => {
        if (item.contains(event.target)) { // faz as modificações se o target estiver dentro do item
            const { id } = item.dataset;
            const content = modalContent[id];

            modalTitle.textContent = content.title;
            modalSubtitle.children[0].textContent = content.subtitle.date;
            modalSubtitle.children[1].textContent = content.subtitle.category;
            modalImage.src = content.image;
        }
    })
    
    modal.classList.toggle("active");
}

featuredWorks.forEach(element => {
    element.addEventListener('click', handleClick);
})

btnModalClose.addEventListener("click", () => modal.classList.remove("active"));