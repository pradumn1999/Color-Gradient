let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#004773";
let rgb2 = "#54d542"

 const hexaValue = () => {
   let hexaValues = "0123456789abcdef"
     let color = "#";
     for(let i=0; i<6; i++){
       
        color += hexaValues[Math.floor(Math.random() * 16)]
     }
        return color;
 }

const handlemyButton1= () => {
     rgb1 = hexaValue();
     console.log(rgb1);  
     document.body.style.backgroundImage = `linear-gradient(to left, ${rgb1}, ${rgb2})`
     copyDiv.innerHTML =  `background-image linear-gradient(to left, ${rgb1}, ${rgb2})`;
     btn1.innerHTML = rgb1;
};
const handlemyButton2= () => {
     rgb2 = hexaValue();
     console.log(rgb2);  
     document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
     copyDiv.innerHTML =  `background-image linear-gradient(to right, ${rgb1} , ${rgb2})`;
     btn2.innerHTML = rgb2;
};

copyDiv.addEventListener(("click"), () => {
 navigator.clipboard.writeText(copyDiv.innerHTML);
 alert("copy text");
})

btn1.addEventListener(("click"), handlemyButton1);
btn2.addEventListener(("click"), handlemyButton2);