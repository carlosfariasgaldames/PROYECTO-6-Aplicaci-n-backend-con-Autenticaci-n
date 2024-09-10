import { Router } from "express";
import { Routes } from "react-router-dom";
const router = Router();

import * as productsCtrl from "../controllers/products.controller";
import { authJwt } from "../middlewares";
import { isAdmin } from "../middlewares/authJwt";

router.post("/", [authJwt.verifyToken, authJwt.isModerator], productsCtrl.createProduct);
router.get("/", productsCtrl.getProducts);
router.get("/:productId", productsCtrl.getProductById);
router.put("/:productId", [authJwt.verifyToken, authJwt-isAdmin], productsCtrl.updateProductById);
router.delete("/:productId", [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.deleteProductById);
export default router;
