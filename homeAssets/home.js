'use strict'

//codigo para fechar e abrir a sidebar
let hamburger_icon = document.querySelector('#hamburger-icon');
hamburger_icon.addEventListener('click', function showSidebar(){
    let side_bar = document.querySelector('#sidebar');
    if(side_bar.style.display.localeCompare('') == 0){
        side_bar.style.display = 'flex'
    }
})

let close_sidebar_icon = document.querySelector('#close-sidebar');
close_sidebar_icon.addEventListener('click', function closeSidebar(){
    let side_bar = document.querySelector('#sidebar');
    if(side_bar.style.display.localeCompare('flex') == 0){
        side_bar.style.display = ''
    }
})