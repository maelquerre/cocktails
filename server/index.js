import express from 'express'

const PORT = 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
