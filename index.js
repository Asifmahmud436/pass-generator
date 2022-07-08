const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pass1EL = document.getElementById("pass1")
const pass2El = document.getElementById("pass2")

const press = document.getElementById("press")



press.addEventListener("click", function(){
    let p1 =""
    let p2 =""
  
    for(let i = 0;i<7;i++){
         let randint1 = Math.floor(Math.random()*90)
         let randint2 = Math.floor(Math.random()*90)
         p1 += characters[randint1]
         p2 += characters[randint2]
         
         
     }
    
    pass1EL.textContent = p1
    pass2El.textContent = p2     
    
})

 







