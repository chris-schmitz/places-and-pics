let fs = require('fs')
let path = require('path')
let co = require('co')

// let savePath = path.resolve(__dirname, '../../public/images')
// fs.writeFile(`${savePath}/test`, 'worked again', 'utf8', (error) => {
//     if(error) throw error;
//     console.log('file written')
// })

co(function*(){
    let savePath = path.resolve(__dirname, '../../public/images')
    let result = fs.writeFile(`${savePath}/testagain.txt`, 'utf8', yield)
    console.log(`Result: ${JSON.stringify(result)}`)
})