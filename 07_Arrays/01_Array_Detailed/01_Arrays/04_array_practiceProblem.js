
const data = [17, 20, 15, 23];

let str = '\n'
for (let index = 0; index < data.length; index++) {
    str += `... ${data[index]}°C on ${index + 1} day ... \n`
}

console.log(str);
/**
... 17°C on 1 day ...
... 20°C on 2 day ...
... 15°C on 3 day ...
... 23°C on 4 day ...
 */
