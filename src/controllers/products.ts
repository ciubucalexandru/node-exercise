import express from 'express';
import { getProductById, getProducts } from '../db/products';

export const getAllProducts = async (req: express.Request, res: express.Response) => {
  try {
    const products = await getProducts();

    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getProduct = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(404);
    }

    const product = await getProductById(id);

    if (!product) {
      return res.sendStatus(404);
    }

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
