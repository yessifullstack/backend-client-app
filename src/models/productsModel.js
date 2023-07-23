import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    stock: Number,
    price: Number,
    brand: String,
    specialPrice: Number,
  });

  // Crear el modelo del producto
export default mongoose.model('Product', productSchema);