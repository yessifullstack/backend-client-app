import { Router } from "express";
import { getEspecialPrice } from "../controllers/especialPrice.controller.js";
const router = Router()


router.get('/', getEspecialPrice )

export default router;