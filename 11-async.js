const { readFile, writeFile } = require('fs')
console.log('start');
readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const second = result
    writeFile(
        './content/subfolder/result-async.txt',
        `here is the result : ${result}, ${second}`,
        (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result);
        })
})
console.log('starting next task');