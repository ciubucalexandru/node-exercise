import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

export const ProductModel = mongoose.model('Product', ProductSchema);

export const getProducts = () => ProductModel.find();
export const getProductById = (id: string) => ProductModel.findById(id);
