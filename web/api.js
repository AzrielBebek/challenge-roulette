function checkLevel(id){

fetch("https://gdbrowser.com/api/level/"+id)
.then(res=>res.json())
.then(data=>{

console.log("Level exists:",data.name)

})
.catch(()=>{

console.log("Level not found")

})

}