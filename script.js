let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

manuIcon.oneclick = () => {
    menuIcon.classList.toggle(`bx-x`)
    navbar.classList.toggle(`active`);
}