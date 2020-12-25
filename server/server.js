const express = require('express')
const cors = require('cors')
const app = express()
const arg = process.argv
const pokemons = require('./routes/pokemon')
const morgan = require('morgan')
app.use(cors())
app.use(express.json())
app.use('/pokemon', pokemons)

app.use(morgan('tiny'))



app.listen(arg[2], () =>  {
    console.log(
        `Server is listening on http://localhost:${arg[2]}`
    );
  });