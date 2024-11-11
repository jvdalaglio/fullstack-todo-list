import express from 'express'
import router from './routes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(router);


app.listen(PORT, () => {
  console.log('Rodando Aplicação em localhost:' + PORT)
});