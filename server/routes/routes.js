import express from "express";
// import auth from "../middlewares/auth";
// import admin from "../middlewares/admin";
import UserController from "../controllers/users";
// import AuthControllers from "../controllers/auth";

const router = express.Router();
//users endpoints
router.get("/api/v1/users", UserController.getUsers);
router.get("/api/v1/users/:id", UserController.getSingleUser);
router.delete("/api/v1/users/:id", UserController.deleteSingleUser);
router.put("/api/v1/users/:id", UserController.updateSingleUser);
//Auth endpoints

// router.post("/api/v1/login", AuthControllers.login);
// router.post("/api/v1/users/me", [auth], AuthControllers.currentUser);
export default router;
