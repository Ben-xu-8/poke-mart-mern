const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productDesc: {
      type: String,
      required: true,
      trim: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productType: {
      type: ObjectId,
      ref: 'Category',
      required: true,
    },
    productQty: {
      type: Number,
      required: true,
    },
    productProduct: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

ProductSchema.index({ productName: 'text' });
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
