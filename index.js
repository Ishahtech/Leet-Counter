// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0


// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
   
// }


let countRegion = document.getElementById("count-region")

let saveRegion = document.getElementById("save-region")
let count = 0 

function increment()   {
    count += 1
    countRegion.textContent = count
}

function decrement() {
    countRegion.textContent = count
    count -= 1
}

function save() {
    countString = count + " - "
    saveRegion.textContent += countString
    countRegion.textContent = 0
    count = 0
}
