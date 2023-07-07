const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);

//method returns the systems uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const current05 ={
    name: os.type(),
    release: os.release(),
}
console.log(current05);


