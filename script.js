var block = document.getElementById('moku');
block.style.backgroundColor = '#2ecc71';
block.style.width = '300px';
block.style.height = '300px';
block.style.margin = 'auto';
block.style.textAlign = 'center';
block.style.fontSize = '24px';

var antrasDivas = document.createElement('div');
antrasDivas.setAttribute('id', 'moku2');
antrasDivas.innerHTML = 'Valio pavyko!';
antrasDivas.style.width = '300px';
antrasDivas.style.height = '300px';
antrasDivas.style.margin = 'auto';
antrasDivas.style.textAlign = 'center';
antrasDivas.style.fontSize = '24px';
antrasDivas.style.backgroundColor = '#f1c40f';

document.body.appendChild(antrasDivas);
// console.log(antrasDivas);

var button = document.createElement('button');
button.innerHTML = 'SPAUDALIUKAS';
button.setAttribute('id', 'spaudaliukas');
document.body.appendChild(button);
button.style.display = 'block';
button.style.margin = '5px auto';

button.addEventListener('click', function() {
    this.style.display = 'none';
    antrasDivas.style.display = 'none';
});