import express from 'express';
import { isAuthenticated } from '../middlewares';
import { getAllProducts, getProduct } from '../controllers/products';

export default (router: express.Router) => {
  router.get('/products', isAuthenticated, getAllProducts);
  router.get('/products/:id', isAuthenticated, getProduct);
};
