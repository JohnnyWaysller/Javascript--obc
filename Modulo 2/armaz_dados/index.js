document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    //atribui um item á sessionStorage chave/valor
    sessionStorage.setItem('info', input.value)
    input.value = ''
    //lembrete: se fechar pag informacao é perdida
})
document.getElementById('readSession').addEventListener('click', function(){
    //passa chave salva na pagina pare recuperar valor com getItem
    const info = sessionStorage.getItem('info')
    alert('Informacao salva é: '  + info)
})

document.getElementById('localBtn').addEventListener('click',function(){
    //atribui um item á local Storage chave/valor
    const input = document.getElementById('local')
    localStorage.setItem('testelocal',input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    const info = localStorage.getItem('testelocal')
    alert('informacao no localStorage: ' + info)
    //informacao do localstorage fica armazenado mesmo se fechar a pagina
})

document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    //formato em que é salvo
    //chave e valor; dataespiracao; caminho;
    ////cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024, 9, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click',function(){
    const input = document.getElementById('cookie2')
    //formato em que é salvo
    //chave e valor; dataespiracao; caminho;
    ////cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info2=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024, 8, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
    // para recuperar cookies é necessario usar metodos de manipulacao de string
})