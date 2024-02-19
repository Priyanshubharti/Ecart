import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';

import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  } from '../controllers/productController.js';
  router.route('/').get(getProducts);
  router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;