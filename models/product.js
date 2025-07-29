const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json'); //crea un archivo en la carpeta data

const getProdcutsFromFile = (cb) => { //cb es una callback 
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent)); //convierte texto a array
    });
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProdcutsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => { //convierte array to text
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProdcutsFromFile(cb);
    }

};