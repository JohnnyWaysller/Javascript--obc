const dayjs  = require ("dayjs")

const date = (entry) => {
    let userBirthday = dayjs(entry); // Converte a string de entrada para um objeto dayjs
    let dateNow = dayjs(); // Cria um objeto dayjs para a data atual
    const currentAge = dateNow.diff(userBirthday, 'years') // calcula diferença entre datas com parametro especificado
    let nextBirthday = userBirthday.add(currentAge + 1, 'years') //adicionar periodo com parametro especificado
    let daysleftforBirthday = nextBirthday.diff(dateNow, 'days') // calcula diferença entre datas com parametro especificado

    console.log(`
        Idade Atual: ${currentAge} Anos
        O proximo aniversário: ${nextBirthday.format('DD/MM/YY')} 
        Dias restantes para o proximo aniversário: ${daysleftforBirthday}
        `); // Exibe o resultado
}

date("1994-07-13");


