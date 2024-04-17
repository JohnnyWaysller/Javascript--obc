const form = document.getElementById('orderForm')

form.addEventListener("submit", function (event){
    event.preventDefault()

    const username = document.querySelector ("input[name='username']").value
    const address = document.querySelector ("input[name='address']").value
    const breadoptions = document.querySelector ("select[name='breadSelect']").value
    const optionradio = document.querySelector ("input[name='radioSelect']").value
    const observations =document.querySelector ("textarea[name='observations']").value

    let salad = ""
    document.querySelectorAll("input[name='salad']:checked").forEach(function (item){   
        salad += " - " + item.value + "\n"
    })

        console.log(
            username,
            address,
            breadoptions,
            optionradio,
            salad,
            observations
        )
        
        alert(
            "Pedido Realizado!" +
            "\nNome do cliente: " + username +
            "\nEndereço de entrega: " + address +
            "\nTipo de pão: " + breadoptions +
            "\nRecheio: \n - " + optionradio + "\n" + salad +
            "Observações: " + observations
          )

})