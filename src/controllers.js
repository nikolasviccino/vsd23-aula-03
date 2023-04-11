module.exports = {
    async hello1(request, response) {
        return response.json({ msg: 'hello world'})
    },
    
    async hello2(request, response) {
        return response.json({ msg: 'hello world 2'})
    }
}