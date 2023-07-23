import Product from "../models/productsModel.js";


// Ruta /price/{user_id}/{nombre_producto}
export const getEspecialPrice = async (req, res) => {
    const userId = req.params.user_id;
    const productName = req.params.nombre_producto;
  
    try {
      // Buscar el producto con el nombre especificado en la base de datos
      const product = await Product.findOne({ name: productName });
  
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      // Verificar si el cliente tiene precio especial para la marca
      if (product.brand === 'marca1' && userId === 'cliente1') {
        res.json({ price: product.specialPrice });
      } else {
        res.json({ price: product.price });
      }
    } catch (err) {
      res.status(500).json({ message: 'Error al obtener el precio del producto', error: err.message });
    }
  };