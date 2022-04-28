/*const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);
*/

const clickBox = document.getElementById('enter');
const input = document.getElementById('input')

clickBox.addEventListener('click', function() {
  if (input.value.toLowerCase().includes('delica')){
      alert('nice!');
  }
  else {
      alert('bad choice, try something with delica \n like: "1997 mitsubishi DELiCa star wagon"');
  }
});



