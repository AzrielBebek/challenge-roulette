let maxID = 135167381

let difficulties = [
"Easy",
"Normal",
"Hard",
"Harder",
"Insane",
"Easy Demon",
"Medium Demon",
"Hard Demon",
"Insane Demon",
"Extreme Demon"
]

function roll(){

let cube = document.getElementById("cube")

cube.classList.add("jump")

setTimeout(()=>cube.classList.remove("jump"),600)

let randomID = Math.floor(Math.random()*maxID)+1

document.getElementById("levelID").innerText = randomID

let diff = difficulties[Math.floor(Math.random()*difficulties.length)]

document.getElementById("difficulty").innerText = diff

addHistory(randomID,diff)

checkLevel(randomID)

}

function addHistory(id,diff){

let li = document.createElement("li")

li.innerText = id + " - " + diff

document.getElementById("history").prepend(li)

}