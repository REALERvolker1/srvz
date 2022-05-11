# srvz
A simple http server serving the directory of your choice:

https://www.npmjs.com/package/srvz
# Usage
### Install:
```
$ npm i -g srvz
```
1. Open the directory you wish to host in your terminal, eg. a directory including an `index.html`
2. run the comand `srvz` in your terminal
3. Go to `http://localhost:8080` in your browser
4. Profit

Alternatively, you can use `import srvz from "srvz"`, just leave it how it is because the function to start a server starts with the file's import

Note that for directories without an `index.html` file, you must specify the filename you wish to open.

Do not use this in production unless you like getting hacked. Report bugs on the issues tab

obey the license ofc