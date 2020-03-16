// Poles
const pole1 = document.querySelector('#pole1')
const pole2 = document.querySelector('#pole2')
const pole3 = document.querySelector('#pole3')

// Mode
let clickMode = "pickUp"
let selectedDiskNode

const selectTower = function (event) {
    if ( clickMode === "pickUp" ) {
        const selectedTower = event.currentTarget;
        console.log(event.currentTarget);
        console.log(clickMode)
        const selectedDisk = selectedTower.lastElementChild;
        console.log(selectedDisk);
        selectedTower.appendChild(selectedDisk)
        selectedDiskNode = selectedDisk;
        clickMode = "drop"
    }
    else {
        console.log(clickMode)
        const dropTower = event.currentTarget;
        if (dropTower.childElementCount === 0) {
            dropTower.appendChild(selectedDiskNode);
        }
        if (dropTower.childElementCount > 0) {
            const topDiskDropTower = dropTower.lastElementChild;
            if (selectedDiskNode.dataset.size < topDiskDropTower.dataset.size) {
                dropTower.appendChild(selectedDiskNode);
            }

        }
        clickMode = "pickUp"
    }
    // for win
    if (pole2.childElementCount === 4 || pole3.childElementCount === 4) {
        alert("YOU WON!")
    }
}
pole1.addEventListener('click', selectTower)
pole2.addEventListener('click', selectTower)
pole3.addEventListener('click', selectTower)
