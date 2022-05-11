#!/usr/bin/env node
import {createServer} from 'http'
import {readFile} from 'fs'
const srvz = async() => {
	createServer(async(req,res)=>{
	var FILE = process.cwd() + (req.url.endsWith('/')?`/index.html`:req.url)
	readFile(FILE,(err,data)=>{
		res.writeHead(err?404:200)
		res.end(err?JSON.stringify(err):data)
		console.log(err?err:`Serving ${FILE.replace(/\//g,"\\")}`)
	})
})
.listen(8080,()=>{console.log(`Hosting SRVZ on port 8080, press Ctrl+C to quit.`)})
}
srvz()
export default srvz
