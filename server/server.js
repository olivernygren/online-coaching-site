const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

async function run() {
  try {
    await mongoose.connect("mongodb+srv://oliver:Afkwyox3nfDxbDqO@onfitness.oasho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Database connected')
  } catch (err) {
    console.error(err)
  }
}

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})

run()