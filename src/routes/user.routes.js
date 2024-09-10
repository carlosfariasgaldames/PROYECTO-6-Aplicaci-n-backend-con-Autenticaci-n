import { Router } from "express";
const router = router();

import * as useCtrl from '../controllers/user.controller'
import { authJwt, verifySignup } from "../middlewares";



router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted
],userCtrl.createUser)

export default router;
