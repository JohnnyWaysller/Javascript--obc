
function escalar(){
    
    const posicao = document.getElementById('position').value
    const camisa = document.getElementById('shirt').value
    const nome = document.getElementById('nome').value 

    const liItemName = document.createElement('li')
    const liItemPosition = document.createElement('li')
    const liItemShirt = document.createElement('li')

   liItemName.innerText = nome
   liItemName.classList.add('formatedl1')

   liItemPosition.innerText = posicao
   liItemPosition.classList.add('formatedl2')

   liItemShirt.innerText = camisa
   liItemShirt.classList.add('formatedl3')

   const ulItem = document.createElement('ul')
   ulItem.classList.add('formatedul')
   ulItem.append(liItemName,liItemPosition,liItemShirt)
    
   const relate = document.querySelector ('.relate')
   const confirma=confirm("Deseja cadastrar\n"
   +nome+" "+posicao+" camisa: "+camisa)
   if(confirma){relate.appendChild(ulItem)} // imprime resultado
   campos = document.getElementsByClassName('field')
   campos[0].value = ""; // Limpa o primeiro campo
   campos[1].value = ""; // Limpa o segundo campo
   campos[2].value = ""; // Limpa o terceiro campo
}

function remover(){
    const camisaCampo = document.getElementById('shirt').value
    const ulitemList=document.getElementsByClassName('formatedul')
    for(i=0;i<ulitemList.length; i++){
        const camisa = ulitemList[i].querySelector('.formatedl3')
        const posicao = ulitemList[i].querySelector('.formatedl2')
        const nome = ulitemList[i].querySelector('.formatedl1')
    
        if(camisa.innerText === camisaCampo){
            const confirma=confirm("Deseja remover\n"
            +nome.innerText+" "+posicao.innerText+" camisa:"+camisa.innerText)
            if(confirma){ulitemList[i].remove();
            }
        }
    }
}