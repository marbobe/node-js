const db = require('../util/database');

const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)', // se usan los ?? como metodo de seguridad y evitar que te inserten datos los usuarios
      [this.title, this.price, this.imageUrl, this.description]);
  }

  static deleteById(id) {

  }

  static fetchAll() { //PROMISE
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }
};
