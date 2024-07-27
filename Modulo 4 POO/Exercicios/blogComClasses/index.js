const Author = require("./Author")



const johnny = new Author("Johnny")

 const post = johnny.writePost("Tecnologia de Consoles","Como configurar dados")

post.addComment("Silva", "Shoow")

console.log(post)
