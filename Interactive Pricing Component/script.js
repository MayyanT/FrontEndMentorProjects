const slider = document.getElementById('myRange');
const price = document.getElementById('price');
const views = document.getElementById('views');

let values = [8, 12, 16, 24, 36];
let viewValues = [10, 50, 100, 500, 1];

slider.oninput = function(){
  price.innerHTML = `<span>$${values[this.value]}.00</span> /month`;
  views.innerHTML = viewValues[this.value] === 1 ? `${viewValues[this.value]}M pageviews` : `${viewValues[this.value]}k pageviews`
};



function trackColor(){
  let x = (slider.value) * 25;
  let color =`linear-gradient(90deg, hsl(174, 58%, 57%) ${x}%,  hsl(224, 65%, 95%) ${x}%)`;
  slider.style.background = color;
}

slider.addEventListener("mousemove", trackColor);


slider.oninput();
trackColor();


