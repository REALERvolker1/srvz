#!/usr/bin/env node
import {createServer} from 'http'
import {readFile} from 'fs'
const srvz = async() => {
	createServer(async(req,res)=>{
	const fil = req.url.slice(1,req.url.length)
	const FILE = fil.endsWith('/')?`${fil}index.html`:fil
	readFile(FILE,(err,data)=>{
		res.writeHead(err?404:200)
		res.end(err?JSON.stringify(err):data)
		console.log(err?err:`Serving ${FILE}`)
	})
})
.listen(8080)
}
srvz()
.then(console.log(`Hosting SRVZ on prot 8080, press Ctrl+C to quit.`))

export default srvz
