const http = require("http")
const fs = require("fs")
const minimist = require("minimist")
const argv = minimist(process.argv.slice(2))
const port = argv["port"] || 3000

fs.readFile("./www/index.html", (err, data) => {
    if(err){
        console.error(err)
        return
        // process.exit(1)
    }
    
    const server = http.createServer((req,res) => {
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write(data)
        res.end()
    })
    server.listen(port, () => {
        console.log(`Server listening on port ${ port }`)
    })
})