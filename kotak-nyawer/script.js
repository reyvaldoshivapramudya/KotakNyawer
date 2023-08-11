// SHOW NAVBAR FOR DESKTOP
const navbar = document.getElementById('navbar');
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0 || prevScrollpos > currentScrollPos) {
        navbar.style.top = '-70px';
    } else {
        navbar.style.top = '0';
    }
    prevScrollpos = currentScrollPos;
});


// TOGGLE FAQ
const toggles = document.querySelectorAll('.toggle');
const contentDiv = document.querySelectorAll('.content');
const icons = document.querySelectorAll('.icon');

toggles.forEach((toggle, i) => {
    toggle.addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight) {
            resetContent();
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggle.style.color = "#FAAE2B";
            icons[i].classList.replace('fa-plus', 'fa-minus');
        } else {
            contentDiv[i].style.height = "0px";
            toggle.style.color = "#111130";
            icons[i].classList.replace('fa-minus', 'fa-plus');
        }
    });
});

function resetContent() {
    contentDiv.forEach((content, j) => {
        content.style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.replace('fa-minus', 'fa-plus');
    });
}
