'use strict'

//codigo para fechar e abrir a sidebar
const hamburger_icon = document.querySelector('#hamburger-icon');
const sidebar = document.querySelector('.sidebar');

hamburger_icon.addEventListener('click', function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    if(sidebar.style.display.localeCompare('') == 0){
        sidebar.style.display = 'flex'
    }
})

const close_sidebar_icon = document.querySelector('#close-icon');
close_sidebar_icon.addEventListener('click', function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    if(sidebar.style.display.localeCompare('flex') == 0){
        sidebar.style.display = ''
    }
})