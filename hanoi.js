const tower1 = document.querySelector('#tower1')
const tower2 = document.querySelector('#tower2')
const tower3 = document.querySelector('#tower3')

// Mode
let clickMode = "pickUp"
let selectedDiskNode

const selectTower = function (event) {
    if (clickMode === "pickUp") {
        const selectedTower = event.currentTarget;
        const selectedDisk = selectedTower.lastElementChild;
        selectedTower.appendChild(selectedDisk)
        selectedDiskNode = selectedDisk;
        clickMode = "drop"
    }
    else {
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
    // Check for Win
    if (tower2.childElementCount === 4 || tower3.childElementCount === 4) {
        alert("YOU WON!")
    }
}
tower1.addEventListener('click', selectTower)
tower2.addEventListener('click', selectTower)
tower3.addEventListener('click', selectTower)
