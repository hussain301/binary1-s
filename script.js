
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
btn.addEventListener('click' , function(e){
    const binary1 = Array.from(input.value).map(Element=> Element==='1'?'0':'1').join('');
     
    input.value=''
    result.style.opacity = '1';
    result.textContent = binary1;
})
