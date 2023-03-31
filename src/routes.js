const Router = require("express").Router;
const PostController = require("./controllers/PostController");

const router = Router();

router.get("/posts", PostController.getAllPosts);
router.get("/posts/:id", PostController.getPost);
router.post("/posts", PostController.createPost);

module.exports = router;
