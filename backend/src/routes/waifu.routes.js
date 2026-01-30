import { Router } from "express";
import { deleteWaifu, getAllWaifus, postWaifu } from "../controllers/waifu.controller.js";

const router = Router();

router.get('/', getAllWaifus);
router.post('/', postWaifu);
router.delete('/:id', deleteWaifu);

export default router;