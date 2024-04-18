// Menu sidebar show
document.querySelector(".btn-hamburger").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("active");
});

// Menu sidebar hide
document.getElementById("btn-close").addEventListener("click", function (e) {
    document.getElementById("mobile-menu").classList.remove("active");
});

// Menu sidebar hide when focus out the sidebar 
document.addEventListener("click", function (e) {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburger = document.querySelector(".btn-hamburger");
    if (
        mobileMenu !== e.target &&
        e.target !== hamburger &&
        !mobileMenu.contains(e.target)
    ) {
        document.getElementById("mobile-menu").classList.remove("active");
    }
});
