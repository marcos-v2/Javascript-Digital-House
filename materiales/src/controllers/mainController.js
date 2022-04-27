const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const visitados=products.filter(product=>product.category==="visited");
		const ofertas=products.filter(product=>product.category==="in-sale");

		// Do the magic
		res.render("index",{visitados,ofertas})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
