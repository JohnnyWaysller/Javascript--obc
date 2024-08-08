
    const testeArr = (arr) =>{
        
        const numbers = []
        // arr.forEach(element => {     //minha solucao
        //     element.forEach(item => {
        //         numbers.push(item)
        //     })
        // });

        arr.forEach(element => {        //resolucao
                numbers.push(...element)
           
        });

        return numbers.sort((a, b) => a-b)
    }

    console.log(testeArr([[1,5,3],[6,19,11],[47,128,5],[1,93,57,42,103]]))