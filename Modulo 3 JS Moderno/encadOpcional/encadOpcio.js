const user = {
    name: "John Doe",
    email:"doejohn@email.com",
    friends:[{
        name: "Mary",
        address:{
            street:"Some Street",
            number: 89
        }
    }],
    age: 42,
    phone:{
        countryCode: "+55",
        ddd: "22",
        number: "996345563"
    }
}
// console.log(user.friends[0].phone.ddd)

console.log(user.friends[0].phone.age)
// console.log(user?.brothers?.length)

// console.log(user.brothers?.[5].name)