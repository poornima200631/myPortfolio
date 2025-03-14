document.querySelectorAll(".add a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
document.querySelectorAll("#about a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});