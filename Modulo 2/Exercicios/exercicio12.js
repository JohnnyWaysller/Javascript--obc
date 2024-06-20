const inputEnable = document.getElementById('input-enable')
const saveChange = document.getElementById('saveChange')
const showSection = document.getElementById('viewForms')
const divInsert = document.createElement('div')
let elementsChange 

saveChange.addEventListener('click',showData)



let radioCounter = 0
const data = []
const dataName = ""

const openLine = (event) =>{

const username = event.currentTarget.parentNode.children.addname.value
//   data[0] = username
//   alert("teste:"+ data[0])
  addTecnology()
  showSection.appendChild(divInsert)

}

inputEnable.addEventListener('click', function(event){
    valorteste = openLine(event);
    event.preventDefault();
       
})
function addListenersRadio(){
elementsChange.radio1.addEventListener('change', function() {
    if (this.checked) {
        data.push(this.value);
    }
});

elementsChange.radio2.addEventListener('change', function() {
    if (this.checked) {
        data.push(this.value);
    }
});

elementsChange.radio3.addEventListener('change', function() {
    if (this.checked) {
        data.push(this.value);
    }
});
}

function addTecnology (){
    const buttonDel = document.createElement('button')
    buttonDel.textContent = 'Deletar'
    const space = document.createElement('br')
    const tecLine = document.createElement('input')
    tecLine.name = 'tecLine' + radioCounter;
    tecLine.type = 'text'
    const elementsRadio = addTimeexp()
    elementsChange = elementsRadio
 
    radioCounter ++
    divInsert.append(tecLine,
        elementsRadio.radio1,
        elementsRadio.radioLabel1,
        elementsRadio.radio2,
        elementsRadio.radioLabel2,
        elementsRadio.radio3,
        elementsRadio.radioLabel3,
        buttonDel,space,
        )
        buttonDel.addEventListener('click', function() {
            // Remove o contêiner que contém o input e os botões quando o botão "Deletar" é clicado
            divInsert.removeChild(tecLine);
            divInsert.removeChild(elementsRadio.radio1);
            divInsert.removeChild(elementsRadio.radioLabel1);
            divInsert.removeChild(elementsRadio.radio2);
            divInsert.removeChild(elementsRadio.radioLabel2);
            divInsert.removeChild(elementsRadio.radio3);
            divInsert.removeChild(elementsRadio.radioLabel3);
            divInsert.removeChild(buttonDel);
            divInsert.removeChild(space);
        });
       addListenersRadio(elementsChange) 
        
}

function showData() {
    let radioSelected = false;

    if (data.length > 0) {
        // Verifica se pelo menos um dos botões de rádio foi selecionado
        if (elementsChange && (elementsChange.radio1.checked || elementsChange.radio2.checked || elementsChange.radio3.checked)) {
            radioSelected = true;
        }
    }

    if (radioSelected) {
        // Se pelo menos um botão de rádio foi selecionado, mostra o valor do primeiro botão de rádio selecionado
        if (elementsChange.radio1.checked) {
            alert(elementsChange.radio1.value);
        } else if (elementsChange.radio2.checked) {
            alert(elementsChange.radio2.value);
        } else if (elementsChange.radio3.checked) {
            alert(elementsChange.radio3.value);
        }
    } else {
        // Se nenhum botão de rádio foi selecionado, mostra uma mensagem de alerta
        alert('Nenhuma opção de rádio selecionada');
    }
}
// function showData() {
//     if (data.length > 0 && elementsChange && elementsChange.radio1 && elementsChange.radio1.checked) {
//         alert(elementsChange.radio1.value);
//     } else {
//         alert('Nenhuma opção de rádio selecionada');
//     }
// }

// function showData(){
//     alert(data[0].radio1.value);
// }


function addTimeexp() {
    const firstRadio = document.createElement('input');
    firstRadio.type ='radio';
    firstRadio.name = 'timeExpradio' + radioCounter;
    firstRadio.value = '0-2';
    
    const firstRadioLabel = document.createElement('label');
    firstRadioLabel.textContent = '0 - 2 anos';
    firstRadioLabel.htmlFor = 'radio1'; // Associando o rótulo ao botão de rádio
    firstRadio.id = 'radio1'; // Associando o botão de rádio ao rótulo

    const secondRadio = document.createElement('input');
    secondRadio.type ='radio';
    secondRadio.name = 'timeExpradio' + radioCounter;
    secondRadio.value = '3-4';
    
    const secondRadioLabel = document.createElement('label');
    secondRadioLabel.textContent = '3 - 4 anos';
    secondRadioLabel.htmlFor = 'radio2'; // Associando o rótulo ao botão de rádio
    secondRadio.id = 'radio2'; // Associando o botão de rádio ao rótulo

    const thirdRadio = document.createElement('input');
    thirdRadio.type = 'radio';
    thirdRadio.name = 'timeExpradio' + radioCounter;
    thirdRadio.value = '5+';

    const thirdRadioLabel = document.createElement('label');
    thirdRadioLabel.textContent = '5 ou mais anos';
    thirdRadioLabel.htmlFor = 'radio3'; // Associando o rótulo ao botão de rádio
    thirdRadio.id = 'radio3'; // Associando o botão de rádio ao rótulo

    return {
        radio1: firstRadio,
        radioLabel1: firstRadioLabel,
        radio2: secondRadio,
        radioLabel2: secondRadioLabel,
        radio3: thirdRadio,
        radioLabel3: thirdRadioLabel
    };
}


