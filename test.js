const _ = require("lodash");
if (_.chunk([1, 2, 3, 4], 2).length !== 2) process.exit(1);
console.log("OK");
