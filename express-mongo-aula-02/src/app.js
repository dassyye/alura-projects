import express from 'express'

const app = express()

app.use(express.json())

const livros = [
  {
    id: 1,
    name: 'Senhor dos aneis'
  },
  {
    id: 2,
    name: 'Harry potter'
  }
]

function deleteBook(id) {
  return livros.findIndex(livro => {
    return livro.id === id
  })
}

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
  const id = Number(req.params.id)

  if(!id) {
    throw new Error()
  }

  const book = livros.find((livro, index) => livro.id === id)

  res.status(200).json(book)
})

app.delete('/livros/:id', (req, res) => {
  const id = Number(req.params.id)

  if(!id) {
    throw new Error()
  }

  livros.splice(deleteBook(id), 1)

  res.status(204).json({ message: 'removed' })
})

app.put('/livros/:id', (req, res) => {
  const id = Number(req.params.id)
  const { name } = req.body

  if(!id) {
    throw new Error()
  }

  const books = livros.splice(deleteBook(id), 1, { id , name })

  res.status(202).json(books)
})

app.post('/livros', (req, res) => {
  const { id, name } = req.body

  if(!id || !name) {
    throw new Error()
  }

  livros.push({ id, name })

  res.status(201).json({ message: 'created' })
})

export default app