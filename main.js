const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu i");
const ulList = document.querySelector(".header .nav ul");
const links = document.querySelectorAll(".header .nav ul li");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let id  = '';

    sections.forEach(sec =>  {
        const secTop = sec.offsetTop;

        if (scrollY >= secTop - 65) {
            id = sec.getAttribute('id');
        }

        links.forEach(link => {
            link.classList.remove("active");

            const dataLink = link.getAttribute("data-link");

            if (id === dataLink) {
                link.classList.add("active");
            }

        });
    });
});

menu.addEventListener("click", () => {
    ulList.classList.toggle("active");

    if(ulList.classList.contains("active")) {
        menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    };
});

config = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
 }

flatpickr("input[type=datetime-local]", config);