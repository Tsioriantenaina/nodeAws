const express = require("express")

const app = express()

app.get("/", (req, res) => {
	res.send("Hello word")
})

const port = process.env.port || 4500
app.listen(port, () => {
	console.log(`Server runing in port ${port}`)
})
