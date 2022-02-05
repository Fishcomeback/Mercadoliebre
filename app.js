const express = require ('express')
const app = express ()
const path = require ('path')

app.listen(3000, () => {
    console.log('servidor corriendo en puerto 3000')
})

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')))