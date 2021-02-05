import express from "express";
import auth from "../middlewares/auth";
import admin from "../middlewares/admin";
import AuthControllers from "../controllers/auth";
import UserController from "../controllers/users";
import StoriesController from "../controllers/stories";
const router = express.Router();
//Auth endpoints

router.post("/api/v1/login", AuthControllers.login);
router.post("/api/v1/signup", AuthControllers.signUp);
router.post("/api/v1/users/me", [auth], AuthControllers.currentUser);
//users endpoints
router.get("/api/v1/users", [auth, admin], UserController.getUsers);
router.get("/api/v1/users/:id", [auth, admin], UserController.getSingleUser);
router.delete(
  "/api/v1/users/:id",
  [auth, admin],
  UserController.deleteSingleUser
);
router.put("/api/v1/users/:id", [auth, admin], UserController.updateSingleUser);
//stories endpoints
router.get("/api/v1/mine/stories", [auth], StoriesController.getMyStories);
router.get("/api/v1/stories", [auth, admin], StoriesController.getStories);
router.get("/api/v1/stories/:id", [auth], StoriesController.getSingleStory);
router.post("/api/v1/stories", [auth], StoriesController.addStory);
router.put(
  "/api/v1/stories/:id",
  [auth, admin],
  StoriesController.updateSingleStory
);
export default router;
