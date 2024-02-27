import http from 'node:http'

const PORT = 3000

const rotas = {
  "/": "Curso de Express API",
  "/livros": "Entrei na rota livros",
  "/autores": "Entrei na rota autores"
}

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  res.writeHead(200, {"Content-Type": 'text/plain'})
    .end(rotas[url])
})


server.listen(PORT, () => console.log('running!'))