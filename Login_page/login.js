let labels = document.querySelectorAll("label");

labels.forEach(function(label){
  label.innerHTML = label.innerText.split('').map(function(letter, index){return `<span style="transition-delay: ${50*index}ms">${letter}</span>`;}).join('');
})
