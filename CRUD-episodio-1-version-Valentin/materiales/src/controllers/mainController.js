const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
var products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const arrayVisited = products.filter(products => products.category === "visited")

const arrayOffers = products.filter(products => products.category === "in-sale")

const controller = {
	index: (req, res) => {
		res.render("index",{visitado:arrayVisited,ofertas:arrayOffers})
	},
	search: (req, res) => {
		res.render("results")
	},
};


module.exports = controller;
