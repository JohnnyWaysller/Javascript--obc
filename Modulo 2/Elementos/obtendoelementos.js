function show(){
    const contactList = document.getElementById('contact-list')
    console.log(contactList)//retorna (unico) elemento

    const listElements = document.getElementsByTagName('li')
    console.log(listElements)// retorna elementos

    const contactsInputs = document.getElementsByClassName('contact-input') // retorna elementos
    console.log(contactsInputs)

    const contacts = document.querySelectorAll('#contact-list > li >label') // retorna Node List
    console.log(contacts)
    
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1) // retorna Node List

    const firstContact = document.querySelector ('#contact-list > li > label')
    console.log(firstContact)
}