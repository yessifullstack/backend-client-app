import Product from "../models/productsModel.js";

export const getProducts = async (req, res) => {
  try {
    // Consultar los productos con stock mayor a 0 en la base de datos
    const availableProducts = await Product.find({ stock: { $gt: 0 } });
    res.json(availableProducts);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los productos', error: err.message });
    console.log(err.message);
  }
};





