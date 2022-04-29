const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
var products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
// Originalmente products era CONST pero lo pasé a VAR para poder modificarlo mas facil en la parte de destroy

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    res.render("products", { products });
  },

  detail: (req, res) => {
    if (req.params.id - 1 < products.length) {
      res.render("detail", { singleproduct: products[req.params.id - 1] });
    }
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    // Así lo hice yo
    // Creo un objeto para guardar las partes del body del request
    let newProduct = {
      id: null,
      name: null,
      description: null,
      discount: null,
      category: null,
      price: null,
    };
    // Le asigno al nuevo objeto las propiedades del body
      (newProduct.name = req.body.name),
      (newProduct.description = req.body.description),
      (newProduct.discount = req.body.discount),
      (newProduct.category = req.body.category),
      (newProduct.price = req.body.price),
      (newProduct.id = products.length + 1);
    products.push(newProduct); // Pusheo el objeto ya cambiado a products
    let newData = JSON.stringify(products); // Lo paso a JSON
    fs.writeFileSync(productsFilePath, newData); // Lo escribo en el file
    res.redirect("/");
    // Así lo hizo César
    //let newProduct_json = JSON.stringify(req.body)
    //let newProduct = JSON.parse(newProduct_json)
    //newProduct.id = products.length + 1;
    
    //products.push(newProduct);
    //let newData = JSON.stringify(products);
    //const pathJSON = path.join(__dirname, '../data/productsDataBase.json');
    //fs.writeFileSync(pathJASON,newData);
    //res.redirect("/");
  },

  // Update - Form to edit
  edit: (req, res) => {
    if (req.params.id - 1 < products.length) {
      res.render("product-edit-form", {
        productToEdit: products[req.params.id - 1],
      });
    }
  },
  // Update - Method to update
  update: (req, res) => {
    console.log(req.body)
    console.log(req.params)
    var productToEdit = products.find(                  // En una variable busco y guardo el objeto a editar                   
      (product) => product.id == req.params.id);        // uso el find para encontrar a uno en específico
    console.log(productToEdit)
    products.forEach(product =>{if(product.id == req.params.id ){ // Con el forEach recorro el array, si el producto corresponde a mi Id lo modifico, queda
    (product.name = req.body.name),                               // Todo guardado en products como antes
    (product.description = req.body.description),
    (product.discount = req.body.discount),
    (product.category = req.body.category),
    (product.price = req.body.price)}})
    
    let newData = JSON.stringify(products); // Lo paso a JSON
    fs.writeFileSync(productsFilePath, newData); // Lo escribo en el archivo
    res.redirect("/products")
    //Sacando los console log debería andar igual, pero no lo probé
    //César me ayudó en esta parte pero no sé si podría hacerlo solo

  },

  // Delete - Delete one product from DB
  destroy: (req,res)=>{
    function checkProduct(product){if(product.id != req.params.id) 
       {return product}}                                           
    products=products.filter(checkProduct)                         
    let newData = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, newData);
    res.redirect("/products");
  }
};

module.exports = controller;
