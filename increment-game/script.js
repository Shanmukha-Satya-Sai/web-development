// const change=()=>{
//     let display = document.getElementById("display")
//     display.innerHTML="bye"
//     display.style.color="red"
//     display.style.backgroundColor="black"
// }

let play=document.getElementById("play")
let count=0

const incr=()=>{
    count++
    play.innerHTML=count
    play.style.color="orange"
}

incr()

const reset=()=>{
    count=0
    play.innerHTML=count
    
}


