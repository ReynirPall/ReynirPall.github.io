let phoneElement = document.getElementById('design').getElementsByTagName('img')[0];
let box1 = {
    element: document.getElementById('tools'),
    imgSrc: './pictures/AppOnDevice/tarIphoneTAR.png',
}
let box2 = {
    element: document.getElementById('projectMovements'),
    imgSrc: 'https://pm1.narvii.com/6499/1c83b804e007f00353944cca3734a425714525c7_hq.jpg',
}
let box3 = {
    element: document.getElementById('toolHistory'),
    imgSrc: 'https://i0.wp.com/twinfinite.net/wp-content/uploads/2016/11/vaporeon-1.jpg?fit=622%2C350&ssl=1',
}
let box4 = {
    element: document.getElementById('cars'),
    imgSrc: 'https://honeysanime.com/wp-content/uploads/2016/07/Pokemon-Blastoise.png',
}
let box5 = {
    element: document.getElementById('staff'),
    imgSrc: 'https://www.listreallife.com/wp-content/uploads/2017/05/Lapras.jpg',
}
let box6 = {
    element: document.getElementById('projects'),
    imgSrc: 'https://honeysanime.com/wp-content/uploads/2017/05/Primarina-pokemon.jpg',
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