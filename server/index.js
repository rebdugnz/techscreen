const server = require('./server')

const port = process.env.PORT || 3000

server.listen(3000, () => {
  console.log("Server is listening")
})
