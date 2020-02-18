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

function handleProgressScroll() {
    const totalHeight = (document.body.scrollHeight - window.innerHeight);
    const progress = parseInt(window.scrollY) / totalHeight;
    //const progressBar = document.querySelector(progressBar);

    progressBar.style.width = window.innerWidth * progress + "px";
}

function handleScroll(event) {
    handleNavbarScroll(event);
    handleAnimationScroll(event);
    handleProgressScroll(event);
}
window.addEventListener("scroll", handleScroll);

const progressBar = document.createElement('div');

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "10px";
progressBar.style.background = "orange";
progressBar.style.zIndex = "1050";
//progressBar.id = "progressBar";

document.body.insertBefore(progressBar, document.body.firstElementChild);