const fetch = require('node-fetch');
const fs = require('fs');
const { error } = require('console');

async function getBitcoins() {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        let valorList = "";
        data.forEach(bitcoin => {
            valorList += `${bitcoin["chatName"]}, ${bitcoin["bpi"]}\n`
        });
        fs.writeFile('bitcoins.txt', valorList, (error) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log("Se han almacenado los valores del Bitcoin")
        })
    } catch (error) {
        console.log(error);
    }
}
getBitcoins();