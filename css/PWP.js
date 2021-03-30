let main_h = document.querySelector('.main_h');
main_h.style.height = window.innerWidth * 0.28125 + 'px';
let DarkBlock = document.querySelectorAll('.DarkBlock');
DarkBlock.forEach((block)=>{
block.style.height = window.innerWidth * 0.1223 + 'px';
});
let BasicVideoBlock = document.querySelector('.BasicVideoBlock');
BasicVideoBlock.style.height = window.innerWidth * 0.1536 + 'px';

let HotNew = document.querySelectorAll('.HotNew');
HotNew.forEach((hot)=>{
hot.style.height = window.innerWidth * 0.1427 + 'px';
});

let LastLogoImg = document.querySelector('.LastLogoImg');
LastLogoImg.style.height = window.innerWidth * 0.0677 + 'px';