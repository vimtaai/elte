const navBar = document.querySelector("ul.navbar-nav");

function handleNavItemClick(event) {
    if (!event.target.matches("a")) {
        return;
    }

    event.preventDefault();

    // const scrollTarget = event.target.href; // #about
    const scrollTarget = event.target.href.split("#").pop();
    const scrollTargetElement = document.querySelector("#" + scrollTarget);

    const { top } = scrollTargetElement.getBoundingClientRect();

    window.scrollTo({
        top,
        behavior: "smooth"
    })
}
navBar.addEventListener("click", handleNavItemClick);

const nav = document.querySelector("nav");
// let navBarScrolled = window.scrollY > 200;

// function handleScroll(event) {
//     if (window.scrollY > 200 && !navBarScrolled) {
//         nav.classList.add("navbar-scrolled");
//         navBarScrolled = true;
//     } else if (window.scrollY <= 200 && navBarScrolled) {
//         nav.classList.remove("navbar-scrolled");
//         navBarScrolled = false;
//     }
// }

function handleNavbarScroll() {
    if (window.scrollY > 200) {
        nav.classList.add("navbar-scrolled");
    } else if (window.scrollY) {
        nav.classList.remove("navbar-scrolled");
    }
}

const animatedElements = document.querySelectorAll("[data-scroll]");
function handleAnimationScroll() {
    for (const element of animatedElements) {
        const { top, height } = element.getBoundingClientRect();

        if (top > 0 && top < window.innerHeight - height) {
            const animation = element.dataset.scrollAnimation;
            element.classList.add(animation);
            element.classList.add("animated");
        }
    }
}

function handleScroll(event) {
    handleNavbarScroll(event);
    handleAnimationScroll(event);
}
window.addEventListener("scroll", handleScroll);