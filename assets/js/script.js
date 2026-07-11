const toggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".menu");
// const contactBtn =
// document.getElementById("contactBtn");

// const modal = document.getElementById("cinematicModal");

// const closeModal =
// document.getElementById("closeModal");

// contactBtn.addEventListener(
// "click",
// (e)=>{

//     e.preventDefault();

//     modal.classList.add("show");

// }
// );

// closeModal.addEventListener(
// "click",
// ()=>{

//     modal.classList.remove("show");

// }
// );

// modal.addEventListener(
// "click",
// (e)=>{

//     if(
//         e.target === modal
//     ){

//         modal.classList.remove(
//             "show"
//         );

//     }

// }
// );

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// // navbar background on scroll

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#050816";
    } else {
        nav.style.background = "#050816dd";
    }

});

document.querySelectorAll(".menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

// // reveal animation

// const observer = new IntersectionObserver((entries) => {

//     entries.forEach(entry => {

//         if (entry.isIntersecting) {

//             entry.target.style.opacity = "1";
//             entry.target.style.transform = "translateY(0)";

//         }

//     });

// }, {
//     threshold: 0.1
// });

// document.querySelectorAll("section").forEach(section => {

//     section.style.opacity = "0";
//     section.style.transform = "translateY(50px)";
//     section.style.transition = "all 0.8s ease";

//     observer.observe(section);

// });

// CONTACT MODAL

document.addEventListener("DOMContentLoaded", () => {

    const contactBtn =
        document.getElementById("contactBtn");

    const modal =
        document.getElementById("cinematicModal");

    const closeModal =
        document.getElementById("closeModal");

    if (!contactBtn || !modal || !closeModal) {
        console.log("Modal element not found");
        return;
    }

    contactBtn.addEventListener("click", (e) => {

        e.preventDefault();

        modal.classList.add("show");

    });

    closeModal.addEventListener("click", () => {

        modal.classList.remove("show");

    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("show");

        }

    });

});