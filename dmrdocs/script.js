const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
const mainContent = document.querySelector(".main-content");

// Handle sidebar toggle
sidebarOpen.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    mainContent.classList.toggle("expanded");
});

sidebarClose.addEventListener("click", () => {
    sidebar.classList.add("close", "hoverable");
    mainContent.classList.remove("expanded");
});
sidebarExpand.addEventListener("click", () => {
    sidebar.classList.remove("close", "hoverable");
    mainContent.classList.add("expanded");
});

sidebar.addEventListener("mouseenter", () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
    }
});
sidebar.addEventListener("mouseleave", () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
    }
});

// Handle dark/light mode toggle
darkLight.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        darkLight.classList.replace("bx-moon", "bx-sun");
    } else {
        darkLight.classList.replace("bx-sun", "bx-moon");
    }
});

// Set the initial state of the dark/light icon based on the body class
document.addEventListener("DOMContentLoaded", () => {
    if (body.classList.contains("dark")) {
        darkLight.classList.replace("bx-moon", "bx-sun");
    } else {
        darkLight.classList.replace("bx-sun", "bx-moon");
    }
});

// Handle submenu toggle
submenuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        item.classList.toggle("show_submenu");
        submenuItems.forEach((item2, index2) => {
            if (index !== index2) {
                item2.classList.remove("show_submenu");
            }
        });
    });
});

// Handle sidebar initial state based on window width
if (window.innerWidth < 768) {
    sidebar.classList.add("close");
    mainContent.classList.remove("expanded");
} else {
    sidebar.classList.remove("close");
    mainContent.classList.add("expanded");
}

// Adjust sidebar state on window resize
window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        sidebar.classList.add("close");
        mainContent.classList.remove("expanded");
    } else {
        sidebar.classList.remove("close");
        mainContent.classList.add("expanded");
    }
});
