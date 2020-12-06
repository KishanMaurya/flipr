import express from 'express'
import route from './routes/web.js'
import bodyparser from 'body-parser'
import path from 'path'
const app=express()
const PORT=process.env.PORT || 3000
const __dirname = path.resolve();

//Assets
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('views',path.join(__dirname , '/resources/views'))
app.set('view engine' , 'ejs')

route(app)

app.listen(PORT, ()=>{
    console.log(`server running on localhost//${PORT}`)
})