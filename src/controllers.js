const products = [
    {
        id: 1,
        descricao: 'Cola cola 2lts',
        valor: 10.00,
        qtde: 10
    },
    {
        id: 2,
        descricao: 'Cerveja',
        valor: 5.80,
        qtde: 50
    },
    {
        id: 3,
        descricao: 'Agua',
        valor: 2.00,
        qtde: 5
    }
]

module.exports = {
    async createCart(request, response) {
        
        const { id, descricao, valor, qtde } = request.body
        
        const existsProduct = products.find(product => product.id === id)
        if (existsProduct) {
            return response.status(400).json({
                error: 'Produto já cadastrado'
              })            
        }

        const existsDescription = products.find(product => product.descricao.toLocaleLowerCase() === descricao.toLocaleLowerCase())
        if (existsDescription) {
            return response.status(400).json({
                error:'Produto já cadastrado'
            })
        }

        const product = {
            id,
            descricao,
            valor,
            qtde
        }

        products.push(product)
            
      
        
       return response.json({ data: product })
    },    

    async getListOfCart(request, response) {
       return response.json({ data: products })
   },

    async createUserCart(request, response) {
        
        const { item } = request.body

        for (const product of item) {
            const productExists = products.find(prd => prd.id === product.id)
            if (!productExists) {
                return response.status(400).json({
                    error: 'Produto não encontrado'
                })
            }

            if (product.qtde > productExists.qtde) {
                return response.status(400).json({
                    error: 'Quantidade não disponivel'
                })
            }

            const userItems = {
                productId: productExists.id,
                descricao: productExists.descricao,
                qtde: product.qtde,
                valor: product.qtde * productExists.valor
            }

            userCart.push(userItems)

            const index = products.findIndex(idx => idx.id === product.id)
            products[index].qtde = products[index].qtde - product.qtde
            //product[index].qtde -= product.qtde --> decremento
            //product[index].qtde += product.qtde --> incremento

 

       return response.json({
        order: userItems,
        stock: products
       })
        }

        /*products.forEach((product, index) => {
            console.log(product)
        })*/

        /*products.map((product, index) => {
            console.log(index)
        })*/


    
   }
}
