var aboutInput = document.getElementById('aboutInput');
const aboutEnter = document.getElementById('aboutEnter');

aboutEnter.addEventListener('click', function(){ 
    alert(aboutInput.value); 
    document.getElementById('output').append(aboutInput.value);
});

