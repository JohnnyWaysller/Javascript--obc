// function createCountryCard(country,num){
//     const card = document.createElement('div')
//     card.classList.add('country')

//     const countryName = country[num].name.common
//     const name = document.createElement('h2')
//     name.textContent = countryName

//         const flag = document.createElement('img')
//         flag.src = country[num].flags.svg
//         flag.alt = countryName

//         card.append(name, flag)
//         document.querySelector('#countries').append(card)
// }

// async function getCountries(num){
//     const response = await fetch('https://restcountries.com/v3.1/all')
//     const countries = await response.json()
//     createCountryCard(countries,num)
//     // console.log(countries[20])
// }

// getCountries(226)


function createCountryCards(country){
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

        const flag = document.createElement('img')
        flag.src = country.flags.svg
        flag.alt = countryName

        card.append(name, flag)
        document.querySelector('#countries').append(card)
}

async function getCountries(){
    const response = await fetch('https://restcountries.com/v3.1/all') // fazendo requisicao resolvendo promise de requisicao do fetch e salvando o objeto(stream de dados) na variavel response
    const countries = await response.json() //convertendo resposta(stream de dados) para Json
    
    countries.forEach(createCountryCards);
    // console.log(countries[20])
}

getCountries()

