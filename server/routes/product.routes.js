import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router()

router.route('/api/products').post(productController.create)
router.route('/api/products').get(productController.list)
router.route('/api/products/:id').get(productController.productByID)
router.route('/api/products/:id').put(productController.update)
router.route('/api/products/:id').delete(productController.deleteProductByID)
router.route('/api/products').delete(productController.deleteProducts)

export default router