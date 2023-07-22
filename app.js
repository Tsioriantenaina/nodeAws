const express = require("express")

const app = express()

app.get("/", (req, res) => {
	res.send("Hello word")
})

app.listen(4500, () => {
	console.log("Server runing in port 4500")
})
