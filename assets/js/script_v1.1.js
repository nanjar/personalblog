/*
=========================================
MOBILE MENU
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const toggle =
        document.querySelector(".mobile-toggle");

    const menu =
        document.querySelector(".menu");

    if (toggle && menu) {

        toggle.addEventListener("click", () => {

            menu.classList.toggle("active");
            toggle.classList.toggle("active");

        });

        document
            .querySelectorAll(".menu a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    menu.classList.remove("active");
                    toggle.classList.remove("active");

                });

            });

    }

});


/*
=========================================
NAVBAR SCROLL EFFECT
=========================================
*/

window.addEventListener("scroll", () => {

    const nav =
        document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 50) {

        nav.style.background =
            "#050816";

    } else {

        nav.style.background =
            "#050816dd";

    }

});


/*
=========================================
SECTION REVEAL ANIMATION
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const sections =
        document.querySelectorAll("section");

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        }, {
            threshold: 0.1
        });

    sections.forEach(section => {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(50px)";

        section.style.transition =
            "all .8s ease";

        observer.observe(section);

    });

});


/*
=========================================
CONTACT MODAL
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const contactBtn =
        document.getElementById("contactBtn");

    const modal =
        document.getElementById("cinematicModal");

    const closeModal =
        document.getElementById("closeModal");

    if (!contactBtn ||
        !modal ||
        !closeModal) return;

    contactBtn.addEventListener(
        "click",
        (e) => {

            e.preventDefault();

            modal.classList.add("show");

        }
    );

    closeModal.addEventListener(
        "click",
        () => {

            modal.classList.remove("show");

        }
    );

    modal.addEventListener(
        "click",
        (e) => {

            if (e.target === modal) {

                modal.classList.remove("show");

            }

        }
    );

});


/*
=========================================
FLOATING PLAYER SIMPLE
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const music =
        document.getElementById("bgMusic");

    const button =
        document.getElementById("musicToggle");

    if (!music || !button) {

        console.log("Music player not found");

        return;

    }

    button.textContent = "▶";

    button.addEventListener("click", () => {

        if (music.paused) {

            music.play();

        } else {

            music.pause();

        }

    });

    music.addEventListener("play", () => {

        button.textContent = "❚❚";

        button.classList.add("playing");

    });

    music.addEventListener("pause", () => {

        button.textContent = "▶";

        button.classList.remove("playing");

    });

    music.addEventListener("ended", () => {

        button.textContent = "▶";

        button.classList.remove("playing");

    });

});
