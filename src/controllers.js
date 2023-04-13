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

        products.push({
            id,
            descricao,
            valor,
            qtde,
        })

        
       return response.json({ data: products })
    },    
}