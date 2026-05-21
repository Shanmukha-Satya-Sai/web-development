let colourcode=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
const changecolour = () =>{
    let display = document.getElementById("display")
    let randcolour = "#";
    
    for (let i=0;i<6;i++){
        let randnumber=Math.floor(Math.random()*16)
        randcolour += colourcode[randnumber]

    }

    display.style.backgroundColor=randcolour

    console.log(randcolour)
}