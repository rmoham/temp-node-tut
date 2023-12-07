// const user = require("os");
// console.log(user.uptime());
// console.log(user.totalmem());
// console.log(user.hostname());
// console.log(user.homedir());
// console.log(user.freemem());
// console.log(user.userInfo());
// console.log(user.machine());
// console.log(user.version());
// console.log(user.platform());
// console.log(user.arch());

const os = require("os");

// info about current user

const user = os.userInfo();
console.log(user);

// metho returns the system uptime in seconds

console.log(`The system uptime ${os.uptime()} seconds`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOS);
