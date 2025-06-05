let color1 = "#8bf98f"; 
let color2 = "#3b89dc";
let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let copyCode = document.querySelector(".copyCode")

const handleBtn = () => {
  let hexValues="0123456789abcdef";
  let color="#";
  for(let i=0; i<6; i++){
    color += hexValues[Math.floor(Math.random()*16)];
  }
  return color;
}

const handleBtn1 = () => {
  color1 = handleBtn();
  console.log(color1);
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  copyCode.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  btn1.innerText = color1;
}

const handleBtn2 = () => {
  color2 = handleBtn();
  console.log(color2);
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
  copyCode.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
  btn2.innerText = color2;
}

copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(copyCode.innerText);
  alert("Great Choice, your Css is copied!");
})

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
