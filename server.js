require('dotenv-safe').config()

const app = require('./src/app')
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})