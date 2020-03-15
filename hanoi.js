// Blocks
const yellowBlock = document.querySelector('#block1')
const greenBlock = document.querySelector('#block2')
const blueBlock = document.querySelector('#block3')
const redBlock = document.querySelector('#block4')
// Poles
const pole1 = document.querySelector('#pole1')
const pole2 = document.querySelector('#pole2')
const pole3 = document.querySelector('#pole3')

let game = document.querySelector('main')

game.addEventListener('click', selectBlock)
function selectBlock(event){
        if (event.target.className != 'block selected'){
            if (event.target.className = 'block'){
                const blocks = event.target
        
                blocks.className += ' selected'
            } else{
                blocks.classList.remove('selected')
            }
        }
        
    
}





yellowBlock.addEventListener ('click', function (event){
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
})

