import fs from 'fs';

function sleep(ms) {
    return new Promise(resolveFunc => setTimeout(resolveFunc, ms));
  }

const slow = async (delay) => {
    while(true){
        console.log("Work");
        await sleep(delay);
        fs.appendFile('./queue.js', "hello\n", (err) => {
            if (err) return console.log(err);
        });
    }
}

slow(1000);