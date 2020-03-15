// Blocks
const yellowBlock = document.querySelector('#block1')
const greenBlock = document.querySelector('#block2')
const blueBlock = document.querySelector('#block3')
const redBlock = document.querySelector('#block4')
// Poles
const pole1 = document.querySelector('#pole1')
const pole2 = document.querySelector('#pole2')
const pole3 = document.querySelector('#pole3')
// Selects the whole game
let game = document.querySelector('main')
// Selects the selected blocks
let selectedBlocks = document.querySelectorAll('.block selected')


yellowBlock.addEventListener ('click', yellowBlockMove);
function yellowBlockMove (event){
    const yellowB = event.target;
    pole1.addEventListener ('click', function (pole) {
        const poleOne = event.target;
        pole1.prepend(yellowB);
    })
    pole2.addEventListener ('click', function (pole){
        const poleTwo = event.target
        pole2.prepend(yellowB);
    })
    pole3.addEventListener ('click', function (pole){
        const poleTwo = event.target
        pole3.prepend(yellowB);
    })
}



// Selects the blocks
game.addEventListener('click', selectBlock)
function selectBlock(event){
    // Guard clause
    if (event.target.className != 'block'){
        return
    }
    const blocks = event.target
    blocks.className += ' selected'
    
}


// // Deselect the blocks
// selectedBlocks.addEventListener('click', deselectBlock)

// function deselectBlock(event){
//     // Guard clause
//     if (event.target.className != 'block selected'){
//         return
//     }
//     const blocks = event.target
//     blocks.classList.remove(' selected')
// }

// Solve:
// 1. Only select one block.
// 2. Cannot move anything on top of yellow, but yellow can move anywhere.
// 3. Green can move anywhere, so long as yellow isn't in the section.
// 4. Blue can move anywhere red or nothing already exists OR anywhere green and yellow are not.
// 5. Red can only move if section doesn't contain another div.
//


let stack = document.querySelectorAll('section .pole')
// stack.addEventListener('click', stackingBlockRules)
// function stackingBlockRules() {
//     // if section has value of green block then you can't move there
//     if (greenBlock.dataset.indexNumber){}
// }

greenBlock.addEventListener ('click', greenBlockMove)
function greenBlockMove(){
    if(pole1.contains(yellowBlock) === true || pole2.contains(yellowBlock) === true || pole3.contains(yellowBlock) === true){
        return
    }
    else {
        const greenB = event.target;
            pole1.addEventListener ('click', function (pole) {
                const poleOne = event.target;
                pole1.prepend(greenB);
            })
        
        pole2.addEventListener ('click', function (pole){
            const poleTwo = event.target
            pole2.prepend(greenB);
        })
    
        pole3.addEventListener ('click', function (pole){
            const poleTwo = event.target
            pole3.prepend(greenB);
        })
    }
}

blueBlock.addEventListener ('click', blueBlockMove)
function blueBlockMove(){
    if(pole1.contains(yellowBlock) === true || pole2.contains(yellowBlock) === true || pole3.contains(yellowBlock) === true){
        return
    }
    if(pole1.contains(greenBlock) === true || pole2.contains(greenBlock) === true || pole3.contains(greenBlock) === true ){
        return
    }
    else {
        const blueB = event.target;
        pole1.addEventListener ('click', function (pole) {
            const poleOne = event.target;
            pole1.prepend(blueB);
        })
        pole2.addEventListener ('click', function (pole){
            const poleTwo = event.target
            pole2.prepend(blueB);
        })
        pole3.addEventListener ('click', function (pole){
            const poleTwo = event.target
            pole3.prepend(blueB);
        })
    }
}

redBlock.addEventListener ('click', redBlockMove)
function redBlockMove(){
    if(pole1.contains(yellowBlock) === true || pole2.contains(yellowBlock) === true || pole3.contains(yellowBlock) === true){
        return
    }
    if(pole1.contains(greenBlock) === true || pole2.contains(greenBlock) === true || pole3.contains(greenBlock) === true ){
        return
    }
    if(pole1.contains(blueBlock) === true || pole2.contains(blueBlock) === true || pole3.contains(greenBlock) === true){
        return
    }
    else {
        const redB = event.target;
        pole1.addEventListener ('click', function (pole) {
            const poleOne = event.target;
            pole1.prepend(redB);
        })
        pole2.addEventListener ('click', function (pole){
            const poleTwo = event.target
            pole2.prepend(redB);
        })
        pole3.addEventListener ('click', function (pole){
            const poleTwo = event.target
            pole3.prepend(redB);
        })
    }
}



