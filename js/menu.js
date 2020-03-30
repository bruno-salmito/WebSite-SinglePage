/**
 * Script para controlar as funções do google maps
 * personalização e adição de markers
 * Autor: Bruno Salmito
 * Versão: 0.0.1
 */
let show = true;
const menuSection = document.querySelector(".menuSection");
const menuToogle = document.querySelector(".menuSection nav");
const links = document.querySelectorAll(".menuToogle nav.open li");

menuSection.addEventListener('click', () => {
    document.body.style.overflow = show ? "hidden" : "initial";
    menuToogle.classList.toggle('open', show);
    menuSection.classList.toggle('on', show);
    show = !show;
});