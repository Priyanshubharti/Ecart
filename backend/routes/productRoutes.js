import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getTopProducts,
  } from '../controllers/productController.js';
  router.route('/').get(getProducts);
  router.route('/').get(getProducts).post(protect, admin, createProduct);
  router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);
  router.get('/top', getTopProducts);
router.route('/:id').get(getProductById);
router
  .route('/:id')
  .get(checkObjectId,getProductById)
  .put(checkObjectId,protect, admin, updateProduct)
  .delete(checkObjectId,protect, admin, deleteProduct);

export default router;