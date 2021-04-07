let phoneElement = document.getElementById('design').getElementsByTagName('img')[0];
let box1 = {
    element: document.getElementById('tools'),
    imgSrc: 'pictures/appOnDevice/verkf.png',
}
let box2 = {
    element: document.getElementById('projectMovements'),
    imgSrc: 'pictures/appOnDevice/verkd.png',
}
let box3 = {
    element: document.getElementById('toolHistory'),
    imgSrc: 'pictures/appOnDevice/saga.png',
}
let box4 = {
    element: document.getElementById('cars'),
    imgSrc: 'pictures/appOnDevice/bill.png',
}
let box5 = {
    element: document.getElementById('staff'),
    imgSrc: 'pictures/appOnDevice/starfs.png',
}
let box6 = {
    element: document.getElementById('projects'),
    imgSrc: 'pictures/appOnDevice/verk.png',
}

let boxes = [box1, box2, box3, box4, box5, box6]

for(let box of boxes){
    box['element'].addEventListener('click', ()=>{
        phoneElement.setAttribute('src', box['imgSrc']);
        for(let boxElement of boxes){
            if(boxElement !== box){
                boxElement['element'].classList.remove('active')
            }
        }
    })
}