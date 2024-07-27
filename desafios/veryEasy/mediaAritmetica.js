const average = (...numbers) => {

    return (numbers.reduce( (acumul, current) => {
        return acumul + current
    }, 0) / numbers.length)

}

console.log(average(10,9,6,8,9,1,5,7))
