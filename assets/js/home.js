'use strict'

//codigo para fechar e abrir a sidebar
const hamburger_icon = document.querySelector('#hamburger-icon');
hamburger_icon.addEventListener('click', function showSidebar(){
    const side_bar = document.querySelector('#sidebar');
    if(side_bar.style.display.localeCompare('') == 0){
        side_bar.style.display = 'flex'
    }
})

const close_sidebar_icon = document.querySelector('#close-sidebar');
close_sidebar_icon.addEventListener('click', function closeSidebar(){
    const side_bar = document.querySelector('#sidebar');
    if(side_bar.style.display.localeCompare('flex') == 0){
        side_bar.style.display = ''
    }
})